import { AppBar, Toolbar, IconButton, Drawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import "./Header.css"

const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 600
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return <Nav />;
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <div className="header-wrapper">
          <IconButton
            {...{
              edge: "end",
              color: "#69bf4a",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <Drawer
          {...{
            anchor: "right",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className="drawerContainer">{getDrawerChoices()}</div>
        </Drawer>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    // const handleDrawerClose = () =>
    //   setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <>
        {/* <div className="x">
          <button onClick={handleDrawerClose}>
            <img src={mobileX} alt="exit" />
          </button>
        </div> */}
        <div className="titles-map">
          {headersData.map(({ label, href }) => {
            return (
              <>
                <a href={href} alt="button">
                  <li>{label}</li>
                </a>
                <div className="hl" />
              </>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <header>
      <AppBar style={{ background: "#F5F7EB" }} position="absolute">
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
