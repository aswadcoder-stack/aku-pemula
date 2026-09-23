// ============================================
// Latihan Dasar JavaScript - Untuk Pemula
// Repo: aswadcoder-stack/aku-pemula
// ============================================

// --- Soal 1: Variabel & Tipe Data ---
// Deklarasikan variabel dengan nama, umur, dan kota
// Kemudian tampilkan di konsol dalam format kalimat
let nama = 'Budi';
let umur = 20;
let kota = 'Jakarta';
console.log(`Perkenalkan, nama saya ${nama}, umur saya ${umur} tahun, tinggal di ${kota}.`);

// --- Soal 2: Operasi Aritmatika ---
// Buat kalkulator sederhana yang menerima dua angka
function kalkulator(a, b) {
  return {
    penjumlahan: a + b,
    pengurangan: a - b,
    perkalian: a * b,
    pembagian: b !== 0 ? a / b : 'Tidak bisa bagi nol',
  };
}
console.log('Hasil kalkulator(10, 5):', kalkulator(10, 5));

// --- Soal 3: Cek Genap/Ganjil ---
// Buat fungsi untuk mengecek apakah angka genap atau ganjil
function cekGenapGanjil(angka) {
  if (angka % 2 === 0) {
    return `${angka} adalah bilangan genap`;
  } else {
    return `${angka} adalah bilangan ganjil`;
  }
}
console.log(cekGenapGanjil(4));
console.log(cekGenapGanjil(7));

// --- Soal 4: Loop - Menampilkan 1 sampai 10 ---
for (let i = 1; i <= 10; i++) {
  console.log(`Angka: ${i}`);
}

// --- Soal 5: Array - Cari Nilai Terbesar ---
function cariTerbesar(arr) {
  if (arr.length === 0) return 'Array kosong';
  let terbesar = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > terbesar) {
      terbesar = arr[i];
    }
  }
  return terbesar;
}
console.log('Nilai terbesar:', cariTerbesar([3, 7, 2, 9, 5]));

// --- Soal 6: Fungsi - Faktorial ---
function faktorial(n) {
  if (n < 0) return 'Tidak valid';
  if (n === 0 || n === 1) return 1;
  let hasil = 1;
  for (let i = 2; i <= n; i++) {
    hasil *= i;
  }
  return hasil;
}
console.log('Faktorial 5:', faktorial(5));
console.log('Faktorial 0:', faktorial(0));

// --- Soal 7: Object - Biodata Diri ---
const biodata = {
  nama: 'Budi',
  umur: 20,
  hobi: ['membaca', 'coding', 'olahraga'],
  alamat: {
    jalan: 'Jl. Merdeka No. 1',
    kota: 'Jakarta',
  },
};
console.log('Biodata:', biodata);
console.log(`Hobi pertama: ${biodata.hobi[0]}`);

// --- Soal 8: Palindrome Checker ---
function cekPalindrome(kata) {
  const terbalik = kata.split('').reverse().join('');
  return kata === terbalik;
}
console.log('Apakah "kayak" palindrome?', cekPalindrome('kayak'));
console.log('Apakah "halo" palindrome?', cekPalindrome('halo'));

// --- Soal 9: Filter Array - Hapus Duplikat ---
function hapusDuplikat(arr) {
  return [...new Set(arr)];
}
console.log('Setelah hapus duplikat:', hapusDuplikat([1, 2, 2, 3, 3, 4, 5]));

// --- Soal 10: Promise Dasar ---
function sapaSetelahDelay(nama, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Halo, ${nama}! Selamat belajar JavaScript.`);
    }, delay);
  });
}
// Hapus komentar untuk menjalankan:
// sapaSetelahDelay('Pemula', 1000).then((msg) => console.log(msg));

console.log('\n=== Semua latihan selesai! Selamat belajar! ===');
