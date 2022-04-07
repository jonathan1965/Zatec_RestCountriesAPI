const countriesElem=document.querySelector(".countries")

async function getCountry(){
    const url=await fetch("https://restcountries.com/v3.1/all");
    const res=await url.json();
    console.log(res)
    res.forEach(element => {
        showCountry(element)
    });
  
}

getCountry()
function showCountry(data){
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
    countriesElem.appendChild(country)
}