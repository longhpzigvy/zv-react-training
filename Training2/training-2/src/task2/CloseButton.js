const CloseButton = ({ handleClose }) => {
  return (
    <span className="close" onClick={handleClose}>
      &times;
    </span>
  );
};

export default CloseButton;
