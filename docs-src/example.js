import Header from './components/header/header.js';
import Main from './components/main/main.js';
import './example.scss';

const header = new Header();
const main = new Main();

const App = ($) => {
  const $header = $('#header');
  const $main = $('#main');
  // const $footer = $('#footer');
  const bindEvent = () => {
    window.addEventListener('hashchange', function() {
      render();
    });
  };
  const init = () => {
    _renderHeader();
    render();
    bindEvent();
  };
  const render = () => {
    _renderMain();
  };
  const _renderHeader = () => {
    $header.html(header.tpl({ title: 'Hopeful' }));
  };
  const _renderMain = () => {
    $main.html(main.tpl(location.hash));
  };
  init();
};
App(Zepto);
