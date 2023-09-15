import { CourseInterface } from "@/models/course/CourseCategory.interface";

export interface CourseStateInterface {
  loading: boolean;
  courses: CourseInterface[];
}
