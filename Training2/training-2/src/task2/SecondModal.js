const SecondModal = ({ isShow, children }) => {
  const displayClassName = isShow ? "display-block" : "display-none";

  return (
    <div className={"modal " + displayClassName}>
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default SecondModal;
