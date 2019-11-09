import './example.scss';
import { Tabs } from '../src/index';

function callback(value) {
  console.log(value);
}

const tabs = new Tabs('tabs1');
const tabs2 = new Tabs('tabs2', callback);

tabs.init();
tabs2.init();
