import React, {useEffect,useState} from 'react';
const axios = require('axios');

const News = () => {


  const options = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news/search?q=cryptocurrency',
    params: { safeSearch: 'Off', textFormat: 'Raw' },
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
      'X-RapidAPI-Key': 'fc00fe11f6msh8dcd3145a8d1e42p134c2ajsn8d64891d9a2b',
    },
  };
 
  const [news , setnews] = useState([]);

  useEffect(()=>{
    axios
    .request(options)
    .then((res) => {
      setnews = res.data;
      // console.log(res.data);
    })
    .catch((error) => {
      console.error(error);
    });


  }, []);
 
//  console.log(news);


  return (
  <>
  
  </>
  );
};

export default News;
