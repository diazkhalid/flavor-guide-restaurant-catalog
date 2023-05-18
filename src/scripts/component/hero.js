/* eslint-disable linebreak-style */
class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero" id="hero">
        <picture class="hero__img">
        <source media="(max-width: 480px)" srcset="./images/hero-image_4-small.jpg">
        <source media="(max-width: 800px)" srcset="./images/hero-image_4-large.jpg">
            <img src="./hero-image_4.jpg" alt="restaurant hero image">
        </picture>
        <div class="hero__content">
            <h1 class="hero__title">CHOOSE YOUR EXPERIENCE</h1>
            <p class="hero__description">Pilih dan Temukan Pengalaman Mu Di sini</p>
        </div>
    </div>
    `;
  }
}

customElements.define('hero-element', Hero);
