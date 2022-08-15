import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const Header = (props) => {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  const tabs = ["About", "Portfolio"];

  return (
    <AppBar position="sticky" className="app-bar">
      <Container maxWidth="xl" className="justify-content-between">
        <Toolbar disableGutters className="app-bar justify-content-between">
          <div>
            <a href="/photography-portfolio/">
              <h1 className="nav-title">BEATRICE ALLEN PHOTOGRAPHY</h1>
            </a>
          </div>
          <div>
            {tabs.map((tab) => (
              <a
                to={`${tab}`}
                key={tab}
                href={"/photography-portfolio/" + tab.toLowerCase()}
                onClick={() => props.handlePageChange(tab)}
              >
                <Button className="header-button">{tab}</Button>
              </a>
            ))}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
