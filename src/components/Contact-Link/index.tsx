import { Box, IconButton, styled } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useEffect, useState } from "react";
import { keyframes } from "@mui/system";

const growShrink = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.007);
  }
`;

const LinkContainer = styled(Box)(({ theme }) => ({
  zIndex: "1",
  position: "fixed",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.success.light,
  boxShadow: theme.shadows[1],
  textDecoration: "none",
  bottom: theme.spacing(5),
  right: theme.spacing(2),
  animation: `${growShrink} 1.5s ease-in infinite`,
  "&:hover": {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.common.white,
  },
}));

const WhatsAppLink = () => {
  const [showLink, setShowLink] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLink(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!showLink) {
    return null;
  }
  return (
    <LinkContainer>
      <a
        href="https://api.whatsapp.com/send?phone=+5563992074095&text=Ol%C3%A1%2C%20vim%20pelo%20site%20SonoLiffe%20fiquei%20muito%20interessado%20nos%20seus%20produtos.%20Gostaria%20de%20agendar%20uma%20visita!"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          color: "#FFFFFF",
          fontWeight: "bolder",
        }}
      >
        Agendar uma visita
        <IconButton color="inherit">
          <WhatsAppIcon />
        </IconButton>
      </a>
    </LinkContainer>
  );
};

export default WhatsAppLink;
