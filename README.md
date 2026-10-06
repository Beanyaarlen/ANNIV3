# Our Secret — Anniversary 3 Tahun

Website statis Usagi × Kamen Rider pertama. Isi dan interaksi mengikuti versi sebelumnya; karakter diganti dengan siluet hitam dari gambar yang diberikan.

## Isi folder

- `index.html`: halaman pembuka dan wadah cerita.
- `style.css`: warna, tata letak, tampilan HP, dan animasi.
- `script.js`: interaksi karakter, kartu tahun, surat, dan halaman penutup.
- `assets/usagi.png`: siluet Usagi transparan.
- `assets/kamen-rider.png`: siluet Kamen Rider transparan.
- `README.md`: panduan ini; tidak diperlukan agar website berjalan.

## Cara mencoba

Ekstrak ZIP, lalu buka `index.html` di browser. Pertahankan susunan folder. Font Google membutuhkan internet; jika tidak tersedia, website memakai font cadangan. Tidak perlu npm atau build.

## Pasang di GitHub Pages

1. Buat atau buka repository tujuan di GitHub.
2. Unggah **isi ZIP yang sudah diekstrak**, bukan file ZIP-nya. `index.html`, `style.css`, `script.js`, dan folder `assets` harus berada di tingkat utama repository.
3. Buka **Settings → Pages**.
4. Di **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch tempat kamu mengunggah file (biasanya `main`), folder **/(root)**, lalu **Save**.
6. Setelah deployment selesai, buka alamat yang ditampilkan GitHub Pages.

Panduan resmi: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

Tema “rahasia” adalah gaya visual. Paket statis ini tidak memiliki login atau kata sandi; suratnya dapat dibaca oleh orang yang memiliki akses ke halaman atau source.

## Mengubah tulisan

- Judul pembuka dan inisial B / E: `index.html`.
- Surat, tiga kartu tahun, dan penutup: `script.js`.
- Warna utama: variabel `--gold` dan `--green` di awal `style.css`.
- Gambar karakter: ganti PNG di `assets` dengan nama yang sama. Gunakan PNG transparan. CSS menjaga tampilannya hitam.

Animasi mengikuti pengaturan reduced motion perangkat. Interaksi menggunakan tombol yang bisa dipakai dengan keyboard.


## Musik latar

Sumber musik: file HERO.mp3 yang dikirim pengguna.
`assets/hero-from-3m05.mp3` hanya berisi bagian **03:05 sampai akhir lagu** (sekitar 1 menit 25 detik). Atribut `loop` pada elemen audio mengulang bagian ini terus-menerus, sehingga tidak pernah kembali ke intro lagu asli.

Musik mencoba langsung menyala saat halaman dibuka. Jika browser memblokir autoplay bersuara, sentuh bagian mana pun di halaman atau tekan tombol musik. Petunjuk akan muncul jika autoplay diblokir. Tombol musik di kanan bawah dapat memutar atau menjeda. Musik berlanjut saat berpindah bab. Jika dijeda, musik tidak otomatis menyala kembali ketika cerita dibuka ulang. File asli yang diunggah tidak diubah.

Pastikan file audio ikut diunggah dalam folder `assets` ke GitHub.
