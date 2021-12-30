function convertToRoman(num) {

    let number = {
        M:1000,
        CM:900,
        D:500,
        CD:400,
        C:100,
        XC:90,
        L:50,
        XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1
    }
    let roman = '';

    for( let i in number){
        // console.log(number[i]);
        while (num >= number[i]){
            roman += i;
            num -= number[i];
            // console.log(roman);
            // console.log(num);
        }
    }
    
    // console.log(roman);
    return roman;
   }
   
   convertToRoman(36);