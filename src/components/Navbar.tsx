import { useMsal } from "@azure/msal-react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const { instance, accounts } = useMsal();

  const onLogout = () => {
    instance
      .logoutRedirect()

      .catch((e: any) => console.log(e));
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <div className="navbar-brand">Enterbridge</div>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className={({ isActive }) => `nav-item nav-link  ${isActive ? "active" : ""}`} to="/dashboard">
            Dashboard
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary">{accounts[0].name}</span>

          <button className="nav-item nav-link btn" onClick={() => onLogout()}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
