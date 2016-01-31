
export interface Movie {
    title: string;
    backdropUrl: string;
    posterUrl: string;
}

export interface MovieResponse {
    title: string;
    backdrop_path: string;
    poster_path: string;
}

export interface MovieDbResponse {
    movie_results: MovieResponse[];
}

export interface MovieResult {
    results: MovieResponse[];
}