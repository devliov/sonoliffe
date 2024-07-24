import { Box, Container, Typography, styled } from "@mui/material";
import SellerPhoto from "../../assets/elizeu-foto.jpg";
import Bed1 from "../../assets/dormir-mal.jpg";
import Bed2 from "../../assets/dormindo-bem.jpg";
import Bed3 from "../../assets/homem-dormindo.webp";
import Bed4 from "../../assets/despertar.jpg";
import Anos from "../../assets/8anos.png";
import theme from "../../theme";
import ImageGalleryComponent from "../Product";

const AboutContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(1),
  gap: theme.spacing(4),
  textAlign: "center",
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,

  h2: {
    fontSize: "1.5rem",
    fontWeight: 600,
    color: theme.palette.text.primary,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.25rem",
    },
  },
}));

const IlustrativePhoto = styled("img")(({ theme }) => ({
  width: "100%",
  maxWidth: "300px",
  height: "auto",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
}));

const SellerContainer = styled(Box)({
  display: "flex",
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(),
  gap: theme.spacing(2),
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "250px",
  height: "auto",
  margin: "auto",
  backgroundColor: " #f1f2ec",
});

const SellerAvatar = styled("img")({
  width: "230px",
  height: "230px",
});

const Slogan = styled(Typography)(({ theme }) => ({
  fontStyle: "italic",
  color: theme.palette.primary.dark,
  fontSize: "1rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.875rem",
  },
  textAlign: "center",
}));

const AboutUs = () => {
  return (
    <Container id="sobre">
      <AboutContainer>
        <Slogan variant="h1" style={{ fontSize: "2rem", fontStyle: "normal" }}>
          Colchões Magnéticos: "Terapia e Tecnologia"
        </Slogan>
        <ImageGalleryComponent />
        <Typography
          variant="h2"
          component="h2"
          marginTop={2}
          style={{ color: theme.palette.primary.dark }}
        >
          Na{" "}
          <span style={{ color: theme.palette.primary.main }}>SonoLiffe</span>{" "}
          nossa missão é proporcionar uma noite de sono tranquila e revigorante.
        </Typography>
        <Box display="flex" gap="50px" justifyContent="center" flexWrap="wrap">
          <SellerAvatar src={Anos} alt="Credibilidade de 8 anos de mercado" />
          <SellerContainer>
            <SellerAvatar src={SellerPhoto} alt="Seller Photo" />
            <Box>
              <Typography
                variant="body1"
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: theme.palette.primary.dark,
                }}
              >
                Elizeu Oliver
              </Typography>
              <Typography
                variant="body1"
                style={{
                  fontWeight: "bold",
                  color: `${theme.palette.primary.main}`,
                  fontSize: "12px",
                }}
              >
                Especialista
              </Typography>
            </Box>
          </SellerContainer>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          gap={2}
          alignItems="center"
          justifyContent="center"
        >
          <IlustrativePhoto src={Bed1} alt="Cama de casal" />
          <Slogan variant="body1">
            "Uma boa noite de sono é o melhor investimento."
          </Slogan>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap-reverse"
          gap={2}
          alignItems="center"
          justifyContent="center"
        >
          <Slogan variant="body1">
            "Durma bem hoje, acorde disposto para desfrutar a vida."
          </Slogan>
          <IlustrativePhoto src={Bed4} alt="Cama de casal" />
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          gap={2}
          alignItems="center"
          justifyContent="center"
        >
          <IlustrativePhoto src={Bed3} alt="Cama de casal" />
          <Slogan variant="body1">
            "Dormir bem é o primeiro passo para viver melhor."
          </Slogan>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap-reverse"
          gap={2}
          alignItems="center"
          justifyContent="center"
        >
          <Slogan variant="body1">
            "Desvalorizar o sono é ignorar seu próprio bem-estar."
          </Slogan>
          <IlustrativePhoto src={Bed2} alt="Cama de casal" />
        </Box>
        <Slogan
          variant="body1"
          style={{ maxWidth: "100%", margin: "20px auto", fontSize: "20px" }}
        >
          "Escolha os nossos produtos e sinta a diferença em viver com mais
          energia, clareza e propósito."
        </Slogan>
      </AboutContainer>
    </Container>
  );
};

export default AboutUs;
