import React from "react";
import "../../assests/sidebar.scss";
import { Link, useLocation} from "react-router-dom";

const Sidebar = ({ TABS }) => {
  const [opened, setOpened] = React.useState(true);

  const location = useLocation()


  const sidebarOpened = () => {
      setOpened(!opened)
  }

  return (
    <div className={opened ? "sidebar": "sidebar_opened"}>
      <div className="header">
        <div className="soz">
          <p className="m-0">
             Dashboard
          </p>
        </div>
        <div className="icon">
          <button
            className="btn"
            onClick={sidebarOpened}
            
          >
            <i class={opened ? "bi bi-unlock" : "bi bi-lock"}></i>
          </button>
        </div>
      </div>

      <div className="content">
        {TABS.map((item, index) => (
          <Link to={item.path}>
            <div className={`link ${location.pathname === item.path && "active"}`}>
              <i class={item.icon}></i>
              {opened && <p>{item.title}</p> }
              
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
