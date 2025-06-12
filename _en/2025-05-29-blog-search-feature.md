---
layout: post
title: "blog search feature"
slug: pertemuan-11
lang: en
date: 2025-05-29
permalink: /en/pertemuan-11.html
---

# Blog search feature

This search feature allows visitors to search for **titles** or **summaries** (excerpts) of blog posts based on **keywords** they type.

## ✨ Purpose of the Feature

The search feature helps users quickly find relevant blog posts just by typing a keyword.

---

## 🧩 Main Components

### 1. **Search Input and Button**

The following HTML creates an **input box** and a **button** used to trigger the search:

```html
<div class="search-container">
  <input
    type="text"
    id="searchBox"
    class="search-input"
    placeholder="Search blog..."
  />
  <button class="search-button" onclick="searchBlog()">Search</button>
</div>
```

- `id="searchBox"` → where users type the keyword.
- `onclick="searchBlog()"` → when the button is clicked, the `searchBlog()` function is called.

---

## ⚙️ How the `searchBlog()` Function Works

This function is written in JavaScript and works to **filter** blog posts based on the **title** and **excerpt**.

### 💻 Function Code

```javascript
function searchBlog() {
  const keyword = document.getElementById("searchBox").value.toLowerCase();
  const lang = localStorage.getItem("lang") || "id";
  const blogItems = document.querySelectorAll(".blog-item");

  blogItems.forEach((item) => {
    const itemLang = item.getAttribute("data-lang");
    const title = item.querySelector(".blog-title").textContent.toLowerCase();
    const excerpt = item
      .querySelector(".blog-excerpt")
      .textContent.toLowerCase();
    const matches = title.includes(keyword) || excerpt.includes(keyword);

    item.style.display = matches && itemLang === lang ? "block" : "none";
  });
}
```

---

## 🔍 Step-by-Step Explanation

1. **Get the Keyword**

   ```js
   const keyword = document.getElementById("searchBox").value.toLowerCase();
   ```

   - Gets the value from the search input.
   - Uses `.toLowerCase()` to make the search **case-insensitive**.

2. **Detect Current Language**

   ```js
   const lang = localStorage.getItem("lang") || "id";
   ```

   - Checks the language preference from `localStorage`.
   - Defaults to `"id"` (Indonesian) if not found.

3. **Get All Blog Items**

   ```js
   const blogItems = document.querySelectorAll(".blog-item");
   ```

   - Selects all blog post elements on the page.

4. **Loop and Match**

   ```js
   blogItems.forEach((item) => {
     const itemLang = item.getAttribute("data-lang");
     const title = item.querySelector(".blog-title").textContent.toLowerCase();
     const excerpt = item
       .querySelector(".blog-excerpt")
       .textContent.toLowerCase();
     const matches = title.includes(keyword) || excerpt.includes(keyword);

     item.style.display = matches && itemLang === lang ? "block" : "none";
   });
   ```

   - Gets the `data-lang` attribute of each post to match with the current language.
   - Gets text content from the title and excerpt.
   - Checks if the `keyword` **exists in** the `title` or `excerpt`.
   - If matched and language is correct, show the element (`display: block`), otherwise hide it (`display: none`).

---

## 🧠 What Does the Search Look For?

This search feature looks for **keywords** in:

- **Blog post titles** (`.blog-title`)
- **Content summaries/excerpts** (`.blog-excerpt`)

> This feature **does not** search the full content of the article (`.content`), only the summary shown on the main blog page.

---

## 💡 Further Development Tips

- 🔎 Add **highlighting** to matched search results.
- 📜 Use **fuzzy search** or a more advanced search algorithm (like Fuse.js).
- 🔄 Add real-time search (trigger as you type, no button click).
- 🌐 Expand search to the full article content if necessary.

---

## ✅ Conclusion

This blog search feature works simply but effectively, with:

- Pure JavaScript usage without additional libraries.
- Filtering based on title and excerpt text.
- Language-based filtering using **user language preference**.
- Improved user experience in finding relevant content.
