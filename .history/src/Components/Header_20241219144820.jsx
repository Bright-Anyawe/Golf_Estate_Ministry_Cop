// import { NavLink } from "react-router-dom";
import Navbar from "./NavBar";

const Header = () => {

return (
  <>
    <section className="grid-cols-2">
      <div>Golf Estate Assembly</div>

      <div>
        <Navbar />
      </div>
    </section>
  </>
);
}

export default Header