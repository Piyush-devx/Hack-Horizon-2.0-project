// Medicine Database
const medicines = [
    {
        id: '1',
        name: 'Crocin 650mg',
        salt: 'Paracetamol 650mg',
        price: 25,
        manufacturer: 'GSK',
        symptoms: ['Fever', 'Headache', 'Pain', 'Body Ache'],
        alternatives: [
            { id: '2', name: 'Dolo 650mg', price: 18, manufacturer: 'Micro Labs', approved: true, stock: 'In stock at 3 nearby pharmacies' },
            { id: '3', name: 'Calpol 650mg', price: 15, manufacturer: 'Pfizer', approved: true, stock: 'In stock at 4 nearby pharmacies' },
            { id: '4', name: 'Paracip 650mg', price: 12, manufacturer: 'Cipla', approved: true, stock: 'In stock at 2 nearby pharmacies' }
        ]
    },
    {
        id: '5',
        name: 'Augmentin 625',
        salt: 'Amoxicillin 500mg + Clavulanic Acid 125mg',
        price: 220,
        manufacturer: 'GSK',
        symptoms: ['Bacterial Infection', 'Wound', 'Respiratory Infection'],
        alternatives: [
            { id: '6', name: 'Clavam 625', price: 180, manufacturer: 'Alkem', approved: true, stock: 'In stock at 5 nearby pharmacies' },
            { id: '7', name: 'Moxikind CV 625', price: 145, manufacturer: 'Mankind', approved: true, stock: 'In stock at 3 nearby pharmacies' }
        ]
    },
    {
        id: '8',
        name: 'Gelusil MPS',
        salt: 'Aluminium Hydroxide + Magnesium Hydroxide + Simethicone',
        price: 85,
        manufacturer: 'Pfizer',
        symptoms: ['Acidity', 'Heartburn', 'Indigestion', 'Gas'],
        alternatives: [
            { id: '9', name: 'Digene', price: 65, manufacturer: 'Abbott', approved: true, stock: 'In stock at 4 nearby pharmacies' },
            { id: '10', name: 'Aciflux MPS', price: 45, manufacturer: 'Cipla', approved: true, stock: 'In stock at 2 nearby pharmacies' }
        ]
    },
    {
        id: '11',
        name: 'Omeprazole 20mg',
        salt: 'Omeprazole 20mg',
        price: 35,
        manufacturer: 'Dr. Reddy\'s',
        symptoms: ['Acidity', 'Heartburn', 'GERD', 'Stomach Ulcer'],
        alternatives: [
            { id: '12', name: 'Omez 20mg', price: 28, manufacturer: 'Dr. Reddy\'s', approved: true, stock: 'In stock at 3 nearby pharmacies' },
            { id: '13', name: 'Prilosec 20mg', price: 22, manufacturer: 'AstraZeneca', approved: true, stock: 'In stock at 5 nearby pharmacies' }
        ]
    },
    {
        id: '14',
        name: 'Metformin 500mg',
        salt: 'Metformin 500mg',
        price: 45,
        manufacturer: 'USV',
        symptoms: ['Diabetes', 'High Blood Sugar'],
        alternatives: [
            { id: '15', name: 'Glycomet 500mg', price: 32, manufacturer: 'USV', approved: true, stock: 'In stock at 4 nearby pharmacies' },
            { id: '16', name: 'Glucophage 500mg', price: 28, manufacturer: 'Merck', approved: true, stock: 'In stock at 2 nearby pharmacies' }
        ]
    },
    {
        id: '17',
        name: 'Atorvastatin 10mg',
        salt: 'Atorvastatin 10mg',
        price: 120,
        manufacturer: 'Pfizer',
        symptoms: ['High Cholesterol', 'Heart Health'],
        alternatives: [
            { id: '18', name: 'Lipitor 10mg', price: 95, manufacturer: 'Pfizer', approved: true, stock: 'In stock at 3 nearby pharmacies' },
            { id: '19', name: 'Atorva 10mg', price: 65, manufacturer: 'Sun Pharma', approved: true, stock: 'In stock at 5 nearby pharmacies' }
        ]
    },
    {
        id: '20',
        name: 'Azithromycin 500mg',
        salt: 'Azithromycin 500mg',
        price: 95,
        manufacturer: 'Pfizer',
        symptoms: ['Bacterial Infection', 'Throat Infection', 'Respiratory Infection'],
        alternatives: [
            { id: '21', name: 'Zithromax 500mg', price: 80, manufacturer: 'Pfizer', approved: true, stock: 'In stock at 4 nearby pharmacies' },
            { id: '22', name: 'Azee 500mg', price: 55, manufacturer: 'Cipla', approved: true, stock: 'In stock at 2 nearby pharmacies' }
        ]
    }
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchForm = document.getElementById('searchForm');
const scanBtn = document.getElementById('scanBtn');
const loadingState = document.getElementById('loadingState');
const initialState = document.getElementById('initialState');
const noResultsState = document.getElementById('noResultsState');
const searchResults = document.getElementById('searchResults');
const landingContent = document.getElementById('landingContent');
const trendingPills = document.querySelectorAll('.trending-pill');
const symptomButtons = document.querySelectorAll('.symptom-btn');
const resultsGrid = document.getElementById('resultsGrid');
const resultCount = document.getElementById('resultCount');
const medicineDetail = document.getElementById('medicineDetail');
const backBtn = document.getElementById('backBtn');
const alertBtn = document.getElementById('alertBtn');
const exportBtn = document.getElementById('exportBtn');
const hintLinks = document.querySelectorAll('.hint-link');
const darkModeBtn = document.getElementById('darkModeBtn');
const priceSort = document.getElementById('priceSort');
const manufacturerFilter = document.getElementById('manufacturerFilter');
const compareBtn = document.getElementById('compareBtn');
const compareCount = document.getElementById('compareCount');
const compareModal = document.getElementById('compareModal');
const closeModal = document.getElementById('closeModal');
const comparisonTable = document.getElementById('comparisonTable');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const profileBtn = document.getElementById('profileBtn');
const profileModal = document.getElementById('profileModal');
const languageSwitcher = document.getElementById('languageSwitcher');
const accessBtn = document.getElementById('accessBtn');
const accessModal = document.getElementById('accessModal');
const closeAccess = document.getElementById('closeAccess');
const speakBtn = document.getElementById('speakBtn');
const closeProfile = document.getElementById('closeProfile');
const dosageToggle = document.getElementById('dosageToggle');
const dosageContent = document.getElementById('dosageContent');
const weightInput = document.getElementById('weightInput');
const ageInput = document.getElementById('ageInput');
const calculateDosage = document.getElementById('calculateDosage');
const dosageResult = document.getElementById('dosageResult');
const checkInteractions = document.getElementById('checkInteractions');
const interactionResult = document.getElementById('interactionResult');
const referBtn = document.getElementById('referBtn');
const referModal = document.getElementById('referModal');
const closeRefer = document.getElementById('closeRefer');
const copyReferral = document.getElementById('copyReferral');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');

// State
let currentMedicine = null;
let selectedForCompare = [];
let cart = [];
let textToSpeechEnabled = false;

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    darkModeBtn.textContent = isDarkMode ? '☀️' : '🌙';
    localStorage.setItem('darkMode', isDarkMode);
}

// Load dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    darkModeBtn.textContent = '☀️';
}

darkModeBtn.addEventListener('click', toggleDarkMode);

// Filter event listeners
priceSort.addEventListener('change', () => {
    if (currentMedicine) {
        const sortedAlternatives = [...currentMedicine.alternatives].sort((a, b) => a.price - b.price);
        renderAlternatives(sortedAlternatives, currentMedicine.price);
    }
});

manufacturerFilter.addEventListener('change', () => {
    if (currentMedicine) {
        const sortedAlternatives = [...currentMedicine.alternatives].sort((a, b) => a.price - b.price);
        renderAlternatives(sortedAlternatives, currentMedicine.price);
    }
});

// Compare button event listener
compareBtn.addEventListener('click', showComparison);

// Close modal event listener
closeModal.addEventListener('click', closeComparison);

compareModal.addEventListener('click', (e) => {
    if (e.target === compareModal || e.target.classList.contains('modal-overlay')) {
        closeComparison();
    }
});

// Export as PDF button event listener
exportBtn.addEventListener('click', () => {
    window.print();
});

// Cart event listeners
cartBtn.addEventListener('click', showCart);
closeCart.addEventListener('click', closeCartModal);
cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal || e.target.classList.contains('modal-overlay')) {
        closeCartModal();
    }
});

checkoutBtn.addEventListener('click', () => {
    alert('Checkout functionality would be implemented here. Total: ' + cartTotal.textContent);
});

// Price alert event listener
alertBtn.addEventListener('click', () => {
    if (alertBtn.classList.contains('active')) {
        alertBtn.classList.remove('active');
        alertBtn.textContent = '🔔 Set Price Alert';
    } else {
        alertBtn.classList.add('active');
        alertBtn.textContent = '🔕 Alert Set';
        alert(`Price alert set! We'll notify you when the price drops below ₹${currentMedicine.price}`);
    }
});

// Profile event listeners
profileBtn.addEventListener('click', () => {
    profileModal.classList.remove('hidden');
});

closeProfile.addEventListener('click', () => {
    profileModal.classList.add('hidden');
});

profileModal.addEventListener('click', (e) => {
    if (e.target === profileModal || e.target.classList.contains('modal-overlay')) {
        profileModal.classList.add('hidden');
    }
});

// Dosage calculator event listeners
dosageToggle.addEventListener('click', () => {
    dosageContent.classList.toggle('hidden');
});

calculateDosage.addEventListener('click', () => {
    const weight = parseFloat(weightInput.value);
    const age = parseFloat(ageInput.value);
    
    if (!weight || !age) {
        alert('Please enter both weight and age');
        return;
    }
    
    // Simple dosage calculation formula (demo purposes)
    const dosage = Math.round((weight / 10) * (currentMedicine.price / 25));
    dosageResult.textContent = `Recommended dosage: ${dosage} tablets per day`;
    dosageResult.classList.add('show');
});

// Drug interactions checker event listener
checkInteractions.addEventListener('click', () => {
    // Mock interaction check (demo purposes)
    const hasInteraction = Math.random() > 0.7;
    
    if (hasInteraction) {
        interactionResult.className = 'interaction-result warning show';
        interactionResult.innerHTML = '⚠️ <strong>Mild interaction detected:</strong> This medicine may interact with alcohol. Consult your doctor.';
    } else {
        interactionResult.className = 'interaction-result safe show';
        interactionResult.innerHTML = '✓ <strong>No known interactions</strong> detected for this medicine.';
    }
});

// Language switcher event listener
languageSwitcher.addEventListener('change', (e) => {
    const lang = e.target.value;
    const translations = {
        en: {
            heroTitle: 'Find Cheaper Medicines',
            heroSubtitle: 'Discover affordable alternatives with the same composition. Save money without compromising on quality.',
            searchPlaceholder: 'Search medicine (e.g. Crocin, Augmentin...)'
        },
        hi: {
            heroTitle: 'सस्ती दवाएं खोजें',
            heroSubtitle: 'समान संरचना के साथ सस्ते विकल्प खोजें। गुणवत्ता से समझौता किए बिना पैसे बचाएं।',
            searchPlaceholder: 'दवा खोजें (जैसे Crocin, Augmentin...)'
        }
    };
    
    if (translations[lang]) {
        document.querySelector('.hero-title').innerHTML = translations[lang].heroTitle.replace('Medicines', '<span class="gradient-text">Medicines</span>');
        document.querySelector('.hero-subtitle').textContent = translations[lang].heroSubtitle;
        document.querySelector('.search-input').placeholder = translations[lang].searchPlaceholder;
    }
});

// Accessibility event listeners
accessBtn.addEventListener('click', () => {
    accessModal.classList.remove('hidden');
});

closeAccess.addEventListener('click', () => {
    accessModal.classList.add('hidden');
});

accessModal.addEventListener('click', (e) => {
    if (e.target === accessModal || e.target.classList.contains('modal-overlay')) {
        accessModal.classList.add('hidden');
    }
});

speakBtn.addEventListener('click', () => {
    textToSpeechEnabled = !textToSpeechEnabled;
    speakBtn.classList.toggle('active');
    speakBtn.textContent = textToSpeechEnabled ? '🔕 Disable' : '🔊 Enable';
    
    if (textToSpeechEnabled && currentMedicine) {
        speakMedicineName(currentMedicine.name);
    }
});

// Font size buttons
document.querySelectorAll('.font-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.font-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const size = btn.dataset.size;
        if (size === 'large') {
            document.body.classList.add('large-font');
        } else {
            document.body.classList.remove('large-font');
        }
    });
});

// Text-to-speech function
function speakMedicineName(text) {
    if ('speechSynthesis' in window && textToSpeechEnabled) {
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    }
}

// Referral program event listeners
referBtn.addEventListener('click', () => {
    referModal.classList.remove('hidden');
});

closeRefer.addEventListener('click', () => {
    referModal.classList.add('hidden');
});

referModal.addEventListener('click', (e) => {
    if (e.target === referModal || e.target.classList.contains('modal-overlay')) {
        referModal.classList.add('hidden');
    }
});

copyReferral.addEventListener('click', () => {
    const referralCode = document.getElementById('referralCodeText').textContent;
    navigator.clipboard.writeText(referralCode).then(() => {
        copyReferral.textContent = '✓ Copied!';
        setTimeout(() => {
            copyReferral.textContent = '📋 Copy';
        }, 2000);
    });
});

// Search Function
function searchMedicines(query) {
    if (!query) return [];
    const lowerQuery = query.toLowerCase();
    return medicines.filter(med => 
        med.name.toLowerCase().includes(lowerQuery) ||
        med.salt.toLowerCase().includes(lowerQuery) ||
        (med.symptoms && med.symptoms.some(symptom => symptom.toLowerCase().includes(lowerQuery)))
    );
}

// Calculate Savings
function calculateSavings(originalPrice, alternativePrice) {
    return originalPrice - alternativePrice;
}

// Show Loading
function showLoading() {
    loadingState.classList.remove('hidden');
    landingContent.classList.add('hidden');
    initialState.classList.add('hidden');
    noResultsState.classList.add('hidden');
    searchResults.classList.add('hidden');
    medicineDetail.classList.add('hidden');
}

// Hide Loading
function hideLoading() {
    loadingState.classList.add('hidden');
}

// Show Initial State
function showInitialState() {
    landingContent.classList.remove('hidden');
    initialState.classList.remove('hidden');
    noResultsState.classList.add('hidden');
    searchResults.classList.add('hidden');
    medicineDetail.classList.add('hidden');
}

// Show No Results
function showNoResults() {
    landingContent.classList.add('hidden');
    noResultsState.classList.remove('hidden');
    initialState.classList.add('hidden');
    searchResults.classList.add('hidden');
    medicineDetail.classList.add('hidden');
}

// Show Search Results
function showSearchResults(results) {
    landingContent.classList.add('hidden');
    initialState.classList.add('hidden');
    noResultsState.classList.add('hidden');
    loadingState.classList.add('hidden');
    medicineDetail.classList.add('hidden');
    searchResults.classList.remove('hidden');
    
    resultCount.textContent = results.length;
    resultsGrid.innerHTML = '';
    
    results.forEach((medicine, index) => {
        const card = createMedicineCard(medicine, index);
        resultsGrid.appendChild(card);
    });
}

// Create Medicine Card
function createMedicineCard(medicine, index) {
    const card = document.createElement('div');
    card.className = 'medicine-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const checkboxId = `compare-${medicine.id}`;
    
    card.innerHTML = `
        <div class="medicine-card-header">
            <div>
                <div class="medicine-card-name">${medicine.name}</div>
                <div class="medicine-card-manufacturer">${medicine.manufacturer}</div>
            </div>
            <div class="medicine-card-price">₹${medicine.price}</div>
        </div>
        <div class="medicine-card-salt">
            <span>Salt: ${medicine.salt}</span>
        </div>
        <div class="medicine-card-uses">
            <span>💊 Uses: ${medicine.symptoms ? medicine.symptoms.join(', ') : 'N/A'}</span>
        </div>
        <div class="medicine-card-footer">
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                <input type="checkbox" class="compare-checkbox" id="${checkboxId}" data-id="${medicine.id}">
                <span style="font-size: 0.875rem; color: var(--gray-500);">Compare</span>
            </label>
            <span class="medicine-card-action">View details →</span>
        </div>
    `;
    
    // Add checkbox event listener
    const checkbox = card.querySelector('.compare-checkbox');
    checkbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            if (selectedForCompare.length < 3) {
                selectedForCompare.push(medicine);
            } else {
                e.target.checked = false;
                alert('You can compare up to 3 medicines at a time.');
            }
        } else {
            selectedForCompare = selectedForCompare.filter(m => m.id !== medicine.id);
        }
        updateCompareButton();
    });
    
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('compare-checkbox')) {
            showMedicineDetail(medicine);
        }
    });
    
    return card;
}

// Update compare button visibility
function updateCompareButton() {
    compareCount.textContent = selectedForCompare.length;
    if (selectedForCompare.length >= 2) {
        compareBtn.classList.remove('hidden');
    } else {
        compareBtn.classList.add('hidden');
    }
}

// Show comparison modal
function showComparison() {
    const table = document.createElement('table');
    table.innerHTML = `
        <thead>
            <tr>
                <th>Feature</th>
                ${selectedForCompare.map(m => `<th>${m.name}</th>`).join('')}
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Manufacturer</strong></td>
                ${selectedForCompare.map(m => `<td>${m.manufacturer}</td>`).join('')}
            </tr>
            <tr>
                <td><strong>Price</strong></td>
                ${selectedForCompare.map(m => `<td>₹${m.price}</td>`).join('')}
            </tr>
            <tr>
                <td><strong>Salt/Composition</strong></td>
                ${selectedForCompare.map(m => `<td>${m.salt}</td>`).join('')}
            </tr>
            <tr>
                <td><strong>Alternatives</strong></td>
                ${selectedForCompare.map(m => `<td>${m.alternatives.length}</td>`).join('')}
            </tr>
        </tbody>
    `;
    comparisonTable.innerHTML = '';
    comparisonTable.appendChild(table);
    compareModal.classList.remove('hidden');
}

// Close comparison modal
function closeComparison() {
    compareModal.classList.add('hidden');
}

// Show Medicine Detail
function showMedicineDetail(medicine) {
    currentMedicine = medicine;
    
    // Update detail view
    document.getElementById('detailName').textContent = medicine.name;
    document.getElementById('detailManufacturer').textContent = medicine.manufacturer;
    document.getElementById('detailPrice').textContent = `₹${medicine.price}`;
    document.getElementById('detailSalt').textContent = medicine.salt;
    
    // Sort alternatives by price
    const sortedAlternatives = [...medicine.alternatives].sort((a, b) => a.price - b.price);
    
    document.getElementById('altCount').textContent = sortedAlternatives.length;
    
    // Populate manufacturer filter
    const manufacturers = [...new Set(medicine.alternatives.map(alt => alt.manufacturer))];
    manufacturerFilter.innerHTML = '<option value="all">All Manufacturers</option>' +
        manufacturers.map(m => `<option value="${m}">${m}</option>`).join('');
    
    renderAlternatives(sortedAlternatives, medicine.price);
}

// Render alternatives with current filters
function renderAlternatives(alternatives, originalPrice) {
    const alternativesGrid = document.getElementById('alternativesGrid');
    alternativesGrid.innerHTML = '';
    
    // Apply filters
    const sortBy = priceSort.value;
    const filterBy = manufacturerFilter.value;
    
    let filtered = [...alternatives];
    
    // Filter by manufacturer
    if (filterBy !== 'all') {
        filtered = filtered.filter(alt => alt.manufacturer === filterBy);
    }
    
    // Sort by price
    if (sortBy === 'low') {
        filtered.sort((a, b) => a.price - b.price);
    } else {
        filtered.sort((a, b) => b.price - a.price);
    }
    
    filtered.forEach((alt, index) => {
        const isCheapest = sortBy === 'low' && index === 0 && filterBy === 'all';
        const card = createAlternativeCard(alt, originalPrice, isCheapest);
        alternativesGrid.appendChild(card);
    });
    
    document.getElementById('altCount').textContent = filtered.length;
    
    // Update savings banner
    const maxSavings = calculateSavings(medicine.price, sortedAlternatives[0].price);
    const savingsPercent = Math.round((maxSavings / medicine.price) * 100);
    
    document.getElementById('maxSavings').textContent = `₹${maxSavings}`;
    document.getElementById('savingsPercent').textContent = `${savingsPercent}% cheaper`;
    
    // Show detail view
    landingContent.classList.add('hidden');
    searchResults.classList.add('hidden');
    medicineDetail.classList.remove('hidden');
    
    // Reset alert button state
    alertBtn.classList.remove('active');
    alertBtn.textContent = '🔔 Set Price Alert';
    
    // Render price history
    renderPriceHistory(medicine.price);
    
    // Render reviews
    renderReviews();
    
    // Speak medicine name if TTS is enabled
    if (textToSpeechEnabled) {
        speakMedicineName(medicine.name);
    }
}

// Render reviews section
function renderReviews() {
    const reviewsList = document.getElementById('reviewsList');
    const mockReviews = [
        { author: 'Rahul S.', rating: 5, date: '2 days ago', text: 'Great savings! Found a much cheaper alternative for my regular medicine.' },
        { author: 'Priya M.', rating: 4, date: '1 week ago', text: 'Easy to use and reliable. The comparison feature is very helpful.' },
        { author: 'Amit K.', rating: 5, date: '2 weeks ago', text: 'Saved over ₹500 on my monthly prescription. Highly recommend!' }
    ];
    
    reviewsList.innerHTML = mockReviews.map(review => {
        const stars = '⭐'.repeat(review.rating);
        return `
            <div class="review-card">
                <div class="review-header">
                    <span class="review-author">${review.author}</span>
                    <span class="review-date">${review.date}</span>
                </div>
                <div class="review-rating">${stars}</div>
                <p class="review-text">${review.text}</p>
            </div>
        `;
    }).join('');
}

// Render price history chart
function renderPriceHistory(currentPrice) {
    const priceChart = document.getElementById('priceChart');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    
    // Generate mock price history (random variations around current price)
    const priceHistory = months.map(() => {
        const variation = (Math.random() - 0.5) * 10;
        return Math.max(currentPrice + variation, currentPrice * 0.7);
    });
    
    priceHistory[priceHistory.length - 1] = currentPrice; // Current month
    
    const maxPrice = Math.max(...priceHistory);
    
    priceChart.innerHTML = priceHistory.map((price, index) => {
        const height = (price / maxPrice) * 100;
        return `
            <div class="price-bar">
                <div class="price-bar-value">₹${Math.round(price)}</div>
                <div class="price-bar-fill" style="height: ${height}%"></div>
                <div class="price-bar-label">${months[index]}</div>
            </div>
        `;
    }).join('');
}

// Create Alternative Card
function createAlternativeCard(alternative, originalPrice, isCheapest) {
    const savings = calculateSavings(originalPrice, alternative.price);
    const savingsPercent = Math.round((savings / originalPrice) * 100);
    
    const card = document.createElement('div');
    card.className = `alternative-card ${isCheapest ? 'best-price' : ''}`;
    
    card.innerHTML = `
        <div class="alternative-card-header">
            <div>
                <div class="alternative-name">${alternative.name}</div>
                <div class="alternative-manufacturer">
                    ${alternative.manufacturer}
                    ${alternative.approved ? '<span class="verified-badge">✓ CDSCO Approved</span>' : ''}
                </div>
            </div>
            ${isCheapest ? '<span class="best-price-badge">Best Price</span>' : ''}
            <div class="alternative-price">₹${alternative.price}</div>
        </div>
        <div class="alternative-savings">
            <p>You save ₹${savings} (${savingsPercent}%)</p>
            <span>per tablet</span>
        </div>
        <div class="stock-info">📍 ${alternative.stock}</div>
        <button class="add-to-cart-btn" data-id="${alternative.id}" data-name="${alternative.name}" data-price="${alternative.price}">Add to Cart</button>
        <button class="map-action-btn">Check Pharmacy Map</button>
    `;
    
    // Add to cart event listener
    const addToCartBtn = card.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', () => {
        addToCart({
            id: alternative.id,
            name: alternative.name,
            price: alternative.price
        });
    });
    
    return card;
}

// Cart functions
function addToCart(item) {
    const existingItem = cart.find(i => i.id === item.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    updateCartUI();
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartUI();
}

function updateCartUI() {
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartTotal.textContent = '₹0';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>Qty: ${item.quantity}</p>
            </div>
            <div style="display: flex; align-items: center;">
                <span class="cart-item-price">₹${item.price * item.quantity}</span>
                <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">✕</button>
            </div>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `₹${total}`;
}

function showCart() {
    updateCartUI();
    cartModal.classList.remove('hidden');
}

function closeCartModal() {
    cartModal.classList.add('hidden');
}

// Handle Search
function handleSearch() {
    const query = searchInput.value.trim();
    
    if (!query) {
        showInitialState();
        return;
    }
    
    showLoading();
    
    // Simulate loading delay
    setTimeout(() => {
        const results = searchMedicines(query);
        
        if (results.length === 0) {
            showNoResults();
        } else {
            showSearchResults(results);
        }
    }, 600);
}

// Event Listeners
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSearch();
});

backBtn.addEventListener('click', () => {
    medicineDetail.classList.add('hidden');
    searchResults.classList.remove('hidden');
    searchInput.value = '';
    // Clear comparison selection
    selectedForCompare = [];
    document.querySelectorAll('.compare-checkbox').forEach(cb => cb.checked = false);
    updateCompareButton();
});

hintLinks.forEach(link => {
    link.addEventListener('click', () => {
        searchInput.value = link.textContent;
        handleSearch();
    });
});

// Trending Pills Event Listeners
trendingPills.forEach(pill => {
    pill.addEventListener('click', () => {
        const medicineName = pill.dataset.medicine;
        searchInput.value = medicineName;
        handleSearch();
    });
});

// Symptom Buttons Event Listeners
symptomButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const symptom = btn.dataset.symptom;
        searchInput.value = symptom;
        handleSearch();
    });
});

// Scan Prescription Button Event Listener
scanBtn.addEventListener('click', () => {
    searchInput.value = 'Augmentin 625';
    handleSearch();
});
