import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { markupCountryList, markupCoutryDetailed } from './markups.js';
import { refs } from './refs.js';
let countryName = '';
const BASE_URL = `https://restcountries.com/v3.1/name/`;

export function fetchCountries(event) {
  countryName = event.target.value.trim();
  if (countryName.length != 0)
    return fetch(
      `${BASE_URL}${countryName}?fields=name,capital,population,flags,languages`
    )
      .then(r => r.json())
      .then(response => {
        if (response.status === 404) {
          refs.countryList.innerHTML = '';
          refs.countryInfo.innerHTML = '';
          throw new Error('Error - 404');
        } else if (response.length >= 10) {
          Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
          refs.countryList.innerHTML = '';
          refs.countryInfo.innerHTML = '';
        } else if (response.length > 1) {
          refs.countryInfo.innerHTML = '';
          markupCountryList(response);
        } else {
          refs.countryList.innerHTML = '';
          markupCoutryDetailed(response);
        }
      })
      .catch(() => Notify.failure(`Oops, there is no country with that name`));
}
