import logo from "./logo-light.png";
import ButtonStandard from "../../01-atoms/ButtonStandard";
import Nav from "../../02-molecules/Nav";

import "./styles.css";

export default function Header({
  fullName = "",
  roleId = 1,
  handleLogout = () => {},
}) {
  return (
    <header>
      <div className="logo-container d-flex-row">
        <img src={logo} alt="dnt logo" />
        <h1>dnt</h1>
        <p>Clocked</p>
      </div>

      <p className="full-name bold">{fullName}</p>

      <Nav roleId={roleId} />

      <ButtonStandard
        story="ghost-main"
        bold=""
        width="auto"
        content="Log out"
        onClick={handleLogout}
      />
    </header>
  );
}
