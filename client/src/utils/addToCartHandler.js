import { Modal, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const AddToCartHandler = ({ modal, handleClose, errorType }) => {
  return (
    <>
      <Modal show={modal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sorry</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {errorType === "auth" ? (
            <div>Sorry, you need to register or sign in to continue</div>
          ) : (
            <div>You need to verify your account first</div>
          )}
        </Modal.Body>

        <Modal.Footer>
          {errorType === "auth" ? (
            <LinkContainer to="/sign_in">
              <Button>Go to register / Sign in</Button>
            </LinkContainer>
          ) : (
            <Button onClick={() => alert("trigger")}>
              Send email verification again
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddToCartHandler;
