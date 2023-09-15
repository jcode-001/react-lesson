import React, { useState } from "react";
import "./App.css";
import { CourseCategoriesListComponent } from "./components/courses/CourseCategoriesList.component";
import {
  CourseCategoryInterface,
  CourseInterface,
} from "./models/course/CourseCategory.interface";
import { CourseListComponent } from "./components/courses/CourseList.component";

const courseCategories: CourseCategoryInterface[] = [
  { id: 1, title: "Software Development", selected: true },
  { id: 2, title: "Art & Media", selected: false },
  { id: 3, title: "Sales & Marketing", selected: false },
];
const COURSES: CourseInterface[] = [
  { id: 1, title: "Web development", duration: 24, rating: 5, selected: false },
  { id: 2, title: "Game Devlopment", duration: 24, rating: 5, selected: false },
  {
    id: 3,
    title: "Mobile development",
    duration: 24,
    rating: 5,
    selected: false,
  },
  {
    id: 4,
    title: "Automotive Teachnology",
    duration: 24,
    rating: 5,
    selected: false,
  },
  {
    id: 5,
    title: "Digital Marketing",
    duration: 24,
    rating: 5,
    selected: false,
  },
  {
    id: 6,
    title: "Electrical Technology",
    duration: 24,
    rating: 5,
    selected: false,
  },
  {
    id: 7,
    title: "Customer Services",
    duration: 24,
    rating: 5,
    selected: false,
  },
  { id: 8, title: "Photography", duration: 24, rating: 5, selected: false },
  { id: 10, title: "Painting", duration: 24, rating: 5, selected: false },
  { id: 11, title: "UI/UX", duration: 24, rating: 5, selected: false },
  {
    id: 12,
    title: "Business Development",
    duration: 24,
    rating: 5,
    selected: false,
  },
  {
    id: 13,
    title: "cloud Engineering",
    duration: 24,
    rating: 5,
    selected: false,
  },
];

const App = () => {
  const [courses, setCourses] = useState<CourseInterface[]>(COURSES);
  const onCourseSelect = (course: CourseInterface) => {
    const updatedCourses = [...courses];
    const selectedCourse = updatedCourses.find(
      (c) => c.id === course.id
    ) as CourseInterface;
    selectedCourse.selected = !course.selected;
    setCourses(updatedCourses);
  };
  return (
    <>
      <CourseCategoriesListComponent CourseCategories={courseCategories} />
      <CourseListComponent courses={courses} onCourseSelect={onCourseSelect} />
    </>
  );
};

export default App;
