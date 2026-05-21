//* ========= Kustom JavaScript (dipisah dari index.html) ========= */

// =========================================================================
// 1. SILAKAN PASANG URL WEB APP GOOGLE APPS SCRIPT (BERAKHIRAN /exec) DI SINI!
// =========================================================================
const GOOGLE_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/xxxxxxxxxxxxx/exec";

// =========================================================================
// 2. SILAKAN PASANG TAUTAN DRAFT PROPOSAL KEMITRAAN GOOGLE DRIVE DI SINI!
// =========================================================================
const GDRIVE_PROPOSAL_LINK =
  "https://docs.google.com/document/d/1Q2AH8DfTWYpktkzP9ndNLttRlP2UP77e/edit?usp=sharing&ouid=112932279294957396117&rtpof=true&sd=true";

// =========================================================================
// 3. SILAKAN UBAH DETIL DATA KONTAK & SOSMED PERUSAHAAN DI SINI!
// =========================================================================
const COMPANY_EMAIL = "lukywahyu74@gmail.com";
const COMPANY_WHATSAPP = "6281358124491"; // WhatsApp user (format lokal, nanti distandarkan saat generate link)

// Link Akun Media Sosial Anda
const INSTAGRAM_URL =
  "https://www.instagram.com/lukky.74?utm_source=qr&igsh=NnFjajAzMTRsdzhv";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/luky-wahyu-saputra-9651b5361/";

// Link Foto (Foto Utama & Foto Founder)
const COMPANY_PHOTO_URL = "./Foto/Logo Sadaharu.png"; // Foto Kantor/Tim (lokal)
const FOUNDER_PHOTO_URL = "./Foto/Founder.JPG"; // Foto Founder (lokal)

// Inisialisasi utama
document.addEventListener("DOMContentLoaded", function () {
  // Hilangkan preloader dengan transisi mulus
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add("opacity-0");
      setTimeout(() => {
        preloader.classList.add("hidden");
      }, 700);
    }, 800);
  }

  // Inisialisasi AOS (Animate on Scroll)
  if (typeof AOS !== "undefined") {
    AOS.init({
      once: true,
      offset: 100,
      duration: 800,
    });
  }

  // Inisialisasi Lenis Smooth Scroll secara aman dengan sistem proteksi
  if (typeof Lenis !== "undefined") {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Hubungkan link scroll halus untuk navigasi anchor local (Lenis Friendly)
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (!href || href === "#") return;
        const targetEl = document.querySelector(href);
        if (!targetEl) return;

        e.preventDefault();
        lenis.scrollTo(targetEl, { offset: -80 });
      });
    });
  } else {
    // Fallback alternatif
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (!targetId || targetId === "#") return;
        const targetEl = document.querySelector(targetId);
        if (!targetEl) return;

        e.preventDefault();
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = targetEl.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      });
    });
  }

  // Sinkronisasi data ke elemen HTML & Link WhatsApp Layanan
  const gDriveBtn = document.getElementById("gdrive-proposal-link");
  if (gDriveBtn && GDRIVE_PROPOSAL_LINK !== "") {
    gDriveBtn.href = GDRIVE_PROPOSAL_LINK;
  }

  const companyPhoto = document.getElementById("company-main-photo");
  if (companyPhoto && COMPANY_PHOTO_URL !== "")
    companyPhoto.src = COMPANY_PHOTO_URL;

  const founderPhoto = document.getElementById("company-founder-photo");
  if (founderPhoto && FOUNDER_PHOTO_URL !== "")
    founderPhoto.src = FOUNDER_PHOTO_URL;

  const companyMailEl = document.getElementById("company-email");
  if (companyMailEl) {
    companyMailEl.href = `mailto:${COMPANY_EMAIL}`;
    companyMailEl.innerText = COMPANY_EMAIL;
  }

  const companyWAEl = document.getElementById("company-whatsapp");
  if (companyWAEl) {
    companyWAEl.href = `https://wa.me/qr/4LTL6PT44ZMZF1`;
    companyWAEl.innerText = `+${COMPANY_WHATSAPP.slice(0, 2)} ${COMPANY_WHATSAPP.slice(
      2,
      5,
    )}-${COMPANY_WHATSAPP.slice(5, 9)}-${COMPANY_WHATSAPP.slice(9)}`;
  }

  // Setting URL Social Media
  const instagramEl = document.getElementById("link-instagram");
  if (instagramEl) instagramEl.href = INSTAGRAM_URL;

  const linkedinEl = document.getElementById(
    "https://www.linkedin.com/in/luky-wahyu-saputra-9651b5361/link-linkedin",
  );
  if (linkedinEl) linkedinEl.href = LINKEDIN_URL;

  // Setting Link Tombol WhatsApp Layanan
  const waWebDev = document.getElementById("wa-btn-web-dev");
  if (waWebDev) {
    waWebDev.href = `https://wa.me/qr/4LTL6PT44ZMZF1`;
  }

  const waAppDev = document.getElementById("wa-btn-app-dev");
  if (waAppDev) {
    waAppDev.href = `https://wa.me/qr/4LTL6PT44ZMZF1`;
  }

  const waUiux = document.getElementById("wa-btn-uiux-design");
  if (waUiux) {
    waUiux.href = `https://wa.me/qr/4LTL6PT44ZMZF1`;
  }

  // Setting Link Tombol WhatsApp Kemitraan Pribadi
  const waPartnerDev = document.getElementById("wa-partner-developer");
  if (waPartnerDev) {
    waPartnerDev.href = `https://wa.me/qr/4LTL6PT44ZMZF1`;
  }

  const waPartnerReseller = document.getElementById("wa-partner-reseller");
  if (waPartnerReseller) {
    waPartnerReseller.href = `https://wa.me/qr/4LTL6PT44ZMZF1`;
  }

  // Typing Text Effect Logic
  const phrases = ["Sempurna.", "Interaktif.", "Cepat.", "Premium."];
  let i = 0;
  let timer;

  function typingEffect() {
    let word = phrases[i].split("");

    const loopTyping = function () {
      if (word.length > 0) {
        const el = document.getElementById("typing-text");
        if (el) el.innerHTML += word.shift();
        timer = setTimeout(loopTyping, 120);
      } else {
        setTimeout(deletingEffect, 2000);
      }
    };

    loopTyping();
  }

  function deletingEffect() {
    let word = phrases[i].split("");

    const loopDeleting = function () {
      if (word.length > 0) {
        word.pop();
        const el = document.getElementById("typing-text");
        if (el) el.innerHTML = word.join("");
        timer = setTimeout(loopDeleting, 60);
      } else {
        if (phrases.length > i + 1) {
          i++;
        } else {
          i = 0;
        }
        setTimeout(typingEffect, 500);
      }
    };

    loopDeleting();
  }

  typingEffect();
});

// Event Listener Mousemove untuk Cursor Glow Effect
const cursorGlow = document.getElementById("cursor-glow");
if (cursorGlow) {
  window.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";
  });
}

// Scroll progress bar indicator
window.addEventListener("scroll", () => {
  const progressBar = document.getElementById("progress-bar");
  if (!progressBar) return;

  const winScroll =
    document.documentElement.scrollTop || document.body.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = height ? (winScroll / height) * 100 : 0;
  progressBar.style.width = scrolled + "%";
});

// Kontrol Menu Hamburger Navigasi Ponsel
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

// Event Listener Formulir Kontak & Kerja Sama
const formKontak = document.getElementById("form-kontak");
if (formKontak) {
  formKontak.addEventListener("submit", function (e) {
    e.preventDefault();
    handleFormSubmit(this, "kontak", "kontak-notif");
  });
}

const formKerjasama = document.getElementById("form-kerjasama");
if (formKerjasama) {
  formKerjasama.addEventListener("submit", function (e) {
    e.preventDefault();
    handleFormSubmit(this, "kerjasama", "kerjasama-notif");
  });
}

// Fungsi Universal AJAX untuk pengiriman data formulir
function handleFormSubmit(formElement, type, notifBoxId) {
  // === 1) Kerjasama -> langsung mailto (sudah ada di versi lama) ===
  if (type === "kerjasama") {
    const formData = new FormData(formElement);

    const payload = { formType: type };
    formData.forEach((value, key) => {
      payload[key] = value;
    });

    const emailSubject = encodeURIComponent(
      `Penawaran Kerja Sama - ${payload.perusahaan || "(Nama Perusahaan)"}`,
    );

    const emailBody = encodeURIComponent(
      [
        `FormType: ${payload.formType}`,
        `Nama Perusahaan/Instansi: ${payload.perusahaan || "-"}`,
        `Nama Representatif: ${payload.namaKontak || "-"}`,
        `Email Bisnis: ${payload.email || "-"}`,
        `Telepon/WhatsApp: ${payload.telepon || "-"}`,
        `Pesan: ${payload.pesan || "-"}`,
      ].join("\n"),
    );

    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${emailSubject}&body=${emailBody}`;

    const notifBox = document.getElementById(notifBoxId);
    const submitBtn = formElement.querySelector('button[type="submit"]');
    if (notifBox) notifBox.classList.remove("hidden");
    if (submitBtn) submitBtn.disabled = false;

    return;
  }

  // === 2) Kontak -> langsung mailto (yang diminta user) ===
  if (type === "kontak") {
    const formData = new FormData(formElement);

    const payload = { formType: type };
    formData.forEach((value, key) => {
      payload[key] = value;
    });

    const emailSubject = encodeURIComponent(
      payload.subjek
        ? `Pesan dari ${payload.nama || "Pengguna"} - ${payload.subjek}`
        : `Pesan dari ${payload.nama || "Pengguna"}`,
    );

    const emailBody = encodeURIComponent(
      [
        `FormType: ${payload.formType}`,
        `Nama: ${payload.nama || "-"}`,
        `Email Pengirim: ${payload.email || "-"}`,
        `Subjek: ${payload.subjek || "-"}`,
        `Pesan: ${payload.pesan || "-"}`,
      ].join("\n"),
    );

    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${emailSubject}&body=${emailBody}`;

    const notifBox = document.getElementById(notifBoxId);
    const submitBtn = formElement.querySelector('button[type="submit"]');
    if (notifBox) notifBox.classList.remove("hidden");
    if (submitBtn) submitBtn.disabled = false;

    return;
  }

  // === 3) fallback untuk type selain kerjasama/kontak (kirim via Apps Script) ===
  const submitBtn = formElement.querySelector('button[type="submit"]');
  const submitText = submitBtn?.querySelector(".submit-text");
  const spinner = submitBtn?.querySelector(".spinner");
  const notifBox = document.getElementById(notifBoxId);

  if (!submitBtn || !notifBox) return;

  submitBtn.disabled = true;
  if (submitText) submitText.classList.add("opacity-50");
  if (spinner) spinner.classList.remove("hidden");

  const formData = new FormData(formElement);
  const payload = { formType: type };
  formData.forEach((value, key) => {
    payload[key] = value;
  });

  // Simulasi sukses lokal jika developer belum mengonfigurasi URL Apps Script
  if (GOOGLE_APPS_SCRIPT_URL.includes("xxxxxxxxxxxxx")) {
    setTimeout(() => {
      notifBox.classList.remove("hidden");
      submitBtn.disabled = false;
      if (submitText) submitText.classList.remove("opacity-50");
      if (spinner) spinner.classList.add("hidden");
    }, 1200);
    return;
  }

  fetch(GOOGLE_APPS_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors", // bypass CORS bawaan Apps Script
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then(() => {
      notifBox.classList.remove("hidden");
    })
    .catch((error) => {
      console.error("Kesalahan pengiriman formulir:", error);
      notifBox.classList.remove("hidden");
    })
    .finally(() => {
      submitBtn.disabled = false;
      if (submitText) submitText.classList.remove("opacity-50");
      if (spinner) spinner.classList.add("hidden");
    });
}

// Fungsi Reset Formulir (dipakai dari onclick di HTML)
function resetKontakForm() {
  const form = document.getElementById("form-kontak");
  const notif = document.getElementById("kontak-notif");
  if (form) form.reset();
  if (notif) notif.classList.add("hidden");
}

function resetKerjasamaForm() {
  const form = document.getElementById("form-kerjasama");
  const notif = document.getElementById("kerjasama-notif");
  if (form) form.reset();
  if (notif) notif.classList.add("hidden");
}

// Efek transisi warna & bayangan floating navbar saat menggulir layar (scroll)
window.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav");
  if (!navbar) return;

  if (window.scrollY > 40) {
    navbar.classList.add("shadow-[0_15px_40px_rgba(59,130,246,0.15)]", "mx-3");
    navbar.classList.remove("px-6");
    navbar.classList.add("px-8");
  } else {
    navbar.classList.remove(
      "shadow-[0_15px_40px_rgba(59,130,246,0.15)]",
      "mx-3",
    );
    navbar.classList.add("px-6");
    navbar.classList.remove("px-8");
  }
});
