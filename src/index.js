import './css/styles.css';
var debounce = require('lodash.debounce');
import { fetchCountries } from './modules/fetchCountries.js';
import { refs } from './modules/refs.js';
const DEBOUNCE_DELAY = 300;

refs.searchBox.addEventListener(
  'input',
  debounce(fetchCountries, DEBOUNCE_DELAY)
);
