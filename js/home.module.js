import { Details } from './details.module.js';
import { Display } from './display.module.js';

const APIKEY = '61d1bb5d84mshf37e5b3bdc93489p11387ejsn84298acda70d';
const BASE_URL =
  'https://free-to-play-games-database.p.rapidapi.com/api/games?';
let param = {
  category: 'mmorpg',
  id: '582',
};
let url = '';

export class Home {
  constructor() {
    document.querySelectorAll('.nav-link').forEach((el) => {
      el.addEventListener('click', () => {
        document
          .querySelector('.navbar-nav .active')
          .classList.remove('active');
        el.classList.add('active');
        param.category = el.id; //setting category to be added in URL
        this.appHandler();
      });
    });
    this.loader = document.querySelector('.loading');
    this.display = new Display();
    this.gameDetails = document.getElementById('game-details');
    this.gameSection = document.getElementById('game-section');
    this.appHandler();
  }

  async appHandler() {
    this.generateURL();
    const gamesData = await this.fetchGames();
    this.display.displayGames(gamesData);
    this.addEventToCards();
  }

  generateURL(params = 'category') {
    url = `${BASE_URL}${params}=${param[params]}`;
    console.log(url);
  }

  async fetchGames() {
    this.loader.classList.remove('d-none');
    console.log(url);
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'x-rapidapi-key':
            '61d1bb5d84mshf37e5b3bdc93489p11387ejsn84298acda70d',
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        },
      });
      console.log(response);
      const result = await response.json();
      console.log(result);
      this.loader.classList.add('d-none');
      return result;
    } catch (error) {
      console.error(error);
    }
  }
  addEventToCards() {
    document.querySelectorAll('.game-card').forEach((el) => {
      el.addEventListener('click', () => {
        this.gameDetails.classList.remove('d-none');
        this.gameSection.classList.add('d-none');
        console.log(el.getAttribute('data-id'));
        new Details(el.getAttribute('data-id'));
      });
    });
  }
}
