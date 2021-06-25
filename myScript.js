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

let x = 33;

console.log(is_div_by_5(x));
console.log(either_only(x));
