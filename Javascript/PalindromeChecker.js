function palindrome(str) {
    var palindromo = "";
  
    for(let i=str.length-1; i >= 0; i--){
      palindromo += str[i];
    }
    
    palindromo = palindromo.replace(/[^0-9a-z]/gi, '').toUpperCase();
    str = str.replace(/[^0-9a-z]/gi, '').toUpperCase();

    console.log(palindromo);
    console.log(str);

    if (palindromo == str){
        console.log('1');
        return true;
    } else {
        console.log('2');
        return false;
    }

  }


  palindrome("A man, a plan, a canal. Panama")