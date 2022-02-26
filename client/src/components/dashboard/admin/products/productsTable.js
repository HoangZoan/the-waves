import { Table, Pagination, Modal, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import Moment from "react-moment";
import Loader from "../../../../utils/loader";

const ProductsTable = ({
  prods,
  prev,
  next,
  goToEdit,
  removeModal,
  handleClose,
  handleModal,
  handleRemove,
}) => {
  const goToPrevPage = (page) => {
    prev(page);
  };
  const goToNextPage = (page) => {
    next(page);
  };

  return (
    <>
      {prods && prods.docs ? (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Created</th>
                <th>Model</th>
                <th>Available</th>
              </tr>
            </thead>

            <tbody>
              {prods.docs.map((item) => (
                <tr key={item._id}>
                  <td>
                    <Moment to={item.date} />
                  </td>
                  <td>{item.model}</td>
                  <td>{item.available}</td>
                  <td
                    className="action_btn remove_btn"
                    style={{ color: "white" }}
                    onClick={() => handleModal(item._id)}
                  >
                    Remove
                  </td>
                  <td
                    className="action_btn edit_btn"
                    style={{ color: "white" }}
                    onClick={() => goToEdit(item._id)}
                  >
                    Edit
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Pagination>
            {prods.hasPrevPage && (
              <>
                <Pagination.Prev onClick={() => goToPrevPage(prods.prevPage)} />
                <Pagination.Item onClick={() => goToPrevPage(prods.prevPage)}>
                  {prods.prevPage}
                </Pagination.Item>
              </>
            )}
            <Pagination.Item active>{prods.page}</Pagination.Item>
            {prods.hasNextPage && (
              <>
                <Pagination.Item onClick={() => goToNextPage(prods.nextPage)}>
                  {prods.nextPage}
                </Pagination.Item>
                <Pagination.Next onClick={() => goToNextPage(prods.nextPage)} />
              </>
            )}
          </Pagination>
          <hr />

          <LinkContainer to="/dashboard/admin/admin_products/add_products">
            <Button variant="secondary">Add product</Button>
          </LinkContainer>
        </>
      ) : (
        <Loader />
      )}

      <Modal show={removeModal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>

        <Modal.Body>There is no going back.</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Opps, close this now
          </Button>
          <Button variant="danger" onClick={handleRemove}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductsTable;
