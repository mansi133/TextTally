function show_input() {
    let input_str = document.getElementById('input_str').value;
    input_str = input_str.toLowerCase().trim();

    // if input val is empty 
    if (input_str.length == 0) {
        alert("Please don't pass an empty value! Try again....");
    } 
    else {
        let temp_arr = [];
        let vowel_count = 0;
        let consonant_count = 0;

        // if input val is given by user
        for (let i = 0; i < input_str.length; i++) {
            let char = input_str[i];

            // only non-space char will be in temp-arr
            if (char !== ' ') {
                temp_arr.push(char);
            }
        }

        //  check for vowels and consonants in temp_arr 
        for (let i = 0; i < temp_arr.length; i++) {
            let char = temp_arr[i];

            if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
                vowel_count = vowel_count + 1;
            } else {
                consonant_count = consonant_count + 1;
            }
        }

        // Display results 
        document.getElementById('count_vowel').innerHTML = `No of Vowels : ${vowel_count}`;
        document.getElementById('count_consonant').innerHTML = `No of Consonants : ${consonant_count}`;
        document.getElementById('len_str').innerHTML = `Length of String : ${input_str.length}`;
    }
}

function discard_input() {
    // Discard all 
    document.getElementById('input_str').value = "";
    document.getElementById('count_vowel').innerHTML = "";
    document.getElementById('count_consonant').innerHTML = "";
    document.getElementById('len_str').innerHTML = "";
}