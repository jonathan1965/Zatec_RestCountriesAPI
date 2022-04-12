const loader = document.querySelector('.loader')
const main = document.querySelector('.main')

function snipperLoder(){
    setTimeout(()=>{
         loader.style.opacity=0;
         loader.style.display='none';
         main.style.display = 'block'

         setTimeout(()=>( main.style.opacity=1),50) // firtymile sec
        
    },4000)
}
snipperLoder()

const countriesList=document.querySelector(".countries")
const dropDown=document.querySelector(".dropDown")
const dropList =  document.querySelector(".drop")
const regionContinent = document.querySelectorAll(".continent")
const searchCountry = document.querySelector(".searchCountry")


// fetch Data
async function getCountry(){
    const countriesUrl=await fetch("https://restcountries.com/v3.1/all");
    const response=await countriesUrl.json();
     console.log(response)
    response.forEach(element => {
        allCountry(element)
    });
}
getCountry()



// function currenciesAll(data) {
//      let one = data
//   for (let i = 0; i < data.length; i++) {
//       console.log(data[i]) 
//   }
// }

// currenciesAll()


function allCountry(data){
        const country=document.createElement("div")
        country.classList.add("country")
        country.innerHTML = ` <div class="country-img">
        <img src="${data.flags.png}" alt="">
    </div>
    <div class="country-info">
        <h5 class="countryName">${data.name.common}</h5>
        <p><strong>Population: </strong>${data.population}</p>
        <p class="regionName"><strong>Region: </strong>${data.region}</p>
        <p><strong>Capital: </strong>${data.capital}</p>
    </div>`;
    countriesList.appendChild(country)
    country.addEventListener("click",()=>{
        showCountrDetail(data)
    })
}



// DropDown list of Continent
dropDown.addEventListener("click", ()=>{
    dropList.classList.toggle("showDropDown")
})


// Select Region continent filter
const regionName = document.getElementsByClassName("regionName")
const countryName = document.getElementsByClassName("countryName")

regionContinent.forEach(element => {
     element.addEventListener("click",()=>{
        console.log(element)
        Array.from(regionName).forEach(elem=>{
            //console.log(elem.innerText)
            if(elem.innerText.includes(element.innerText) || element.innerText=="All") {
                elem.parentElement.parentElement.style.display="grid"
            } else {
                elem.parentElement.parentElement.style.display="none"
            }
        })
     })
})


// search country

searchCountry.addEventListener("input",() =>{
    console.log(searchCountry.value.toLowerCase())
    Array.from(countryName).forEach(elem=>{
        if(elem.innerText.toLowerCase().includes(searchCountry.value.toLowerCase())) {
            elem.parentElement.parentElement.style.display="grid"
        } else {
            elem.parentElement.parentElement.style.display="none"
        }
    })
})

// selfCountry
const countrySelf=document.querySelector(".countrySelf")
function showCountrDetail(data) {
    countrySelf.classList.toggle("show")
    countrySelf.innerHTML=`
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
               <p><strong>Language: </strong>${data.languages}</p>
           </div>
          </div>
        </div>
    </div>`

const backHome=countrySelf.querySelector(".backHome")
backHome.addEventListener("click",()=>{
    countrySelf.classList.toggle("show")
})
}

