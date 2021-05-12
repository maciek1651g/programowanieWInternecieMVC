const random = (min, max) => {
    const tmp = max-min;
    let rand = Math.random()*( Math.pow(10, tmp.toString().length));
    rand = parseInt(rand);
    rand = rand%max;
    if(rand<min) rand = rand+min;
    return rand;
}

const calculate = (age, sex, smoke, live, weight, height) => {
    const bmi = weight/(height*height);

    let result = age;
    if(sex) result=81.7-result; else result=74.1-result;
    if(result<0)
    {
        result=(-result);
        if(result>30) result=30;
    }
    if(result<20) result = 30;
    if(smoke) result=result-random(10,20);
    switch (parseInt(live))
    {
        case 0:
            result=result+3;
            break;
        case 1:
            result=result+2;
            break;
        case 2:
            result=result+1;
            break;
        case 3:
            result=result+0;
            break;
    }
    if(bmi>=18.5 && bmi<25.5) result+=5;

    return parseInt(result);
}

const calculateRemainingYears = (age, sex, smoke, live, weight, height) => {
    return calculate(age, sex, smoke, live, weight, height);
}

module.exports = calculateRemainingYears