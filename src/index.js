import countryCard from './template.hbs'
import styles from './common.css'
const debounce = require('lodash.debounce');

const inputEl = document.querySelector('.input-control')
const markapCard = document.querySelector('.container-js')
// console.log(inputEl)
inputEl.addEventListener('input', debounce(onInputCountry,500))


function onInputCountry(event) {
    const name = event.target.value
    // console.log(event.target.value) 

    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(res => { return res.json() })
    .then(country => {
        // console.log(country)
        const markup = countryCard(country)
        // console.log(markup)
        markapCard.innerHTML = markup
    })
}
