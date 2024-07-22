import React from "react";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import CompanyLogo from "../../assets/logo.png";
import ScrollToTopButton from "../Button-Scroll";
import WhatsAppLink from "../Contact-Link";

const HeaderContainer = styled(AppBar)(() => ({
  backgroundColor: "#f1f2ec",
  boxShadow: "none",
  width: "100%",
}));

const Logo = styled("img")({
  width: "150px",
});

const TitleBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0),
}));

const HiddenTypography = styled(Typography)(({ theme }) => ({
  textDecoration: "none",
  color: "#ADD8E6",
  fontSize: "30px",
  fontWeight: "bold",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderContainer position="static">
      <Typography
        variant="body1"
        style={{
          textAlign: "center",
          color: `${theme.palette.warning.main}`,
          fontSize: "10px",
        }}
      >
        Não recomendado para quem usa marcapasso ou faz hemodiálise.
      </Typography>
      <Container>
        <Toolbar>
          <TitleBox>
            <a
              href="https://devliov.github.io/sonoliffe/"
              target="_self"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Logo src={CompanyLogo} alt="Company Logo" />

              <HiddenTypography variant="h1" fontStyle={"inherit"}>
                SonoLiffe
              </HiddenTypography>
            </a>
          </TitleBox>
          <Box sx={{ flexGrow: 1 }} />
          {isMobile ? (
            <>
              <IconButton
                size="small"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
                style={{
                  textDecoration: "none",
                  color: `${theme.palette.primary.dark}`,
                  width: "40px",
                  boxShadow: "none",
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                style={{
                  textDecoration: "none",
                  color: `${theme.palette.primary.dark}`,
                  boxShadow: "none",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <a
                    href="#sobre"
                    style={{
                      textDecoration: "none",
                      color: `${theme.palette.primary.dark}`,
                    }}
                  >
                    Sobre nós
                  </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a
                    href="#produtos"
                    style={{
                      textDecoration: "none",
                      color: `${theme.palette.primary.dark}`,
                    }}
                  >
                    Nossos Produtos
                  </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a
                    href="#beneficios"
                    style={{
                      textDecoration: "none",
                      color: `${theme.palette.primary.dark}`,
                    }}
                  >
                    Benefícios
                  </a>
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography
                component="a"
                href="#sobre"
                style={{
                  textDecoration: "none",
                  color: `${theme.palette.primary.dark}`,
                  fontWeight: "bold",
                }}
              >
                Sobre nós
              </Typography>
              <Typography
                component="a"
                href="#produtos"
                style={{
                  textDecoration: "none",
                  color: `${theme.palette.primary.dark}`,
                  fontWeight: "bold",
                }}
              >
                Nossos Produtos
              </Typography>
              <Typography
                component="a"
                href="#beneficios"
                style={{
                  textDecoration: "none",
                  color: `${theme.palette.primary.dark}`,
                  fontWeight: "bold",
                }}
              >
                Benefícios
              </Typography>
            </Box>
          )}
        </Toolbar>
      </Container>
      <WhatsAppLink />
      <ScrollToTopButton />
    </HeaderContainer>
  );
};

export default Header;
