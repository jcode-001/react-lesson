import React from "react";
import { CourseComponent } from "./children/Course.component";
import { CourseInterface } from "../../models/course/CourseCategory.interface";

type Props = {
  courses: CourseInterface[];
  onCourseSelect: (course: CourseInterface) => void;
};

export const CourseListComponent: React.FC<Props> = (props) => {
  const handleClick = (course: CourseInterface) => {
    props.onCourseSelect(course);
  };
  return (
    <div>
      <ul>
        {props.courses.map((course, index) => {
          return (
            <>
              <CourseComponent
                testId={`course ${course.id}`}
                key={index}
                model={course}
                onCourseSelect={() => handleClick(course)}
              ></CourseComponent>
            </>
          );
        })}
      </ul>
    </div>
  );
};
// console.log(345344);
//   const handleClick = (course: CourseInterface) => {
//     course.selected = !course.selected;
//     console.log(course.title, course.id, course.selected);
//   };
