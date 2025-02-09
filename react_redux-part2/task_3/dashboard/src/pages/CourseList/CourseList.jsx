import React from "react";
import { useDispatch } from "react-redux";
import { selectCourse, unSelectCourse } from "../features/courses/courseSlice";

const CourseList = ({ courses }) => {
  const dispatch = useDispatch();

  const onChangeRow = (id, checked) => {
    if (checked) {
      dispatch(selectCourse(id));
    } else {
      dispatch(unSelectCourse(id));
    }
  };

  return (
    <div>
      {courses.map((course) => (
        <CourseListRow
          key={course.id}
          course={course}
          onChangeRow={onChangeRow}
        />
      ))}
    </div>
  );
};

export default CourseList;
