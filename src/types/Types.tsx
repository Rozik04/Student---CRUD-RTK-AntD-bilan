interface Course {
  symbol: string;
  name: string;
  atomicNumber: number;
}

export interface Student {
  id: string;
  createdAt: string;
  name: string;
  image: string;
  courseName: Course;
  phoneNumber: string;
}
