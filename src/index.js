import Tooltip from './main-ui/tooltip';
import Dropdown from './main-ui/dropdown';

// create a tooltip

const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.initialize();

// create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.initialize();
})
