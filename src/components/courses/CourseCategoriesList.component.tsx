import React from "react";
import { CourseCategoryInterface } from "../../models/course/CourseCategory.interface";
import { CourseListComponent } from "./CourseList.component";

export const CourseCategoriesListComponent: React.FC<{
  CourseCategories: CourseCategoryInterface[];
}> = (props) => {
  return (
    <div>
      <ul>
        {props.CourseCategories.map((courseCategories) => {
          return (
            <>
              <li key={courseCategories.id}>{courseCategories.title}</li>
            </>
          );
        })}
      </ul>
    </div>
  );
};
