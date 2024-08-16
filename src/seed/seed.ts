import { MenuItem, Project } from "../interfaces/";

interface SeedData {
  menuItems: MenuItem[];
  projects: Project[];
}
export const initialData: SeedData = {
  menuItems: [
    {
      title: "Projects",
      label: "projects",
      url: "#projects",
    },
    {
      title: "Contact Me",
      label: "contactMe",
      url: "#contactMe",
    },
  ],
  projects: [
    {
      title: "React Space",
      description:
        "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
imagen: "../images/photo1.jpg"
    },
    {
      title: "React Infinite Scroll",
      description:
        "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
imagen: "../images/photo2.jpg"
    },
    {
      title: "Photo Gallery",
      description:
        "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
imagen: "../images/photo3.jpg"
    },
    {
      title: "Event planner",
      description:
        "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
        imagen: "../images/photo4.jpg"
    }
  ],
};
