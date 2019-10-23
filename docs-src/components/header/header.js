import Header from './header.ejs';
import './header.scss';
export default function() {
  return {
    name: 'Header',
    tpl(options) {
      return Header(options);
    },
  };
}
