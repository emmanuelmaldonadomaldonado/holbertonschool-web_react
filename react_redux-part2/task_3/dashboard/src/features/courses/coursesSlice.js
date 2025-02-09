const initialState = {
  courses: [],
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    selectCourse: (state, action) => {
      const course = state.courses.find(course => course.id === action.payload);
      if (course) {
        course.isSelected = true;
      }
    },
    unSelectCourse: (state, action) => {
      const course = state.courses.find(course => course.id === action.payload);
      if (course) {
        course.isSelected = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.courses = action.payload.map(course => ({ ...course, isSelected: false }));
    });
  },
});

export const { selectCourse, unSelectCourse } = coursesSlice.actions;