import { Link, NavLink } from "react-router-dom";
import { useLoginStore } from "../hooks/useLoginStore";

export const Navbar = () => {
  const { startLogout, user } = useLoginStore();
  // console.log("User:", user);
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <span className="navbar-brand">
        <i className="fas fa-calendar-alt"></i>
        &nbsp;
        {user.nombre}
      </span>
      <Link className="navbar-brand" to="/"></Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""} `
            }
            to="/turno"
          >
            Turnos
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""} `
            }
            to="/calendar"
          >
            Calendario
          </NavLink>

          {/* <NavLink 
                        className="nav-item nav-link" 
                        to="/pagos"
                    >
                        Pagos
                    </NavLink> */}
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
            <span className="nav-item nav-link text-info">
                
            </span>
          <button className="btn btn-outline-danger" onClick={startLogout}>
            <i className="fas fa-sign-out-alt"></i>
            &nbsp;
            <span>Salir</span>
          </button>
        </ul>
      </div>
    </nav>
  );
};
