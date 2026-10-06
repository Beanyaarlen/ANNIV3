/* Our Secret — no framework, package install, or build step required. */
const $=s=>document.querySelector(s);let step=0,busy=false,toastTimer;const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;const visited=new Set();
function burst(x,y,kind='heart'){if(reduce)return;for(let i=0;i<18;i++){const p=document.createElement('span');p.className='particle';p.textContent=kind==='star'?'✦':'♥';p.style.cssText=`left:${x}px;top:${y}px;color:${['#f1cf6b','#c94f41','#f9e9b7'][i%3]};--x:${(Math.random()-.5)*320}px;--y:${-50-Math.random()*250}px;--r:${Math.random()*360}deg`;document.body.append(p);setTimeout(()=>p.remove(),1200)}}
function toast(s){$('#toast').textContent=s;$('#toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),2800)}
document.querySelectorAll('[data-character]').forEach(b=>b.addEventListener('click',()=>{b.classList.remove('popped');void b.offsetWidth;b.classList.add('popped');let r=b.getBoundingClientRect();burst(r.x+r.width/2,r.y+r.height/2,b.dataset.character==='left'?'star':'heart');visited.add(b.dataset.character);toast(visited.size===2?'Dua dunia sudah terhubung. Saatnya membuka rahasia.':b.dataset.character==='left'?'Satu sisi membawa ceria. Seperti kamu.':'Satu sisi menjaga. Juga seperti kamu.')}));
function transition(n){if(busy)return;busy=true;$('#wipe').classList.add('run');setTimeout(()=>{step=n;render();scrollTo(0,0)},reduce?0:350);setTimeout(()=>{$('#wipe').classList.remove('run');busy=false},reduce?10:820)}
function render(){const home=step===0;$('#hero').classList.toggle('hidden',!home);$('#header').classList.toggle('hidden',!home);$('#story').classList.toggle('active',!home);document.querySelectorAll('.progress i').forEach((e,i)=>e.classList.toggle('on',i<step));if(home)return;
if(step===1){$('#content').innerHTML=`<div class="chapter">01 / TIGA TAHUN, WITH YOU</div><h2>Setiap haru ada cerita.<br>Di semuanya, ada <em>kamu.</em></h2><p>Not all hero datang dengan jubah.<br>Ada yang datang with smile dan membuat hidup terasa lebih hangat plus dengan omelannya (udah jarang).</p><div class="tokens"><button class="token"><b>I</b><small>BEGINING ↗</small><span class="message">Dari dua dunia yang berbeda, kita memilih untuk saling mengenal.</span></button><button class="token"><b>II</b><small>TUMBUH BERSAMA ↗</small><span class="message">Belajar memahami, saling menjaga, dan tetap memilih satu sama lain.</span></button><button class="token"><b>III</b><small>STAY UNTIL NOW ↗</small><span class="message">Tiga tahun kemudian, kamu tetap jadi bagian utama dari Mystory.</span></button></div><p class="notice" id="notice">Its been 3 years.</p><button class="cta" id="next">Next <span>↗</span></button>`;document.querySelectorAll('.token').forEach(t=>t.addEventListener('click',()=>{if(t.classList.contains('open'))return;t.classList.add('open');const r=t.getBoundingClientRect();burst(r.x+r.width/2,r.y+50,'star');if(document.querySelectorAll('.token.open').length===3)$('#notice').textContent='Tiga tahun. Ribuan alasan untuk tetap memilih kamu.'}));$('#next').onclick=()=>transition(2)}
if(step===2){$('#content').innerHTML=`<div class="chapter">02 / PESAN FOR MY HERO</div><h2>You always,<br><em>BE MY HERO.</em></h2><p id="envelopeHint">JUST SHORT LATTER</p><button class="envelope" id="envelope" aria-label="Buka surat anniversary"><span>♥</span></button><article class="letter" id="letter"><div class="chapter" style="color:#887039">CONFIDENTIAL / FOR YOU</div><p>Cayang,</p><p>If my life were a story, you would be the hero I most wanted to meet. Not because you strong all the time or solve all my problems, but because with you, i got power, the courage to face the world.</p><p>You bring a sense of joy—like Usagi’s, in this little world you makes me feel I’m never alone.</p><p>Happy 3rd anniversary. Thank you for being you and for sharing these past three years with me. Amidst countless worlds and endless possibilities, I would still choose you.</p><p>And if you’re tired, let me take care of you, too. Because my hero deserves to be held, heard, and loved.</p><p class="signature">For my hero, with all infinity love i have.<br>— Benaya</p></article><button class="cta" id="next" hidden>ONE MORE <span>↗</span></button>`;$('#envelope').onclick=()=>{$('#envelope').hidden=true;$('#envelope').style.display='none';$('#envelopeHint').hidden=true;$('#letter').classList.add('open');$('#next').hidden=false;burst(innerWidth/2,innerHeight/2);};$('#next').onclick=()=>transition(3)}
if(step===3){$('#content').innerHTML=`<div class="chapter">03 / MISI YANG INGIN KULANJUTKAN</div><div class="final-heart">♥</div><h2>Tiga tahun with U.<br>Dan aku masih mau<br><em>petualangan berikutnya.</em></h2><p>Aku tidak bisa menjanjikan hari yang selalu mudah.<br>Tapi aku ingin terus belajar mencintai, menemani,<br>dan jadi tempatpulang for U.</p><div class="final-actions"><button class="cta" id="together">Lanjutkan cerita kita <span>♥</span></button><button class="secondary" id="replay">Baca dari awal ↺</button></div><p class="footer-note" id="promise" aria-live="polite">OUR LITTLE SECRET · OUR GREATEST ADVENTURE</p>`;$('#together').onclick=e=>{burst(innerWidth/2,innerHeight*.65);$('#promise').textContent='MISI DITERIMA: TERUS SALING MEMILIH. ♥';e.currentTarget.innerHTML='Kita, dan bab selanjutnya ♥';toast('Happy 3rd anniversary, pahlawanku.');};$('#replay').onclick=()=>transition(0)}
$('#story h2').setAttribute('tabindex','-1');$('#story h2').focus({preventScroll:true});}
$('#start').onclick=()=>{ startMusicOnce(); transition(1); };$('#back').onclick=()=>transition(Math.max(0,step-1));

// This asset starts at 03:05 of the original song; loop repeats that section.
const music = document.querySelector('#bgMusic');
const musicToggle = document.querySelector('#musicToggle');
const musicPrompt = document.querySelector('#musicPrompt');
let musicStarted = false;
let userPaused = false;
let playRequest = 0;
music.volume = 0.65;

function updateMusicButton() {
  const playing = !music.paused && !music.ended;
  musicToggle.textContent = playing ? 'Ⅱ Jeda musik' : '♫ Putar musik';
  musicToggle.setAttribute('aria-label', playing ? 'Jeda musik' : 'Putar musik');
  musicToggle.setAttribute('aria-pressed', String(playing));
}

async function playMusic() {
  const request = ++playRequest;
  try {
    // Call synchronously inside the input handler to preserve user activation.
    await music.play();
    if (request !== playRequest) return;
    musicStarted = true;
    musicPrompt.hidden = true;
  } catch (error) {
    if (request !== playRequest || userPaused) return;
    if (error.name === 'NotAllowedError') {
      musicPrompt.hidden = false;
    } else if (error.name !== 'AbortError') {
      toast('Musik belum bisa dimuat. Tekan tombol musik untuk mencoba lagi.');
    }
  } finally {
    updateMusicButton();
  }
}

function startMusicOnce() {
  if (!musicStarted && !userPaused) void playMusic();
}

function unlockMusic(event) {
  // The music button has its own handler, avoiding an immediate play/pause.
  if (event.target.closest?.('#musicToggle')) return;
  if (event.type === 'keydown' && (event.repeat || ['Shift', 'Control', 'Alt', 'Meta', 'Escape'].includes(event.key))) return;
  startMusicOnce();
}

document.addEventListener('click', unlockMusic);
document.addEventListener('keydown', unlockMusic);
musicToggle.addEventListener('click', () => {
  if (!music.paused) {
    userPaused = true;
    ++playRequest;
    music.pause();
    musicPrompt.hidden = true;
  } else {
    userPaused = false;
    void playMusic();
  }
});
music.addEventListener('playing', () => {
  musicStarted = true;
  musicPrompt.hidden = true;
  updateMusicButton();
});
music.addEventListener('pause', updateMusicButton);
music.addEventListener('error', () => {
  updateMusicButton();
  toast('Lagu tidak bisa dimuat. Periksa koneksi dan file musik.');
});
// Try audible playback immediately; browsers may require a first interaction.
void playMusic();
