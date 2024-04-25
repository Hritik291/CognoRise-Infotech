let form = document.querySelector('form');
console.log('helloo');

form.addEventListener('submit' , function (e)  {

    e.preventDefault();

    let wieght = parseInt(document.querySelector('#weight').value);
    let hieght = parseInt(document.querySelector('#height').value);
    let result = document.querySelector('#results')
    // console.log("inside")

    if (wieght === '' || wieght <= 0 || isNaN(wieght))
    {
        result.innerHTML = `Sorry , ${wieght} is not a valid weight`
    }
    else if (hieght === '' || hieght <= 0 || isNaN(hieght))
    {
        result.innerHTML = `Sorry , ${hieght} is not a valid weight`
    }
    else{
        let bmi = (wieght / ((hieght*hieght)/10000)).toFixed(2)
        if (bmi >24.9){
            result.innerHTML = `BMI is ${bmi} , OverWeight`
        }
        else if (bmi <18.6){
            result.innerHTML = `BMI is ${bmi} , Underwight`
        }
        else if (bmi > 18.6 && bmi < 24.9)
        {
            result.innerHTML = `BMI is ${bmi} , Normal`
        }
    }
})