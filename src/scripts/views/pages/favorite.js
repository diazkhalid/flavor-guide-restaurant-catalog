/* eslint-disable linebreak-style */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    const hero = document.querySelector('#hero');
    hero.style.display = 'none';
    return `
            <section class="content">
                <div class="explore">
                    <h1 class="favorite__label">Your Favorite Restaurant</h1>
                    <div class="lineFavorite"></div>
                    <div class="posts" id="postExplore">
                        
                    </div>
                </div>
            </section>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const mainContainer = document.querySelector('#postExplore');
    if (restaurants.length === 0) {
      const noRestaurants = document.createElement('h2');
      noRestaurants.innerHTML = '<h2>No Liked Restaurant</h2>';
      noRestaurants.setAttribute('id', 'not-found');
      mainContainer.appendChild(noRestaurants);
    }
    const container = document.querySelector('#postExplore');
    restaurants.forEach((restaurant) => {
      container.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
