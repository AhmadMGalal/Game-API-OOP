export class Display {
  constructor() {}

  displayGames(gamesData) {
    let gamesCards = gamesData.map((el) => {
      return `<div class="col-md-6 col-lg-3 outer-card pointer align-self-stretch">
            <div class="h-100 inner game-card text-center border border-2 rounded-3 border-black border-opacity-10 d-flex flex-column justify-content-between"
              id="g-card" data-id=${el.id} >
              <div class="thumbnail-title p-2">
                <img class="w-100 mb-2" src="${el.thumbnail}" alt="game-image" />
                <div class="game-title d-flex align-items-baseline justify-content-between px-3">
                  <p class="font-comfortaa text-white">${el.title}</p>
                  <span class="badge bg-primary font-comfortaa">Free</span>
                </div>
                <div class="short-description">
                  <p class="text-secondary font-comfortaa">
                    ${el.short_description}
                  </p>
                </div>
              </div>
              <div class="genre d-flex justify-content-between p-2 border-top border-2 border-black border-opacity-10">
                <span class="badge bg-secondary">${el.genre}</span>
                <span class="badge bg-secondary">${el.platform}</span>
              </div>
            </div>
          </div>`;
    });
    document.getElementById('g-cards').innerHTML = gamesCards.join(' ');
  }

  displayGameDetails(gameData) {
    let gameDetails = `<div class="col-md-4">
              <img
                class="w-100 mb-3"
                src="${gameData.thumbnail}"
                alt="game-image" />
            </div>
            <div class="col-md-8">
              <h5 class="font-comfortaa text-white">
                Title: <span>${gameData.title}</span>
              </h5>
              <h5 class="font-comfortaa text-white">
                Category: <span class="badge bg-primary">${gameData.genre}</span>
              </h5>
              <h5 class="font-comfortaa text-white">
                Platform: <span class="badge bg-primary">${gameData.platform}</span>
              </h5>
              <h5 class="font-comfortaa text-white">
                Status: <span class="badge bg-primary">${gameData.status}</span>
              </h5>
              <p class="font-comfortaa text-white">
                ${gameData.description}
              </p>
              <a class="btn btn-outline-warning font-comfortaa mb-4" target="_blank" href = "${gameData.game_url}">
                Show Game
              </a>
            </div>`;

    document.getElementById('detailPage').innerHTML = gameDetails;
  }
}
