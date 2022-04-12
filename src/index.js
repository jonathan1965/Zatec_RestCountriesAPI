const loader = document.querySelector(".loader");
const sectionTwo = document.querySelector(".sectionTwo");

function snipperLoder() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";
    sectionTwo.style.display = "block";

    setTimeout(() => (sectionTwo.style.opacity = 1), 50); // firtymile sec
  }, 4000);
}
snipperLoder();

const countriesList = document.querySelector(".countriesList");
const filterReg = document.querySelector(".filterReg");
const optionList = document.querySelector(".list");
const regionContinent = document.querySelectorAll(".continent");
const searchCountry = document.querySelector(".searchCountry");

// fetch Data
async function accessCountry() {
  const countriesUrl = await fetch("https://restcountries.com/v3.1/all");
  const response = await countriesUrl.json();
  console.log(response);
  response.forEach((values) => {
    viewCountry(values);
  });
}

accessCountry();

function viewCountry(data) {
  const country = document.createElement("div");
  country.classList.add("country");
  country.innerHTML = ` <div class="country-img">
        <img src="${data.flags.png}" alt="">
    </div>
    <div class="country-data">
        <h3 class="countryName">${data.name.common}</h3>
        <p><strong>Population: </strong>${data.population}</p>
        <p class="regionName"><strong>Region: </strong>${data.region}</p>
        <p><strong>Capital: </strong>${data.capital}</p>
    </div>`;
  countriesList.appendChild(country);
  country.addEventListener("click", () => {
    showCountrDetail(data);
  });
}

// Drop list of Continent
filterReg.addEventListener("click", () => {
  optionList.classList.toggle("showlist");
});

// Select Region continent filter
const regionName = document.getElementsByClassName("regionName");
const countryName = document.getElementsByClassName("countryName");

regionContinent.forEach((values) => {
  values.addEventListener("click", () => {
    // console.log(values)
    Array.from(regionName).forEach((value) => {
      console.log(value.innerText);
      if (
        value.innerText.includes(values.innerText) ||
        values.innerText == "All"
      ) {
        value.parentElement.parentElement.style.display = "grid";
      } else {
        value.parentElement.parentElement.style.display = "none";
      }
    });
  });
});

// search country

searchCountry.addEventListener("input", () => {
  console.log(searchCountry.value.toLowerCase());
  Array.from(countryName).forEach((value) => {
    if (
      value.innerText.toLowerCase().includes(searchCountry.value.toLowerCase())
    ) {
      value.parentElement.parentElement.style.display = "grid";
    } else {
      value.parentElement.parentElement.style.display = "none";
    }
  });
});

// selfCountry
const countrySelf = document.querySelector(".countrySelf");
function showCountrDetail(data) {
  countrySelf.classList.toggle("show");
  countrySelf.innerHTML = `
      <button class="backHome">Back</button>
    <div class="model">
        <div class="leftMode">
           <img src="${data.flags.png}" alt="">
        </div>
        <div class="rightModal">
           <h1>${data.name.common}</h1>
          <div class="modalInfo">
           <div class="innerLeft inner">
                <p><strong>Capital: </strong>${data.capital}</p>
               <p class=""><strong>Population: </strong>${data.population}</p>
               <p><strong>Timezones: </strong>${data.timezones}</p>
           </div>
           <div class="innerRight inner">
               
               <p ><strong>Continents: </strong>${data.continents}</p>
               <p ><strong>Currencies </strong>${data.currencies}</p>
               <p><strong>StartOfWeek: </strong>${data.startOfWeek}</p>
           </div>
          </div>
        </div>
    </div>`;

  const backHome = countrySelf.querySelector(".backHome");
  backHome.addEventListener("click", () => {
    countrySelf.classList.toggle("show");
  });
}
