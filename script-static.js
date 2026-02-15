// Static menu data - no backend needed
const menuData = [
    // Non-Veg Items
    { name: 'Kanduri Mutton', category: 'Non-Veg', price: 500, description: 'Special signature dish' },
    { name: 'Kanduri Chicken', category: 'Non-Veg', price: 300, description: 'Signature chicken preparation' },
    { name: 'Chicken Biryani', category: 'Non-Veg', price: 280, description: 'Aromatic rice with tender chicken' },
    { name: 'Mutton Biryani', category: 'Non-Veg', price: 320, description: 'Flavorful mutton biryani' },
    { name: 'Chicken Curry', category: 'Non-Veg', price: 250, description: 'Traditional chicken curry' },
    { name: 'Mutton Curry', category: 'Non-Veg', price: 300, description: 'Rich mutton curry' },
    { name: 'Chicken Thali', category: 'Non-Veg', price: 280, description: 'Complete meal with chicken' },
    { name: 'Mutton Thali', category: 'Non-Veg', price: 320, description: 'Complete meal with mutton curry' },
    { name: 'Chicken Fry', category: 'Non-Veg', price: 260, description: 'Crispy fried chicken' },
    { name: 'Mutton Rassa', category: 'Non-Veg', price: 310, description: 'Spicy mutton gravy' },
    { name: 'Chicken Masala', category: 'Non-Veg', price: 270, description: 'Spicy chicken masala' },
    { name: 'Egg Curry', category: 'Non-Veg', price: 150, description: 'Boiled eggs in curry' },
    { name: 'Fish Fry', category: 'Non-Veg', price: 280, description: 'Crispy fried fish' },
    { name: 'Chicken Kolhapuri', category: 'Non-Veg', price: 290, description: 'Spicy Kolhapuri style chicken' },
    { name: 'Mutton Kolhapuri', category: 'Non-Veg', price: 330, description: 'Spicy Kolhapuri style mutton' },
    { name: 'Chicken Sukka', category: 'Non-Veg', price: 270, description: 'Dry chicken preparation' },
    { name: 'Mutton Sukka', category: 'Non-Veg', price: 310, description: 'Dry mutton preparation' },
    { name: 'Egg Bhurji', category: 'Non-Veg', price: 120, description: 'Scrambled eggs with spices' },
    { name: 'Chicken Kadhai', category: 'Non-Veg', price: 280, description: 'Chicken in thick gravy' },
    { name: 'Mutton Kadhai', category: 'Non-Veg', price: 320, description: 'Mutton in thick gravy' },
    { name: 'Chicken Handi', category: 'Non-Veg', price: 290, description: 'Chicken cooked in handi style' },
    { name: 'Mutton Handi', category: 'Non-Veg', price: 330, description: 'Mutton cooked in handi style' },
    { name: 'Chicken Tikka', category: 'Non-Veg', price: 280, description: 'Grilled chicken pieces' },
    { name: 'Mutton Keema', category: 'Non-Veg', price: 300, description: 'Minced mutton curry' },
    { name: 'Chicken Keema', category: 'Non-Veg', price: 250, description: 'Minced chicken curry' },
    { name: 'Egg Masala', category: 'Non-Veg', price: 140, description: 'Eggs in spicy masala' },
    { name: 'Fish Curry', category: 'Non-Veg', price: 290, description: 'Fish in traditional curry' },
    { name: 'Chicken Lollipop', category: 'Non-Veg', price: 260, description: 'Fried chicken wings' },
    { name: 'Mutton Rogan Josh', category: 'Non-Veg', price: 340, description: 'Kashmiri style mutton' },
    { name: 'Chicken Do Pyaza', category: 'Non-Veg', price: 270, description: 'Chicken with double onions' },
    
    // Veg Items
    { name: 'Veg Thali', category: 'Veg', price: 180, description: 'Complete vegetarian meal' },
    { name: 'Paneer Butter Masala', category: 'Veg', price: 220, description: 'Creamy paneer curry' },
    { name: 'Dal Tadka', category: 'Veg', price: 150, description: 'Tempered lentils' },
    { name: 'Veg Biryani', category: 'Veg', price: 200, description: 'Aromatic vegetable biryani' },
    { name: 'Paneer Tikka', category: 'Veg', price: 240, description: 'Grilled paneer cubes' },
    { name: 'Mix Veg Curry', category: 'Veg', price: 180, description: 'Mixed vegetable curry' },
    { name: 'Palak Paneer', category: 'Veg', price: 210, description: 'Spinach with cottage cheese' },
    { name: 'Aloo Gobi', category: 'Veg', price: 160, description: 'Potato and cauliflower curry' },
    { name: 'Chana Masala', category: 'Veg', price: 170, description: 'Spicy chickpea curry' },
    { name: 'Veg Kolhapuri', category: 'Veg', price: 190, description: 'Spicy mixed vegetables' },
    { name: 'Paneer Kadhai', category: 'Veg', price: 230, description: 'Paneer in thick gravy' },
    { name: 'Dal Fry', category: 'Veg', price: 140, description: 'Simple fried lentils' },
    { name: 'Bhindi Masala', category: 'Veg', price: 160, description: 'Spicy okra preparation' },
    { name: 'Baingan Bharta', category: 'Veg', price: 170, description: 'Roasted eggplant mash' },
    { name: 'Paneer Bhurji', category: 'Veg', price: 200, description: 'Scrambled paneer with spices' },
    { name: 'Veg Jalfrezi', category: 'Veg', price: 180, description: 'Stir-fried vegetables' },
    { name: 'Matki Usal', category: 'Veg', price: 150, description: 'Sprouted moth beans curry' },
    { name: 'Misal Pav', category: 'Veg', price: 120, description: 'Spicy sprouts with bread' },
    { name: 'Pav Bhaji', category: 'Veg', price: 130, description: 'Mashed vegetables with bread' },
    { name: 'Veg Maratha', category: 'Veg', price: 190, description: 'Traditional Marathi style vegetables' },
    { name: 'Paneer Do Pyaza', category: 'Veg', price: 220, description: 'Paneer with double onions' },
    { name: 'Mushroom Masala', category: 'Veg', price: 200, description: 'Spicy mushroom curry' },
    { name: 'Aloo Matar', category: 'Veg', price: 150, description: 'Potato and peas curry' },
    { name: 'Veg Handi', category: 'Veg', price: 190, description: 'Mixed vegetables in handi' },
    { name: 'Paneer Tikka Masala', category: 'Veg', price: 240, description: 'Grilled paneer in masala' },
    { name: 'Dal Makhani', category: 'Veg', price: 180, description: 'Creamy black lentils' },
    { name: 'Aloo Paratha', category: 'Veg', price: 100, description: 'Stuffed potato flatbread' },
    { name: 'Paneer Paratha', category: 'Veg', price: 120, description: 'Stuffed paneer flatbread' },
    { name: 'Veg Pulao', category: 'Veg', price: 160, description: 'Aromatic vegetable rice' },
    { name: 'Jeera Rice', category: 'Veg', price: 120, description: 'Cumin flavored rice' }
];

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
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter items based on button clicked
            const filter = button.dataset.filter;
            
            if (filter === 'all') {
                displayMenu(menuData);
            } else {
                const filteredItems = menuData.filter(item => item.category === filter);
                displayMenu(filteredItems);
            }
        });
    });
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
    // Don't display menu by default - wait for button click
    setupFilters();
    console.log('Menu loaded with', menuData.length, 'items');
    
    // Setup smooth scrolling AFTER page loads
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            if (!href || href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
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
