// DropDown component module

class DropDown {
  constructor(items, id) {
    this.items = items;
    this.id = id;
    this.state_open = false;
    this.styles = {
      palette: {
        default: {
          background: "#123",
          color: "#fff",
        },
        active: {
          background: "#eee",
          color: "#234",
        },
      },
    };
  }
  render() {
    let rootDiv = document.getElementById(this.id);
    rootDiv.style.display = "inline-block";
    rootDiv.style.fontFamily = "Arial";
    rootDiv.style.minWidth = "200px";
    rootDiv.innerHTML = `
    <a href="#" class="" style="
        background: ${this.styles.palette.default.background};
        color: ${this.styles.palette.default.color};
        padding: 1em;
        text-decoration: none;
        display: block;
    ">
    <i class="${this.items.root.icon}"></i>
    <span style="float: right">${this.items.root.label}</span>
    <a/>
    `;

    if (this.state_open) {
      let html = ``;
      for (let i = 0; i < this.items.children.length; i++) {
        html += `
        <a href="#" class="item" style="
        background: ${this.styles.palette.default.background};
        color: ${this.styles.palette.default.color};
        padding: 1em;
        text-decoration: none;
        display: block;
        ">
        <i class="${this.items.children[i].icon}"></i>
        <span style="float: right">${this.items.children[i].label}</span>
        <a/>
        `;
      }
      rootDiv.innerHTML += html;
    }
    let rootLink = document.querySelector(`#${this.id} > a`);
    let items = document.querySelectorAll(`#${this.id} > .item`);
    for (let i = 0; i < items.length; i++) {
      items[i].addEventListener("mouseover", this.mouseoverHandler.bind(this));
    }
    for (let i = 0; i < items.length; i++) {
      items[i].addEventListener("mouseout", this.mouseoutHandler.bind(this));
    }
    rootLink.addEventListener("click", this.clickHandler.bind(this));
  }
  clickHandler() {
    this.state_open = !this.state_open; // HW 2
    // if (this.state_open) {
    //   this.state_open = false;
    // } else {
    //   this.state_open = true;
    // }
    this.render();
  }
  mouseoverHandler(e) {
    e.target.style.color = `${this.styles.palette.active.color}`;
    e.target.style.background = `${this.styles.palette.active.background}`;
  }
  mouseoutHandler(e) {
    e.target.style.color = `${this.styles.palette.default.color}`;
    e.target.style.background = `${this.styles.palette.default.background}`;
  }
}
