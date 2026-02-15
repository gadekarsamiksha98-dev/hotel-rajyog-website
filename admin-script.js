// API Configuration
const API_BASE_URL = window.location.origin + '/api';
const API_KEY = 'rajog_hotel_api_key_2024_secure';

let categoryChart, dailySalesChart, weeklyTrendsChart;

// Initialize dashboard
document.addEventListener('DOMContentLoaded', () => {
    // Set current date
    document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Setup navigation
    setupNavigation();
    
    // Load data
    loadAnalytics();
    loadOrders();
    loadReviews();
});

// Setup navigation
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item[data-section]');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Update active nav item
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            // Show corresponding section
            const sectionId = item.dataset.section;
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(sectionId).classList.add('active');
        });
    });
}

// Load analytics data
async function loadAnalytics() {
    try {
        const [analyticsRes, ordersRes, reviewsRes] = await Promise.all([
            fetch(`${API_BASE_URL}/analytics`),
            fetch(`${API_BASE_URL}/orders`),
            fetch(`${API_BASE_URL}/reviews`)
        ]);
        
        const analytics = await analyticsRes.json();
        const orders = await ordersRes.json();
        const reviews = await reviewsRes.json();
        
        // Update stats
        document.getElementById('totalSales').textContent = `₹${analytics.totalSales || 0}`;
        document.getElementById('totalOrders').textContent = orders.length;
        
        // Calculate average rating
        const avgRating = reviews.length > 0
            ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
            : 0;
        document.getElementById('avgRating').textContent = avgRating;
        document.getElementById('popularDish').textContent = analytics.mostPopularDish || 'N/A';
        
        // Create charts
        createCategoryChart(analytics.categoryBreakdown || []);
        createDailySalesChart(analytics.dailySales || []);
        createWeeklyTrendsChart(analytics.dailySales || []);
        
    } catch (error) {
        console.error('Error loading analytics:', error);
    }
}

// Create category pie chart
function createCategoryChart(data) {
    const ctx = document.getElementById('categoryChart');
    
    if (categoryChart) {
        categoryChart.destroy();
    }
    
    const labels = data.map(item => item.category);
    const values = data.map(item => item.sales || 0);
    
    categoryChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels.length > 0 ? labels : ['Veg', 'Non-Veg'],
            datasets: [{
                data: values.length > 0 ? values : [0, 0],
                backgroundColor: ['#4CAF50', '#FF5722']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

// Create daily sales bar chart
function createDailySalesChart(data) {
    const ctx = document.getElementById('dailySalesChart');
    
    if (dailySalesChart) {
        dailySalesChart.destroy();
    }
    
    const labels = data.map(item => new Date(item.day).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' }));
    const values = data.map(item => item.sales);
    
    dailySalesChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels.length > 0 ? labels : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Sales (₹)',
                data: values.length > 0 ? values : [0, 0, 0, 0, 0, 0, 0],
                backgroundColor: '#d4af37'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Create weekly trends line chart
function createWeeklyTrendsChart(data) {
    const ctx = document.getElementById('weeklyTrendsChart');
    
    if (weeklyTrendsChart) {
        weeklyTrendsChart.destroy();
    }
    
    const labels = data.map(item => new Date(item.day).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' }));
    const values = data.map(item => item.sales);
    
    weeklyTrendsChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels.length > 0 ? labels : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Sales Trend',
                data: values.length > 0 ? values : [0, 0, 0, 0, 0, 0, 0],
                borderColor: '#8b4513',
                backgroundColor: 'rgba(139, 69, 19, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Load orders
async function loadOrders() {
    try {
        const response = await fetch(`${API_BASE_URL}/orders`);
        const orders = await response.json();
        
        const tbody = document.getElementById('ordersTableBody');
        
        if (orders.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" class="no-data">No orders yet</td></tr>';
            return;
        }
        
        tbody.innerHTML = orders.map(order => `
            <tr>
                <td>#${order.id}</td>
                <td>${order.dish_name}</td>
                <td>${order.quantity}</td>
                <td>₹${order.total_price}</td>
                <td>${new Date(order.date).toLocaleDateString('en-IN')}</td>
            </tr>
        `).join('');
        
    } catch (error) {
        console.error('Error loading orders:', error);
    }
}

// Load reviews
async function loadReviews() {
    try {
        const response = await fetch(`${API_BASE_URL}/reviews`);
        const reviews = await response.json();
        
        const container = document.getElementById('reviewsContainer');
        
        if (reviews.length === 0) {
            container.innerHTML = '<div class="no-data">No reviews yet</div>';
            return;
        }
        
        container.innerHTML = reviews.map(review => `
            <div class="review-card">
                <div class="review-header">
                    <span class="review-name">${review.customer_name}</span>
                    <span class="review-rating">
                        ${generateStars(review.rating)}
                    </span>
                </div>
                <p class="review-comment">${review.comment}</p>
                <p class="review-date">${new Date(review.date).toLocaleDateString('en-IN')}</p>
            </div>
        `).join('');
        
    } catch (error) {
        console.error('Error loading reviews:', error);
    }
}

// Generate star rating HTML
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating 
            ? '<i class="fas fa-star"></i>' 
            : '<i class="far fa-star"></i>';
    }
    return stars;
}

// Refresh functions
function refreshOrders() {
    loadOrders();
    loadAnalytics();
}

function refreshReviews() {
    loadReviews();
    loadAnalytics();
}
