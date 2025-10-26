// 1
function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}
logItems(['Mango', 'Poly', 'Ajax']);

// 2


function calculateEngravingPrice(message, pricePerWord){
    const words = message.split(" ");
    const wordsNumber = words.length;
    const price = wordsNumber * pricePerWord;
    return price
}
console.log(calculateEngravingPrice("Hello my name Sviatoslav", 5));

// 3
function findLongestWord(string) {
    const text = string.split(" ");
    let longest = text[0];
  for (let a = 0; a < text.length; a++) {
    if (text[a].length > longest.length) {
        longest = text[a]
    }
    
    }
    return longest
}
console.log(findLongestWord("vg hhhuuh ohuhyfgvg, h,hhhh, jjjjjhh"));

// 4

function formatString(string) {
    console.log(string.length);
    if (string.length <= 40) {
        return string
       
        
    }
    else {
        const slice = string.slice(0, 40) + "..."
        return slice;
    }
}

console.log(formatString("shdu uduhud ueducchudcu heduehdhdu hewuduuchh e89wewueu ueduuhquqhushud udhwduhxxu uhduwh eudhwh hudux nuhdwuh uechuwd"));
console.log(formatString(" effsdfsd sddds wew"));
console.log(formatString("ewewweiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiooo"));

// 5

function checkForSpam(message) {
    const spam = message.split(" ");
    for (let o = 0; o < spam.length; o++) {
        if (spam[o].includes("spam") || spam[o].includes("sale")) {
            return true
        
        }
    }
    return false
}

console.log(checkForSpam("ecwjndc ewjcnnc spam"));

// 6