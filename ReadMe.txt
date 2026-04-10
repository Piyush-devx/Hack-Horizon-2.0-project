================================================================================
                         MEDSMART - AFFORDABLE MEDICINE INTELLIGENCE PLATFORM
                              24-Hour Hackathon Project | 2024
================================================================================

OVERVIEW
--------
MedSmart is a client-side web application that helps users find cheaper generic 
alternatives to branded medicines. The app features an in-memory database of 
66+ real Indian medicines, a master relational logic engine, and a premium 
enterprise-grade UI with dark/light theme support.

FEATURES
--------
✓ Search by Medicine Name or Symptom
✓ Compare Branded vs Generic medicines with identical composition
✓ Calculate potential savings (up to 80% cheaper alternatives)
✓ 66+ Real Indian Medicine Database (Crocin, Dolo, Augmentin, Azee, etc.)
✓ Dark Theme by Default (Light mode toggle available)
✓ Refer & Earn System with referral code generation
✓ FAQ Section with accordion functionality
✓ Beautiful hover effects and premium animations
✓ Responsive design for mobile and desktop
✓ Client-side only - no backend required

TECH STACK
----------
• HTML5 (Semantic markup)
• CSS3 (CSS Variables, Flexbox, Grid, Animations)
• Vanilla JavaScript (ES6+, No frameworks)
• Google Fonts (Poppins)
• No external dependencies or libraries

FILE STRUCTURE
--------------
Project 1/
├── index.html          # Main HTML structure
├── style.css           # Complete design system with themes
├── script.js           # Master logic engine & 66+ medicine database
└── ReadMe.txt          # This documentation file

HOW TO USE
----------
1. Open index.html in any modern web browser
2. Search for a medicine (e.g., "Crocin", "Azee", "Paracetamol") OR
   Search by symptom (e.g., "Fever", "Headache", "Acidity")
3. View detailed results in popup modal with:
   - Medicine type (Branded vs Generic)
   - Active salt/composition
   - Price comparison
   - Potential savings
4. Click "Compare" or "View All Alternatives" for side-by-side comparison
5. Click "Refer & Earn" in footer to get your referral code

QUICK SEARCH PILLS
------------------
Browse by Symptom: Fever, Headache, Acidity, Infection
Trending Medicines: Paracetamol, Amoxicillin, Atorvastatin, Metformin, Omeprazole

DATABASE SCHEMA
---------------
Each medicine entry contains:
  id          - Unique identifier
  name        - Brand name (e.g., "Crocin 500mg")
  type        - "Branded" or "Generic"
  salt        - Active ingredient (e.g., "Paracetamol")
  price       - Price in INR (₹)
  symptoms    - Array of treatable symptoms

CORE FUNCTIONS
--------------
analyzeBySymptom(symptom)
  → Returns cheapest medicine for given symptom

analyzeByMedicine(medName)
  → Returns medicine details + cheapest alternative with same salt

openSearchResultModal(query)
  → Opens detailed search results in popup modal

openMedicineComparison(medId)
  → Shows side-by-side branded vs generic comparison

openSymptomComparison(symptom)
  → Shows all medicines available for a symptom

quickSearch(query)
  → Helper for suggestion pills

KEY MEDICINE PAIRS IN DATABASE
------------------------------
• Paracetamol: Crocin (₹32.50) vs Pacimol (₹14.75) - Save 55%
• Amoxicillin: Augmentin (₹189) vs Moxikind (₹89.50) - Save 53%
• Atorvastatin: Lipitor (₹215) vs Storvas (₹58) - Save 73%
• Metformin: Glycomet (₹45) vs Metford (₹18.50) - Save 59%
• Omeprazole: Omez (₹78) vs Omeper (₹32) - Save 59%
• Azithromycin: Azee (₹120) vs Azithral (₹65) - Save 46%
• And 60+ more medicines...

THEME SYSTEM
------------
Dark Theme (Default):
  --bg-color: #0a0a0a
  --btn-primary: #00E676 (Green accent)
  
Light Theme:
  --bg-color: #f9fafb
  --btn-primary: #059669 (Green accent)

Toggle via "Theme" button in navbar. Preference saved to localStorage.

IMPORTANT DISCLAIMER
--------------------
⚠️  This is a hackathon demonstration project.
⚠️  All prices shown are for demonstration purposes only.
⚠️  Always consult a qualified healthcare professional before:
    - Changing medications
    - Switching from branded to generic
    - Starting or stopping any treatment

This app does not provide medical advice. The information presented is 
educational in nature and should not replace professional medical guidance.

COMPATIBILITY
-------------
✓ Chrome 80+
✓ Firefox 75+
✓ Safari 13+
✓ Edge 80+
✓ Mobile browsers (iOS Safari, Chrome Mobile)

PERFORMANCE
-----------
• Zero external API calls
• No backend server required
• Entire app loads in < 100KB
• Instant search results (< 10ms)
• Works offline after initial load

DEVELOPER NOTES
---------------
Built for a 24-hour hackathon with focus on:
• Clean, maintainable code structure
• Real-world Indian medicine data
• Accessible UI/UX
• Mobile-first responsive design
• Zero dependencies philosophy

FUTURE ENHANCEMENTS (Optional)
------------------------------
• Integration with pharmacy APIs for real-time prices
• User accounts and search history
• Location-based pharmacy finder
• Medicine availability checker
• Doctor consultation integration

================================================================================
                            © 2024 MedSmart
                    Built with ❤️ for affordable healthcare
================================================================================
