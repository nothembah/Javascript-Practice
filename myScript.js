function is_div_by_5(num){
    if(num % 5 === 0){
        return true;
    } else {
        return false;
    }
}

function either_only(num){
    if(num % 3 === 0 && num % 5 !== 0){
        return true;
    } else if(num % 5 === 0 && num % 3 !== 0){
        return true;
    } else {
        return false;
    }
}

function larger_number(num1, num2){
    if(num1 > num2){
        return num1;
    } else{
        return num2;
    }
}

function word_check(word){
    if(word.length > 6){
        return "long";
    } else if(word.length < 6){
        return "short";
    } else {
        return "medium";
    }
}

function count_e(word){
    let counter = 0;

    for(let i = 0; i < word.length; i++){
        if(word[i] === 'e'){
            counter++;
        }
    }

    return counter;
}

let x = 33;
let y = 10;

let string = "Nothemba";

console.log(is_div_by_5(x));
console.log(either_only(x));
console.log(larger_number(x,y));

console.log(word_check(string));
console.log(count_e(string));