---
layout: post
title: "Ruby and Jekyll installation"
lang: en
date: 2025-02-20
---

A guide on installing Ruby and Jekyll

# 📘 Ruby and Jekyll Installation Guide

## 💎 What Are Ruby & Jekyll?

- **Ruby** is a programming language used by Jekyll.
- **Jekyll** is a Ruby-based static site generator, popular for creating blogs and documentation (like GitHub Pages).

---

## 🔧 Initial Setup

### 1. Install Ruby

#### ▶ Windows

1. Download from: [https://rubyinstaller.org](https://rubyinstaller.org)
2. Choose the **Ruby + DevKit** version, for example: `Ruby 3.1.4-1 (x64)`
3. After installation:
   - Check the option “Run `ridk install`”
   - Select all components (1, 2, and 3)

#### ▶ macOS

Install via Homebrew:

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install ruby

#### ▶ Linux

sudo apt update
sudo apt install ruby-full build-essential zlib1g-dev

Add RubyGems to your PATH:
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

🌟 Install Jekyll
Once Ruby is installed, run:
gem install jekyll bundler

🚀 Create and Run a Jekyll Project

1. Create a new project:
   jekyll new nama-proyek
   cd nama-proyek

2. Start the local server:
   bundle exec jekyll serve
   Open in your browser:
   http://localhost:4000

🧪 Check Versions
ruby -v # versi Ruby
jekyll -v # versi Jekyll

---

## ✅ Conclusion

Installing Jekyll involves a few key steps:

1. **install Ruby** – the foundation, since Jekyll is built with Ruby.
2. **install Jekyll and Bundler** – using the `gem install` command.
3. **Create and run a Jekyll project** – using `jekyll new` and `bundle exec jekyll serve`.

By following these steps, you’re ready to build a static website using Jekyll on any operating system (Windows, macOS, or Linux). Make sure to check your installed versions and adjust configurations when deploying to services like GitHub Pages.

> Happy building with Jekyll! 🚀
