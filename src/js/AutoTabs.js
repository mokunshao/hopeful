import { Tabs } from './Tabs';

export function AutoTabs(id, index) {
  Tabs.call(this, id, index);
}

AutoTabs.prototype = new Tabs();
AutoTabs.prototype.constructor = AutoTabs;

export default AutoTabs;
