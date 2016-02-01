
export interface Movie {
    id: number;
    imdb_id?: string;
    title: string;
    backdropUrl: string;
    posterUrl: string;
    overview: string;
    popularity: number;
    releaseDate: string;
    voteAverage: number;
    voteCount: number;
    imdbRating?: number;
    tomatoCriticRating?: number;
    tomatoUserRating?: number;
    metaRating?: number;
    superRating?: number;
    
    genre?: string[];
    year?: number;
}

export interface MovieResponse {
    id: number;
    imdb_id: string;
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

export interface OmdbMovie {
    Actors?: string;
    Awards?:  string;
    BoxOffice?:  string;
    Country?:  string;
    DVD?:  string;
    Director?:  string;
    Genre?:  string;
    Language?:  string;
    Metascore?:  string;
    Plot?:  string;
    Poster?:  string;
    Production?:  string;
    Rated?:  string;
    Released?:  string;
    Response?:  string;
    Runtime?:  string;
    Title?:  string;
    Type?:  string;
    Website?:  string;
    Writer?:  string;
    Year?:  string;
    imdbID?:  string;
    imdbRating?:  string;
    imdbVotes?:  string;
    tomatoConsensus?:  string;
    tomatoFresh?:  string;
    tomatoImage?:  string;
    tomatoMeter?: string;
    tomatoRating?:  string;
    tomatoReviews?:  string;
    tomatoRotten?:  string;
    tomatoURL?:  string;
    tomatoUserMeter?: string;
    tomatoUserRating?:  string;
    tomatoUserReviews?:  string;
}