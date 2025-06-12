---
layout: post
title: "Language Change Feature (i18n)"
slug: pertemuan-9
lang: en
date: 2025-05-15
permalink: /en/pertemuan-9.html
---

## What is i18n?

**Internationalization** (shortened as `i18n`) is the process of designing and developing applications so that they can be easily adapted to different languages and regions without major code changes.

## Purpose

Language switch features help:

- Reach international audiences.
- Improve user experience (UX).
- Support multilingual learning or documentation.

## Folder Structure

Separate content based on language:

```
/_id/      ← posts in Indonesian
/_en/      ← posts in English
```

## Post Metadata

Use `slug` and `lang` so both language versions can recognize each other.

Example:

```yaml
slug: pertemuan-9
lang: en
```

## Store Language Preference

Use JavaScript and `localStorage`:

```js
localStorage.setItem("lang", "en");
```

## Detect Post Page

Add `data-slug` to `<body>`:

```html
<body data-slug="{{ page.slug }}"></body>
```

Then redirect when language is switched:

```js
const slug = document.body.getAttribute("data-slug");
window.location.href = `/${lang}/${slug}.html`;
```

## Conclusion

With i18n, your website becomes more accessible and adaptable for all users.
