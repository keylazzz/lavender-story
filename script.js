function scrollToSection(e,id){ if(e) e.preventDefault(); document.getElementById(id).scrollIntoView({behavior:'smooth'}); }
document.getElementById('backBtn').addEventListener('click',()=>{ document.getElementById('home').scrollIntoView({behavior:'smooth'}) });
// slider logic: show 5 slides (each slide contains 4 photos). next/prev moves by 1 slide
const slider = document.getElementById('slider');
const slides = Array.from(document.querySelectorAll('.slide'));
let current = 0;
document.getElementById('nextBtn').addEventListener('click',()=>{ current = Math.min(current+1, slides.length-1); slider.scrollTo({ left: slides[current].offsetLeft, behavior:'smooth'}); });
document.getElementById('prevBtn').addEventListener('click',()=>{ current = Math.max(current-1, 0); slider.scrollTo({ left: slides[current].offsetLeft, behavior:'smooth'}); });
// audio control
const audio = document.getElementById('bgAudio'); const muteBtn = document.getElementById('muteBtn'); let muted=false;
muteBtn.addEventListener('click',()=>{ if(muted){ audio.muted=false; muteBtn.textContent='🔊'; muted=false } else { audio.muted=true; muteBtn.textContent='🔈'; muted=true } });
// autoplay note: browser may block autoplay with sound; on many browsers user gesture required.
// image fallback
document.querySelectorAll('img').forEach(img=>{ img.addEventListener('error',()=>{ img.src='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800"><rect width="100%" height="100%" fill="%23F5F0FA"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Poppins" font-size="36" fill="%237C4CD6">Image placeholder</text></svg>' })

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  nextBtn.addEventListener("click", () => {
    slider.scrollBy({ left: slider.offsetWidth, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -slider.offsetWidth, behavior: "smooth" });
  });
});
nextBtn.addEventListener("click", () => {
  slider.scrollBy({ left: slider.offsetWidth * 0.95, behavior: "smooth" });
});
prevBtn.addEventListener("click", () => {
  slider.scrollBy({ left: -slider.offsetWidth * 0.95, behavior: "smooth" });
});



});