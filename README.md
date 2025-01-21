# 🗃️ Project Structure

```
project/
├── assets/                # Static files like images, fonts, etc.
│   ├── images/
│   ├── fonts/
│   └── icons/
├── styles/                # Stylesheets
│   ├── base.css           # Reset/normalize and base styles
│   ├── components.css     # Component-specific styles
│   ├── layout.css         # Layout styles (grid, flex, etc.)
│   ├── utilities.css      # Utility classes
│   └── theme.css          # Theme variables (colors, typography, etc.)
├── javascript/            # JavaScript files
│   ├── components/        # Component scripts
│   │   ├── navbar.js
│   │   ├── modal.js
│   │   └── slider.js
│   ├── helpers/           # Utility functions
│   │   ├── dom.js
│   │   ├── storage.js
│   │   └── validation.js
│   ├── services/          # External data fetching or APIs
│   │   └── api.js
│   └── main.js            # Entry point
├── index.html             # Main HTML file
└── README.md              # Project documentation
```

<hr>

# 👩‍🏫 HTML Guidelines

- Semantic HTML: Use appropriate tags (e.g., `<header>`, `<main>`, `<section>`, `<article>`) for better structure and accessibility.
- BEM Naming for Classes: Use Block-Element-Modifier (BEM) methodology for naming CSS classes.

<hr>

# 🎨 CSS Guidelines

- Reset Styles: Use a CSS reset or normalize stylesheet to ensure consistent styling across browsers.
- Modular CSS: Split styles into multiple files (e.g., base.css, components.css, utilities.css) and avoid inline styles.
  Variables: Use CSS variables for maintainability.

<hr>

# 🟨 JavaScript Guidelines

- DOM Manipulation: Encapsulate DOM manipulations inside reusable functions.

```
const getElement = (selector) => document.querySelector(selector);

const toggleModal = () => {
    const modal = getElement('.modal');
    modal.classList.toggle('is-visible');
};
```

- Event Delegation: Attach events at the container level to handle dynamic elements.

```
document.querySelector('.list').addEventListener('click', (event) => {
    if (event.target.classList.contains('list-item')) {
        console.log('Item clicked:', event.target.textContent);
    }
});
```

- Utilities: Create reusable helper functions for common tasks.

```
export const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
```
