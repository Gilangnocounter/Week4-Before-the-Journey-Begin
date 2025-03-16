function kaliTerusRekursif(angka) {
    if(angka < 10) return angka;
    let hasil = str.split('').reduce((acc, curr) => acc*curr);
    return kaliTerusRekursif(hasil);
}
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6