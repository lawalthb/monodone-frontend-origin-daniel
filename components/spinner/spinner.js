import Spinner from 'react-bootstrap/Spinner';

function SpinnerComp() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default SpinnerComp;
