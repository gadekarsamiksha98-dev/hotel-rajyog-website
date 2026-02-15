// API Configuration
const API_BASE_URL = window.location.origin + '/api';
const API_KEY = 'rajog_hotel_api_key_2024_secure';

// Load menu items
async function loadMenu() {
    try {
        const response = await fetch(`${API_BASE_URL}/menu`);
        const menuItems = await response.json();
        
        // Store menu data and display ALL items by default
        window.menuData = menuItems;
        displayMenu(menuItems); // Show all items on page load
        
        // Setup filter buttons
        setupFilters(menuItems);
    } catch (error) {
        console.error('Error loading menu:', error);
    }
}

// Display menu items
function displayMenu(items) {
    const menuGrid = document.getElementById('menuGrid');
    
    if (!items || items.length === 0) {
        menuGrid.innerHTML = '<p class="no-items">No items to display</p>';
        return;
    }
    
    menuGrid.innerHTML = '';
    
    items.forEach(item => {
        const menuCard = createMenuCard(item);
        menuGrid.appendChild(menuCard);
    });
}

// Create menu card
function createMenuCard(item) {
    const card = document.createElement('div');
    card.className = 'menu-item';
    card.dataset.category = item.category;
    
    // NO images for any menu items - images only in signature dish section
    
    card.innerHTML = `
        <div class="menu-item-content">
            <div class="menu-item-header">
                <h3 class="menu-item-name">${item.name}</h3>
                <span class="menu-item-price">₹${item.price}</span>
            </div>
            <span class="menu-item-category ${item.category === 'Veg' ? 'veg' : 'non-veg'}">
                ${item.category}
            </span>
            ${item.description ? `<p class="menu-item-description">${item.description}</p>` : ''}
            <div class="menu-item-buttons">
                <a href="https://www.swiggy.com" target="_blank" class="btn-delivery swiggy">
                    <i class="fas fa-motorcycle"></i> Swiggy
                </a>
                <a href="https://www.zomato.com" target="_blank" class="btn-delivery zomato">
                    <i class="fas fa-utensils"></i> Zomato
                </a>
            </div>
        </div>
    `;
    
    return card;
}

// Setup filter buttons
function setupFilters(allItems) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter items based on button clicked
            const filter = button.dataset.filter;
            
            if (filter === 'all') {
                displayMenu(allItems); // Show all items
            } else {
                const filteredItems = allItems.filter(item => item.category === filter);
                displayMenu(filteredItems);
            }
        });
    });
}

// Load Instagram feed (placeholder)
async function loadInstagramFeed() {
    try {
        // Instagram feed is now embedded directly in HTML
        // This function can be used for future API integration
        console.log('Instagram feed loaded from @hotelrajyog_');
    } catch (error) {
        console.error('Error loading Instagram feed:', error);
    }
}

// Smooth scrolling for navigation links (only for # links, not tel: or http:)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#" or empty
        if (!href || href === '#') return;
        
        // Only prevent default for # links (not tel: or http:)
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadMenu();
    loadInstagramFeed();
});

// Add scroll animation
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 26, 26, 0.95)';
    } else {
        navbar.style.background = 'var(--dark-color)';
    }
});
