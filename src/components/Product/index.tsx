import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  styled,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import SolteiraoPhoto from "../../assets/cama-4.jpg";
import PadraoPhoto from "../../assets/cama-1.jpg";
import QueenPhoto from "../../assets/cama-2.jpg";
import SuperKingPhoto from "../../assets/cama-3.jpg";
import theme from "../../theme";

const ProductContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  padding: theme.spacing(4),
  gap: "30px",
  textAlign: "center",
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
}));

const ProductPhoto = styled("img")({
  width: "150px",
  height: "150px",
  borderRadius: "10px",
  cursor: "pointer",
});

const Slogan = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  fontStyle: "italic",
  color: theme.palette.primary.dark,
  fontSize: "20px",
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: theme.spacing(1),
  top: theme.spacing(1),
  color: theme.palette.grey[500],
}));

interface ProductDialogProps {
  open: boolean;
  onClose: () => void;
  photo: string;
  name: string;
}

const ProductDialog: React.FC<ProductDialogProps> = ({
  open,
  onClose,
  photo,
  name,
}) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle style={{ backgroundColor: "#f1f2ec" }}>
      {name}
      <CloseButton onClick={onClose} style={{ backgroundColor: "#f1f2ec" }}>
        <CloseIcon />
      </CloseButton>
    </DialogTitle>
    <DialogContent style={{ backgroundColor: "#f1f2ec" }}>
      <Box
        display="flex"
        justifyContent="center"
        style={{ backgroundColor: "#f1f2ec" }}
      >
        <img src={photo} alt={name} style={{ width: "100%", height: "auto" }} />
      </Box>
    </DialogContent>
  </Dialog>
);

const ProductList: React.FC = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{
    name: string;
    photo: string;
  }>({ name: "", photo: "" });

  const handlePhotoClick = (name: string, photo: string) => {
    setSelectedProduct({ name, photo });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProduct({ name: "", photo: "" });
  };

  return (
    <Container id="produtos">
      <Typography
        variant="h4"
        component="h4"
        margin="20px"
        style={{
          color: `${theme.palette.primary.dark}`,
          fontSize: "24px",
          [theme.breakpoints.down("sm")]: {
            fontSize: "20px",
          },
          textAlign: "center",
        }}
      >
        Conheça nossos Produtos
      </Typography>
      <ProductContainer>
        <Box>
          <Slogan variant="h6">Solteirão</Slogan>
          <ProductPhoto
            src={SolteiraoPhoto}
            alt="Solteirão"
            onClick={() => handlePhotoClick("Solteirão", SolteiraoPhoto)}
          />
          <Typography
            variant="body1"
            style={{
              color: `${theme.palette.primary.main}`,
              fontWeight: "bold",
              fontSize: "12px",
            }}
          >
            {" "}
            1,08x1,98
          </Typography>
        </Box>
        <Box>
          <Slogan variant="h6">Padrão</Slogan>
          <ProductPhoto
            src={PadraoPhoto}
            alt="Padrão"
            onClick={() => handlePhotoClick("Padrão", PadraoPhoto)}
          />
          <Typography
            variant="body1"
            style={{
              color: `${theme.palette.primary.main}`,
              fontWeight: "bold",
              fontSize: "12px",
            }}
          >
            {" "}
            1,38x1,88
          </Typography>
        </Box>
        <Box>
          <Slogan variant="h6">Queen</Slogan>
          <ProductPhoto
            src={QueenPhoto}
            alt="Queen"
            onClick={() => handlePhotoClick("Queen", QueenPhoto)}
          />
          <Typography
            variant="body1"
            style={{
              color: `${theme.palette.primary.main}`,
              fontWeight: "bold",
              fontSize: "12px",
            }}
          >
            {" "}
            1,58x1,98
          </Typography>
        </Box>
        <Box>
          <Slogan variant="h6">Super King</Slogan>
          <ProductPhoto
            src={SuperKingPhoto}
            alt="Super King"
            onClick={() => handlePhotoClick("Super King", SuperKingPhoto)}
          />
          <Typography
            variant="body1"
            style={{
              color: `${theme.palette.primary.main}`,
              fontWeight: "bold",
              fontSize: "12px",
            }}
          >
            {" "}
            1,93x2,03
          </Typography>
        </Box>
      </ProductContainer>

      <ProductDialog
        open={openDialog}
        onClose={handleCloseDialog}
        photo={selectedProduct.photo}
        name={selectedProduct.name}
      />
    </Container>
  );
};

export default ProductList;
