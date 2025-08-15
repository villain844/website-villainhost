const DANA_NUMBER = "085134380708";
const ADMIN_WA    = "6285134380708";
const SHOP_NAME   = "RYNZZ SHOP";

function updateClock(){
  const now = new Date();
  const opts = { hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:false };
  document.getElementById('clock').textContent =
    new Intl.DateTimeFormat('id-ID', opts).format(now);
}
setInterval(updateClock, 1000); updateClock();

// Pop-up
const popup = document.getElementById('popup');
document.getElementById('detailBtn').addEventListener('click', ()=>{
  document.getElementById('popupNumber').textContent = DANA_NUMBER;
  popup.style.display = 'flex';
});
document.getElementById('closePopup').addEventListener('click', ()=>{
  popup.style.display = 'none';
});
popup.addEventListener('click', e=>{
  if(e.target === popup) popup.style.display = 'none';
});

// Tombol Salin di pop-up
document.getElementById('copyBtn').addEventListener('click', ()=>{
  navigator.clipboard.writeText(DANA_NUMBER).then(()=>{
    alert("Nomor DANA berhasil disalin!");
  }).catch(()=>{
    alert("Gagal menyalin nomor.");
  });
});

// Chat Admin
document.getElementById('waBtn').addEventListener('click', ()=>{
  const text = encodeURIComponent(`Halo ${SHOP_NAME}, saya sudah transfer via DANA ke nomor ${DANA_NUMBER}. Mohon dicek ya.`);
  window.location.href = `https://wa.me/${ADMIN_WA}?text=${text}`;
});

// Marquee panjang
(function ensureMarquee(){
  const mq = document.getElementById('mq');
  if(mq.textContent.length < 60){
    mq.textContent = `${mq.textContent} • ${mq.textContent}`;
  }
})();
