import NavLinkForHeader from "../../01-atoms/NavLinkForHeader";

import "./styles.css";

export default function Nav({ roleId = 1 }) {
  if (parseInt(roleId) === 1) {
    return (
      <ul className="nav">
        <li className="navlink-li">
          <NavLinkForHeader
            destination="/shifts/set-shift"
            navlinkName="set-shift"
            content="Set Shift"
          />
        </li>

        <li className="navlink-li">
          <NavLinkForHeader
            destination="/shifts/add-shift"
            navlinkName="add-shift"
            content="Add Shift"
          />
        </li>

        <li className="navlink-li">
          <NavLinkForHeader
            destination="/employees/add-employee"
            navlinkName="add-employee"
            content="Add Employee"
          />
        </li>

        <li className="navlink-li">
          <NavLinkForHeader
            destination="/salaries/set-salary"
            navlinkName="set-salary"
            content="Set Salary"
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
            destination="/salaries/reports"
            navlinkName="payroll"
            content="Payroll"
          />
        </li>
      </ul>
    );
  }
}
