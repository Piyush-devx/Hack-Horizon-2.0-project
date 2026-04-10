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
    },
    {
        id: 15,
        name: "Dolo 650mg",
        type: "Branded",
        salt: "Paracetamol",
        price: 38.50,
        symptoms: ["Fever", "Headache", "Pain"]
    },
    {
        id: 16,
        name: "Calpol 650mg",
        type: "Branded",
        salt: "Paracetamol",
        price: 42.00,
        symptoms: ["Fever", "Headache", "Pain"]
    },
    {
        id: 17,
        name: "Azee 500mg",
        type: "Branded",
        salt: "Azithromycin",
        price: 120.00,
        symptoms: ["Infection", "Throat Infection", "Chest Infection"]
    },
    {
        id: 18,
        name: "Azithral 500mg",
        type: "Generic",
        salt: "Azithromycin",
        price: 65.00,
        symptoms: ["Infection", "Throat Infection", "Chest Infection"]
    },
    {
        id: 19,
        name: "Lipitor 10mg",
        type: "Branded",
        salt: "Atorvastatin",
        price: 215.00,
        symptoms: ["Cholesterol", "Heart Health"]
    },
    {
        id: 20,
        name: "Storvas 10mg",
        type: "Generic",
        salt: "Atorvastatin",
        price: 58.00,
        symptoms: ["Cholesterol", "Heart Health"]
    },
    {
        id: 21,
        name: "Ciplar 40mg",
        type: "Generic",
        salt: "Propranolol",
        price: 28.50,
        symptoms: ["Blood Pressure", "Anxiety", "Migraine"]
    },
    {
        id: 22,
        name: "Inderal 40mg",
        type: "Branded",
        salt: "Propranolol",
        price: 89.00,
        symptoms: ["Blood Pressure", "Anxiety", "Migraine"]
    },
    {
        id: 23,
        name: "Nise 100mg",
        type: "Branded",
        salt: "Nimesulide",
        price: 56.00,
        symptoms: ["Pain", "Fever", "Inflammation"]
    },
    {
        id: 24,
        name: "Nimprex 100mg",
        type: "Generic",
        salt: "Nimesulide",
        price: 24.00,
        symptoms: ["Pain", "Fever", "Inflammation"]
    },
    {
        id: 25,
        name: "Combiflam",
        type: "Branded",
        salt: "Ibuprofen + Paracetamol",
        price: 45.00,
        symptoms: ["Pain", "Fever", "Headache"]
    },
    {
        id: 26,
        name: "Ibupar Plus",
        type: "Generic",
        salt: "Ibuprofen + Paracetamol",
        price: 19.50,
        symptoms: ["Pain", "Fever", "Headache"]
    },
    {
        id: 27,
        name: "Zifi 200mg",
        type: "Branded",
        salt: "Cefixime",
        price: 135.00,
        symptoms: ["Infection", "Typhoid", "Urinary Tract Infection"]
    },
    {
        id: 28,
        name: "Taxim 200mg",
        type: "Generic",
        salt: "Cefixime",
        price: 62.00,
        symptoms: ["Infection", "Typhoid", "Urinary Tract Infection"]
    },
    {
        id: 29,
        name: "Cetzine 10mg",
        type: "Branded",
        salt: "Cetirizine",
        price: 32.00,
        symptoms: ["Allergy", "Cold", "Sneezing"]
    },
    {
        id: 30,
        name: "Alceti 10mg",
        type: "Generic",
        salt: "Cetirizine",
        price: 14.00,
        symptoms: ["Allergy", "Cold", "Sneezing"]
    },
    {
        id: 31,
        name: "Allegra 180mg",
        type: "Branded",
        salt: "Fexofenadine",
        price: 165.00,
        symptoms: ["Allergy", "Hay Fever", "Hives"]
    },
    {
        id: 32,
        name: "Fexy 180mg",
        type: "Generic",
        salt: "Fexofenadine",
        price: 78.00,
        symptoms: ["Allergy", "Hay Fever", "Hives"]
    },
    {
        id: 33,
        name: "Losar 50mg",
        type: "Branded",
        salt: "Losartan",
        price: 95.00,
        symptoms: ["Blood Pressure", "Hypertension"]
    },
    {
        id: 34,
        name: "Losacar 50mg",
        type: "Generic",
        salt: "Losartan",
        price: 42.00,
        symptoms: ["Blood Pressure", "Hypertension"]
    },
    {
        id: 35,
        name: "Volini Spray",
        type: "Branded",
        salt: "Diclofenac Diethylamine",
        price: 165.00,
        symptoms: ["Muscle Pain", "Sprain", "Back Pain"]
    },
    {
        id: 36,
        name: "Voveran Spray",
        type: "Generic",
        salt: "Diclofenac Diethylamine",
        price: 89.00,
        symptoms: ["Muscle Pain", "Sprain", "Back Pain"]
    },
    {
        id: 37,
        name: "Dynapar AQ",
        type: "Branded",
        salt: "Diclofenac Sodium",
        price: 78.00,
        symptoms: ["Pain", "Inflammation", "Arthritis"]
    },
    {
        id: 38,
        name: "Diclofen 50mg",
        type: "Generic",
        salt: "Diclofenac Sodium",
        price: 28.00,
        symptoms: ["Pain", "Inflammation", "Arthritis"]
    },
    {
        id: 39,
        name: "Domstal 10mg",
        type: "Branded",
        salt: "Domperidone",
        price: 45.00,
        symptoms: ["Nausea", "Vomiting", "Acidity"]
    },
    {
        id: 40,
        name: "Domperi 10mg",
        type: "Generic",
        salt: "Domperidone",
        price: 18.00,
        symptoms: ["Nausea", "Vomiting", "Acidity"]
    },
    {
        id: 41,
        name: "Rantac 150mg",
        type: "Branded",
        salt: "Ranitidine",
        price: 35.50,
        symptoms: ["Acidity", "GERD", "Heartburn"]
    },
    {
        id: 42,
        name: "Ranitin 150mg",
        type: "Generic",
        salt: "Ranitidine",
        price: 15.00,
        symptoms: ["Acidity", "GERD", "Heartburn"]
    },
    {
        id: 43,
        name: "Becosules",
        type: "Branded",
        salt: "Vitamin B Complex",
        price: 52.00,
        symptoms: ["Vitamin Deficiency", "Fatigue", "Immunity"]
    },
    {
        id: 44,
        name: "Becovit",
        type: "Generic",
        salt: "Vitamin B Complex",
        price: 22.00,
        symptoms: ["Vitamin Deficiency", "Fatigue", "Immunity"]
    },
    {
        id: 45,
        name: "Shelcal 500mg",
        type: "Branded",
        salt: "Calcium Carbonate + Vitamin D3",
        price: 145.00,
        symptoms: ["Calcium Deficiency", "Bone Health", "Osteoporosis"]
    },
    {
        id: 46,
        name: "Calcirol",
        type: "Generic",
        salt: "Calcium Carbonate + Vitamin D3",
        price: 68.00,
        symptoms: ["Calcium Deficiency", "Bone Health", "Osteoporosis"]
    },
    {
        id: 47,
        name: "Electral Powder",
        type: "Branded",
        salt: "Oral Rehydration Salts",
        price: 28.00,
        symptoms: ["Dehydration", "Diarrhea", "Heat Stroke"]
    },
    {
        id: 48,
        name: "ORS L",
        type: "Generic",
        salt: "Oral Rehydration Salts",
        price: 12.00,
        symptoms: ["Dehydration", "Diarrhea", "Heat Stroke"]
    },
    {
        id: 49,
        name: "Candid Cream",
        type: "Branded",
        salt: "Clotrimazole",
        price: 95.00,
        symptoms: ["Fungal Infection", "Ringworm", "Athletes Foot"]
    },
    {
        id: 50,
        name: "Clocip Cream",
        type: "Generic",
        salt: "Clotrimazole",
        price: 42.00,
        symptoms: ["Fungal Infection", "Ringworm", "Athletes Foot"]
    },
    {
        id: 51,
        name: "Betadine Ointment",
        type: "Branded",
        salt: "Povidone Iodine",
        price: 75.00,
        symptoms: ["Cuts", "Wounds", "Skin Infection"]
    },
    {
        id: 52,
        name: "Poviderm Ointment",
        type: "Generic",
        salt: "Povidone Iodine",
        price: 32.00,
        symptoms: ["Cuts", "Wounds", "Skin Infection"]
    },
    {
        id: 53,
        name: "Livogen",
        type: "Branded",
        salt: "Ferrous Fumarate + Folic Acid",
        price: 68.00,
        symptoms: ["Anemia", "Iron Deficiency", "Fatigue"]
    },
    {
        id: 54,
        name: "Autrin",
        type: "Generic",
        salt: "Ferrous Fumarate + Folic Acid",
        price: 29.00,
        symptoms: ["Anemia", "Iron Deficiency", "Fatigue"]
    },
    {
        id: 55,
        name: "Thyronorm 50mcg",
        type: "Branded",
        salt: "Levothyroxine",
        price: 125.00,
        symptoms: ["Hypothyroidism", "Thyroid"]
    },
    {
        id: 56,
        name: "Eltroxin 50mcg",
        type: "Generic",
        salt: "Levothyroxine",
        price: 58.00,
        symptoms: ["Hypothyroidism", "Thyroid"]
    },
    {
        id: 57,
        name: "Tenoric 50mg",
        type: "Branded",
        salt: "Atenolol + Chlorthalidone",
        price: 85.00,
        symptoms: ["Blood Pressure", "Hypertension"]
    },
    {
        id: 58,
        name: "Aten D",
        type: "Generic",
        salt: "Atenolol + Chlorthalidone",
        price: 38.00,
        symptoms: ["Blood Pressure", "Hypertension"]
    },
    {
        id: 59,
        name: "Zerodol P",
        type: "Branded",
        salt: "Aceclofenac + Paracetamol",
        price: 72.00,
        symptoms: ["Pain", "Fever", "Inflammation"]
    },
    {
        id: 60,
        name: "Aceclo Plus",
        type: "Generic",
        salt: "Aceclofenac + Paracetamol",
        price: 32.00,
        symptoms: ["Pain", "Fever", "Inflammation"]
    },
    {
        id: 61,
        name: "Pan 40mg",
        type: "Branded",
        salt: "Pantoprazole",
        price: 85.00,
        symptoms: ["Acidity", "GERD", "Stomach Ulcer"]
    },
    {
        id: 62,
        name: "Pantodac 40mg",
        type: "Generic",
        salt: "Pantoprazole",
        price: 38.00,
        symptoms: ["Acidity", "GERD", "Stomach Ulcer"]
    },
    {
        id: 63,
        name: "Zovirax Cream",
        type: "Branded",
        salt: "Acyclovir",
        price: 145.00,
        symptoms: ["Cold Sores", "Herpes", "Viral Infection"]
    },
    {
        id: 64,
        name: "Acivir Cream",
        type: "Generic",
        salt: "Acyclovir",
        price: 68.00,
        symptoms: ["Cold Sores", "Herpes", "Viral Infection"]
    },
    {
        id: 65,
        name: "Galvus Met 50/500",
        type: "Branded",
        salt: "Vildagliptin + Metformin",
        price: 285.00,
        symptoms: ["Diabetes", "Blood Sugar"]
    },
    {
        id: 66,
        name: "Vilmet 50/500",
        type: "Generic",
        salt: "Vildagliptin + Metformin",
        price: 145.00,
        symptoms: ["Diabetes", "Blood Sugar"]
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
 * Show search result popup modal
 */
function openSearchResultModal(query) {
    const symptomMatch = analyzeBySymptom(query);
    const medicineMatch = analyzeByMedicine(query);
    
    // If nothing found, show not found modal
    if (!symptomMatch && !medicineMatch) {
        modalTitle.textContent = 'Search Result';
        modalContent.innerHTML = `
            <div class="search-result-modal">
                <div class="not-found-message">
                    <div class="not-found-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="11" cy="11" r="8"/>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        </svg>
                    </div>
                    <h3>Medicine not available in the database</h3>
                    <p>We couldn't find "${query}" in our database. Try one of these suggestions:</p>
                    <div class="suggestion-list">
                        <button class="suggestion-pill" onclick="quickSearch('Fever')">Fever</button>
                        <button class="suggestion-pill" onclick="quickSearch('Headache')">Headache</button>
                        <button class="suggestion-pill" onclick="quickSearch('Acidity')">Acidity</button>
                        <button class="suggestion-pill" onclick="quickSearch('Paracetamol')">Paracetamol</button>
                        <button class="suggestion-pill" onclick="quickSearch('Amoxicillin')">Amoxicillin</button>
                    </div>
                </div>
            </div>
        `;
        modalOverlay.classList.add('active');
        return;
    }
    
    let html = '<div class="search-result-modal"><div class="result-detail">';
    
    // Symptom result
    if (symptomMatch) {
        const allMeds = getAllBySymptom(query);
        html += `
            <div class="result-header">
                <h3>Best medicine for ${query}</h3>
                <p>Found ${allMeds.length} matching medicine${allMeds.length > 1 ? 's' : ''}</p>
            </div>
            <div class="result-card-large">
                <span class="type-badge ${symptomMatch.type.toLowerCase()}">${symptomMatch.type}</span>
                <h4>${symptomMatch.name}</h4>
                <p class="salt">${symptomMatch.salt}</p>
                <div class="price">₹${symptomMatch.price.toFixed(2)}</div>
                <div class="symptoms">
                    ${symptomMatch.symptoms.map(s => `<span class="symptom-tag">${s}</span>`).join('')}
                </div>
            </div>
        `;
        
        // Show cheaper alternatives if available
        if (allMeds.length > 1 && allMeds[0].id !== allMeds[allMeds.length - 1].id) {
            const savings = allMeds[allMeds.length - 1].price - allMeds[0].price;
            html += `
                <div class="savings-banner">
                    <h4>Save up to ₹${savings.toFixed(2)}</h4>
                    <p>We found ${allMeds.length} alternatives for ${query}</p>
                </div>
                <button class="btn-primary" style="width: 100%; margin-top: 1rem;" onclick="openSymptomComparison('${query}')">View All Alternatives</button>
            `;
        }
    }
    
    // Medicine result
    if (medicineMatch) {
        const { searched, cheapest, savings } = medicineMatch;
        const isCheapest = searched.id === cheapest.id;
        
        if (symptomMatch) html += '<hr style="margin: 1.5rem 0; border-color: var(--border-color);">';
        
        html += `
            <div class="result-header">
                <h3>You searched for "${query}"</h3>
                <p>Composition: ${searched.salt}</p>
            </div>
            <div class="result-card-large">
                <span class="type-badge ${searched.type.toLowerCase()}">${searched.type}</span>
                <h4>${searched.name}</h4>
                <p class="salt">${searched.salt}</p>
                <div class="price">₹${searched.price.toFixed(2)}</div>
                <div class="symptoms">
                    ${searched.symptoms.map(s => `<span class="symptom-tag">${s}</span>`).join('')}
                </div>
            </div>
        `;
        
        if (!isCheapest) {
            html += `
                <div class="comparison-grid" style="margin-top: 1rem;">
                    <div class="comparison-card">
                        <span class="type-badge ${searched.type.toLowerCase()}">${searched.type}</span>
                        <h4>${searched.name}</h4>
                        <div class="price" style="font-size: 1.25rem;">₹${searched.price.toFixed(2)}</div>
                    </div>
                    <div class="comparison-card selected">
                        <span class="type-badge ${cheapest.type.toLowerCase()}">${cheapest.type}</span>
                        <h4>${cheapest.name}</h4>
                        <div class="price" style="font-size: 1.25rem;">₹${cheapest.price.toFixed(2)}</div>
                        <p class="savings">Save ₹${savings.toFixed(2)}</p>
                    </div>
                </div>
                <button class="btn-primary" style="width: 100%; margin-top: 1rem;" onclick="openMedicineComparison(${searched.id})">View Full Comparison</button>
            `;
        } else {
            html += `
                <div class="savings-banner" style="background: linear-gradient(135deg, #ffc107 0%, #ff9800 100%);">
                    <h4>Best Price Available!</h4>
                    <p>This is already the cheapest option with this composition</p>
                </div>
            `;
        }
    }
    
    html += '</div></div>';
    
    modalTitle.textContent = 'Search Results';
    modalContent.innerHTML = html;
    modalOverlay.classList.add('active');
}

/**
 * Quick search helper for suggestions
 */
function quickSearch(query) {
    searchInput.value = query;
    openSearchResultModal(query);
}

/**
 * Handle search execution - now opens popup
 */
function handleSearch() {
    const query = searchInput.value.trim();
    if (!query) return;
    openSearchResultModal(query);
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
        referModalOverlay.classList.remove('active');
    }
});

// ============================================
// Refer & Earn Modal
// ============================================

const referModalOverlay = document.getElementById('referModalOverlay');
const referModalClose = document.getElementById('referModalClose');
const copyReferCode = document.getElementById('copyReferCode');
const referCode = document.getElementById('referCode');

document.getElementById('referEarnBtn').addEventListener('click', () => {
    referModalOverlay.classList.add('active');
});

referModalClose.addEventListener('click', () => {
    referModalOverlay.classList.remove('active');
});

referModalOverlay.addEventListener('click', (e) => {
    if (e.target === referModalOverlay) {
        referModalOverlay.classList.remove('active');
    }
});

// Copy referral code functionality
copyReferCode.addEventListener('click', () => {
    navigator.clipboard.writeText(referCode.textContent).then(() => {
        copyReferCode.textContent = 'Copied!';
        copyReferCode.classList.add('copied');
        setTimeout(() => {
            copyReferCode.textContent = 'Copy';
            copyReferCode.classList.remove('copied');
        }, 2000);
    });
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
window.quickSearch = quickSearch;
