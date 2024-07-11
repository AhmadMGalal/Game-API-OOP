import { Display } from './display.module.js';

export class Details {
  constructor(id) {
    this.closeDetails();
    this.loader = document.querySelector('.loading');
    this.detail = this.getDetail(id);
  }

  closeDetails() {
    document.getElementById('close').addEventListener('click', () => {
      document.getElementById('game-details').classList.add('d-none');
      document.getElementById('game-section').classList.remove('d-none');
      document.getElementById('detailPage').innerHTML = '';
    });
  }
  async getDetail(id) {
    this.loader.classList.remove('d-none');
    try {
      let url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'x-rapidapi-key':
            '61d1bb5d84mshf37e5b3bdc93489p11387ejsn84298acda70d',
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        },
      });
      const result = await response.json();
      console.log(result);
      new Display().displayGameDetails(result);
      this.loader.classList.add('d-none');
    } catch (error) {
      console.error(error);
    }
  }
}
