import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/NavBar";
import Products from "./components/Products";
import Featured from "./components/Featured";
import NewProducts from "./components/NewProducts";
import Users from "./components/Users";

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <p>This is the home page.</p>
    </>
  );
};
const About = () => {
  return (
    <>
      <h1>About Page</h1>
      <p>This is the about page.</p>
    </>
  );
};
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />}>
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users/:userId" element={<Users />} />
      </Routes>
    </>
  );
}