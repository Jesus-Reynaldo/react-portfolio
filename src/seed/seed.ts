import {MenuItem} from '../interfaces/'

interface SeedData{
  menuItems:MenuItem[]
}
export const initialData: SeedData = {
  menuItems: [
    {
      title: "Projects",
      label: "projects",
      url: "/#projects",
    },
    {
      title: "Contact Me",
      label: "contactMe",
      url: "mailto:jezuz.of.murder@gmail.com",
    },
  ]
}