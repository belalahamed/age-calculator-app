// Selecting DOM Elements
const dobInput = document.querySelector("#dob");
const ageAtDateInput = document.querySelector("#age-at-date");
const calculatebtn = document.getElementById("calculate-btn");
const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");

// Funnction to calculate age
function calculateAge() {
  // Checking whether input is or not on both the fields
  if (!dobInput.value || !ageAtDateInput.value) {
    alert("Select date at both the fields");
    return;
  }

  // Converting Date String inputs to Date
  const dob = new Date(dobInput.value);
  const ageAtDate = new Date(ageAtDateInput.value);

  // Getting year from date
  const dobYear = dob.getFullYear();
  let ageAtDateYear = ageAtDate.getFullYear();

  // Getting month from date
  const dobMonth = dob.getMonth();
  let ageAtDateMonth = ageAtDate.getMonth();

  // Getting date from date
  const dobDate = dob.getDate();
  let ageAtDateDate = ageAtDate.getDate();

  // Checking for that the dob should be lesser
  if (ageAtDateYear < dobYear) {
    alert("DOB Year should be lesser!!");
    return;
  }

  if (ageAtDateYear === dobYear && ageAtDateMonth < dobMonth) {
    alert("DOB month should be lesser!!");
    return;
  }

  if (
    ageAtDateYear === dobYear &&
    ageAtDateMonth === dobMonth &&
    ageAtDateDate < dobDate
  ) {
    alert("DOB date should be lesser!!");
    return;
  }

  // Age calculation logic
  let ageYears = ageAtDateYear - dobYear;
  let ageMonths = ageAtDateMonth - dobMonth;
  let ageDays = ageAtDateDate - dobDate;

  if (ageAtDateDate < dobDate) {
    ageAtDateMonth = ageAtDateMonth - 1;
    ageAtDateDate = ageAtDateDate + 30;
    ageDays = ageAtDateDate - dobDate;
    ageMonths = ageAtDateMonth - dobMonth;
    ageYears = ageAtDateYear - dobYear;
  }

  if (ageAtDateMonth < dobMonth) {
    ageAtDateYear = ageAtDateYear - 1;
    ageAtDateMonth = ageAtDateMonth + 12;
    ageMonths = ageAtDateMonth - dobMonth;
    ageYears = ageAtDateYear - dobYear;
  }

  renderAge(ageYears, ageMonths, ageDays);
}

// Rendering age on UI
function renderAge(ageYears, ageMonths, ageDays) {
  years.innerText = `${ageYears} Years`;
  months.innerText = `${ageMonths} Months`;
  days.innerText = `${ageDays} Days`;

  dobInput.value = "";
  ageAtDateInput.value = "";
}

// Calculate Button Event listener
calculatebtn.addEventListener("click", calculateAge);
