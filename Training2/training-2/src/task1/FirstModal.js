const FirstModal = ({ isShow, handleClose }) => {
  const displayClassName = isShow ? "display-block" : "display-none";

  return (
    <div className={"modal " + displayClassName}>
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <p>First Modal</p>
      </div>
    </div>
  );
};

export default FirstModal;
