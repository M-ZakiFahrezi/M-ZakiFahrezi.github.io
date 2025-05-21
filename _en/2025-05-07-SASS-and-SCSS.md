---
layout: post
title: "Layout with SASS and SCSS"
slug: pertemuan-8
lang: en
date: 2025-05-07
permalink: /en/pertemuan-8.html
---

Content about SASS and SCSS

# 🧩 Creating Layouts Using SASS/SCSS

SASS and SCSS are two syntaxes of the SASS (Syntactically Awesome Stylesheets) preprocessor. Both enhance traditional CSS with features like **variables**, **nesting**, and **mixins**. While they share the same features, the difference lies in their syntax style, which is based on developer preference.

---

## 🔍 What is SCSS?

**SCSS (Sassy CSS)** is a syntax of SASS that closely resembles standard CSS. Because of this, SCSS is easier to understand for developers familiar with CSS.

### Key Features:
- **Variables**: Store reusable values (like colors or fonts).
- **Nesting**: Organize selectors hierarchically.
- **Mixins**: Reusable blocks of styles to avoid duplication.
- **Inheritance**: Share styles across selectors using `@extend`.
- **Partials & Import**: Break code into smaller, modular pieces using `@import`.

**SCSS Output Example:**

````css
body {
  background-color: blue;
  color: red;
  font-size: 25px;
}
/* This will be applied in the resulting HTML */
````

---

## 🧵 What is SASS?

**SASS** is the original syntax of the SASS preprocessor. Unlike SCSS, SASS uses indentation instead of curly braces `{}` and semicolons `;`.

### Key Features:
- **Variables**: Store reusable values.
- **Nesting**: Write cleaner CSS.
- **Partials**: Split styles into smaller files.
- **Mixins**: Reuse style blocks across selectors.
- **Inheritance**: Share styles using `@extend`.

**SASS Output Example:**

````css
body {
  background-color: blue;
  color: red;
  font-size: 25px;
}
/* This will be applied in the resulting HTML */
````

---

## ⚖️ Differences Between SCSS and SASS

| Feature        | SCSS                                 | SASS                                  |
|----------------|---------------------------------------|----------------------------------------|
| Syntax         | CSS-like (uses `{}` and `;`)          | Indentation-based (no `{}` and `;`)    |
| File Extension | `.scss`                               | `.sass`                                |
| Compatibility  | Fully compatible with CSS             | Not directly compatible with CSS       |
| Flexibility    | Familiar for CSS users                | More concise and clean                 |
| Usage          | Great for those transitioning from CSS| Great for those who prefer minimal syntax |

---

## ✅ When to Use SCSS?

SCSS is ideal when:
- You're already familiar with writing CSS
- You're working on a large-scale project that needs clear structure
- You want full compatibility with standard CSS

---

## ✅ When to Use SASS?

SASS is ideal when:
- You prefer minimal and clean syntax
- You're working on small or medium-sized projects
- You're not heavily reliant on standard CSS writing

---

## 🎨 Use SCSS for Layout Styling

In this lab session, you'll restructure a website layout using SCSS for a cleaner and more appealing design.

### Steps:
1. Update the `navigation.html` file in the `_includes` folder.
2. Add or modify SCSS code in the `main.scss` file.
3. Adjust the `default.html` file in the `_layouts` folder to integrate the new layout styles.

Ensure all changes follow SCSS structure for better readability and maintainability.

---

## 📝 Conclusion

Both SCSS and SASS offer advanced features that enhance CSS, such as **variables, mixins, nesting**, and **modular structure**. The choice between SCSS and SASS depends on your syntax comfort:

- Use **SCSS** if you're more comfortable with CSS-like syntax.
- Use **SASS** if you prefer a cleaner, minimal style.

Both improve the experience and efficiency of writing modern stylesheets.

> 🔗 Source: GeeksforGeeks — What is the difference between SCSS and SASS