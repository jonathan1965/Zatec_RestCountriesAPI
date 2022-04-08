const countriesList=document.querySelector(".countries")
const dropDown=document.querySelector(".dropDown")
const dropList =  document.querySelector(".drop")
const continent = document.querySelectorAll(".continent")





async function getCountry(){
    const countriesUrl=await fetch("https://restcountries.com/v3.1/all");
    const response=await countriesUrl.json();
    console.log(response)
    response.forEach(element => {
        allCountry(element)
    });
  
}

getCountry()
function allCountry(data){
        const country=document.createElement("div")
        country.classList.add("country")
        country.innerHTML = ` <div class="country-img">
        <img src="${data.flags.png}" alt="">
    </div>
    <div class="country-info">
        <h5>${data.name.common}</h5>
        <p><strong>Population: </strong>${data.population}</p>
        <p><strong>Region: </strong>${data.region}</p>
        <p><strong>Capital: </strong>${data.capital}</p>
    </div>`;
    countriesList.appendChild(country)

    
}

dropDown.addEventListener("click", ()=>{
    dropList.classList.toggle("showDropDown")
})

continent.forEach(element => {
     element.addEventListener("click",()=>{
         console.log(element.innerHTML)
     })
})