let uri = 'https://api.openweathermap.org/data/2.5/'
let key = '51018b60257b50207fc63de7c53af5e1'
let ara = document.getElementById("buton")
let data = document.getElementById("search")
let city = document.getElementById("center")
let derece = document.getElementById("degrees")
let y = document.getElementById("about")
let z = document.getElementById("minmax")
const setQuery = (e) => {
    if (e.keyCode=='13'){ 
        getResault(search.value);
    }
};
ara.addEventListener('click',()=>{
      let x = `${uri}weather?q=${data.value}&appid=${key}&units=metric&lang=tr`;
   fetch(x)
   .then(weather => {
       return weather.json();
   })
   .then(pherma);

})
const pherma = (res) => {
  city.innerText = `${res.name}`
  derece.innerText = `${res.main.temp}`
   y.innerText = `${res.weather[0].description}`
  z.innerText = `${res.main.temp_min}/${res.main.temp_max}`
}
const search = document.querySelector('#search');
search.addEventListener('keypress' , setQuery)
