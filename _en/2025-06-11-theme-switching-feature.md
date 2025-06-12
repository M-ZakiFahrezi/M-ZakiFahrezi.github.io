---
layout: post
title: "switch theme feature"
slug: pertemuan-11A
lang: en
date: 2025-06-11
permalink: /en/pertemuan-11A.html
---

# Theme Switching Feature

This feature allows users to toggle between two visual themes on the website:

- **Ocean Mode (default)** — calm and cool with oceanic colors.
- **Volcano Mode** — fiery and vibrant with lava-inspired tones.

---

## 🔧 Main Components

### 1. **Theme Toggle Icon**

```html
<i id="theme-toggle" class="fa fa-water"></i>
```

- Uses Font Awesome icons.
- `fa-water` represents the **Ocean theme**.
- `fa-volcano` (custom or alternative) represents the **Volcano theme**.

### 2. **JavaScript Logic**

This script enables theme switching and remembers user preference using `localStorage`.

```javascript
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  if (!toggleBtn) return; // Prevent error if element not found

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "volcano") {
    body.classList.add("volcano-mode");
    toggleBtn.classList.remove("fa-water");
    toggleBtn.classList.add("fa-volcano");
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("volcano-mode");

    if (body.classList.contains("volcano-mode")) {
      toggleBtn.classList.remove("fa-water");
      toggleBtn.classList.add("fa-volcano");
      localStorage.setItem("theme", "volcano");
    } else {
      toggleBtn.classList.remove("fa-volcano");
      toggleBtn.classList.add("fa-water");
      localStorage.setItem("theme", "default");
    }
  });
});
```

### 🔍 What It Does:
- On load, it checks the previously saved theme using `localStorage`.
- If `"volcano"` was saved, it applies the volcano theme styles and icon.
- When the toggle is clicked:
  - It **adds or removes** the `volcano-mode` class to `<body>`.
  - It **changes the icon** and **saves the choice** to `localStorage`.

---

## 🎨 CSS Styling

### Default Ocean Theme (Base `body`)
```css
body {
  background-image: linear-gradient(
      to bottom,
      #05161a,
      #072e33,
      #0c7076,
      #0f908c,
      #6da5c0,
      #294d61
    ),
    repeating-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.008) 0px,
      rgba(0, 0, 0, 0.008) 2px
    );
  background-attachment: fixed;
  background-size: cover;
  background-blend-mode: overlay;
  color: #e0f7fa;
}
```

### Volcano Theme (`body.volcano-mode`)
```css
body.volcano-mode {
  background-image: linear-gradient(
      to bottom,
      #1b1e2f,
      #242f49,
      #384358,
      #ffa586,
      #b51a2b,
      #541a3e
    ),
    repeating-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.01) 0px,
      rgba(0, 0, 0, 0.01) 2px
    );
  background-blend-mode: overlay;
}
```

---

## 💡 Tips for Improvement

- Use a **smooth transition** effect for a better UX:
  ```css
  body {
    transition: background 0.5s ease-in-out;
  }
  ```
- Add **text labels** beside the icon to make the theme toggle clearer.
- You can create **more themes** and switch using a dropdown or menu.

---

## ✅ Summary

This theme switching feature:
- Enhances user personalization.
- Saves preferences across sessions using `localStorage`.
- Improves visual engagement by offering aesthetic variety.
