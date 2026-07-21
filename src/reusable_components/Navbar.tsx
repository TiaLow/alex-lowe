import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Research", path: "/research" },
  { label: "UCMP Paleobotany", path: "/ucmp" },
  { label: "Resources", path: "/resources" },
];

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="inherit"
      sx={{
        backgroundColor: "grey.200",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "lg",
          width: "100%",
          mx: "auto",
        }}
      >
        {/* Left: Name */}
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            textDecoration: "none",
            color: "inherit",
            fontWeight: 700,
          }}
        >
          Alex Lowe
        </Typography>

        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Desktop nav */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={RouterLink}
              to={item.path}
              color="inherit"
              sx={{
                color:
                  location.pathname === item.path ? "primary.main" : "inherit",
                fontWeight: location.pathname === item.path ? 700 : 400,
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Mobile menu button */}
        <IconButton
          edge="end"
          sx={{ display: { xs: "flex", md: "none" } }}
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer for mobile */}
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <List sx={{ width: 220 }}>
            {navItems.map((item) => (
              <ListItemButton
                key={item.path}
                component={RouterLink}
                to={item.path}
                onClick={() => setOpen(false)}
                sx={{
                  backgroundColor:
                    location.pathname === item.path
                      ? "action.selected"
                      : "transparent",
                  "&:hover": {
                    backgroundColor:
                      location.pathname === item.path
                        ? "action.selected"
                        : "action.hover",
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  slotProps={{
                    primary: {
                      sx: {
                        fontWeight: location.pathname === item.path ? 700 : 400,
                        color:
                          location.pathname === item.path
                            ? "primary.main"
                            : "inherit",
                      },
                    },
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
