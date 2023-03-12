import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

import { API_KEY, TMBD_BASE_URL } from "../utils/constraint";
const initialState = {
  movies: [],
  genres: [],
  celebs: [],
  movies_trending: [],
  movies_upcoming: [],
  movies_latest: [],
  genresLoaded: false,
  // movie_details: [],
  // isLoading: false,
  // errorMessage: "",
};
export const getGenres = createAsyncThunk("movies/genres", async () => {
  const {
    data: { genres },
  } = await axios.get(`${TMBD_BASE_URL}/3/genre/movie/list?api_key=${API_KEY}`);
  return genres;
});
export const getMovieTrending = createAsyncThunk(
  "movies/trending",
  async ({ type }, thunkApi) => {
    const {
      movies: { genres },
    } = thunkApi.getState();
    return getRawData(
      `${TMBD_BASE_URL}/3/movie/${type}?api_key=${API_KEY}`,
      genres,
      true
    );
  }
);
export const getMovieLatest = createAsyncThunk(
  "movies/lastest",
  async ({ type }, thunkApi) => {
    const {
      movies: { genres },
    } = thunkApi.getState();
    return getRawData(
      `${TMBD_BASE_URL}/3/movie/${type}?api_key=${API_KEY}`,
      genres,
      true
    );
  }
);
export const getMovieUpComing = createAsyncThunk(
  "movies/upcoming",
  async ({ type }, thunkApi) => {
    const {
      movies: { genres },
    } = thunkApi.getState();
    return getRawData(
      `${TMBD_BASE_URL}/3/movie/${type}?api_key=${API_KEY}`,
      genres,
      true
    );
  }
);
export const fetchMovies = createAsyncThunk(
  "movies/movie",
  async ({ type }, thunkApi) => {
    const {
      movies: { genres },
    } = thunkApi.getState();
    return getRawData(
      `${TMBD_BASE_URL}/3/trending/${type}/week?api_key=${API_KEY}`,
      genres,
      true
    );
  }
);
export const fetchMovieOfPage = createAsyncThunk(
  "movies/movieofpage",
  async ({ type, page }, thunkApi) => {
    const {
      movies: { genres },
    } = thunkApi.getState();
    return getRawDataPage(
      `${TMBD_BASE_URL}/3/trending/${type}/week?api_key=${API_KEY}&page=${page}`,
      genres
    );
  }
);
export const fetchCelebOfPage = createAsyncThunk(
  "movies/celebofpage",
  async ({ type, page }, thunkApi) => {
    const {
      movies: { genres },
    } = thunkApi.getState();
    return getRawCelebDataPage(
      `${TMBD_BASE_URL}/3/trending/${type}/week?api_key=${API_KEY}&page=${page}`,
      genres
    );
  }
);
export const getMovieDetails = createAsyncThunk(
  "movieDetails/MovieDetails",
  async ({ movie_id }) => {
    // const array = [];
    const movie_details = await axios.get(
      `${TMBD_BASE_URL}/3/movie/${movie_id}?api_key=${API_KEY}`
    );
    // array.push(movie_details);

    return movie_details.data;
  }
);

export const getListVideoOfMovieDetails = createAsyncThunk(
  "videoOfMoviesDetails/video",
  async ({ movie_id }) => {
    const video = await axios.get(
      `${TMBD_BASE_URL}/3/movie/${movie_id}/videos?api_key=${API_KEY}`
    );
    return video.data;
  }
);
const movieSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.genresLoaded = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(fetchMovieOfPage.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(getMovieTrending.fulfilled, (state, action) => {
      state.movies_trending = action.payload;
    });
    builder.addCase(getMovieLatest.fulfilled, (state, action) => {
      state.movies_latest = action.payload;
    });
    builder.addCase(getMovieUpComing.fulfilled, (state, action) => {
      state.movies_upcoming = action.payload;
    });
    builder.addCase(fetchCelebOfPage.fulfilled, (state, action) => {
      state.celebs = action.payload;
    });
  },
});
const celebSlice = createSlice({
  name: "celebs",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCelebOfPage.fulfilled, (state, action) => {
      state.celebs = action.payload;
    });
  },
});
const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    movie_details: [],
    isLoading: false,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getMovieDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMovieDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movie_details = action.payload;
    });
    builder.addCase(getMovieDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });
  },
});

const videoOfMoviesDetailsSlice = createSlice({
  name: "videoOfMoviesDetails",
  initialState: {
    videos_movies: [],
    isLoading: false,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getListVideoOfMovieDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getListVideoOfMovieDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.videos_movies = action.payload;
    });
    builder.addCase(getListVideoOfMovieDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });
  },
});
//get líst image of movie
export const getListImageOfMovieDetails = createAsyncThunk(
  "listImageOfMovie/image",
  async ({ movie_id }) => {
    const video = await axios.get(
      `${TMBD_BASE_URL}/3/movie/${movie_id}/images?api_key=${API_KEY}`
    );
    return video.data;
  }
);
const ListImageOfMovie = createSlice({
  name: "listImageOfMovie",
  initialState: {
    images_movies: [],
    isLoading: false,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getListImageOfMovieDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getListImageOfMovieDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.images_movies = action.payload;
    });
    builder.addCase(getListImageOfMovieDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });
  },
});
//get líst credit of movie
export const getListCreditOfMovieDetails = createAsyncThunk(
  "listCreditForMovie/credit",
  async ({ movie_id }) => {
    const credit = await axios.get(
      `${TMBD_BASE_URL}/3/movie/${movie_id}/credits?api_key=${API_KEY}`
    );
    return credit.data;
  }
);
const ListCreditForMovie = createSlice({
  name: "listCreditForMovie",
  initialState: {
    credits_movies: [],
    isLoading: true,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getListCreditOfMovieDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getListCreditOfMovieDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.credits_movies = action.payload;
    });
    builder.addCase(getListCreditOfMovieDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });
  },
});

//get líst similar  movie
export const getListSimilarMovieDetails = createAsyncThunk(
  "listSimilarMovieDetails/movie",
  async ({ movie_id }) => {
    const similar = await axios.get(
      `${TMBD_BASE_URL}/3/movie/${movie_id}/similar?api_key=${API_KEY}&page=3`
    );
    return similar.data;
  }
);
const ListSimilarMovieDetails = createSlice({
  name: "listSimilarMovieDetails",
  initialState: {
    similar_movies: [],
    isLoading: true,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getListSimilarMovieDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getListSimilarMovieDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.similar_movies = action.payload;
    });
    builder.addCase(getListSimilarMovieDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });
  },
});

//get review movie
export const getListReviewMovieDetails = createAsyncThunk(
  "listReviewMovieDetails/movie",
  async ({ movie_id }) => {
    const review = await axios.get(
      `${TMBD_BASE_URL}/3/movie/${movie_id}/reviews?api_key=${API_KEY}`
    );
    return review.data;
  }
);
const ListReviewMovieDetails = createSlice({
  name: "listReviewMovieDetails",
  initialState: {
    review_movies: [],
    isLoading: true,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getListReviewMovieDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getListReviewMovieDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.review_movies = action.payload;
    });
    builder.addCase(getListReviewMovieDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });
  },
});
//
export const gettvDetails = createAsyncThunk(
  "tv/tvDetail",
  async ({ tv_id }) => {
    // const array = [];
    const tv_details = await axios.get(
      `${TMBD_BASE_URL}/3/tv/${tv_id}?api_key=${API_KEY}`
    );
    // array.push(tv_details);

    return tv_details.data;
  }
);

export const getListVideoOftvDetails = createAsyncThunk(
  "videoOftvsDetails/video",
  async ({ tv_id }) => {
    const video = await axios.get(
      `${TMBD_BASE_URL}/3/tv/${tv_id}/videos?api_key=${API_KEY}`
    );
    return video.data;
  }
);

const tvDetailsSlice = createSlice({
  name: "tvDetail",
  initialState: {
    tv_details: [],
    isLoading: false,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder.addCase(gettvDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(gettvDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.tv_details = action.payload;
    });
    builder.addCase(gettvDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });
  },
});

const videoOftvsDetailsSlice = createSlice({
  name: "videoOftvsDetails",
  initialState: {
    videos_tvs: [],
    isLoading: false,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getListVideoOftvDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getListVideoOftvDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.videos_tvs = action.payload;
    });
    builder.addCase(getListVideoOftvDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });
  },
});
//get líst image of tv
export const getListImageOftvDetails = createAsyncThunk(
  "listImageOftv/image",
  async ({ tv_id }) => {
    const video = await axios.get(
      `${TMBD_BASE_URL}/3/tv/${tv_id}/images?api_key=${API_KEY}`
    );
    return video.data;
  }
);
const ListImageOftv = createSlice({
  name: "listImageOftv",
  initialState: {
    images_tvs: [],
    isLoading: false,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getListImageOftvDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getListImageOftvDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.images_tvs = action.payload;
    });
    builder.addCase(getListImageOftvDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });
  },
});
//get líst credit of tv
export const getListCreditOftvDetails = createAsyncThunk(
  "listCreditFortv/credit",
  async ({ tv_id }) => {
    const credit = await axios.get(
      `${TMBD_BASE_URL}/3/tv/${tv_id}/credits?api_key=${API_KEY}`
    );
    return credit.data;
  }
);
const ListCreditFortv = createSlice({
  name: "listCreditFortv",
  initialState: {
    credits_tvs: [],
    isLoading: true,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getListCreditOftvDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getListCreditOftvDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.credits_tvs = action.payload;
    });
    builder.addCase(getListCreditOftvDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });
  },
});

//get líst similar  tv
export const getListSimilartvDetails = createAsyncThunk(
  "listSimilartvDetails/tv",
  async ({ tv_id }) => {
    const similar = await axios.get(
      `${TMBD_BASE_URL}/3/tv/${tv_id}/similar?api_key=${API_KEY}&page=3`
    );
    return similar.data;
  }
);
const ListSimilartvDetails = createSlice({
  name: "listSimilartvDetails",
  initialState: {
    similar_tvs: [],
    isLoading: true,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getListSimilartvDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getListSimilartvDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.similar_tvs = action.payload;
    });
    builder.addCase(getListSimilartvDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });
  },
});
//get review tv
export const getListReviewTvDetails = createAsyncThunk(
  "listReviewTvDetails/movie",
  async ({ tv_id }) => {
    const review = await axios.get(
      `${TMBD_BASE_URL}/3/tv/${tv_id}/reviews?api_key=${API_KEY}`
    );
    return review.data;
  }
);
const ListReviewTvDetails = createSlice({
  name: "listReviewTvDetails",
  initialState: {
    review_tv: [],
    isLoading: true,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getListReviewTvDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getListReviewTvDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.review_tv = action.payload;
    });
    builder.addCase(getListReviewTvDetails.rejected, (state, action) => {
      state.isLoading = false;
      // state.erorMessage = action.payload.message;
    });
  },
});

//CELEB DETAILS
//
export const getCelebDetails = createAsyncThunk(
  "celeb/tvDetail",
  async ({ person_id }) => {
    // const array = [];
    const celeb_details = await axios.get(
      `${TMBD_BASE_URL}/3/person/${person_id}?api_key=${API_KEY}`
    );
    // array.push(tv_details);

    return celeb_details.data;
  }
);

export const getListVideoOfCelebDetails = createAsyncThunk(
  "videoOfCelebDetails/video",
  async ({ person_id }) => {
    const video = await axios.get(
      `${TMBD_BASE_URL}/3/person/${person_id}/movie_credits?api_key=${API_KEY}`
    );
    return video.data;
  }
);

const CelebDetailsSlice = createSlice({
  name: "celebDetail",
  initialState: {
    celeb_details: [],
    isLoading: false,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getCelebDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCelebDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.celeb_details = action.payload;
    });
    builder.addCase(getCelebDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });
  },
});

const videoOfCelebDetailsSlice = createSlice({
  name: "videoOfCelebDetails",
  initialState: {
    videos_celeb: [],
    isLoading: false,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getListVideoOfCelebDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getListVideoOfCelebDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.videos_celeb = action.payload;
    });
    builder.addCase(getListVideoOfCelebDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });
  },
});
//get líst image of tv
export const getListImageOfCelebDetails = createAsyncThunk(
  "listImageOfCeleb/image",
  async ({ person_id }) => {
    const image = await axios.get(
      `${TMBD_BASE_URL}/3/person/${person_id}/images?api_key=${API_KEY}`
    );
    return image.data;
  }
);
const ListImageOfCeleb = createSlice({
  name: "listImageOftv",
  initialState: {
    images_celeb: [],
    isLoading: false,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getListImageOfCelebDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getListImageOfCelebDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.images_celeb = action.payload;
    });
    builder.addCase(getListImageOfCelebDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });
  },
});
//get líst credit of tv
export const getListTvCreditOfCelebDetails = createAsyncThunk(
  "listTvCreditForCeleb/credit",
  async ({ person_id }) => {
    const credit = await axios.get(
      `${TMBD_BASE_URL}/3/person/${person_id}/tv_credits?api_key=${API_KEY}`
    );
    return credit.data;
  }
);
const ListTvCreditForCeleb = createSlice({
  name: "listTvCreditForCeleb",
  initialState: {
    tv_credits_celeb: [],
    isLoading: true,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getListTvCreditOfCelebDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getListTvCreditOfCelebDetails.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.tv_credits_celeb = action.payload;
      }
    );
    builder.addCase(getListTvCreditOfCelebDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });
  },
});

//get episodes of season
export const getEpisodeOfSeason = createAsyncThunk(
  "listEpisodesSliced/episodes",
  async ({ tv_id, season_number }) => {
    const episodes = await axios.get(
      `${TMBD_BASE_URL}/3/tv/${tv_id}/season/${season_number}?api_key=${API_KEY}`
    );

    return episodes.data;
  }
);
const ListEpisodesSliced = createSlice({
  name: "listEpisodesSliced",
  initialState: {
    episode: [],
    isLoading: false,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getEpisodeOfSeason.fulfilled, (state, action) => {
      state.episode = action.payload;
    });
  },
});
//get movie or tv show by genres
export const getItemsByGenres = createAsyncThunk(
  "listItems/genres",
  async ({ type, genre }, thunkApi) => {
    const {
      movies: { genres },
    } = thunkApi.getState();
    return getRawData(
      `${TMBD_BASE_URL}/3/discover/${type}?api_key=${API_KEY}&with_genres=${genre}`,
      genres
    );
  }
);
const ListItemsByGenres = createSlice({
  name: "listItems",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getEpisodeOfSeason.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

//search movie or tv show by query
export const getItemsByQuery = createAsyncThunk(
  "searchItem/query",
  async ({ type, query, page }, thunkApi) => {
    const {
      movies: { genres },
    } = thunkApi.getState();
    if (type === "person") {
      
      return getRawCelebDataPage(
        `${TMBD_BASE_URL}/3/search/${type}?api_key=${API_KEY}&query=${query}&page=${page}`,
        genres
      );
    } else {
      
      return getRawData(
        `${TMBD_BASE_URL}/3/search/${type}?api_key=${API_KEY}&query=${query}&page=${page}`,
        genres
      );
    }
  }
);

const ListItemsByQuery = createSlice({
  name: "searchItem",
  initialState: {
    search_item: [],
    isLoading: true,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getItemsByQuery.fulfilled, (state, action) => {
      state.search_item = action.payload;
      state.isLoading = false;
    });
  },
});
export const store = configureStore({
  reducer: {
    movies: movieSlice.reducer,
    celebs: celebSlice.reducer,
    movieDetails: movieDetailsSlice.reducer,
    videoOfMoviesDetails: videoOfMoviesDetailsSlice.reducer,
    listImageOfMovie: ListImageOfMovie.reducer,
    listCreditForMovie: ListCreditForMovie.reducer,
    listSimilarMovieDetails: ListSimilarMovieDetails.reducer,
    listReviewMovieDetails: ListReviewMovieDetails.reducer,

    tvDetail: tvDetailsSlice.reducer,
    videoOftvsDetails: videoOftvsDetailsSlice.reducer,
    listImageOftv: ListImageOftv.reducer,
    listCreditFortv: ListCreditFortv.reducer,
    listSimilartvDetails: ListSimilartvDetails.reducer,
    listReviewTvDetails: ListReviewTvDetails.reducer,

    celebDetail: CelebDetailsSlice.reducer,
    videoOfCelebDetails: videoOfCelebDetailsSlice.reducer,
    listImageOfCeleb: ListImageOfCeleb.reducer,
    listTvCreditForCeleb: ListTvCreditForCeleb.reducer,

    listEpisodesSliced: ListEpisodesSliced.reducer,

    listItems: ListItemsByGenres.reducer,

    searchItem: ListItemsByQuery.reducer,
  },
});

const createArrayFromRowData = (
  array,
  moviesArray,
  genres,
  total_pages,
  total_results
) => {
  array.forEach((movie) => {
    const movieGenres = [];
    movie.genre_ids.forEach((genre) => {
      const name = genres.find(({ id }) => id === genre);
      if (name) movieGenres.push(name.name);
    });
    if (movie.backdrop_path) {
      moviesArray.push({
        id: movie.id,
        name: movie?.original_name ? movie.original_name : movie.original_title,
        image: movie.poster_path,
        genres: movieGenres.slice(0, 3),
        total_pages: total_pages,
        total_results: total_results,
      });
    }
  });
};
const createArrayCelebFromRowData = (
  array,
  celebsArray,
  genres,
  total_pages,
  total_results
) => {
  array.forEach((celeb) => {
    if (celeb.profile_path) {
      celebsArray.push({
        id: celeb.id,
        name: celeb?.original_name ? celeb.original_name : celeb.original_title,
        image: celeb.profile_path,
        genres: celeb.known_for_department,
        total_pages: total_pages,
        total_results: total_results,
      });
    }
  });
};
const getRawData = async (api, genres, paging) => {
  const moviesArray = [];
  for (let i = 1; moviesArray.length < 60 && i < 10; i++) {
    const {
      data: { results, total_pages, total_results },
    } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
    createArrayFromRowData(
      results,
      moviesArray,
      genres,
      total_pages,
      total_results
    );
  }
  return moviesArray;
};
const getRawDataPage = async (api, genres) => {
  const moviesArray = [];
  const {
    data: { results, total_pages, total_results },
  } = await axios.get(`${api}`);
  createArrayFromRowData(
    results,
    moviesArray,
    genres,
    total_pages,
    total_results
  );
  return moviesArray;
};

const getRawCelebDataPage = async (api, genres) => {
  const celebsArray = [];
  const {
    data: { results, total_pages, total_results },
  } = await axios.get(`${api}`);
  createArrayCelebFromRowData(
    results,
    celebsArray,
    genres,
    total_pages,
    total_results
  );
  return celebsArray;
};
