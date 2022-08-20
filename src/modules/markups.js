import { refs } from './refs.js';

export function markupCountryList(response) {
  refs.countryList.innerHTML = response
    .map(({ flags: { svg: flagSVG }, name: { common: commonName } }) => {
      return `<li><img src=${flagSVG} width="30" height="100%"><p class="country-list__name">${commonName}</p></li>`;
    })
    .join('');
}
export function markupCoutryDetailed(response) {
  refs.countryInfo.innerHTML = response
    .map(
      ({
        flags: { svg: flagSVG },
        name: { common: commonName },
        population,
        languages,
        capital,
      }) => {
        let languagesStr = Object.values(languages).join(', ');
        return `
        <ul>
        <li><img src=${flagSVG} width="50px" height="100%"/><h1 class="country-info__title">${commonName}</h1></li>
        <li class="country-info__item"><p><b>Capital:</b> ${capital}</p></li>
        <li class="country-info__item"><p><b>Population:</b> ${population}</p></li>
        <li class="country-info__item"><p><b>Languages:</b> ${languagesStr}</p></li>
        </ul>`;
      }
    )
    .join('');
}
