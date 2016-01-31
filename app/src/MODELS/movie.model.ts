
export interface Movie {
    title: string;
    poster: string;
}

export interface MovieResponse {
    title: string;
    backdrop_path: string;
    poster_path: string;
}

export interface MovieDbResponse {
    movie_results: MovieResponse[];
}