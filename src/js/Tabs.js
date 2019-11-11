export function Tabs(id, callback) {
  this.element = document.querySelector(id);
  [this.head] = this.element.querySelectorAll('.tabs-head');
  this.tabs = this.element.querySelectorAll('.tabs-head .tab');
  this.panes = this.element.querySelectorAll('.tabs-body .pane');
  this.index = 0;
  this.getInitTabIndex();
  this.changeTab(this.index);
  this.callback = callback;
}

Tabs.prototype.getInitTabIndex = function () {
  Array.prototype.forEach.call(this.tabs, (item) => {
    if (item.classList.contains('active')) {
      this.index = Array.prototype.indexOf.call(this.tabs, item);
    }
  });
};

Tabs.prototype.bindEvent = function () {
  this.head.addEventListener('click', (e) => {
    if (this.callback) this.callback(e.target);
    const index = Array.prototype.indexOf.call(this.tabs, e.target);
    if (index !== -1) {
      this.changeTab(index);
    }
  });
};

Tabs.prototype.changeTab = function (index) {
  if (this.index !== index) {
    this.tabs[this.index].classList.remove('active');
    this.panes[this.index].classList.remove('active');
    this.index = index;
  }
  this.tabs[this.index].classList.add('active');
  this.panes[this.index].classList.add('active');
};

Tabs.prototype.init = function () {
  this.bindEvent();
};

Tabs.prototype.active = function (index) {
  console.log(index);
};

export default Tabs;
