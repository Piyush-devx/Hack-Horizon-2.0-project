# MedSmart – Medicine Finder

A clean, premium frontend web application built with vanilla HTML, CSS, and JavaScript that helps users find cheaper alternatives for medicines and compare prices.

## Features

- **Medicine Search**: Search for medicines by name or salt composition
- **Smart Alternatives**: Automatically finds cheaper alternatives with the same composition
- **Price Comparison**: Visual comparison with savings calculation
- **Premium UI**: Clean, modern interface with smooth animations and hover effects

## Tech Stack

- **HTML5**
- **CSS3** (Custom CSS with CSS variables)
- **Vanilla JavaScript** (ES6+)
- **Google Fonts** (Inter)

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for best experience)

### Installation

No installation required! Simply open `index.html` in your web browser.

For the best experience, you can use a local web server:

**Using Python:**
```bash
python -m http.server 8000
```

**Using Node.js:**
```bash
npx serve
```

Then open http://localhost:8000 in your browser.

## Usage

1. Enter a medicine name in the search bar (e.g., "Crocin", "Augmentin", "Omeprazole")
2. Click on a medicine from the search results
3. View the price comparison with cheaper alternatives
4. See your potential savings highlighted in green

## Sample Medicines

Try searching for:
- Crocin 650mg
- Augmentin 625
- Gelusil MPS
- Omeprazole 20mg
- Metformin 500mg
- Atorvastatin 10mg
- Azithromycin 500mg

## Project Structure

```
medsmart/
├── index.html          # Main HTML structure
├── style.css          # All styling with CSS variables
├── script.js          # JavaScript logic and data
└── README.md          # This file
```

## UI Features

- **Gradient backgrounds** with soft blue tones
- **Glassmorphism effect** on navbar
- **Smooth hover animations** on cards (scale, shadow)
- **Loading spinner** during search
- **Fade-in and slide-up animations** for results
- **"Best Price" badge** highlighting cheapest alternative
- **Savings summary** with percentage calculation
- **Responsive design** for mobile and desktop
- **CSS custom properties** for easy theming

## Customization

### Colors

Edit the CSS variables in `style.css` under `:root`:

```css
:root {
    --primary-500: #3b82f6;  /* Primary blue */
    --accent-500: #22c55e;   /* Accent green */
    /* ... more colors */
}
```

### Data

Edit the `medicines` array in `script.js` to add or modify medicines:

```javascript
const medicines = [
    {
        name: "Medicine Name",
        salt: "Active Ingredient",
        price: 100,
        manufacturer: "Company",
        alternatives: [
            { name: "Generic", price: 50, manufacturer: "Company" }
        ]
    }
];
```

## Built For

This project was built for a hackathon demo. It uses mock data for demonstration purposes.

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Disclaimer

Prices shown are for demonstration purposes only. Always consult a healthcare professional for medical advice.
