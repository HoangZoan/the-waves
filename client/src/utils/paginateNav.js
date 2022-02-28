import { Pagination, Button } from "react-bootstrap";

const PaginattionComponent = ({ prods, prev, next, resetSearch }) => {
  const goToPrevPage = (page) => {
    prev(page);
  };
  const goToNextPage = (page) => {
    next(page);
  };

  return (
    <>
      {prods.docs.length > 0 ? (
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
      ) : (
        <div>
          <div>Sorry, nothing was found</div>
          <Button className="mt-3" variant="primary" onClick={resetSearch}>
            Reset Search
          </Button>
        </div>
      )}
    </>
  );
};

export default PaginattionComponent;
