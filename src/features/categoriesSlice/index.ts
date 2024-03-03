/* VENDOR */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

/* APPLICATION */
import { RootState } from "../../app/store";
import { MOCKS_CATEGORY } from "./mocks";

export interface CategoriesState {
  id: string;
  name: string;
  description: string;
}
// можно завести под такое, отдельный файл с mocks
const initialState: CategoriesState[] = MOCKS_CATEGORY;

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    categoriesAdded: (state, action) => {
      state.push({
        id: uuidv4(),
        ...action.payload,
      });
    },
    // что-то типизированно, а что-то нет, хотелось бы больше типизации, при чем это легко делается при помощи copilot или codeium
    categoriesUpdated: (
      state: CategoriesState[],
      action: PayloadAction<CategoriesState>
    ) => {
      const { id, name, description } = action.payload,
        existingCategory = state.find((category) => category.id === id);

      if (existingCategory) {
        existingCategory.name = name;
        existingCategory.description = description;
      }
    },
    categoriesRemoved: (
      state: CategoriesState[],
      action: PayloadAction<string>
    ) => {
      let rm = (el: CategoriesState, i: number, arr: CategoriesState[]) =>
          el.id === action.payload,
        rmTaskIndex = state.findIndex(rm);

      state.splice(rmTaskIndex, 1);
    },
  },
});

export const { categoriesAdded, categoriesUpdated, categoriesRemoved } =
  categoriesSlice.actions;

export const selectAllCategories = (state: RootState) => state.categories;

export default categoriesSlice.reducer;
