import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CourseStateInterface } from "./models";
import { CourseInterface } from "@/models/course/CourseCategory.interface";

const initialCourseState: CourseStateInterface = {
  loading: false,
  courses: [],
};

export const CoursesStoreSlice = createSlice({
  name: "CoursesStoreSlice",
  initialState: initialCourseState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setCourses: (state, action: PayloadAction<CourseInterface[]>) => {
      state.courses = action.payload || [];
      state.loading = false;
    },
    setSelectedCourse: (state, action: PayloadAction<CourseInterface>) => {
      const course = action.payload;
      const findSelectedCourse = state.courses.find(
        (c) => c.id === course.id
      ) as CourseInterface;
      findSelectedCourse.selected = !findSelectedCourse.selected;
    },
  },
});
