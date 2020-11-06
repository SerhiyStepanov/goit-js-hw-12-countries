// export default function fetchCountry(name) {
//  return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
// .then(res =>  res.json())  
// }

export default async function fetchCountry(name) {
    const response  = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    const result = await response .json()
    return result
}
