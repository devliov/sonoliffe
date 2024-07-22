import { Box, Container, Typography, Avatar, styled } from "@mui/material";
import SellerPhoto from "../../assets/elizeu-foto.jpg";

import Bed1 from "../../assets/dormir-mal.jpg";
import Bed2 from "../../assets/dormindo-bem.jpg";
import Bed3 from "../../assets/homem-dormindo.webp";
import Bed4 from "../../assets/despertar.jpg";
import theme from "../../theme";

const AboutContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  padding: theme.spacing(4),
  gap: "30px",
  textAlign: "center",
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,

  h2: {
    fontSize: "24px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
}));

const IlustrattivePhoto = styled("img")({
  width: "150px",
  height: "150px",
  borderRadius: "10px",
});

const BedSlogan1 = styled("div")({
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  justifyContent: "flex-end",
  flexWrap: "wrap-reverse",
});

const BedSlogan2 = styled("div")({
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  justifyContent: "flex-start",
  flexWrap: "wrap",
});

const SellerContainer = styled(Avatar)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "250px",
  height: "250px",
  margin: "auto",
  backgroundColor: `${theme.palette.primary.light}`,
  border: `2px solid ${theme.palette.primary.light}`,
}));

const SellerAvatar = styled(Avatar)(({ theme }) => ({
  width: "150px",
  height: "150px",
  border: `2px solid ${theme.palette.primary.light}`,
}));

const Slogan = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  fontStyle: "italic",
  color: theme.palette.primary.dark,
  fontSize: "20px",
}));

const AboutUs = () => {
  return (
    <Container id="sobre">
      <AboutContainer>
        <Slogan
          variant="h1"
          style={{
            color: `${theme.palette.primary.dark}`,
            width: "100%",
            textAlign: "center",
            justifyContent: "center",
            fontSize: "26px",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <span>Colchões magnéticos</span> <span>"Terapia e Tecnologia".</span>
        </Slogan>
        <Typography
          variant="h2"
          component="h2"
          marginTop={2}
          style={{ color: `${theme.palette.primary.dark}` }}
        >
          Bem-vindo à SonoLiffe! Nossa missão não é apenas vender colchão é
          proporcionar uma noite de sono tranquila e revigorante.
        </Typography>
        <SellerContainer>
          <SellerAvatar src={SellerPhoto} alt="Seller Photo" />
          <Box>
            <Typography
              variant="body1"
              style={{ fontWeight: "bold", fontSize: "13px" }}
            >
              Elizeu Oliver
            </Typography>
            <Typography
              variant="body1"
              style={{
                fontWeight: "bold",
                color: `${theme.palette.primary.dark}`,
                fontSize: "10px",
              }}
            >
              Representante
            </Typography>
          </Box>
        </SellerContainer>
        <Slogan variant="h6" style={{ margin: "auto" }}>
          8 anos de mercado.
        </Slogan>
        <Slogan variant="h6" style={{ margin: "auto" }}>
          Cansado de noites mal dormidas? Experimente o poder de um sono
          reparador com os nossos produtos e transforme sua vida.
        </Slogan>
        <BedSlogan2>
          <IlustrattivePhoto src={Bed1} alt="cama de casal" />
          <Slogan variant="h6">
            "Uma boa noite de Sono é o melhor investimento"
          </Slogan>
        </BedSlogan2>
        <BedSlogan1>
          <Slogan variant="h6">
            "Durma bem hoje, acorde disposto para desfrutar a vida.""
          </Slogan>
          <IlustrattivePhoto src={Bed4} alt="cama de casal" />
        </BedSlogan1>
        <BedSlogan2>
          <IlustrattivePhoto src={Bed3} alt="cama de casal" />
          <Slogan variant="h6">
            "Dormir bem é o primeiro passo para viver melhor."
          </Slogan>
        </BedSlogan2>
        <BedSlogan1>
          <Slogan variant="h6">
            "Desvalorizar o sono é ignorar seu próprio bem-estar."
          </Slogan>
          <IlustrattivePhoto src={Bed2} alt="cama de casal" />
        </BedSlogan1>
        <Slogan variant="h6" style={{ margin: "auto" }}>
          " Escolha os nossos produtos e sinta a diferença em viver com mais
          energia, clareza e propósito."
        </Slogan>
      </AboutContainer>
    </Container>
  );
};

export default AboutUs;
