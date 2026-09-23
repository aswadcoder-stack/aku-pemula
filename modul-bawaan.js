// Contoh penggunaan modul bawaan Node.js
// File: modul-bawaan.js

// 1. Modul fs (File System) — membaca dan menulis file
const fs = require('fs');

// Menulis file baru
fs.writeFileSync('contoh.txt', 'Halo ini file contoh!\n');
console.log('✅ [fs] File contoh.txt berhasil dibuat');

// Membaca file
const isiFile = fs.readFileSync('contoh.txt', 'utf-8');
console.log('📄 [fs] Isi file:', isiFile.trim());

// Menambahkan isi file
fs.appendFileSync('contoh.txt', 'Baris kedua dari modul fs\n');
console.log('✅ [fs] File berhasil ditambahkan');

// Membaca folder
const isiFolder = fs.readdirSync('.');
console.log('📁 [fs] Isi folder:', isiFolder);

// 2. Modul path — mengolah jalur file
const path = require('path');

const filePath = '/home/user/dokumen/laporan.txt';
console.log('\n🔀 [path] Nama file:', path.basename(filePath));
console.log('🔀 [path] Folder:', path.dirname(filePath));
console.log('🔀 [path] Extension:', path.extname(filePath));
console.log('🔀 [path] Join:', path.join('folder', 'subfolder', 'file.js'));

// 3. Modul os — informasi sistem operasi
const os = require('os');

console.log('\n💻 [os] Sistem Operasi:', os.platform());
console.log('💻 [os] Arsitektur:', os.arch());
console.log('💻 [os] Total RAM:', os.totalmem() / (1024 ** 3), 'GB');
console.log('💻 [os] CPU:', os.cpus()[0].model);
console.log('💻 [os] Hostname:', os.hostname());

// 4. Modul http — membuat server sederhana
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Halo dari server Node.js!\n');
});

// Jangan jalankan server otomatis, cukup definisikan
console.log('\n🌐 [http] Server siap dijalankan dengan: server.listen(3000)');
console.log('🌐 [http] Untuk menjalankan: tambahkan server.listen(3000)');

// 5. Modul url — mengolah URL
const url = require('url');

const urlContoh = 'https://contoh.com:8080/latihan?npmulang=true&level=1';
const parsed = new URL(urlContoh);
console.log('\n🔗 [url] Protocol:', parsed.protocol);
console.log('🔗 [url] Hostname:', parsed.hostname);
console.log('🔗 [url] Port:', parsed.port);
console.log('🔗 [url] Pathname:', parsed.pathname);
console.log('🔗 [url] Search Params:', Object.fromEntries(parsed.searchParams));

// 6. Modul crypto — enkripsi/hash
const crypto = require('crypto');

const hash = crypto.createHash('sha256');
hash.update('password123');
console.log('\n🔐 [crypto] SHA-256 hash:', hash.digest('hex'));

const uuid = crypto.randomUUID();
console.log('🔐 [crypto] UUID:', uuid);

// 7. Modul events — event handling
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on('selamat', (nama) => {
  console.log(`🎉 [events] Selamat datang, ${nama}!`);
});

myEmitter.emit('selamat', 'Pemula');

console.log('\n✨ Semua contoh selesai! Jalankan dengan: node modul-bawaan.js');
