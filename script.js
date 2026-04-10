// ============================================
// MedSmart - Master Logic Engine & Database
// ============================================

// The Database: In-memory client-side medicine database
const medicineDB = [
    {
        id: 1,
        name: "Crocin 500mg",
        type: "Branded",
        salt: "Paracetamol",
        price: 32.50,
        symptoms: ["Fever", "Headache", "Pain"]
    },
    {
        id: 2,
        name: "Pacimol 500mg",
        type: "Generic",
        salt: "Paracetamol",
        price: 14.75,
        symptoms: ["Fever", "Headache", "Pain"]
    },
    {
        id: 3,
        name: "Augmentin 625 Duo",
        type: "Branded",
        salt: "Amoxicillin + Clavulanic Acid",
        price: 189.00,
        symptoms: ["Infection", "Bacterial Infection"]
    },
    {
        id: 4,
        name: "Moxikind-CV 625",
        type: "Generic",
        salt: "Amoxicillin + Clavulanic Acid",
        price: 89.50,
        symptoms: ["Infection", "Bacterial Infection"]
    },
    {
        id: 5,
        name: "Atorva 10mg",
        type: "Branded",
        salt: "Atorvastatin",
        price: 145.00,
        symptoms: ["Cholesterol", "Heart Health"]
    },
    {
        id: 6,
        name: "Atorva-EZ 10mg",
        type: "Generic",
        salt: "Atorvastatin",
        price: 67.25,
        symptoms: ["Cholesterol", "Heart Health"]
    },
    {
        id: 7,
        name: "Pantocid DSR",
        type: "Branded",
        salt: "Pantoprazole + Domperidone",
        price: 156.00,
        symptoms: ["Acidity", "GERD", "Nausea"]
    },
    {
        id: 8,
        name: "Pantosec-D",
        type: "Generic",
        salt: "Pantoprazole + Domperidone",
        price: 72.00,
        symptoms: ["Acidity", "GERD", "Nausea"]
    },
    {
        id: 9,
        name: "Disprin Plus",
        type: "Branded",
        salt: "Aspirin + Caffeine",
        price: 28.00,
        symptoms: ["Headache", "Migraine", "Pain"]
    },
    {
        id: 10,
        name: "Ecosprin 75mg",
        type: "Generic",
        salt: "Aspirin",
        price: 12.50,
        symptoms: ["Blood Thinner", "Heart Attack Prevention"]
    },
    {
        id: 11,
        name: "Glycomet 500mg",
        type: "Branded",
        salt: "Metformin",
        price: 45.00,
        symptoms: ["Diabetes", "Blood Sugar"]
    },
    {
        id: 12,
        name: "Metford 500mg",
        type: "Generic",
        salt: "Metformin",
        price: 18.50,
        symptoms: ["Diabetes", "Blood Sugar"]
    },
    {
        id: 13,
        name: "Omez 20mg",
        type: "Branded",
        salt: "Omeprazole",
        price: 78.00,
        symptoms: ["Acidity", "GERD", "Stomach Ulcer"]
    },
    {
        id: 14,
        name: "Omeper 20mg",
        type: "Generic",
        salt: "Omeprazole",
        price: 32.00,
        symptoms: ["Acidity", "GERD", "Stomach Ulcer"]
    }
];

// ============================================
// Core Logic Engine
// ============================================

/**
 * Logic 1: Analyze by Symptom
 * Filters DB by symptom, sorts by price, returns cheapest medicine
 * @param {string} symptom - The symptom to search for
 * @returns {object|null} - Cheapest medicine for the symptom
 */
function analyzeBySymptom(symptom) {
    const matchingMeds = medicineDB.filter(med => 
        med.symptoms.some(s => s.toLowerCase() === symptom.toLowerCase())
    );
    
    if (matchingMeds.length === 0) return null;
    
    return matchingMeds.sort((a, b) => a.price - b.price)[0];
}

/**
 * Logic 2: Analyze by Medicine
 * Finds medicine, extracts salt, finds all with same salt, returns cheapest alternative
 * @param {string} medName - The medicine name to search for
 * @returns {object|null} - Medicine analysis with alternative
 */
function analyzeByMedicine(medName) {
    const searchedMed = medicineDB.find(med => 
        med.name.toLowerCase().includes(medName.toLowerCase()) ||
        med.salt.toLowerCase().includes(medName.toLowerCase())
    );
    
    if (!searchedMed) return null;
    
    const sameSaltMeds = medicineDB.filter(med => 
        med.salt === searchedMed.salt
    ).sort((a, b) => a.price - b.price);
    
    const cheapestAlt = sameSaltMeds[0];
    
    return {
        searched: searchedMed,
        alternatives: sameSaltMeds,
        cheapest: cheapestAlt,
        savings: searchedMed.price - cheapestAlt.price
    };
}

/**
 * Helper: Get all medicines by symptom
 * @param {string} symptom - The symptom to search for
 * @returns {array} - All matching medicines sorted by price
 */
function getAllBySymptom(symptom) {
    return medicineDB.filter(med => 
        med.symptoms.some(s => s.toLowerCase() === symptom.toLowerCase())
    ).sort((a, b) => a.price - b.price);
}

// ============================================
// UI Binding & Rendering
// ============================================

const resultsContainer = document.getElementById('resultsContainer');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

/**
 * Render result card for symptom query
 */
function renderSymptomResult(medicine, symptom) {
    return `
        <div class="result-card">
            <div class="result-info">
                <h3>Best medicine for ${symptom}</h3>
                <p>${medicine.name} is the most affordable option. Composition: ${medicine.salt}. Price: ₹${medicine.price.toFixed(2)}</p>
            </div>
            <div>
                <div class="result-price">₹${medicine.price.toFixed(2)}</div>
                <button class="btn-compare" onclick="openSymptomComparison('${symptom}')">Compare</button>
            </div>
        </div>
    `;
}

/**
 * Render result card for medicine query
 */
function renderMedicineResult(analysis) {
    const { searched, cheapest, savings } = analysis;
    const isCheapest = searched.id === cheapest.id;
    
    return `
        <div class="result-card">
            <div class="result-info">
                <h3>You searched for ${searched.name}</h3>
                <p>Composition is ${searched.salt}. ${isCheapest 
                    ? `This is already the cheapest option available.` 
                    : `Cheapest identical alternative is ${cheapest.name} at ₹${cheapest.price.toFixed(2)}.`}
                </p>
            </div>
            <div>
                <div class="result-price">₹${searched.price.toFixed(2)}</div>
                <button class="btn-compare" onclick="openMedicineComparison(${searched.id})">Compare</button>
            </div>
        </div>
    `;
}

/**
 * Handle search execution
 */
function handleSearch() {
    const query = searchInput.value.trim();
    if (!query) return;
    
    // Check if query matches a symptom
    const symptomMatch = analyzeBySymptom(query);
    
    // Check if query matches a medicine
    const medicineMatch = analyzeByMedicine(query);
    
    let html = '';
    
    if (symptomMatch) {
        html += renderSymptomResult(symptomMatch, query);
    }
    
    if (medicineMatch) {
        html += renderMedicineResult(medicineMatch);
    }
    
    if (!symptomMatch && !medicineMatch) {
        html = `
            <div class="result-card">
                <div class="result-info">
                    <h3>No results found</h3>
                    <p>Try searching for: Fever, Headache, Acidity, Infection, Paracetamol, Amoxicillin, or Atorvastatin</p>
                </div>
            </div>
        `;
    }
    
    resultsContainer.innerHTML = html;
}

// ============================================
// Event Listeners for Quick Links
// ============================================

document.querySelectorAll('.quick-btn[data-symptom]').forEach(btn => {
    btn.addEventListener('click', () => {
        const symptom = btn.getAttribute('data-symptom');
        searchInput.value = symptom;
        handleSearch();
    });
});

document.querySelectorAll('.quick-btn[data-medicine]').forEach(btn => {
    btn.addEventListener('click', () => {
        const medicine = btn.getAttribute('data-medicine');
        searchInput.value = medicine;
        handleSearch();
    });
});

// Search button and enter key
searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
});

// ============================================
// Theme Toggle
// ============================================

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference - default is dark
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-theme');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const isLight = body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// ============================================
// Sidebar System
// ============================================

const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarTitle = document.getElementById('sidebarTitle');
const sidebarContent = document.getElementById('sidebarContent');
const sidebarClose = document.getElementById('sidebarClose');

const sidebarTemplates = {
    cart: {
        title: 'Your Cart',
        content: `
            <div class="sidebar-item">
                <p>Your cart is empty</p>
            </div>
            <div class="sidebar-item">
                <p>Add medicines to compare prices</p>
            </div>
        `
    },
    profile: {
        title: 'Profile',
        content: `
            <div class="sidebar-item">
                <p><strong>Guest User</strong></p>
            </div>
            <div class="sidebar-item">
                <p>Saved Searches: 0</p>
            </div>
            <div class="sidebar-item">
                <p>Favorite Medicines: 0</p>
            </div>
        `
    },
    help: {
        title: 'Help & Support',
        content: `
            <div class="sidebar-item">
                <p><strong>How to use MedSmart:</strong></p>
                <p>1. Search by medicine name or symptom</p>
                <p>2. View the cheapest alternatives</p>
                <p>3. Click Compare to see detailed savings</p>
            </div>
            <div class="sidebar-item">
                <p><strong>Contact:</strong></p>
                <p>support@medsmart.in</p>
            </div>
        `
    }
};

document.querySelectorAll('.nav-link[data-sidebar]').forEach(link => {
    link.addEventListener('click', () => {
        const key = link.getAttribute('data-sidebar');
        const template = sidebarTemplates[key];
        if (template) {
            sidebarTitle.textContent = template.title;
            sidebarContent.innerHTML = template.content;
            sidebarOverlay.classList.add('active');
        }
    });
});

sidebarClose.addEventListener('click', () => {
    sidebarOverlay.classList.remove('active');
});

sidebarOverlay.addEventListener('click', (e) => {
    if (e.target === sidebarOverlay) {
        sidebarOverlay.classList.remove('active');
    }
});

// ============================================
// Modal System - Comparison
// ============================================

const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

/**
 * Open symptom comparison modal
 */
function openSymptomComparison(symptom) {
    const medicines = getAllBySymptom(symptom);
    const cheapest = medicines[0];
    
    modalTitle.textContent = `Compare - ${symptom}`;
    
    let comparisonHTML = '<div class="comparison-grid">';
    
    medicines.slice(0, 2).forEach((med, index) => {
        const isCheapest = med.id === cheapest.id;
        const savings = index === 0 ? 0 : medicines[0].price - med.price;
        
        comparisonHTML += `
            <div class="comparison-card ${isCheapest ? 'selected' : ''}">
                <span class="type-badge ${med.type.toLowerCase()}">${med.type}</span>
                <h4>${med.name}</h4>
                <p class="salt">${med.salt}</p>
                <div class="price">₹${med.price.toFixed(2)}</div>
                ${!isCheapest ? `<p class="savings">Save ₹${Math.abs(savings).toFixed(2)}</p>` : '<p class="savings">Best Price</p>'}
            </div>
        `;
    });
    
    if (medicines.length > 1) {
        const totalSavings = medicines[medicines.length - 1].price - cheapest.price;
        comparisonHTML += `
            <div class="savings-banner">
                <h4>Potential Savings</h4>
                <p>Switching from the most expensive to the cheapest can save you up to ₹${totalSavings.toFixed(2)}</p>
            </div>
        `;
    }
    
    comparisonHTML += '</div>';
    
    if (medicines.length === 1) {
        comparisonHTML = `
            <div class="comparison-grid">
                <div class="comparison-card selected">
                    <span class="type-badge ${medicines[0].type.toLowerCase()}">${medicines[0].type}</span>
                    <h4>${medicines[0].name}</h4>
                    <p class="salt">${medicines[0].salt}</p>
                    <div class="price">₹${medicines[0].price.toFixed(2)}</div>
                    <p class="savings">Only option available</p>
                </div>
            </div>
        `;
    }
    
    modalContent.innerHTML = comparisonHTML;
    modalOverlay.classList.add('active');
}

/**
 * Open medicine comparison modal
 */
function openMedicineComparison(medId) {
    const medicine = medicineDB.find(m => m.id === medId);
    if (!medicine) return;
    
    const sameSaltMeds = medicineDB.filter(m => m.salt === medicine.salt)
        .sort((a, b) => a.price - b.price);
    
    const cheapest = sameSaltMeds[0];
    const searchedMed = sameSaltMeds.find(m => m.id === medId);
    
    modalTitle.textContent = 'Medicine Comparison';
    
    let comparisonHTML = '<div class="comparison-grid">';
    
    // Show searched medicine
    comparisonHTML += `
        <div class="comparison-card ${searchedMed.id === cheapest.id ? 'selected' : ''}">
            <span class="type-badge ${searchedMed.type.toLowerCase()}">${searchedMed.type}</span>
            <h4>${searchedMed.name}</h4>
            <p class="salt">${searchedMed.salt}</p>
            <div class="price">₹${searchedMed.price.toFixed(2)}</div>
            ${searchedMed.id !== cheapest.id 
                ? `<p class="savings">Could save ₹${(searchedMed.price - cheapest.price).toFixed(2)}</p>` 
                : '<p class="savings">Already best price</p>'
            }
        </div>
    `;
    
    // Show cheapest alternative if different
    if (searchedMed.id !== cheapest.id) {
        comparisonHTML += `
            <div class="comparison-card selected">
                <span class="type-badge ${cheapest.type.toLowerCase()}">${cheapest.type}</span>
                <h4>${cheapest.name}</h4>
                <p class="salt">${cheapest.salt}</p>
                <div class="price">₹${cheapest.price.toFixed(2)}</div>
                <p class="savings">Save ₹${(searchedMed.price - cheapest.price).toFixed(2)} with this</p>
            </div>
        `;
    } else {
        // Show next option for context
        if (sameSaltMeds.length > 1) {
            const nextOption = sameSaltMeds[1];
            comparisonHTML += `
                <div class="comparison-card">
                    <span class="type-badge ${nextOption.type.toLowerCase()}">${nextOption.type}</span>
                    <h4>${nextOption.name}</h4>
                    <p class="salt">${nextOption.salt}</p>
                    <div class="price">₹${nextOption.price.toFixed(2)}</div>
                    <p class="savings">₹${(nextOption.price - cheapest.price).toFixed(2)} more expensive</p>
                </div>
            `;
        }
    }
    
    // Show savings banner if there's a saving
    if (searchedMed.id !== cheapest.id) {
        const savings = searchedMed.price - cheapest.price;
        const savingsPercent = ((savings / searchedMed.price) * 100).toFixed(0);
        comparisonHTML += `
            <div class="savings-banner">
                <h4>You Can Save ${savingsPercent}%</h4>
                <p>Switch from ${searchedMed.name} to ${cheapest.name} and save ₹${savings.toFixed(2)}</p>
            </div>
        `;
    }
    
    comparisonHTML += '</div>';
    modalContent.innerHTML = comparisonHTML;
    modalOverlay.classList.add('active');
}

// Close modal handlers
modalClose.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});

// Close on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        sidebarOverlay.classList.remove('active');
        modalOverlay.classList.remove('active');
    }
});

// ============================================
// Refer & Earn - Smooth Scroll to Footer
// ============================================

document.getElementById('referEarnBtn').addEventListener('click', () => {
    document.querySelector('.footer').scrollIntoView({ behavior: 'smooth' });
});

// ============================================
// FAQ Accordion
// ============================================

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// ============================================
// Expose functions to global scope for onclick handlers
// ============================================

window.openSymptomComparison = openSymptomComparison;
window.openMedicineComparison = openMedicineComparison;
