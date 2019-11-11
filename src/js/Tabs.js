export function Tabs(id, index) {
  if (!id) return;
  this.element = document.querySelector(id);
  this.head = this.element.querySelector('.tabs-head');
  this.tabs = this.element.querySelectorAll('.tabs-head .tab');
  this.panes = this.element.querySelectorAll('.tabs-body .pane');
  this.current = index || 0;
}


Tabs.prototype.bindEvent = function () {
  this.head.addEventListener('click', (e) => {
    const index = Array.prototype.indexOf.call(this.tabs, e.target);
    if (index !== -1) {
      this.active(index);
    }
  });
};

Tabs.prototype.active = function (index) {
  this.tabs[this.current].classList.remove('active');
  this.panes[this.current].classList.remove('active');
  if (typeof index === 'number') {
    this.tabs[index].classList.add('active');
    this.panes[index].classList.add('active');
    this.current = index;
  }
};

Tabs.prototype.init = function () {
  this.active(this.current);
  this.bindEvent();
};

export default Tabs;
