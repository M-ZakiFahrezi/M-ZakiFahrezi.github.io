---
layout: default
title: Friends
---

<div class="friends-container">
  <h1 data-i18n="friendsTitle">Halaman teman</h1>
  <p data-i18n="friendsDesc">Berikut teman-teman saya di kelas:</p>
  <div class="search-container">
  <input
    type="text"
    id="friendSearchBox"
    class="search-input"
    placeholder="Cari teman..."
    data-i18n="searchFriendPlaceholder"
  />
  <button
    class="search-button"
    data-i18n="searchButton"
    onclick="searchFriends()"
  >
    Cari
  </button>
</div>

  <ul class="friend-list">
    <li><a href="https://ahmadfayyadh.github.io/">Ahmad Fayyadh</a></li>
    <li><a href="https://alanisamaharani.github.io/">Al Anisa Maharani</a></li>
    <li><a href="https://alfaizakbar.github.io/">Alfaiz Akbar Thaib</a></li>
    <li><a href="https://alisyateriana.github.io/">Alisya Teriana</a></li>
    <li><a href="https://allysahumaira.github.io/">Allysa Humaira</a></li>
    <li><a href="https://amirullah310.github.io/">Amirullah</a></li>
    <li><a href="https://anandaaputrinabilla.github.io/">Ananda Putri Nabilla</a></li>
    <li><a href="https://angginabilabatubara.github.io/">Anggi Sya'ban Nabila Batubara</a></li>
    <li><a href="https://balqismisyia.github.io/">Balqis Misyia</a></li>
    <li><a href="https://cutyumnaassyifa22.github.io/">Cut Yumna Assyifa</a></li>
    <li><a href="https://darmawansahputra1.github.io/">Darmawan Sahputra</a></li>
    <li><a href="https://dindaelz06.github.io/">Dinda Eliza</a></li>
    <li><a href="https://fared08.github.io/">Farid Haiqal</a></li>
    <li><a href="https://janricomaulanas.github.io/">Janrico Maulana Sofyan</a></li>
    <li><a href="https://muhammadalfaraby06.github.io/">Muhammad Alfaraby</a></li>
    <li><a href="https://alfsdqi.github.io/">Muhammad Alif Sidqi</a></li>
    <li><a href="https://amharul.github.io/">Muhammad Amharul Azhan</a></li>
    <li><a href="https://khadafimuhammadnawwar.github.io/">Muhammad Nawar Khadafi</a></li>
    <li><a href="https://mraihanads.github.io/">Muhammad Raihan</a></li>
    <li><a href="https://muhzakyyy.github.io/">Muhammad Zaky</a></li>
    <li><a href="https://m-zakifahrezi.github.io/">Muhammad Zaki Fahrezi</a></li>
    <li><a href="https://mudaabrar.github.io/">Mohd. Muda Abrar</a></li>
    <li><a href="https://mutyaraassyifa.github.io/">Mutyara Assyifa</a></li>
    <li><a href="https://najwaal-fajra.github.io/">Najwa Alfajra</a></li>
    <li><a href="https://nursitaaa.github.io/">Nursita</a></li>
    <li><a href="https://rafi-i-habibi.github.io/">Rafi'i Habibi</a></li>
    <li><a href="https://syahanalfatih.github.io/">Syahan Alfatih</a></li>
    <li><a href="https://addairabi.github.io/">T. Ahmad Addairabi Asyafi'ie</a></li>
  </ul>
  <div id="noResultsMessage" style="display: none; text-align: center; color: white; margin-top: 16px;" data-i18n="noFriendsFound">
  Teman tidak ditemukan.
  </div>
</div>

<!-- search script -->
<script>
  function searchFriends() {
    const input = document.getElementById("friendSearchBox");
    const filter = input.value.toLowerCase();
    const listItems = document.querySelectorAll(".friend-list li");
    const noResultsMessage = document.getElementById("noResultsMessage");

    let visibleCount = 0;

    listItems.forEach(function (item) {
      const text = item.textContent.toLowerCase();
      const isVisible = text.includes(filter);
      item.style.display = isVisible ? "" : "none";
      if (isVisible) visibleCount++;
    });

    // Tampilkan pesan jika tidak ada hasil
    noResultsMessage.style.display = visibleCount === 0 ? "block" : "none";
  }

  // Tekan Enter untuk cari
  document.getElementById("friendSearchBox").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      searchFriends();
    }
  });
</script>
