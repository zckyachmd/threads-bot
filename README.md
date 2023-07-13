# BOT Auto Post & Reply on threads.net

<center>

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![GitHub issues](https://img.shields.io/github/issues/zckyachmd/threads-bot.svg)](https://github.com/zckyachmd/threads-bot/issues) [![Repo Size](https://img.shields.io/github/repo-size/zckyachmd/threads-bot.svg)](https://github.com/zckyachmd/threads-bot) [![GitHub forks](https://img.shields.io/github/forks/zckyachmd/threads-bot.svg&label=Fork&maxAge=2592000)](https://github.com/zckyachmd/threads-bot/network/members)

</center>


> Project ini adalah sebuah bot yang otomatis melakukan posting dan balasan pada platform [threads.net](https://threads.net) menggunakan teknologi Node.js dan API dari [threads-api](https://github.com/junhoyeo/threads-api) _unofficial_.

Bot ini memungkinkan Anda untuk melakukan posting dan balasan secara otomatis dengan teks acak dari file yang ditentukan. Anda dapat mengatur interval waktu antara setiap postingan atau balasan.

## Prasyarat

Sebelum menjalankan bot ini, pastikan komputer Anda telah memenuhi prasyarat berikut:

- [Node.js](https://nodejs.org) (v12 atau versi lebih baru)
- Koneksi internet yang stabil

## Instalasi

1. **Clone repositori ini**

   ```bash
   git clone https://github.com/zckyachmd/threads-bot.git
   ```
2. **Masuk ke direktori repositori**

   ```bash
   cd threads-bot
   ```
3. **Install dependensi**

   ```bash
    npm install
    ```
4. **Buat file `.env`**

   ```bash
   cp .env.example .env
   ```
    Kemudian, buka file .env dan sesuaikan nilai-nilai variabel lingkungan sesuai dengan kebutuhan Anda. Pastikan untuk mengisi USERNAME dan PASSWORD dengan akun threads.net Anda (saat ini masih terhubung dengan Instagram).

5. **Jalankan bot**

   ```bash
    npm start (mode: post / reply)
    ```

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, Anda dapat membuka _pull request_ dengan perubahan yang diusulkan atau melaporkan masalah dan permintaan fitur baru dengan membuat [issue baru](https://github.com/zckyachmd/threads-bot/issues).

## Hak Cipta dan Lisensi

Hak cipta (c) 2023 oleh [Zacky Achmad](https://zacky.id). Proyek ini dilisensikan di bawah [MIT License](LICENSE.md).