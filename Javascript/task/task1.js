const stringAnalysis = (str) => {
    let vowels = 0;
    let consonants = 0;
    let digits = 0;

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];


        if (ch >= '0' && ch <= '9') {
            digits++;
        }


        else if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {


            if (
                ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||
                ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U'
            ) {
                vowels++;
            } else {
                consonants++;
            }
        }
    }

    return {
        vowels: vowels,
        consonants: consonants,
        digits: digits
    };
};
let result = stringAnalysis("Hello123");
console.log(result);

