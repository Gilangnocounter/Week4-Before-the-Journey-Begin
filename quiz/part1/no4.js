function totalDigitRekursif(angka) {
    let num = String(angka);
    if(num === num[0])return Number(num[0]);
    return Number(num[0]) + totalDigitRekursif(Number(num.slice(1)))
}
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5