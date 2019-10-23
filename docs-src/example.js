import Header from './components/header/header.js';
import './example.scss';

const header = new Header();

const App = ($) => {
  const $app = $('#app');
  const init = () => {
    render();
  };
  const render = () => {
    _renderHeader();
    _renderMain();
  };
  const _renderHeader = () => {
    $app.append(header.tpl({ title: 'Hopeful' }));
  };
  const _renderMain = () => {};
  init();
};
App(Zepto);
