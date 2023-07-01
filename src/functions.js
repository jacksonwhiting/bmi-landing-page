export {
   displayHealthStatus, metricBmiCalc, imperialBmiCalc, metricIdealWeightLow, metricIdealWeightHigh,
   imperialIdealWeightLow, imperialIdealWeightHigh
}; 

const displayHealthStatus = (bmi) => {
   if (bmi < 18.5) {
      return "Your BMI suggests you're underweight.";
   } else if (bmi >= 18.5 && bmi < 25.0) {
      return "Your BMI suggests you're a healthy weight.";
   } else if (bmi >= 25.0 && bmi < 30.0) {
      return "Your BMI suggests you're overweight.";
   } else if (bmi >= 30.0) {
      return "Your BMI suggests you're obese.";
   }
}

const metricBmiCalc = (weight, height) => weight / ((height/100) ** 2);
const imperialBmiCalc = (weight, height) => (weight / (height ** 2)) * 703;

const metricIdealWeightLow = (height) => (18.5 * ((height/100) ** 2)).toFixed(0);
const metricIdealWeightHigh = (height) => (24.9 * ((height/100) ** 2)).toFixed(0);
const imperialIdealWeightLow = (height) => ((18.5 * (height ** 2))/703).toFixed(0);
const imperialIdealWeightHigh = (height) => ((24.9 * (height ** 2))/703).toFixed(0);