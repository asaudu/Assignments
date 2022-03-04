

const DayForecast = ({forecast}) => {

    return(
        <>
            {/* <p>{JSON.stringify(forecast)}</p> */}
            <h2>{forecast.dt_txt}</h2>
            <h1>Plano, TX </h1>

            {forecast.weather.map((w) => {
                return <img src={`http://openweathermap.org/img/wn/${w.icon}@2x.png`} />
            })}
            <h2>Current Temp: {forecast.main.temp}</h2>
            <h2>Temp Low: {forecast.main.temp_min}</h2>
            <h2>Temp High: {forecast.main.temp_max}</h2>
            <h2>Humidity: {forecast.main.humidity}</h2>
            <h2>Wind Speed: {forecast.wind.speed}</h2>
            
        
        </>
    )
}

export default DayForecast;



const example = {"dt":1646341200,
"main":
{"temp":73.69,"feels_like":72.21,"temp_min":71.8,"temp_max":73.69,"pressure":1020,"sea_level":1020,"grnd_level":997,"humidity":31,"temp_kf":1.05},
"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],
"clouds":{"all":10},
"wind":{"speed":7.67,"deg":153,"gust":7.65},
"visibility":10000,
"pop":0,
"sys":{"pod":"d"},
"dt_txt":"2022-03-03 21:00:00"}