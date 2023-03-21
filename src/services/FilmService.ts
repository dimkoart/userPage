import axios from 'axios'

export class FilmService {
  static async fetchFilms(page: number) {
    return (
      await axios.get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${page}`,
        {
          headers: {
            'X-API-KEY': '749a89d2-dbfe-4109-a771-6d6ad3b950b4',
          },
        }
      )
    ).data
  }
}
