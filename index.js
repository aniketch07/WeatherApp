let valueSearch=document.getElementById('searchValue');
let city=document.getElementById('city');
let temprature=document.getElementById('temprature');
let clouds=document.getElementById('clouds');
let humidity=document.getElementById('humidity');
let pressure=document.getElementById('pressure');
let main=document.querySelector('main');
let id = 'e1c1ab8ec18e066945e570f900fe53a2';


let url = `https://api.openweathermap.org/data/2.5/weather?units=metrics&appid=${id}`;

const searchWeather=()=>{
    fetch(url+'&q='+valueSearch.value)
    .then(responsive => responsive.json())
    .then(data=>{
        console.log(data);
        if(data.cod==200){
            document.getElementById('location').textContent=data.name;
            city.querySelector('img').src=`https://flagsapi.com/${data.sys.country}/shiny/32.png`;
            temprature.querySelector('img').src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

            document.getElementById('temp_value').textContent = (data.main.temp - 273.15).toFixed(2);

            document.getElementById('description').textContent=data.weather[0].description;

            document.getElementById('clouds').textContent=data.clouds.all;
            document.getElementById('humidity').textContent=data.main.humidity;
            document.getElementById('pressure').textContent=data.main.pressure;
        }else{
            main.classList.add('error');
            setTimeout(()=>{
                main.classList.remove('error');
            },1000);

        }

        valueSearch.value='';
    })
}


let form=document.querySelector('form');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(valueSearch.value!=''){
        searchWeather();
    }
})


