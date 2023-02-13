const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let word = '';
  let letter = '';
  let arrCodeWords = [];
  let arrCodeLetters = [];
  let arrNormal = [];
  let resultStr = '';
  
  for (let i = 0; i < expr.length - 1; i += 10) {
      word = expr.slice(i, i + 10);
      arrCodeWords.push(word);
  } 

  function binaryToMorse(binaryString) {
    let strMorse = '';
    for (let i = 0; i < binaryString.length - 1; i +=2) {
      letter = binaryString.slice(i, i + 2);
      if(letter === '00') {
        strMorse += '';
      } else if (letter === '10') {
        strMorse += '.'; 
      } else if (letter === '11') {
        strMorse += '-';
      }
    }
    return strMorse;
  }

  arrCodeWords.forEach(letter => {
    arrCodeLetters.push(binaryToMorse(letter));
  }); 
  
  arrCodeLetters.forEach((sign) => {
    arrNormal.push(MORSE_TABLE[sign]);
  })

  arrNormal.map(i => {
    i === undefined ? i = ' ': i;
    resultStr += i;
  });

  return resultStr;
}

/* Короткое решение (привет GPT)
function decode(expr) {
  const arrCodeWords = [];
  for (let i = 0; i < expr.length - 1; i += 10) {
    arrCodeWords.push(expr.slice(i, i + 10));
  } 

  const binaryToMorse = binaryString => binaryString.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-');
  const arrCodeLetters = arrCodeWords.map(binaryToMorse);
  const arrNormal = arrCodeLetters.map(sign => MORSE_TABLE[sign] || ' ');
  return arrNormal.join('');
} */

module.exports = {
    decode
}