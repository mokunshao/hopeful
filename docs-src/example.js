import './example.scss';
import { Tabs, AutoTabs } from '../src/index';

const tabs = new Tabs('#tabs1', 2);
const tabs2 = new AutoTabs('#tabs2', 2);

tabs.init();
tabs2.init();
