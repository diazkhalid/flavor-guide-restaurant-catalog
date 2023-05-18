/* eslint-disable linebreak-style */
class skipToContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = '<button href="#main-content" class="skip-to-content">Skip To Content</button>';
  }
}

customElements.define('skip-to-content', skipToContent);
