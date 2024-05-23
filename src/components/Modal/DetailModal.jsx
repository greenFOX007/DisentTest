import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./DetailModal.css";

export const DetailModal = ({ data, ...props }) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {data?.name?.common}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-container">
        <h4>Capital: {data?.capital?.[0]}</h4>
        <div className="flag-container">
          <img
            className="flag-img"
            src={data?.flags?.png}
            alt={data?.flags?.alt}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
