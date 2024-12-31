const result = document.getElementById("count").addEventListener("click", function() {
    var input = document.getElementById("input");
    var vowelcount = countVowel(input.value);
    document.getElementById("result").value = vowelcount;
});

function countVowel(str) {
    var count = 0 ;
    for(let i = 0 ; i<str.length;i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U'){
            count++;
        }

    }
    return count;
}

