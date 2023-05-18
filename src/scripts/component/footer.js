/* eslint-disable linebreak-style */
class FooterElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
            <p>Copyright © 2023 - Flavor Guide Corporation</p>
        </footer>
    `;
  }
}

customElements.define('footer-element', FooterElement);
