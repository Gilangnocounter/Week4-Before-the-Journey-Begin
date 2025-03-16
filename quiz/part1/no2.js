function changeVocals (str) {
    return str.replace(/[aiueo]/gi, (word) => String.fromCharCode(word.charCodeAt()+1));
  }
  
  function reverseWord (str) {
    return str.split('').reverse().join('');
  }
  
  function setLowerUpperCase (str) {
    return str.split('').map(w => w == w.toLowerCase()? w.toUpperCase() : w.toLowerCase()).join('')
  }
  
  function removeSpaces (str) {
    return str.replace(/\s/, '')
  }
  
  function passwordGenerator (name) {
    if(name.length<5) return 'Minimal karakter yang diinputkan adalah 5 karakter';
    var vocals = changeVocals(name);
    var reverse = reverseWord(vocals);
    var lowerUpper = setLowerUpperCase(reverse);
    var spaces = removeSpaces(lowerUpper);
    return spaces;
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'