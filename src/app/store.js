import { configureStore } from "@reduxjs/toolkit";
import slickSlide from "../features/slickSlide/slickSlide";


export const store = configureStore({
  reducer: {
    counter: slickSlide,
  },
})