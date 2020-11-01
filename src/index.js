import countryCard from './template.hbs'
import fetchCountry from './fetchCountries'
import notify from '@pnotify/core'
const debounce = require('lodash.debounce')
import './styles.css'


const inputEl = document.querySelector('.input-control')
const markapCard = document.querySelector('.container-js')

inputEl.addEventListener('input', debounce(onInputCountry,500))

notify.styling = 'material'
notify.icons = 'material'

function onInputCountry(event) {
    const name = event.target.value

    fetchCountry(name)
        .then(renderCountryCard
        )
        .catch()
        .finally()
}


function renderCountryCard(country) {
    const markup = countryCard(country)
        markapCard.innerHTML = markup
}
