import React from "react";
import { Box, Container, Typography, styled } from "@mui/material";
import theme from "../../theme";

const BenefitsContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
}));

const Slogan = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  fontStyle: "italic",
  color: theme.palette.primary.dark,
  fontSize: "20px",
}));

const BenefitBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  textAlign: "left",
}));

const BoldText = styled("span")({
  fontWeight: "bold",
  color: `${theme.palette.primary.dark}`,
});

const ItalicText = styled("span")({
  fontStyle: "italic",
  color: `${theme.palette.primary.main}`,
});

const Benefits: React.FC = () => {
  return (
    <Container id="beneficios">
      <Typography
        variant="h4"
        component="h4"
        style={{
          color: `${theme.palette.primary.dark}`,
          fontSize: "24px",
          [theme.breakpoints.down("sm")]: {
            fontSize: "20px",
          },
          textAlign: "center",
          margin: "20px",
        }}
      >
        Principais benefícios dos nossos produtos
      </Typography>
      <BenefitsContainer>
        <Slogan
          variant="h6"
          style={{ maxWidth: "100%", margin: "20px auto", fontSize: "20px" }}
        >
          Melhora a circulação sanguínea, produzindo uma melhor qualidade física
          e química do sangue, aumentando a resistência física
        </Slogan>
        <BenefitBox>
          <Typography variant="h6">
            <BoldText>Combate: </BoldText>
            <ItalicText>
              Stress, Fadiga, Tensão, Insônia, Enxaqueca...
            </ItalicText>
          </Typography>
        </BenefitBox>
        <BenefitBox>
          <Typography variant="h6">
            <BoldText>Melhora: </BoldText>
            <ItalicText>Atividade mental, Memória e Criatividade.</ItalicText>
          </Typography>
        </BenefitBox>
        <BenefitBox>
          <Typography variant="h6">
            <BoldText>Alivia dores no corpo: </BoldText>
            <ItalicText>Reumáticas, Lombar, Coluna, etc.</ItalicText>
          </Typography>
        </BenefitBox>
        <BenefitBox>
          <Typography variant="h6">
            <BoldText>Produz: </BoldText>
            <ItalicText>
              Relaxamento do sistema nervoso e muscular, além de aumentar o
              poder imunológico e preservar a saúde.
            </ItalicText>
          </Typography>
        </BenefitBox>
      </BenefitsContainer>
    </Container>
  );
};

export default Benefits;
