/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
import API_ENDPOINT from '../../globals/api-endpoint';
import DetailHelper from '../../utils/detail-helper';

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="wrapper">
        <div id="restaurantName" class="box1">
            <h1>${restaurant.name}</h1>
        </div>
        <div class="box2">
            <img src="${API_ENDPOINT.IMAGE_LARGE(restaurant.pictureId)}" alt="" id="restaurant-img">
        </div>
        <div class="box3">
            <h4>Lokasi</h4>
            <hr>
            <table>
                <tr>
                    <th>Alamat</th>
                    <td>${restaurant.address}</td>
                </tr>
                <tr>
                    <th>Kota</th>
                    <td>${restaurant.city}</td>
                </tr>
            </table>
        </div>
        <div class="box4">
            <div class="desc-box" id="desc-box">
                <h4>Deskripsi</h4>
                <hr>
                <p>${restaurant.description}</p>
            </div>
        </div>

        <div class="box5">
            <div id="foods-box">
                <h4>Menu Makanan</h4>
                <hr>
                <div style="padding: 0;">
                    <ul class="list-menu">
                    ${DetailHelper.eachFoodsMenu(restaurant.menus)}
                    </ul>
                </div>
            </div>
        </div>
        <div class="box6">
            <div id="drinks-box">
                <h4>Menu Minuman</h4>
                <hr>
                <div style="padding: 0;">
                    <ul class="list-menu">
                    ${DetailHelper.eachDrinksMenu(restaurant.menus)}
                    </ul>
                </div>
            </div>
        </div>
        <div class="box7">
            <div id="customerReview-box">
                <h4>Review Pelanggan</h4>
                <hr>
                <div id="review-container">
                    <ul class="list-review">
                    ${DetailHelper.eachCustomersReview(restaurant)}
                    </ul>
                </div>
            </div>
        </div>
    </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <article class="post-item">
        <img class="post-item__thumbnail lazyload" data-src="${API_ENDPOINT.IMAGE_SMALL(restaurant.pictureId)}"
        alt="Restaurant ${restaurant.name}">
            <div class="post-item__content">
                <p class="post-item__date">Lokasi <span href="#" class="post-item__date__author">${restaurant.city}</span>
                </p>
                <h1 class="post-item__title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
            </div>
    </article>
`;

const createFoodItemTemplate = (food) => `
    <li class="menu-item">${food.name}</li>
    <hr>
`;

const createDrinkItemTemplate = (drink) => `
    <li class="menu-item">${drink.name}</li>
    <hr>
`;

const createCustomerReviewTemplate = (customerReview) => `
    <li class="item-list-review">
        <span class="custName">${customerReview.name}
        </span><span class="custDate">(${customerReview.date})</span>
        <p class="reviewText">${customerReview.review}</p>
    </li>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createFoodItemTemplate,
  createDrinkItemTemplate,
  createCustomerReviewTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
