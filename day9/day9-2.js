morse = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
};

function solution(letter) {
  const morseArray = letter.split(' ');
  const moresMap = Object.keys(morse);
  const result = [];
  for (let i = 0; i < morseArray.length; i++) {
    for (let j = 0; j < moresMap.length; j++) {
      if (morseArray[i] === moresMap[j]) result.push(morse[moresMap[j]]);
    }
  }
  return result.join('');
}

console.log(solution('.... . .-.. .-.. ---'));
