import React from 'react';
import { Img2, CloseButton, PopupContent, PopupBackground } from  "./Post.jsx";

function ImagePopup({ imageUrl, onClose }) {
  return (
    <PopupBackground>
        <CloseButton onClick={onClose}>Fechar</CloseButton>
      <PopupContent>
        <Img2 src={imageUrl} alt="Imagem em pop-up" />
      </PopupContent>
    </PopupBackground>
  );
}

export default ImagePopup;
