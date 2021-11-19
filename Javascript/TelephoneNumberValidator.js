function telephoneCheck(str) {
    let regExp = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;

    return regExp.test(str);
  }

telephoneCheck("555-555-5555");




/*
function telephoneCheck(str) {

    let length = str.replace(/\W|_/g, '').length;

    // console.log(str[0]);
    // console.log(str.length)


    if(length == 10){
        console.log('1');
        console.log(length);
        return true;
    } else if (length == 11 && str[0] == 1){
        console.log('1');
        console.log(length);
        return true;
    } else {
        console.log('2');
        console.log(length);
        return false;
    }
    
    
  }
  
  telephoneCheck("555-555-5555");
  telephoneCheck("1 555-555-5555")
  telephoneCheck("1 (555) 555-5555")
  telephoneCheck("1 456 789 4444")
  telephoneCheck("1 555)555-5555")
  telephoneCheck("123**&!!asdf#")
  telephoneCheck("10 (757) 622-7382")
  telephoneCheck("1 555)555-5555")
telephoneCheck("1 555)555-5555")
telephoneCheck("(6054756961)")
telephoneCheck("55 55-55-555-5")
*/