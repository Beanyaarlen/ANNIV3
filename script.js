/* Our Secret — no framework, package install, or build step required. */
const $=s=>document.querySelector(s);let step=0,busy=false,toastTimer;const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;const visited=new Set();
function burst(x,y,kind='heart'){if(reduce)return;for(let i=0;i<18;i++){const p=document.createElement('span');p.className='particle';p.textContent=kind==='star'?'✦':'♥';p.style.cssText=`left:${x}px;top:${y}px;color:${['#f1cf6b','#c94f41','#f9e9b7'][i%3]};--x:${(Math.random()-.5)*320}px;--y:${-50-Math.random()*250}px;--r:${Math.random()*360}deg`;document.body.append(p);setTimeout(()=>p.remove(),1200)}}
function toast(s){$('#toast').textContent=s;$('#toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),2800)}
document.querySelectorAll('[data-character]').forEach(b=>b.addEventListener('click',()=>{b.classList.remove('popped');void b.offsetWidth;b.classList.add('popped');let r=b.getBoundingClientRect();burst(r.x+r.width/2,r.y+r.height/2,b.dataset.character==='left'?'star':'heart');visited.add(b.dataset.character);toast(visited.size===2?'Dua dunia sudah terhubung. Saatnya membuka rahasia.':b.dataset.character==='left'?'Satu sisi membawa ceria. Seperti kamu.':'Satu sisi menjaga. Juga seperti kamu.')}));
function transition(n){if(busy)return;busy=true;$('#wipe').classList.add('run');setTimeout(()=>{step=n;render();scrollTo(0,0)},reduce?0:350);setTimeout(()=>{$('#wipe').classList.remove('run');busy=false},reduce?10:820)}
function render(){const home=step===0;$('#hero').classList.toggle('hidden',!home);$('#header').classList.toggle('hidden',!home);$('#story').classList.toggle('active',!home);document.querySelectorAll('.progress i').forEach((e,i)=>e.classList.toggle('on',i<step));if(home)return;
if(step===1){$('#content').innerHTML=`<div class="chapter">01 / TIGA TAHUN, SATU KITA</div><h2>Setiap tahun punya cerita.<br>Di semuanya, ada <em>kamu.</em></h2><p>Tidak semua pahlawan datang dengan jubah.<br>Ada yang datang dengan senyum, lalu membuat hidup terasa lebih hangat.</p><div class="tokens"><button class="token"><b>I</b><small>AWAL CERITA ↗</small><span class="message">Dari dua dunia yang berbeda, kita memilih untuk saling mengenal.</span></button><button class="token"><b>II</b><small>TUMBUH BERSAMA ↗</small><span class="message">Belajar memahami, saling menjaga, dan tetap memilih satu sama lain.</span></button><button class="token"><b>III</b><small>MASIH KAMU ↗</small><span class="message">Tiga tahun kemudian, kamu tetap jadi bagian paling indah dari ceritaku.</span></button></div><p class="notice" id="notice">Sentuh ketiga tahun untuk membuka potongan cerita.</p><button class="cta" id="next">Masih ada satu rahasia <span>↗</span></button>`;document.querySelectorAll('.token').forEach(t=>t.addEventListener('click',()=>{if(t.classList.contains('open'))return;t.classList.add('open');const r=t.getBoundingClientRect();burst(r.x+r.width/2,r.y+50,'star');if(document.querySelectorAll('.token.open').length===3)$('#notice').textContent='Tiga tahun. Ribuan alasan untuk tetap memilih kamu.'}));$('#next').onclick=()=>transition(2)}
if(step===2){$('#content').innerHTML=`<div class="chapter">02 / PESAN UNTUK PAHLAWANKU</div><h2>Identitas pahlawanku?<br><em>Selalu kamu.</em></h2><p id="envelopeHint">Ada pesan yang kusimpan di sini. Buka pelan-pelan, ya.</p><button class="envelope" id="envelope" aria-label="Buka surat anniversary"><span>♥</span></button><article class="letter" id="letter"><div class="chapter" style="color:#887039">CONFIDENTIAL / UNTUK KAMU</div><p>Sayang,</p><p>Kalau hidupku adalah sebuah cerita, kamu adalah pahlawan yang paling ingin kutemui. Bukan karena kamu harus selalu kuat atau menyelesaikan semua masalahku, tapi karena bersamamu, aku merasa punya keberanian untuk menghadapi dunia.</p><p>Kamu membawa keceriaan seperti dunia kecil Usagi, sekaligus kehangatan seorang pahlawan yang membuatku merasa tidak sendirian.</p><p>Selamat anniversary kita yang ke-3. Terima kasih sudah menjadi kamu, dan sudah berbagi tiga tahun ini denganku. Di antara banyak dunia dan segala kemungkinan, aku tetap ingin memilih kamu.</p><p>Dan saat kamu lelah, biarkan aku ikut menjagamu. Karena pahlawanku juga pantas dipeluk, didengar, dan dicintai.</p><p class="signature">Untuk pahlawanku, dengan seluruh sayangku.<br>— Benaya</p></article><button class="cta" id="next" hidden>Satu janji lagi <span>↗</span></button>`;$('#envelope').onclick=()=>{$('#envelope').hidden=true;$('#envelope').style.display='none';$('#envelopeHint').hidden=true;$('#letter').classList.add('open');$('#next').hidden=false;burst(innerWidth/2,innerHeight/2);};$('#next').onclick=()=>transition(3)}
if(step===3){$('#content').innerHTML=`<div class="chapter">03 / MISI YANG INGIN KULANJUTKAN</div><div class="final-heart">♥</div><h2>Tiga tahun bersamamu.<br>Dan aku masih ingin<br><em>petualangan berikutnya.</em></h2><p>Aku tidak bisa menjanjikan hari yang selalu mudah.<br>Tapi aku ingin terus belajar mencintaimu, menemanimu,<br>dan menjadi tempatmu pulang.</p><div class="final-actions"><button class="cta" id="together">Lanjutkan cerita kita <span>♥</span></button><button class="secondary" id="replay">Baca dari awal ↺</button></div><p class="footer-note" id="promise" aria-live="polite">OUR LITTLE SECRET · OUR GREATEST ADVENTURE</p>`;$('#together').onclick=e=>{burst(innerWidth/2,innerHeight*.65);$('#promise').textContent='MISI DITERIMA: TERUS SALING MEMILIH. ♥';e.currentTarget.innerHTML='Kita, dan bab selanjutnya ♥';toast('Happy 3rd anniversary, pahlawanku.');};$('#replay').onclick=()=>transition(0)}
$('#story h2').setAttribute('tabindex','-1');$('#story h2').focus({preventScroll:true});}
$('#start').onclick=()=>{ startMusicOnce(); transition(1); };$('#back').onclick=()=>transition(Math.max(0,step-1));

// The audio asset contains only 03:05 through the end of the original song.
// Native looping therefore always returns to that exact starting section.
const music = document.querySelector('#bgMusic');
const musicToggle = document.querySelector('#musicToggle');
let musicStarted = false;
let musicPending = false;
music.volume = 0.65;

function updateMusicButton() {
  const playing = !music.paused && !music.ended;
  musicToggle.textContent = playing ? 'Ⅱ Jeda musik' : '♫ Putar musik';
  musicToggle.setAttribute('aria-label', playing ? 'Jeda musik' : 'Putar musik');
  musicToggle.setAttribute('aria-pressed', String(playing));
}

async function playMusic() {
  if (musicPending) return;
  musicPending = true;
  try {
    await music.play();
    musicStarted = true;
  } catch (error) {
    toast('Musik belum bisa diputar. Coba tekan tombol musik lagi.');
  } finally {
    musicPending = false;
    updateMusicButton();
  }
}

function startMusicOnce() {
  // Respect a deliberate pause when the story is opened again.
  if (!musicStarted) void playMusic();
}

musicToggle.addEventListener('click', () => {
  if (musicPending || !music.paused) {
    music.pause();
  } else {
    void playMusic();
  }
});
music.addEventListener('play', updateMusicButton);
music.addEventListener('pause', updateMusicButton);
music.addEventListener('error', () => {
  updateMusicButton();
  toast('Lagu tidak bisa dimuat. Periksa koneksi lalu coba kembali.');
});
