import { useState } from "react";
import { iconMap, sidebarLinks } from "../data/menuItems";
import { IoIosArrowDropright } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState({});

  const toggleSubmenu = (title) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div
      className={`h-[100%] bg-white text-black border-2 capitalize py-2 pt-5 pb-3 lg:px-3 px-2 relative transition-all duration-300 ease-in-out
        min-w-16 ${open ? "w-[12rem]" : "w-[5rem]"}`}
    >
      <MdKeyboardArrowLeft
        size={27}
        className={`bg-white text-dark-purple text-3xl rounded-full absolute
          -right-3 top-5 border border-dark-purple cursor-pointer ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />

      {/* menu-items */}
      <div>
        {sidebarLinks.map((section) => (
          <div key={section.mainTitle} className="mb-5 last:m-0">
            {/* Main Title */}
            <h2
              className={`${!open ? "text-[10px]" : "text-xs"} uppercase font-bold mb-3`}
            >
              {section.mainTitle}
            </h2>

            {/* Links List */}
            <ul className="list-none mt-4">
              {section.links.map((link, index) => {
                const IconComponent = iconMap[link.icon];
                return (
                  <li
                    key={index}
                    onClick={() => link.submenu && toggleSubmenu(link.title)}
                    className={`mb-1 ${!open && "max-h-9 flex items-center"} cursor-pointer px-2 py-2 rounded-md transition duration-150 hover:bg-black hover:text-white`}
                  >
                    <Link to={link.url ? link.url : undefined}>
                      <div className="flex items-center justify-between w-full relative">
                        <div className="flex items-center gap-x-2 justify-between">
                          {IconComponent && (
                            <IconComponent
                              className={` ${open ? "text-sm" : "text-base"}`}
                            />
                          )}
                          <span
                            className={`transition-transform duration-300 text-sm font-semibold capitalize max-h-5 overflow-hidden ${open ? "scale-100" : "scale-0"}`}
                          >
                            {link.title}
                          </span>
                          {link.num && (
                            <span
                              className={`text-[10px] bg-black text-white py-1.5 px-2 rounded-md absolute right-0 ${!open && "hidden"}`}
                            >
                              {link.num}
                            </span>
                          )}
                        </div>
                        {link.submenu && open && (
                          <IoIosArrowDropright
                            className={`text-gray-400 text-xl transform transition-transform duration-150 ${
                              submenuOpen[link.title] ? "rotate-90" : ""
                            }`}
                          />
                        )}
                      </div>

                      {/* Submenu items */}
                      {link.submenu && submenuOpen[link.title] && open && (
                        <div className="mt-2 space-y-1">
                          {link.submenuItems.map((submenuItem, subIndex) => (
                            <button
                              key={subIndex}
                              className="text-sm block w-full text-left p-1.5 hover:bg-gray-400 rounded-md transition-all duration-300 ease-in-out"
                            >
                              {submenuItem.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
