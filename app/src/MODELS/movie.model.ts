
export interface Movie {
    title: string;
    backdropUrl: string;
    posterUrl: string;
    overview: string;
    popularity: number;
    releaseDate: string;
    voteAverage: number;
    voteCount: number;
}

export interface MovieResponse {
    title: string;
    backdrop_path: string;
    poster_path: string;
    overview: string;
    popularity: number;
    release_date: string;
    vote_average: number;
    vote_count: number;
}

export interface MovieDbResponse {
    movie_results: MovieResponse[];
}

export interface MovieResult {
    results: MovieResponse[];
}