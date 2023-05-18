/* eslint-disable linebreak-style */
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Beranda = {
  async render() {
    const hero = document.querySelector('#hero');
    hero.style.display = 'flex';
    return `
            <section class="content">
                <div class="explore">
                    <h1 class="explore__label">Explore Restaurant</h1>
                    <div class="lineExplore"></div>
                    <div class="posts" id="postExplore">
                        
                    </div>
                </div>
            </section>
        `;
  },

  async afterRender() {
    const { restaurants } = await RestaurantDbSource.listAllResaturant();
    const container = document.querySelector('#postExplore');
    restaurants.forEach((restaurant) => {
      container.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Beranda;
