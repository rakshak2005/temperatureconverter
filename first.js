const celsiusFeild = document.querySelector("#cel");
const degree = document.querySelector("#Degree");
const convertBtn = document.querySelector("#button");
const temptype = document.querySelector("#temptype");


window.addEventListener("load", () => {
    degree.value ="";
    celsiusFeild.innerHTML = "";
})

convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    converttocelsius();
});

function converttocelsius(){
    let inputValue = degree.value;

    if(temptype.value === "fahrenheit") {
        const fahrenheittocelsius =  (inputValue - 32) * (5/9);
        celsiusFeild.innerHTML = `${fahrenheittocelsius.toFixed(3)} &deg;c`;
    }
    else if(temptype.value === "kelvin") {
        const kelvintocelsius =  inputValue - 273.15;
        celsiusFeild.innerHTML = `${kelvintocelsius.toFixed(3)} &deg;c`;
    }
}

