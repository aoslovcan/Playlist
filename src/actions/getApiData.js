const axios = require('axios');

export function getApiData(){

  let playlists = [];
  const config = {
    headers: {
        "Access-Control-Allow-Origin": "YOUR-DOMAIN.TLD",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
};


axios.get("http://localhost:3001/chart", config)
.then(function(res){
  let songs = JSON.parse(res.data);
  let items = songs['tracks']['data'];
  
 playlists.push(items) ;
})

    return playlists;
}







