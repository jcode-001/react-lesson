import { fireEvent, prettyDOM, render } from "@testing-library/react";
import { CourseComponent } from "./Course.component";
import { CourseInterface } from "@/models/course/CourseCategory.interface";

describe("Course.component: behaviour", () => {
  it("click event invokes 'onCourseSelect' function as expected", () => {
    const testid = "unit-est-behaviour-1";
    const onCourseSelect = vitest.fn();
    const model: CourseInterface = {
      id: 1,
      title: "React",
      selected: false,
    };

    //render component
    const { container } = render(
      <CourseComponent
        testId={testid}
        model={model}
        onCourseSelect={onCourseSelect}
      />
    );
    const courseElement = container.firstChild as HTMLElement;
    fireEvent.click(courseElement);
    expect(onCourseSelect).toHaveBeenCalledTimes(1);
  });
});
