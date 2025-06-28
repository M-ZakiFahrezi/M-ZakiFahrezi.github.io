---
layout: post
title: "Hamburger Menu"
slug: pertemuan-12A
lang: en
date: 2025-06-12
permalink: /en/pertemuan-12A.html
---

# Understanding Hamburger Menus

A hamburger menu is a navigation icon represented by three horizontal lines (☰). It's widely used in responsive web design to hide navigation links until needed. This pattern is ideal for mobile interfaces or minimalist layouts.

## 📌 Why Use a Hamburger Menu?

- Saves space on smaller screens
- Hides navigation links to reduce clutter
- Keeps the UI clean and content-focused
- Familiar and intuitive for most users

## 🧱 Basic HTML Structure

```html
<!-- Hamburger Icon -->
<i class="fas fa-bars hamburger" id="menu-toggle"></i>

<!-- Navigation Links -->
<div class="nav-links">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</div>
```

## 🎨 CSS Styling

```css
.hamburger {
  font-size: 24px;
  cursor: pointer;
  display: none;
}

.nav-links {
  display: flex;
  gap: 10px;
}

.nav-links.active {
  display: block;
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }
  .nav-links {
    display: none;
    flex-direction: column;
  }
}
```

## ⚙️ JavaScript Interactivity

```javascript
const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  toggle.classList.toggle("fa-bars");
  toggle.classList.toggle("fa-times");
});
```

## 🧠 Summary

The hamburger menu is an efficient UI pattern for responsive navigation, particularly useful on mobile devices. By combining HTML, CSS, and JavaScript, we can enhance user experience with clean and compact navigation.

---

> 💡 Tip: Make sure Font Awesome is loaded to display the hamburger icon correctly.
