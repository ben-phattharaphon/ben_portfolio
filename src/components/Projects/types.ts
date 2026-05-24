"use client";

export type Category = "All" | "Web" | "Design" | "Personal";

export interface Project {
  id: string;
  title: string;
  category: Category;
  description: string;
  tech: string[];
  image: string;
  link?: string;
}
