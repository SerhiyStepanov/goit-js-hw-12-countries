import countryCard from './template.hbs'
// import styles from './styles.css'
import fetchCountry from './fetchCountries'
const debounce = require('lodash.debounce');

const inputEl = document.querySelector('.input-control')
const markapCard = document.querySelector('.container-js')
// console.log(inputEl)
inputEl.addEventListener('input', debounce(onInputCountry,500))


function onInputCountry(event) {
    const name = event.target.value
    // console.log(countryName)
    fetchCountry(name)
        .then(renderCountryCard)
        .catch()
        .finally()
}


function renderCountryCard(country) {
    const markup = countryCard(country)
        markapCard.innerHTML = markup
}
