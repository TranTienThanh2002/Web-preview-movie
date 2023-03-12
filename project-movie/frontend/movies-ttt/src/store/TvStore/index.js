import {
    configureStore,
    createAsyncThunk,
    createSlice,
  } from "@reduxjs/toolkit";
  import axios from "axios";
  
  import { API_KEY, TMBD_BASE_URL } from "../../utils/constraint";


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
    name:"listCreditFortv",
    initialState:{
      credits_tvs: [],
      isLoading: true,
      errorMessage: "",
    },
    extraReducers: (builder) => {
      builder.addCase(getListCreditOftvDetails.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(getListCreditOftvDetails.fulfilled, (state, action)=>{
        state.isLoading = false;
        state.credits_tvs = action.payload;
      })
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
    name:"listSimilartvDetails",
    initialState:{
      similar_tvs: [],
      isLoading: true,
      errorMessage: "",
    },
    extraReducers: (builder) => {
      builder.addCase(getListSimilartvDetails.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(getListSimilartvDetails.fulfilled, (state, action)=>{
        state.isLoading = false;
        state.similar_tvs = action.payload;
      })
      builder.addCase(getListSimilartvDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload.message;
      });
    },
  });
//get review movie
export const getListReviewTvDetails = createAsyncThunk(
  "listReviewTvDetails/movie",
  async ({ movie_id }) => {
    const review = await axios.get(
      `${TMBD_BASE_URL}/3/movie/${movie_id}/reviews?api_key=${API_KEY}`
    );
    return review.data;
  }
);
const ListReviewTvDetails = createSlice({
  name:"listReviewTvDetails",
  initialState:{
    review_tv: [],
    isLoading: true,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getListReviewTvDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getListReviewTvDetails.fulfilled, (state, action)=>{
      state.isLoading = false;
      state.review_tv = action.payload;
    })
    builder.addCase(getListReviewTvDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });
  },
});
export const store = configureStore({
    reducer: {
      tvDetail: tvDetailsSlice.reducer,
      videoOftvsDetails: videoOftvsDetailsSlice.reducer,
      listImageOftv: ListImageOftv.reducer,
      listCreditFortv: ListCreditFortv.reducer,
      listSimilartvDetails: ListSimilartvDetails.reducer,
      listReviewTvDetails: ListReviewTvDetails.reducer,
    },
  });