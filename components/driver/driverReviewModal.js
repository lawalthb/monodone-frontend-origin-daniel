import { useRouter } from 'next/router';
import { Form, Modal } from 'react-bootstrap';
import GeneralModal from '../modal/generalModal';

export default function DriverReviewModal(props) {
  const router = useRouter();
  return (
    <>
      <GeneralModal
        size="sm"
        show={props.review}
        onHide={() => {
          props.setReview(false);
        }}
        // style={{
        //   marginTop: '10%',
        // }}
      >
        <Modal.Body
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            padding: '10px 0px',
          }}
        >
          <Form.Label
            onClick={() => router.push('/driver/orders/editpackage')}
            style={{
              color: 'black',
              fontSize: '14px',
              fontWeight: 600,
              textAlign: 'center',
              cursor: 'pointer',
            }}
          >
            Edit package
          </Form.Label>
          <hr
            style={{
              color: 'gray',
              fontWeight: 600,
              marginTop: '-10px',
            }}
          />
          <Form.Label
            onClick={() => {
              props.setAcceptDetails(true);
              props.setReview(false);
            }}
            style={{
              color: 'black',
              fontSize: '14px',
              fontWeight: 600,
              textAlign: 'center',
              cursor: 'pointer',
            }}
          >
            Accept
          </Form.Label>
          <Form.Label
            onClick={() => {
              props.setPrintInvoice(true);
              props.setReview(false);
            }}
            style={{
              color: 'black',
              fontSize: '14px',
              fontWeight: 600,
              textAlign: 'center',
              cursor: 'pointer',
            }}
          >
            Print invoice
          </Form.Label>
          <hr
            style={{
              color: 'gray',
              fontWeight: 600,
              marginTop: '-10px',
            }}
          />
          <Form.Label
            style={{
              color: 'rgba(0, 144, 47, 1)',
              fontSize: '14px',
              fontWeight: 600,
              textAlign: 'center',
              cursor: 'pointer',
            }}
          >
            Cancel
          </Form.Label>
        </Modal.Body>
      </GeneralModal>
    </>
  );
}
