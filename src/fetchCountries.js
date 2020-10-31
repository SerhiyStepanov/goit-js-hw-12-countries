export default function fetchCountry(name) {
 return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
.then(res => { return res.json()})  
}
