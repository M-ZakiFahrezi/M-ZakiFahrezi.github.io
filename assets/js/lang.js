document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "id";
  document.getElementById("languageSelect").value = lang;
  setLanguage(lang);
});

function switchLanguage() {
  const lang = document.getElementById("languageSelect").value;
  localStorage.setItem("lang", lang);
  setLanguage(lang);
}

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      if (el.tagName === "INPUT" && el.hasAttribute("placeholder")) {
        el.setAttribute("placeholder", translations[lang][key]);
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });

  filterPostsByLanguage(lang); // <- Tambahan ini penting agar post langsung berubah
}

const translations = {
  id: {
    // home translations //
    homeTitle: "Hii, Saya Muhammad <span class='last_name'>Zaki Fahrezi</span>",
    homeIntro: `Saya Muhammad Zaki Fahrezi, lahir di Lhokseumawe. Saya merupakan lulusan
    dari SMK Negeri 1 Lhokseumawe dan kini melanjutkan studi di Politeknik
    Negeri Lhokseumawe, jurusan Teknik Informatika. Sebagai seorang mahasiswa
    yang memiliki semangat tinggi, saya sangat tertarik dalam membangun
    pengalaman digital yang menarik dan fungsional. Saat ini, saya fokus pada
    pengembangan front-end menggunakan HTML, CSS, dan JavaScript, serta berusaha
    mengasah keterampilan saya untuk menciptakan aplikasi web yang user-friendly
    dan responsif. Selain itu, saya memiliki ambisi untuk menjadi seorang
    full-stack developer, dengan kemampuan untuk menangani baik sisi front-end
    maupun back-end dalam pengembangan aplikasi. Dengan tekad dan ketekunan,
        saya ingin terus belajar dan berkembang dalam dunia teknologi untuk
        memberikan kontribusi yang lebih besar di masa depan.`,
        
    hobbiesTitle: "Hobi Saya",
    hobbiesDesc: `
    <li>🎮 Bermain game strategi & survival</li>
        <li>🎧 Mendengarkan musik</li>
        <li>📺 Menonton sepak bola</li>
        <li>🎞️ Menonton film</li>
        <li>🛌 Tidur💤</li>
        <li>⚽ Berolahraga</li>
        <li>📖 Belajar bahasa pemrograman terutama pemrograman website</li>
        <li>📚 Membaca artikel teknologi dan pengembangan diri</li>
      `,
      
      goalTitle: "Tujuan Saya Belajar Web",
      goalDesc: `Saya mulai belajar web karena saya sangat tertarik dengan bagaimana sebuah
      halaman bisa dirancang, dibangun, dan berjalan secara interaktif di browser.
      Tujuan utama saya adalah menjadi seorang Full Stack Developer, yaitu
      developer yang mampu membangun aplikasi dari sisi frontend hingga backend.
      Dengan kemampuan ini, saya ingin menciptakan produk digital yang utuh,
      bermanfaat, dan dapat memberikan pengalaman yang menyenangkan bagi pengguna.
      Saya percaya bahwa menguasai pengembangan web adalah langkah awal untuk
      mewujudkan impian saya di dunia teknologi.`,
      
      contact: "Kontak",
      
      // friends translations
    friendsTitle: "Halaman Teman",
    friendsDesc: "Berikut teman-teman saya di kelas:",
    
    // blog translations
    blogTitle: "Blog",
    blogWelcome: "Selamat datang di blog saya, mari belajar bersama!!",
    searchPlaceholder: "Cari blog...",
    searchButton: "Cari",
  },
  
  en: {
    // home translations
    homeTitle: "Hi, I'm Muhammad <span class='last_name'>Zaki Fahrezi</span>",
    homeIntro: `I am Muhammad Zaki Fahrezi, born in Lhokseumawe. I graduated from
    SMK Negeri 1 Lhokseumawe and am currently continuing my studies at
    Politeknik Negeri Lhokseumawe, majoring in Information Technology. As a
    passionate student, I am very interested in creating engaging and
    functional digital experiences. I currently focus on front-end
        development using HTML, CSS, and JavaScript, and I am striving to improve
        my skills to build user-friendly and responsive web applications.
        <br>Additionally, I have the ambition to become a full-stack developer,
        capable of handling both the front-end and back-end of applications. With
        determination and perseverance, I want to keep learning and growing in
        the tech world to make greater contributions in the future.`,

        hobbiesTitle: "My Hobbies",
        hobbiesDesc: `
        <li>🎮 Playing strategy & survival games</li>
        <li>🎧 Listening to music</li>
        <li>📺 Watching football</li>
        <li>🎞️ Watching movies</li>
        <li>🛌 Sleeping💤</li>
        <li>⚽ Doing sports</li>
        <li>📖 Learning programming languages, especially web development</li>
        <li>📚 Reading tech and self-development articles</li>
        `,
        
        goalTitle: "My Goal to Learn Web",
        goalDesc: `I started learning web because I'm very interested in how
        a webpage can be designed, built, and run interactively in a browser.
        My main goal is to become a Full Stack Developer, a developer capable of
        building applications from the frontend to the backend. With this skill,
        I want to create complete, useful digital products that provide enjoyable
        experiences for users. I believe mastering web development is the first
        step toward realizing my dream in the tech world.`,
        
        contact: "Contact",
        
    // friends translations
    friendsTitle: "Friends Page",
    friendsDesc: "Here are my classmates:",
    
    // blog translations
    blogTitle: "Blog",
    blogWelcome: "Welcome to my blog, let's learn together!",
    searchPlaceholder: "Search blog...",
    searchButton: "Search",
  },
};

function filterPostsByLanguage(lang) {
  const blogItems = document.querySelectorAll(".blog-item");
  blogItems.forEach((item) => {
    const itemLang = item.getAttribute("data-lang");
    item.style.display = itemLang === lang ? "block" : "none";
  });
}
