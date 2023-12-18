import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="flex justify-around p-4 shadow-lg">
        <div>
          <img src="" alt="" />
        </div>
        <div className="flex">
          <ul className="flex justify-between space-x-6">
            <li>
              <a className="hover:text-blue-500  transition-all ease-linear" href="/allProjects">Projects</a>
            </li>
            <li><a className="hover:text-blue-500  transition-all ease-linear" href="https://blog.ayushtenguria.com">Blog</a></li>
            {/* <li>About</li>
            <li>Contact Me</li> */}
          </ul>
        </div>
      </nav>
    </>
  );
};
