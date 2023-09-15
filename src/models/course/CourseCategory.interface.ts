import React, { ReactNode } from "react";

export interface CourseCategoryInterface {
  id: number;
  title: string;
  selected: boolean;
}

export interface CourseInterface {
  id: number;
  title: string;
  selected: boolean;
  duration?: number;
  category?: string;
  rating?: number;
}
