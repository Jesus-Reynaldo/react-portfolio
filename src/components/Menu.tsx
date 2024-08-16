import { MenuItem } from "../interfaces";
import "../styles/menuItem.css";
interface Props{
  menuItems:MenuItem[]
}
export function Menu({menuItems}:Props) {
  return (
    <>
      {menuItems.map((item) => (
        <li className="relative  text-white menu_item move_item" key={item.title}>
          <a
            href={item.url}
            aria-label={item.label}
            className="inline-block py-2 mx-2 transition hover:text-yellow-500 dark:hover:text-yellow-400"
          >
            {item.title}
          </a>
        </li>
      ))}
    </>
  );
}
