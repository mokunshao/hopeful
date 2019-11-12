import { Tabs } from './Tabs';

export function AutoTabs(id, index, duration) {
  Tabs.call(this, id, index);
  this.lenght = this.tabs.lenght;
  this.duration = duration || 3000;
  this.start();
}

AutoTabs.prototype = new Tabs();
AutoTabs.prototype.constructor = AutoTabs;

AutoTabs.prototype.start = function () {
  const max = this.tabs.length - 1;
  let i = this.current;
  setInterval(() => {
    i += 1;
    if (i > max) {
      i = 0;
    }
    this.active(i);
  }, this.duration);
};

export default AutoTabs;
