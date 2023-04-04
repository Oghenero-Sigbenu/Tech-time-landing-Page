import Author1 from "../Assests/Author1.png";
import Author2 from "../Assests/Author2.png";
import Author3 from "../Assests/Author3.png";
import Author6 from "../Assests/Author6.png";
import Course1 from "../Assests/course1.png";
import Course2 from "../Assests/course2.png";
import Course3 from "../Assests/course3.png";
import Reviewer1 from "../Assests/Frame 176.png";
import Reviewer2 from "../Assests/Frame 177.png";
import Reviewer3 from "../Assests/Frame 178.png";

export const navLinks = [
  { path: "/", title: "Home" },
  { path: "/#about-us", title: "About Us" },
  { path: "/Courses", title: "Courses" },
  { path: "Testimonial", title: "Testimonial" },
  { path: "/Community", title: "Community" },
  // { path: "/reset-password", title: "CHANGE PASSWORD" },
];

export const courses = [
  {
    name: "Introduction to user research in UX Design",
    couurseImg: Course1,
    type: "Design",
    rating: { star: "4.7k", like: "32.7k +" },
    lessons: 15,
    duration: "23hrs 50mins",
    author: Author1,
    price: 15.0,
  },
  {
    name: "Introduction to new marketing audience",
    couurseImg: Course2,
    type: "Marketing",
    rating: { star: "4.7k", like: "8.7k +" },
    lessons: 22,
    duration: "22hrs 30mins",
    author: Author2,
    authorName: "Jeffrey Williams",
    price: 32.0,
  },
  {
    name: "Introduction to HTML, CSS & Bootstrap",
    couurseImg: Course1,
    type: "Design",
    rating: { star: "4.7k", like: "32.7k +" },
    lessons: 15,
    duration: "45hrs 50mins",
    author: Author1,
    authorName: "Claretta Mason",
    price: 15.0,
  },
  {
    name: "Introduction to HTML, CSS & Bootstrap",
    couurseImg: Course3,
    type: "Development",
    rating: { star: "4.7k", like: "12.7k +" },
    lessons: 55,
    duration: "45hrs 50mins",
    author: Author3,
    authorName: "Claretta Mason",
    price: 55.0,
  },
  {
    name: "Introduction to HTML, CSS & Bootstrap",
    couurseImg: Course3,
    type: "Development",
    rating: { star: "4.7k", like: "12.7k +" },
    lessons: 55,
    duration: "45hrs 50mins",
    author: Author3,
    authorName: "Claretta Mason",
    price: 55.0,
  },
  {
    name: "Introduction to HTML, CSS & Bootstrap",
    couurseImg: Course3,
    type: "Development",
    rating: { star: "4.7k", like: "12.7k +" },
    lessons: 55,
    duration: "45hrs 50mins",
    author: Author6,
    authorName: "Claretta Mason",
    price: 55.0,
  },
];

export const review = [
  {
    content:
      "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.High-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. The best and largest all-in-one online tutoring platform in the world",
    image: Reviewer1,
    name: "Bella Moon",
    jobTitle: "Product Designer",
  },
  {
    content:
      "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.High-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. The best and largest all-in-one online tutoring platform in the world",
    image: Reviewer2,
    name: "Samuel  fortune",
    jobTitle: "Product Designer",
  },
  {
    content:
      "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.High-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. The best and largest all-in-one online tutoring platform in the world",
    image: Reviewer3,
    name: "Bryce Jason",
    jobTitle: "Product Designer",
  },
];
