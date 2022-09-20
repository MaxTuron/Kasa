import { useState } from "react";
import {useParams} from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa";
import "../styles/dropdown.css";

export default function Dropdown({ title, children }) {
  const [active, setActive] = useState(false);

  const { logementId } = useParams();

  const handleToggle = e => {
    return setActive(!active);
  };

  return (
    <div className={"dropdownItem" + (logementId === undefined ? "Long" : "Short")}>
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