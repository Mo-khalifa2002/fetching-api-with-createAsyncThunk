import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const products = [
  {
    id: 1,
    name: "iPhone 12 Pro",
    brand: "Apple",
    desc: "6.1-inch display",
    price: 999,
    image:
      "https://res.cloudinary.com/chaoocharles/image/upload/v1629289889/online-shop/iphone12pro_e09phn.jpg",
  },
  {
    id: 2,
    name: "iPhone 12",
    brand: "Apple",
    desc: "5.4-inch mini display",
    price: 699,
    image:
      "https://res.cloudinary.com/chaoocharles/image/upload/v1629289889/online-shop/iphone12_efhrcp.jpg",
  },
  {
    id: 3,
    name: "Galaxy S",
    brand: "Samsung",
    desc: "6.5-inch display",
    price: 399,
    image:
      "https://res.cloudinary.com/chaoocharles/image/upload/v1629289889/online-shop/galaxyS_dvjf5w.png",
  },
];

const initialState = {
  items: products,
  status: null,
  error: null,
};


// http://localhost:3005/books
// https://api.themoviedb.org/3/discover/movie?api_key=7945b010075499d415d561c0dee764e6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate
// export const porductsFetch = createAsyncThunk(
//   "products/porductsFetch",
//   async (id = null, { rejectWithValue }) => {
//     try {
//       const response = await axios.get("http://localhost:3005/products");
//       return response.data.json();
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
  // extraReducers: {
  //   [porductsFetch.pending]: (state, action) => {
  //     state.status = "pending";
  //   },
  //   [porductsFetch.fulfilled]: (state, action) => {
  //     state.status = "fulfilled";
  //     state.items = products;
  //   },
  //   [porductsFetch.rejected]: (state, action) => {
  //     state.status = "rejected";
  //     state.error = action.payload;
  //   },
  // },
});
console.log(initialState.items)

// Action creators are generated for each case reducer function
// export const {incrementByAmount } = counterSlice.actions;

export default productsSlice.reducer;
