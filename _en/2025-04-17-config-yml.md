---
layout: post
title: "Config YML"
lang: en
date: 2025-04-17
---

Material on YAML configuration files

An introductory guide to `.yml` (YAML) configuration files, commonly used in web projects like Jekyll, GitHub Actions, and many other tools.

# ⚙️ What Is a YML File?

**YML (or YAML)** stands for **YAML Ain’t Markup Language**, a configuration file format designed to be human-readable and neatly structured.

It is often used for **settings**, **configuration data**, or **deployment pipelines** in various apps and frameworks.

---

## 🧩 Key Features of YML Format

- Based on indentation (uses spaces, **not tabs**)
- No use of `{}` or `[]` for structure
- Uses `:` to separate keys and values
- Supports **arrays**, **objects**, and **nested data**

---

## 📘 Basic Example of a `.yml` Config

```yml
title: My Blog
description: Learning Web Development
author: Zaki
theme: minima
```

In the example above:
- `title`, `description`, `author`, and `theme` are **keys**
- The part after the `:` is the **value**

---

## 🧱 Nested (Hierarchical Data)

```yml
user:
  name: Zaki
  email: zaki@example.com
```

This structure means the object `user` has two properties: `name` and `email`.

---

## 📚 Example of Array/List in YML

```yml
skills:
  - HTML
  - CSS
  - JavaScript
  - Python
```

This list contains multiple items under the `skills` key.

---

## 🔧 Example from Jekyll `_config.yml`

In a Jekyll project (like a portfolio website), the `config.yml` file typically contains settings like:

```yml
title: Home
baseurl: ""  
url: "https://m-zakifahrezi.github.io/"

sass:
  sass_dir: _sass
  style: compressed

theme: null
```

- `baseurl` is usually left empty if the site is at root.
- `url` is your GitHub Pages site address.
- `plugins` can be added depending on the features you want to enable.

---

## ⚠️ Important Tips When Using YML

- Use **2 or 4 spaces** consistently for indentation.
- Avoid tabs, as they can cause parsing errors.
- Double-check the position of keys and values — a small mistake can make the config unreadable.

---

## ✅ Conclusion

- `.yml` is an important configuration file format used in many modern projects.
- It is easy to read and write, but very sensitive to indentation.
- Understanding YAML will help you when working with Jekyll, GitHub Actions, Netlify, and other tools.

> 💡 Learn how to write key-value pairs, arrays, and nested structures in YML to ensure your site configurations work smoothly!
