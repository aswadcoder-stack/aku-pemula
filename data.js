// data.js
const nama = 'Budi';
const umur = 20;

// export agar bisa dipakai di file lain
export { nama, umur };

2. Buat file main.js (file yang mengimpor):
javascript
// main.js
import { nama, umur } from './data.js';

console.log(Halo, nama saya ${nama} dan umur saya ${umur} tahun.);
// Output: Halo, nama saya Budi dan umur saya 20 tahun.
