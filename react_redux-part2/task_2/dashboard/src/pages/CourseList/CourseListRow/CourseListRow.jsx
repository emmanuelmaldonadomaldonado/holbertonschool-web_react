import React from "react";

const CourseListRow = ({ course, onChangeRow }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={course.isSelected}
        onChange={(e) => onChangeRow(course.id, e.target.checked)}
      />
      {course.name}
    </div>
  );
};

export default CourseListRow;
