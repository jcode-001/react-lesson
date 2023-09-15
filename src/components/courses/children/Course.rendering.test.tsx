import { render, screen, prettyDOM } from "@testing-library/react";
import { CourseInterface } from "@/models/course/CourseCategory.interface";
import { CourseComponent } from "./Course.component";

describe("Course.component: rendering", () => {
  it("renders course test correctly", () => {
    const testid = "unit-test-item";
    const model: CourseInterface = {
      id: 1,
      title: "Coding",
      duration: 24,
      selected: false,
    };

    // render component
    render(
      <CourseComponent
        testId={testid}
        model={model}
        onCourseSelect={() => {}}
      />
    );

    // get element reference by testid
    const courseElement = screen.getByTestId(testid);

    // test
    expect(courseElement).not.toBeNull();

    //get element children
    const courseChildren = courseElement.children;
    expect(courseChildren).toHaveLength(2);
    expect(courseChildren.item(1)?.innerHTML).toContain("Coding");
  });

  it("renders a course indicator correctly", () => {
    const testid = "another-unit-test-for-course";
    const model: CourseInterface = {
      id: 4,
      title: "unit-test",
      selected: false,
      duration: 16,
    };

    //render component
    render(
      <CourseComponent
        testId={testid}
        model={model}
        onCourseSelect={() => {}}
      />
    );
    //get element reference by test id
    const courseElement = screen.getByTestId(testid);

    //test
    expect(courseElement).not.toBeNull();

    //get element children
    const children = courseElement.children;
    expect(children).toHaveLength(2);
    expect(children.item(0)?.innerHTML).toEqual("*");
  });

  it("has expected css class when selected is true", () => {
    const testid = "unit-test-css-class";
    const model: CourseInterface = {
      id: 3,
      title: "Python",
      selected: true,
    };

    //render component
    render(
      <CourseComponent
        testId={testid}
        model={model}
        onCourseSelect={() => {}}
      />
    );

    const courseElement = screen.getByTestId(testid);
    expect(courseElement).not.toBeNull();
    expect(courseElement.className).toContain("selected");
  });

  it("has expected css class when selected is false", () => {
    const testid = "unit-test-css-class-2";
    const model: CourseInterface = {
      id: 5,
      title: "JavaScript",
      selected: false,
    };

    render(
      <CourseComponent
        testId={testid}
        model={model}
        onCourseSelect={() => {}}
      />
    );

    const courseElement = screen.getByTestId(testid);
    expect(courseElement).not.toBeNull();
    expect(courseElement.className).not.toContain("selected");
  });
});
