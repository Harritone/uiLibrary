import Tooltip from './main-ui/tooltip';
import Dropdown from './main-ui/dropdown';
import Tabs from './main-ui/tabs';
import Snackbar from './main-ui/snackbar';

// create a tooltip

const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.initialize();

// create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.initialize();
})

// create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.initialize();

//create snackbar
const snackbar = new Snackbar();
snackbar.initialize();
const button = document.querySelector('button');
button.addEventListener('click', () => {
  snackbar.show('you clicked me');
});
