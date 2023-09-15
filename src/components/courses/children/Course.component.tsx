import React from "react";
import { CourseInterface } from "../../../models/course/CourseCategory.interface";

type Props = {
  testId: string;
  model: CourseInterface;
  onCourseSelect: (course: CourseInterface) => void;
};

export const CourseComponent: React.FC<Props> = (props) => {
  const getCssClass = () => {
    let css = "course";
    if (props.model.selected) {
      css += " selected";
    }
    return css.trim();
  };
  const handleClick = (course: CourseInterface) => {
    props.onCourseSelect(course);
  };
  return (
    <li
      data-testid={props.testId || "not-set"}
      className={getCssClass()}
      onClick={() => handleClick(props.model)}
    >
      <div className="selected-indicator">*</div>
      <div className="title">{props.model.title}</div>
    </li>
  );
};
