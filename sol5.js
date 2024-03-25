for (let i = 1; i <= 10; i++) {
    let expression = '3*'+i+'=';
    let result = 1;
    // ***********Add the repeated addition for each iteration************
    for (let j = 1; j <= i; j++) {
        if(j===i){
            expression+='3';
            break;
        }
        expression += '3+';
        result =3*i;
    }
    expression += `=${result}`;
    console.log(expression);
}
