import {
  AppBar,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import React, { useState } from "react";

const pages = ["Top", "For Everyone", "Features", "Preview", "License"];

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <AppBar color="transparent">
        <Container>
          <Toolbar>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <img src="/assets/Frame 343.svg" width="120px" alt="logo" />
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <img src="/assets/Frame 343.svg" width="120px" alt="logo" />
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "#193766",
                    display: "block",
                    fontSize: 16,
                    textTransform: "capitalize",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Button
                sx={{
                  backgroundColor: "white",
                  color: "#3B82F6",
                  fontWeight: "bold",
                  borderRadius: "6px",
                  px: 3,
                }}
              >
                Download
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
