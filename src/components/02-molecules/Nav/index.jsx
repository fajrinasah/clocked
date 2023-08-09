import NavLinkForHeader from "../../01-atoms/NavLinkForHeader";

import "./styles.css";

export default function Nav({ roleId = 1 }) {
  if (parseInt(roleId) === 1) {
    return (
      <ul className="nav">
        <li className="navlink-li">
          <NavLinkForHeader
            destination="/add/employee"
            navlinkName="add-employee"
            content="Add Employee"
          />
        </li>

        <li className="navlink-li">
          <NavLinkForHeader
            destination="/add/shift"
            navlinkName="add-shift"
            content="Add Shift"
          />
        </li>

        <li className="navlink-li">
          <NavLinkForHeader
            destination="/set/salary"
            navlinkName="set-salary"
            content="Set Salary"
          />
        </li>

        <li className="navlink-li">
          <NavLinkForHeader
            destination="/set/shift"
            navlinkName="set-shift"
            content="Set Shift"
          />
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="nav">
        <li className="navlink-li">
          <NavLinkForHeader
            destination="/home"
            navlinkName="home"
            content="Home"
          />
        </li>

        <li className="navlink-li">
          <NavLinkForHeader
            destination="/logs"
            navlinkName="logs"
            content="Logs"
          />
        </li>

        <li className="navlink-li">
          <NavLinkForHeader
            destination="/payroll"
            navlinkName="payroll"
            content="Payroll"
          />
        </li>
      </ul>
    );
  }
}
