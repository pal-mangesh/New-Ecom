import { Link } from "gatsby";
import React, { ReactElement, useState } from "react";
import menuIcon from "../../images/menu-icon.svg";
export interface IMenuItem {
  title: string;
  link: string;
}

export interface MainMenuProps {
  mainMenu: IMenuItem[];
}

export default function MainMenu({
  mainMenu,
}: MainMenuProps): ReactElement | null {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuIconClick = (e: any) => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="hidden md:block">
        {mainMenu && mainMenu.length ? (
          <ul className="flex items-center">
            {mainMenu.map((item: IMenuItem, index: number) => {
              return (
                <Link key={index + item.title} to={item.link}>
                  <li className="px-4">{item.title}</li>
                </Link>
              );
            })}
          </ul>
        ) : (
          ""
        )}
      </div>
      <div className="md:hidden">
        <div onClick={onMenuIconClick} className="cursor-pointer">
          <img src={menuIcon} />
        </div>
        {isMenuOpen ? (
          <div className="">
            <div
              className="absolute shadow-lg rounded-lg left-0 right-0 bg-white p-4"
              style={{ top: "100px" }}
            >
              {mainMenu && mainMenu.length ? (
                <>
                  <ul>
                    {mainMenu.map((mi: IMenuItem, index: number) => (
                      <Link to={mi.link} key={mi.title + index}>
                        <li className="cursor-pointer p-4 font-bold text-lg hover:bg-gray-100">
                          {mi.title}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
