import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header>
        <h1>My App</h1>
        <nav id="header">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create-order">Create Order</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
