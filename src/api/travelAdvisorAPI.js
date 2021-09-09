// import axios from 'axios';

// const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

// const options = {
//   params: {
//     bl_latitude: '11.847676',
//     tr_latitude: '12.838442',
//     bl_longitude: '109.095887',
//     tr_longitude: '109.149359'
//   },
//   headers: {
//     'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//     'x-rapidapi-key': 'e25f65cbebmsh3052b688e3e235bp15074fjsn1fc52ea1e236'
//   }
// };


// export const getPlacesData=async()=>{
//     try{
//         const {data:{data}} = await axios.get(URL,options);
//         return data;
//     }catch(err){
//       console.log(err)
//     }
// }

import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'x-rapidapi-key': 'e25f65cbebmsh3052b688e3e235bp15074fjsn1fc52ea1e236',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
        params: { lat, lon: lng },
        headers: {
          'x-rapidapi-key': 'e25f65cbebmsh3052b688e3e235bp15074fjsn1fc52ea1e236',
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        },
      });

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};