import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "../styles/dropdown.css";

export default function Dropdown({ title, children }) {
  const [active, setActive] = useState(false);

  const handleToggle = e => {
    return setActive(!active);
  };

  return (
    <div>
      <div className="dropdownTitle" onClick={handleToggle}>
        <h3>{title}</h3>
        <div>
          <FaChevronDown />
        </div>
      </div>
      <div className={`dropdownText ${active && "active"}`}>
        <div>{children}</div>
      </div>
    </div>
  );
}