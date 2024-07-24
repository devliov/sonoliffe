import React, { useState } from "react";
import {
  Box,
  Container,
  IconButton,
  styled,
  Typography,
  Dialog,
  DialogContent,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import SolteiraoPhoto from "../../assets/download(3).jpeg";
import PadraoPhoto from "../../assets/download(2).jpeg";
import QueenPhoto from "../../assets/download(1).jpeg";
import SuperKingPhoto from "../../assets/download.jpeg";
import theme from "../../theme";

const ImageGalleryContainer = styled(Box)({
  position: "relative",
  width: "100%",
  maxWidth: "700px",
  margin: "0 auto",
  overflow: "hidden",
});

const ImageWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
});

const Image = styled("img")({
  width: "100%",
  minWidth: "185px",
  height: "auto",
  display: "block",
  transition: "opacity 0.5s ease",
  borderRadius: "10px",
});

const CenterImage = styled(Image)({
  width: "50%",
  opacity: 1,
  zIndex: 3,
  cursor: "pointer",
});

const SideImage = styled(Image)({
  maxWidth: "50px",
  opacity: 0.3,
  transition: "opacity 0.5s ease-in",
});

const LeftImage = styled(SideImage)({
  marginRight: theme.spacing(1),
});

const RightImage = styled(SideImage)({
  marginLeft: theme.spacing(1),
});

const Button = styled(IconButton)({
  fontSize: "30px",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: theme.palette.primary.main,
  color: "white",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
  zIndex: 3,
});

const LeftButton = styled(Button)({
  left: theme.spacing(1),
});

const RightButton = styled(Button)({
  right: theme.spacing(1),
});

const Caption = styled(Typography)({
  position: "absolute",
  top: theme.spacing(0.5),
  left: "50%",
  transform: "translateX(-50%)",
  color: "white",
  backgroundColor: "rgba(249, 247, 247, 0.215)",
  padding: theme.spacing(0.8),
  fontSize: "20px",
  fontWeight: "bold",
  textAlign: "center",
  borderRadius: "5px",
  zIndex: 3,
});

const Measure = styled(Typography)({
  position: "absolute",
  bottom: theme.spacing(0.5),
  left: "50%",
  transform: "translateX(-50%)",
  color: "white",
  backgroundColor: "rgba(249, 247, 247, 0.215)",
  padding: theme.spacing(0.4),
  fontSize: "14px",
  fontWeight: "bold",
  textAlign: "center",
  borderRadius: "5px",
  zIndex: 3,
});

const DialogContentBox = styled(Box)({
  textAlign: "center",
  padding: theme.spacing(1),
  position: "relative",
});

const ProductName = styled(Typography)({
  color: theme.palette.primary.dark,
  fontWeight: "bold",
  fontSize: "1.25rem",
});

const ProductMeasure = styled(Typography)({
  fontSize: "1rem",
  color: theme.palette.primary.main,
});

const CloseButton = styled(IconButton)({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
  color: theme.palette.text.primary,
  "&:hover": {
    color: theme.palette.error.main,
  },
});

const images = [
  {
    src: SolteiraoPhoto,
    alt: "Solteirão",
    name: "Solteirão",
    measure: "1,08x1,98",
  },
  { src: PadraoPhoto, alt: "Padrão", name: "Padrão", measure: "1,38x1,88" },
  { src: QueenPhoto, alt: "Queen", name: "Queen", measure: "1,58x1,98" },
  {
    src: SuperKingPhoto,
    alt: "Super King",
    name: "Super King",
    measure: "1,93x2,03",
  },
];

const Slogan = styled(Typography)(({ theme }) => ({
  fontStyle: "italic",
  color: theme.palette.primary.dark,
  fontSize: "1rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.875rem",
  },
  textAlign: "center",
}));

const ImageGalleryComponent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleImageClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Container id="produtos">
      <Slogan
        variant="body1"
        style={{
          maxWidth: "100%",
          margin: "20px auto",
          fontSize: "20px",
        }}
      >
        Cansado de noites mal dormidas? Experimente o poder de um sono reparador
        com os nossos produtos e transforme sua vida.
      </Slogan>
      <ImageGalleryContainer>
        <ImageWrapper>
          <LeftImage
            src={images[(currentIndex - 1 + images.length) % images.length].src}
            alt="Previous"
          />
          <CenterImage
            src={images[currentIndex].src}
            alt="Current"
            onClick={handleImageClick}
          />
          <RightImage
            src={images[(currentIndex + 1) % images.length].src}
            alt="Next"
          />
          <Caption>{images[currentIndex].name}</Caption>
          <Measure>{images[currentIndex].measure}</Measure>
          <LeftButton onClick={prevImage}>
            <ChevronLeftIcon />
          </LeftButton>
          <RightButton onClick={nextImage}>
            <ChevronRightIcon />
          </RightButton>
        </ImageWrapper>
      </ImageGalleryContainer>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        fullWidth
        maxWidth="md"
      >
        <DialogContent>
          <DialogContentBox>
            <ProductName>{images[currentIndex].name}</ProductName>
            <ProductMeasure>{images[currentIndex].measure}</ProductMeasure>
          </DialogContentBox>
          <CloseButton onClick={handleCloseDialog}>
            <CloseIcon />
          </CloseButton>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: theme.shape.borderRadius,
              }}
            />
          </Box>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default ImageGalleryComponent;
