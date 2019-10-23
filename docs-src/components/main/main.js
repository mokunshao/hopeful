import Main from './main.ejs';
import './main.scss';
import Layout from './layout/layout.js';
import Form from './form/form.js';

export default function() {
  return {
    name: 'Main',
    tpl(hash) {
      if (hash === '#layout') {
        return new Layout().tpl();
      }
      if (hash === '#form') {
        return new Form().tpl();
      }
      return Main();
    },
  };
}
