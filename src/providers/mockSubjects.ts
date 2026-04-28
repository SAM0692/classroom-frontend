import { Subject } from "../types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description: "Foundational concepts in computing, algorithms, and software design for first-year students.",
    createdAt: "2026-04-28T00:00:00.000Z",
  },
  {
    id: 2,
    code: "MATH214",
    name: "Linear Algebra and Applications",
    department: "Mathematics",
    description: "Matrix theory, vector spaces, and real-world applications in engineering and data science.",
    createdAt: "2026-04-28T00:00:00.000Z",
  },
  {
    id: 3,
    code: "ENG305",
    name: "Technical Communication",
    department: "Engineering",
    description: "Practical writing, presentation, and teamwork skills for technical and professional contexts.",
    createdAt: "2026-04-28T00:00:00.000Z",
  },
];
