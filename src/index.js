import countryCard from './template.hbs'
import fetchCountry from './fetchCountries'
import '@pnotify/core/dist/Material.css';
import { defaults } from '@pnotify/core';
import './styles.css'
const debounce = require('lodash.debounce')


const inputEl = document.querySelector('.input-control')
const markapCard = document.querySelector('.container-js')

inputEl.addEventListener('input', debounce(onInputCountry,500))

defaults.styling = 'material';
defaults.icons = 'material';

function onInputCountry(event) {
    const name = event.target.value

    fetchCountry(name)
        .then(renderCountryCard)
        .catch()
        .finally()
}


function renderCountryCard(country) {
    const markup = countryCard(country)
        markapCard.innerHTML = markup
}
