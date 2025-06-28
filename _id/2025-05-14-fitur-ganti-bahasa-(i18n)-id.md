---
layout: post
title: "Fitur Ganti Bahasa (i18n)"
slug: pertemuan-9
lang: id
date: 2025-05-15
permalink: /id/pertemuan-9.html
---

## Apa itu i18n?

**Internationalization** (sering disingkat `i18n`) adalah proses mendesain dan mengembangkan aplikasi sehingga dapat dengan mudah diadaptasi ke berbagai bahasa dan wilayah tanpa perubahan kode besar.

## Tujuan

Fitur ganti bahasa membantu:

- Menjangkau audiens internasional.
- Meningkatkan pengalaman pengguna (UX).
- Mempermudah pembelajaran atau dokumentasi multibahasa.

## Struktur Folder

Pisahkan post atau konten berdasarkan bahasa:

```
/_id/      ← post dalam Bahasa Indonesia
/_en/      ← post dalam Bahasa Inggris
```

## Metadata Post

Gunakan `slug` dan `lang` agar post lintas bahasa dapat saling dikenali.

Contoh:

```yaml
slug: pertemuan-9
lang: id
```

## Simpan Pilihan Bahasa

Gunakan JavaScript dan `localStorage` untuk menyimpan pilihan bahasa pengguna.

```js
localStorage.setItem("lang", "id");
```

## Deteksi Halaman Post

Tambahkan atribut `data-slug` di `<body>`:

```html
<body data-slug="{{ page.slug }}"></body>
```

Saat pengguna mengganti bahasa:

```js
const slug = document.body.getAttribute("data-slug");
window.location.href = `/${lang}/${slug}.html`;
```

## Penutup

Dengan i18n, website kamu jadi lebih fleksibel dan inklusif untuk semua pengguna.
