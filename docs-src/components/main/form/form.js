import Form from './form.ejs';
import './form.scss';
export default function() {
  return {
    name: 'Form',
    tpl(options) {
      return Form(options);
    },
  };
}
