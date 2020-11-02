import countryCard from './template.hbs'
import countryList from './template-list.hbs'
import fetchCountry from './fetchCountries'
import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/PNotify.css'
import '@pnotify/mobile/dist/PNotifyMobile.css'
import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js'
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js'
import './styles.css'

const debounce = require('lodash.debounce')


const inputEl = document.querySelector('.input-control')
const markapCard = document.querySelector('.container-js')

inputEl.addEventListener('input', debounce(onInputCountry,500))

defaultModules.set(PNotifyMobile, {});

function onInputCountry(event) {
    const name = event.target.value
    if (name === '') {
        markapCard.innerHTML = ''
        return
    }

    fetchCountry(name)
        .then(renderCountryCard)
        .catch()
        .finally()
}


function renderCountryCard(countrys) {
    const markup = countryCard(countrys)
    const markupCountryList = countryList(countrys)

    if (countrys.length > 10) {
    alert("Too many matches found. Pleace enter a more specific query!") 
    }

    if (countrys.length >= 2 && countrys.length <= 10) {
        markapCard.innerHTML = markupCountryList
    }

    if (countrys.length === 1) {
        markapCard.innerHTML = markup
    }
}
