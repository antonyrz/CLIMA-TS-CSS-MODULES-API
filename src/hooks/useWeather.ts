import axios from 'axios';
import { z } from 'zod';
import type { SearchType } from '../types';

//? TYPE GUARD OR ASSERTION FUNCTION TO CHECK IF THE RESPONSE FROM THE API MATCHES THE WEATHER TYPE
// const isWeatherResponse = (weather : unknown) : weather is Weather => {

//     return(
//         Boolean(weather) &&
//         typeof weather === 'object' &&
//         typeof (weather as Weather).name === 'string' &&
//         typeof (weather as Weather).main.temp === 'number' &&
//         typeof (weather as Weather).main.temp_min === 'number' &&
//         typeof (weather as Weather).main.temp_max === 'number'
//     )
// }

//Zod schema to validate the response from the API

const Weather = z.object({
    name: z.string(),
    main: z.object({
        temp: z.number(),
        temp_min: z.number(),
        temp_max: z.number(),
    })
})

type Weather = z.infer<typeof Weather>

export default function useWeather() {


    const fetchWeather = async(search: SearchType) => {

        const appId = import.meta.env.VITE_API_KEY;
        
        try {
            
            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`;
            const { data } = await axios(geoUrl);
            const {lat, lon} = data[0];
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;

            // ZOD
            const {data: weatherData} = await axios(weatherUrl);
            const result = Weather.safeParse(weatherData);

            
            

        }catch (error) {
            console.log(error);
        }
    }

  return {
    fetchWeather
  }
}
