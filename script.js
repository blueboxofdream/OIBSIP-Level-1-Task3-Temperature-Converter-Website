const CalculateTemp = () => {
    const tempInput = document.getElementById('Temp').value;
    const tempSelect = document.getElementById('diff_temp');
    const tempOption = diff_temp.options[tempSelect.selectedIndex].value;

    // Celsius to Fahrenheit
    const cToF = (cel) => {
        let fahrenheit = Math.round(((cel * 9 )/ 5) + 32);
        console.log(fahrenheit);
        return fahrenheit;
    }

    // Celsius to Kelvin
    const cToK = (cel) => {
       let kelvin = Math.round(273.15 + parseInt(cel));
       return kelvin;
    }

    // Fahrenheit to Celsius
    const FToc = (fah) => {
        let celsius = Math.round((fah - 32) * 5 / 9);
        return celsius;
    }
    
     // Fahrenheit to kelvin
     const FToK = (fah) => {
        let kelvin = Math.round(((fah - 32) * 5 / 9) + 273.75);
        return kelvin;
    }

    //kelvin to Celsius
    const KToc = (kel) => {
       let celsius = Math.round(kel - 273.75);
       return celsius;
    }

    //kelvin to Fahrenheit
    const KToF = (kel) => {
        let fahrenheit = Math.round(((kel - 273.75)* 9 / 5) + 32);
        return fahrenheit;
    }
    let result;
    
    if (tempOption == 'celsius') {
        result = cToF(tempInput);
        console.log(result);
        document.getElementById('resultcontainer').innerHTML = `  ${result} &#8457`;
        result = cToK(tempInput);
        console.log(result);
        document.getElementById("result2").innerHTML = `  ${result} &#8490`;
    }

    else if(tempOption == 'fahrenheit'){
        result = FToc(tempInput);
        console.log(result);
        document.getElementById('resultcontainer').innerHTML = `  ${result} &#8451`;
        result = FToK(tempInput);
        document.getElementById("result2").innerHTML = `  ${result} &#8490`;
    }
    else{    
        result = KToc(tempInput);
        // console.log(result);
        document.getElementById('resultcontainer').innerHTML = `  ${result} &#8451`;
        result = KToF(tempInput);
        document.getElementById("result2").innerHTML = `  ${result} &#8457`;
    }
    //else {
    //    document.getElementById("result1").innerHTML = KToc(inputTemp) + "&#8451";
    //    document.getElementById("result2").innerHTML = KToF(Tempinput) + "&#8457";
    //}
}