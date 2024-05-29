const calculatorForm = document.querySelector("#carbonCalculator");
const resultp = document.querySelector("#resultp");
const finalsubmit = document.querySelector("#finalsubmit")


finalsubmit.addEventListener("click", function() {
    const electricity = parseFloat(document.querySelector("#electricity").value);
    const transport = parseFloat(document.querySelector("#transport").value);
    const waste = parseFloat(document.querySelector("#waste").value);
    const electricityEmissionFactor = 0.5; // kg CO2 per kWh
    const transportEmissionFactor = 0.2; // kg CO2 per mile
    const wasteEmissionFactor = 0.1; // kg CO2 per pound

    const electricityEmissions = electricity * electricityEmissionFactor;
    const transportEmissions = transport * transportEmissionFactor;
    const wasteEmissions = waste * wasteEmissionFactor;

    const totalEmissions = electricityEmissions + transportEmissions + wasteEmissions;  
    if(totalEmissions > 2){
        console.log("Good!");
        resultp.textContent = "You will have to improve on your energy consumption. You get -10 points. Better luck next time! Your total points = -10. Make 100 points for a free sapling you can grow at your home!";
    } 
    else {
        console.log("Good!");
        resultp.textContent = "You are doing well with your energy. You get +10 points. Better luck next time! Your total points = 10. Make 100 points for a free sapling you can grow at your home!"
    }
})
