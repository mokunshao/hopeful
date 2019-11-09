export class Tabs {
  constructor(id) {
    this.main = document.getElementById(id);
    [this.head] = this.main.getElementsByClassName('tabs-head');
    this.tabs = this.main.getElementsByClassName('tab');
    this.panes = this.main.getElementsByClassName('pane');
    this.index = 0;
    this.tabs[this.index].classList.add('active');
    this.panes[this.index].classList.add('active');
  }

  bindEvent() {
    this.head.addEventListener('click', (e) => {
      const index = Array.prototype.indexOf.call(this.tabs, e.target);
      if (index !== -1) {
        this.tabs[this.index].classList.remove('active');
        this.panes[this.index].classList.remove('active');
        this.index = index;
        this.tabs[this.index].classList.add('active');
        this.panes[this.index].classList.add('active');
      }
    });
  }

  init() {
    this.bindEvent();
  }
}

export default Tabs;
