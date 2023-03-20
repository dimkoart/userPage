import axios from 'axios'

export class FilmService {
  static async fetchFilms(page: number) {
    return (
      await axios.get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${page}`,
        {
          headers: {
            'X-API-KEY': '58288e48-fd39-4e9c-98f1-f8c9d79b8e83',
          },
        }
      )
    ).data
  }
}
