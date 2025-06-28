---
layout: post
title: "HTML: Links and Lists"
slug: pertemuan-4
lang: en
date: 2025-03-20
permalink: /en/pertemuan-4.html
---

Material on links and lists in HTML

A basic guide on how to use links and lists in HTML.

# 🔗 Learning Links & Lists in HTML

## 🔗 What Is a Link in HTML?

**Links** are used to connect one page to another, either within the same website or to an external site.

### 📌 Tags Used:

- `<a>`: Anchor tag to create hyperlinks

### ✅ Link Usage Examples

```html
<!-- Link to another page -->
<a href="about.html">About Us</a>

<!-- Link to an external site -->
<a href="https://www.google.com" target="_blank">Search on Google</a>

<!-- Link to a specific section on the page -->
<a href="#contact">Jump to contact section</a>

<!-- Target element -->
<h2 id="contact">Contact Us</h2>
```

---

## 🧾 What Is a List in HTML?

**Lists** are used to display items in an organized format.

### 📌 Types of Lists in HTML:

| Type             | Tag    | Description                      |
| ---------------- | ------ | -------------------------------- |
| Ordered List     | `<ol>` | A numbered list                  |
| Unordered List   | `<ul>` | A bullet-point list              |
| Description List | `<dl>` | A list of terms and descriptions |

---

### ✅ Example of Ordered List

```html
<ol>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ol>
```

### ✅ Example of Unordered List

```html
<ul>
  <li>Blog</li>
  <li>Gallery</li>
  <li>Contact</li>
</ul>
```

### ✅ Example of Description List

```html
<dl>
  <dt>HTML</dt>
  <dd>A markup language for the web</dd>

  <dt>CSS</dt>
  <dd>A language for styling web pages</dd>
</dl>
```

---

## 🎯 Tips for Using Links & Lists

- Use `target="_blank"` to open links in a new tab.
- Add a `title` attribute to the `<a>` tag to provide extra info on hover.
- Use lists to structure navigation menus.
- Nest lists inside other lists to create submenus or nested content.

---

## ✅ Conclusion

- **Links (`<a>`)** are essential for connecting pages and making a site easy to navigate.
- **Lists (`<ul>`, `<ol>`, `<dl>`)** help present information in a clean, structured format.
- Both are fundamental HTML elements commonly used in layouts and content.

> 💡 Master the `<a>`, `<ul>`, `<ol>`, and `<li>` tags to build well-structured navigation and content in your web pages!
