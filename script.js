/* eslint-disable */
let result = undefined;


console.log(result)

// get city
document.addEventListener('DOMContentLoaded', () => {

    const submitButton = document.querySelector("button");
  
    submitButton.addEventListener('click', e => {
      const city = document.getElementById('cityInput').value;
      console.log(city);
      
      async function fetchData() {
        const url = 'https://open-weather13.p.rapidapi.com/city/Seattle';
        const options = {
          method: 'GET',
        headers: {
          'X-RapidAPI-Key': '2c79d0fa99msh394edc34b67c182p1101b1jsne10c34695d05',
          'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
      };
      
      try {
        const response = await fetch(url, options);
        console.log(response.text)
        result = await response.text();
      
        console.log(JSON.parse(result).weather);
        document.getElementById("weather").innerHTML = `${JSON.parse(result).name}: 
        ${JSON.parse(result).weather[0].main}`
      
      } catch (error) {
        //console.error(error);
      }
      
      } 

      fetchData()

    });
    
    
  });

