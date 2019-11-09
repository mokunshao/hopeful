export class Tabs {
  constructor(id, callback) {
    this.main = document.getElementById(id);
    [this.head] = this.main.getElementsByClassName('tabs-head');
    this.tabs = this.main.getElementsByClassName('tab');
    this.panes = this.main.getElementsByClassName('pane');
    this.index = 0;
    this.getInitTabIndex();
    this.changeTab(this.index);
    this.callback = callback;
  }

  getInitTabIndex() {
    Array.prototype.forEach.call(this.tabs, (item) => {
      if (item.classList.contains('active')) {
        this.index = Array.prototype.indexOf.call(this.tabs, item);
      }
    });
  }

  bindEvent() {
    this.head.addEventListener('click', (e) => {
      if (this.callback) this.callback(e.target);
      const index = Array.prototype.indexOf.call(this.tabs, e.target);
      if (index !== -1) {
        this.changeTab(index);
      }
    });
  }

  changeTab(index) {
    if (this.index !== index) {
      this.tabs[this.index].classList.remove('active');
      this.panes[this.index].classList.remove('active');
      this.index = index;
    }
    this.tabs[this.index].classList.add('active');
    this.panes[this.index].classList.add('active');
  }

  init() {
    this.bindEvent();
  }
}

export default Tabs;
