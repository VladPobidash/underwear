import "../../Home/NavBar/navBar.scss";
import Logo from "../../assets/img/puma-logo.png";
import React from "react";
import { AppBar, Container, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "@mui/material";

const NavBar = () => {
  return (
    <>
      <AppBar position="fixed" sx={{ boxShadow: "none" }}>
        <Toolbar sx={{ background: "white"  }}>
          <Container sx={{ maxWidth: "1300px", margin: "0 auto" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Tabs>
                  <Tab
                    label={<img className="logo" src={Logo} />}
                    to="/"
                    component={Link}
                  />
                </Tabs>
              </Box>
              <Box>
                <TextField
                  id="standard-basic"
                  label="Поиск"
                  variant="standard"
                  sx={{ width: "200px" }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "500px",
                  justifyContent: "space-around",
                }}
              >
                <Tabs>
                  <Tab label="комплекти" to="/kits" component={Link} />
                </Tabs>
                <Tabs>
                  <Tab label="бюзгальтери" to="/kits" component={Link} />
                </Tabs>
                <Tabs>
                  <Tab label="трусики" to="/kits" component={Link} />
                </Tabs>
                <Tabs>
                  <Tab label="купальники" to="/kits" component={Link} />
                </Tabs>
                <Tabs>
                  <Tab label="SALE" to="/kits" component={Link} />
                </Tabs>
              </Box>
              <Box
                sx={{
                  maxWidth: "200px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Tabs>
                  <Tab
                    label={<PermIdentityIcon />}
                    to="/asdafssaf"
                    component={Link}
                  />
                </Tabs>
                <Tabs>
                  <Tab
                    label={<FavoriteBorderIcon className="icon" />}
                    to="/asdafssaf"
                    component={Link}
                  />
                </Tabs>
                <Tabs>
                  <Tab
                    label={<ShoppingCartIcon />}
                    to="/asdafssaf"
                    component={Link}
                  />
                </Tabs>
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
