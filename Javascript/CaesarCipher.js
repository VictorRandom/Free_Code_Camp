function rot13(str) {

    let frase = '' 
    str = str.split("")

    for (let i = 0; i < str.length; i++) {
      let letras = str[i]
      let alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "!", "?", "."];
      let letterPosition = alfabeto.indexOf(letras)+1;

      letterPosition = letterPosition + 13;

      console.log(letterPosition)

      if(letterPosition >= 14 && letterPosition < 40){
        if(letterPosition > 26){
          letterPosition = String.fromCharCode(letterPosition+64-26);
          frase = frase.concat(letterPosition);
        } else {
          letterPosition = String.fromCharCode(letterPosition+64);
          frase = frase.concat(letterPosition);
        }
      } else {
        if(letterPosition == 13){
          frase = frase.concat(" ")
        } else if(letterPosition == 40){
          frase = frase.concat("!")
        } else if(letterPosition == 41){
          frase = frase.concat("?")
        } else if(letterPosition == 42){
          frase = frase.concat(".")
        }
      }
      

      
    }
    console.log(frase);
    str = frase.toString();
    console.log(str);
    return str;
  }


  rot13("SERR PBQR PNZC")
  rot13("SERR CVMMN!")
  rot13("SERR YBIR?")
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")

/*
var char_A = 1;
 console.log(String.fromCharCode(char_A+64))

 var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 var letter = "b";
var letterPosition = alphabet.indexOf(letter)+1;
console.log(letterPosition);


"iloveyou".split("").forEach(function (a,b,c){ console.log(a.toLowerCase().charCodeAt(0)-96)});
*/