import Search from "../components/search/Search";
import Home from "../components/Home";
import Category from "../components/Category";
const links = [
  {
    link: "/",
    title: "Home",
    component: Home,
    isExact: true,
    islink: true
  },
  {
    link: "/Search/:query",
    title: "Search",
    component: Search,
    isExact: true,
    islink: false
  },
  {
    link: "/Category/:query/:id",
    title: "Popular",
    component: Category,
    isExact: true,
    islink: false
  }
];

export default links;
