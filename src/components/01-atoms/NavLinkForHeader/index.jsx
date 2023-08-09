import { NavLink } from "react-router-dom";

import "./styles.css";

export default function NavLinkForHeader({
  destination = "",
  navlinkName = "",
  content = "",
}) {
  return (
    <div className={`navlink-container-text ${navlinkName} d-flex-row`}>
      <NavLink to={destination} className="navlink">
        {content}
      </NavLink>
    </div>
  );
}
