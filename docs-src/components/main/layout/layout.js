import Layout from './layout.ejs';
import './layout.scss';
export default function() {
  return {
    name: 'Layout',
    tpl(options) {
      return Layout(options);
    },
  };
}
