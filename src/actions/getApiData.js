import axios from 'axios';

export function getApiData(){
  const config = {
    headers: {
        "Access-Control-Allow-Origin": "YOUR-DOMAIN.TLD",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };
  
  axios.get("http://localhost:3001/chart", config)
  .then(res => {
    let data = JSON.parse(res.data);
    console.log(data)
     return data;
  })
}
