---
layout: post
title: "Laravel"
slug: pertemuan-14
lang: en
date: 2025-06-25
permalink: /id/pertemuan-14.html
---

# Getting Started with Laravel: How to Use It and Its Benefits

Laravel is one of the most popular PHP frameworks and is widely used by web developers around the world. It is designed to simplify the development of elegant, fast, and efficient web applications.

In this article, we’ll explore the initial steps of using Laravel, starting from a brief introduction, its benefits, how to install it, configure the database, and run a local server.

---

## What is Laravel?

Laravel is an open-source PHP framework that follows the Model-View-Controller (MVC) approach. Created by **Taylor Otwell**, Laravel aims to make web application development easier, more enjoyable, and productive.

---

## Benefits of Using Laravel

Here are some reasons why many developers choose Laravel:

- ✅ **Simple routing**
- 🔐 **Built-in security**
- 📦 **Rich features**
- 📄 **Blade templating**
- 🧩 **Extensive ecosystem**

---

## Requirements Before Using Laravel

1. PHP version 8.1 or higher  
2. Composer  
3. MySQL  
4. (Optional) Node.js & NPM  

---

## Installing Laravel

```bash
composer create-project laravel/laravel latihvel
cd project-name
```

---

## Running the Laravel Server

```bash
php artisan serve
```

Laravel will run on `http://127.0.0.1:8000`.

---

## Database Configuration in `.env` File

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=siswa
DB_USERNAME=root
DB_PASSWORD=
```

Explanation:

- **DB_CONNECTION**: The type of database (e.g., mysql)  
- **DB_HOST**: Database host address (127.0.0.1 for local)  
- **DB_PORT**: Default MySQL port (3306)  
- **DB_DATABASE**: Name of the database (e.g., siswa)  
- **DB_USERNAME**: MySQL username (usually root)  
- **DB_PASSWORD**: MySQL password (leave empty if unset)  

💡 Make sure the `siswa` database has been created in MySQL before continuing.

---

## Migrating the Database

Once the database is configured, you can run the default Laravel migrations (such as `users`, `password_resets`, etc.) using:

```bash
php artisan migrate
```

This command will:

- Create basic tables for user authentication  
- Use predefined migration schemas located in the `database/migrations` folder  

---

## Laravel Folder Structure

Here are some key directories in Laravel:

- `app/` – Contains application logic (models, controllers, etc.)  
- `routes/web.php` – Where routes are defined  
- `resources/views/` – Contains Blade view files (HTML)  
- `database/` – Contains configuration and migrations  
- `public/` – Web-accessible root directory  

---

## Next Steps

- Create routes and controllers  
- Build views using Blade  
- Connect models to the database  
- Implement login and registration features  
- Add and display data from the database  

---

## Conclusion

Laravel is a powerful PHP framework that’s ideal for building modern web applications. With comprehensive documentation and a large community, Laravel is a great choice for both beginners and professionals.

By following the steps above, you’re now ready to run Laravel, configure the database, and perform the initial migrations. In the next article, we’ll dive into creating basic routes and controllers.

**Good luck exploring Laravel, and may you succeed in your web development journey!**
