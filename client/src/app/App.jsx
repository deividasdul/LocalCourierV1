import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  ButtonGroup,
  Stack,
  Box,
  CssBaseline,
  Typography,
  Link,
} from "@mui/material";

import {
  Home,
  Work,
  ContactSupport,
  Login,
  HowToReg,
  LocalGroceryStore,
} from "@mui/icons-material";

const NavButton = ({ href, startIcon, text }) => {
  return (
    <Button href={href} startIcon={startIcon}>
      {text}
    </Button>
  );
};

function App() {
  const navItems = [
    {
      href: "/",
      text: "Home",
      startIcon: <Home />,
    },
    {
      href: "/browse",
      text: "Browse",
      startIcon: <LocalGroceryStore />,
    },
    {
      href: "/career",
      text: "Career",
      startIcon: <Work />,
    },
    {
      href: "/contact",
      text: "Contact",
      startIcon: <ContactSupport />,
    },
    {
      href: "/login",
      text: "Login",
      startIcon: <Login />,
    },
    {
      href: "/register",
      text: "Register",
      startIcon: <HowToReg />,
    },
  ];

  return (
    <>
      <CssBaseline />
      <AppBar color="success">
        <Toolbar sx={{ p: 2 }}>
          <Box flex={1}>
            <Link
              color={"inherit"}
              underline={"hover"}
              variant={"h4"}
              href={"/"}
            >
              LocalCourier
            </Link>
          </Box>
          <ButtonGroup variant={"outlined"} color={"inherit"} size={"large"}>
            <Stack direction={"row"} gap={2}>
              {navItems.map((item, index) => {
                return (
                  <NavButton
                    key={index}
                    href={item.href}
                    startIcon={item.startIcon}
                    text={item.text}
                  />
                );
              })}
            </Stack>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default App;
