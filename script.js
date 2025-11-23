// Selecting DOM Elements
const dateOfBirthInput = document.querySelector("#dob");
const ageAtDateInput = document.querySelector("#age-at-date");
const calculatebtn = document.getElementById("calculate-btn");
const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");

// Function to convert date string to date object
function toDateObject() {
  const dateOfBirth = new Date(dateOfBirthInput.value);
  const ageAtDate = new Date(ageAtDateInput.value);

  const dates = separateDateMonthYear(dateOfBirth, ageAtDate);

  return dates;
}

// Function to extract individual date, month and year from date objects
function separateDateMonthYear(dateOfBirth, ageAtDate) {
  // Getting individual date, month and year from date of birth string
  const birthYear = dateOfBirth.getFullYear();
  const birthMonth = dateOfBirth.getMonth();
  const birthDate = dateOfBirth.getDate();

  // Getting individual date, month and year from age at date string
  let ageAtDateYear = ageAtDate.getFullYear();
  let ageAtDateMonth = ageAtDate.getMonth();
  let ageAtDateDate = ageAtDate.getDate();

  const dates = {
    birthYear: birthYear,
    birthMonth: birthMonth,
    birthDate: birthDate,
    ageAtDateYear: ageAtDateYear,
    ageAtDateMonth: ageAtDateMonth,
    ageAtDateDate: ageAtDateDate,
  };

  return dates;
}

// Funnction to calculate age
function calculateAge() {
  // Checking whether input is or not on both the fields
  if (!dateOfBirthInput.value || !ageAtDateInput.value) {
    alert("Select date at both the fields");
    return;
  }

  const dates = toDateObject();

  // Checking for that the dob should be lesser
  if (dates.ageAtDateYear < dates.birthYear) {
    alert("DOB Year should be lesser!!");
    return;
  }

  if (
    dates.ageAtDateYear === dates.birthYear &&
    dates.ageAtDateMonth < dates.birthMonth
  ) {
    alert("DOB month should be lesser!!");
    return;
  }

  if (
    dates.ageAtDateYear === dates.birthYear &&
    dates.ageAtDateMonth === dates.birthMonth &&
    dates.ageAtDateDate < dates.birthDate
  ) {
    alert("DOB date should be lesser!!");
    return;
  }

  // Age calculation logic
  let ageYears = dates.ageAtDateYear - dates.birthYear;
  let ageMonths = dates.ageAtDateMonth - dates.birthMonth;
  let ageDays = dates.ageAtDateDate - dates.birthDate;

  if (dates.ageAtDateDate < dates.birthDate) {
    dates.ageAtDateMonth = dates.ageAtDateMonth - 1;
    dates.ageAtDateDate = dates.ageAtDateDate + 30;
    ageDays = dates.ageAtDateDate - dates.birthDate;
    ageMonths = dates.ageAtDateMonth - dates.birthMonth;
    ageYears = dates.ageAtDateYear - dates.birthYear;
  }

  if (dates.ageAtDateMonth < dates.birthMonth) {
    dates.ageAtDateYear = dates.ageAtDateYear - 1;
    dates.ageAtDateMonth = dates.ageAtDateMonth + 12;
    ageMonths = dates.ageAtDateMonth - dates.birthMonth;
    ageYears = dates.ageAtDateYear - dates.birthYear;
  }

  renderAge(ageYears, ageMonths, ageDays);
}

// Rendering age on UI
function renderAge(ageYears, ageMonths, ageDays) {
  years.innerText = `${ageYears} Years`;
  months.innerText = `${ageMonths} Months`;
  days.innerText = `${ageDays} Days`;

  dateOfBirthInput.value = "";
  ageAtDateInput.value = "";
}

// Calculate Button Event listener
calculatebtn.addEventListener("click", calculateAge);
