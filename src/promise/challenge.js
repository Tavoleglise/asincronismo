const fetchData = require("../utils/fetchData");
const username = "FANBOYCRISIS";
const partida = 0;
const API = "https://rickandmortyapi.com/api/character/";
const API2 = `https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}/?api_key=RGAPI-1d81e848-0d0b-4bc8-a303-e57b2962f663`;

/*fetchData(API)
  .then((data) => {
    console.log(data.info.count);
    return fetchData(`${API}${data.results[0].id}`);
  })
  .then((data) => {
    console.log(data.name);
    return fetchData(data.origin.url);
  })
  .then((data) => {
    console.log(data.dimension);
  })
  .catch((err) => console.err(err));*/

fetchData(API2)
  .then((data) => {
    console.log(data);
    return fetchData(
      `https://la1.api.riotgames.com/lol/match/v4/matchlists/by-account/${data.accountId}/?api_key=RGAPI-1d81e848-0d0b-4bc8-a303-e57b2962f663`
    );
  })
  .then((data) => {
    console.log(data.matches[partida]);
    return fetchData(
      `https://americas.api.riotgames.com/lol/match/v5/matches/LA1_${data.matches[partida].gameId}/?api_key=RGAPI-1d81e848-0d0b-4bc8-a303-e57b2962f663`
    );
  })
  .then((data) => {
    console.log(data);
    console.log(data.info.participants[7]);
  })
  .catch((err) => console.error(err));

console.log("prueba asincronismo");
