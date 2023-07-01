import { displayHealthStatus, metricBmiCalc, imperialBmiCalc, metricIdealWeightLow, metricIdealWeightHigh,
   imperialIdealWeightLow, imperialIdealWeightHigh } from "./functions.js";

const bmiForm = document.querySelector('#bmi-form');
const imperialFormFields = document.querySelector('#imperial-form-fields');
const metricFormFields = document.querySelector('#metric-form-fields');
const metricRadio = document.querySelector('#radio-metric');
const imperialRadio = document.querySelector('#radio-imperial');
const healthStatus = document.querySelector('#health-status');
const idealWeightEl = document.querySelector('#ideal-weight');
const dataPromptEl = document.querySelector('#data-prompt');
const bmiEl = document.querySelector('#bmi-output');
const bmiFormArray = [...bmiForm];
const bmiRadioButtons = bmiForm.elements.unitMeasurements;
let heightCmValue = 0;
let weightKgValue = 0;
let heightFtValue = 0;
let heightInValue = 0;
let weightStValue = 0;
let weightLbsValue = 0;

//Clears form data
const clearFormData = (form) => {
   form.forEach((formElement) => {
      if (formElement.type === 'number' && formElement.value) {
         console.log(formElement.value);
         formElement.value = "";
      }
   })
};

//Hide/display form fields and reset form fields when radio button selected
const resetFormFields = () => {
   bmiRadioButtons.forEach((button) => {
      button.addEventListener('change', (e) => {
         imperialFormFields.classList.toggle('hidden');
         metricFormFields.classList.toggle('hidden');
         metricFormFields.classList.toggle('md:grid');
         dataPromptEl.classList.remove('hidden');
         dataPromptEl.textContent = 'Enter data to see your ideal weight.';
         healthStatus.textContent = '';
         idealWeightEl.textContent = '';
         clearFormData(bmiFormArray);
         heightCmValue = 0;
         weightKgValue = 0;
         heightFtValue = 0;
         heightInValue = 0;
         weightStValue = 0;
         weightLbsValue = 0;
         bmiEl.textContent = 0;
      })
   })
}

//Get form data from each input field
const getFormData = (e) => {
   if (e.target.name === 'heightCm') {
      heightCmValue = Number(e.target.value);
   } else if (e.target.name === 'weightKg') {
      weightKgValue = Number(e.target.value);
   }  else if (e.target.name === 'heightFt') {
      heightFtValue = Number(e.target.value);
   } else if (e.target.name === 'heightIn') {
      heightInValue = Number(e.target.value);
   } else if (e.target.name === 'weightSt') {
      weightStValue = Number(e.target.value);
   } else if (e.target.name === 'weightLbs') {
      weightLbsValue = Number(e.target.value);
   } 
}

//calculate and display
const calculateBmi = () => {
   bmiForm.addEventListener('input', (e) => {
      getFormData(e);
      if (metricRadio.checked) {
         if (weightKgValue && heightCmValue) {
            let metricBmi = metricBmiCalc(weightKgValue, heightCmValue);
            bmiEl.textContent = metricBmi.toFixed(1);
            healthStatus.textContent = displayHealthStatus(metricBmi);
            const idealWeightLow = metricIdealWeightLow(heightCmValue);
            const idealWeightHigh = metricIdealWeightHigh(heightCmValue);
            dataPromptEl.classList.add('hidden');
            idealWeightEl.textContent = `Your ideal weight is between ${idealWeightLow} Kg - ${idealWeightHigh} Kg`;
         }
      } else if (imperialRadio.checked) {
         if (heightInValue && weightLbsValue) {
            const convertedWeightLbs = (weightStValue * 14) + weightLbsValue;
            const convertedHeightIns = (heightFtValue * 12) + heightInValue;
            let imperialBmi = imperialBmiCalc(convertedWeightLbs, convertedHeightIns);
            bmiEl.textContent = imperialBmi.toFixed(1);
            healthStatus.textContent = displayHealthStatus(imperialBmi);
            const idealWeightLowImp = imperialIdealWeightLow(convertedHeightIns);
            const idealWeightHighImp = imperialIdealWeightHigh(convertedHeightIns);
            dataPromptEl.classList.add('hidden');
            idealWeightEl.textContent = `Your ideal weight is between ${idealWeightLowImp} lbs - ${idealWeightHighImp} lbs`;
         }
      }
   })
}

clearFormData(bmiFormArray);
resetFormFields();
calculateBmi();

