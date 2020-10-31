const debounce = require('lodash.debounce');
import countryCard from './template.hbs'

const inputEl = document.querySelector('.input-control')
// console.log(inputEl)

inputEl.addEventListener('input', debounce(onInputCountry,500))

function onInputCountry(event) {
    const name = event.target.value
    console.log(event.target.value)
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res => { return res.json() })
        .then(country => {
            const markup = countryCard(country)
            console.log(markup)
})
}
