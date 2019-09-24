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
    let letters = [];
    let j = 0;
    for (let k = 0; k < expr.length; k = k + 10) {
        letters[j] = '';
        if (expr[k] === '0') {
            for(let i = k; i < k + 10; i = i + 2) {
                if(expr[i] === '1') {
                    if(expr[i+1] === '1') {
                        letters[j] = letters[j] + '-';
                    } else {
                        letters[j] = letters[j] + '.';
                    }
                } 
            }
        } else if (expr[k] === '1') {
            for(let i = k; i < k + 10; i = i + 2) {
                if(expr[i+1] === '1') {
                    letters[j] = letters[j] + '-';
                } else {
                    letters[j] = letters[j] + '.';
                }
            }
        } else {
            letters[j] = ' ';
        }
        j++;
    }
    for (let i = 0; i < letters.length; i++) {
      if (letters[i] !== ' ') {
          letters[i] = MORSE_TABLE[letters[i]];
      }
    }
    return letters.join('');
}

module.exports = {
    decode
}