const axios = require("axios");


const news = (props) =>{


    const options = {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news/search?q=cryptocurrency',
      params: {safeSearch: 'Off', textFormat: 'Raw'},
      headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
        'X-RapidAPI-Key': 'fc00fe11f6msh8dcd3145a8d1e42p134c2ajsn8d64891d9a2b'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

  

return(
    <>
    <p>{props.value}</p>
    
    </>
)


}


export default news;

