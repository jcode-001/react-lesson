import { configureStore } from "@testing-toolkit";
import { useDispatch } from "react-redux";
import { RootStoreInterface } from "./models";

export const rootStore = configureStore({
  reducer: {},
});
