import { Form, Modal } from 'react-bootstrap';
import GeneralModal from '../modal/generalModal';

export default function TakePicModal(props) {
  return (
    <>
      <GeneralModal
        size="md"
        show={props.takePic}
        onHide={() => {
          props.setTakePic(false);
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
            style={{
              color: 'rgba(128, 128, 128, 1)',
              fontSize: '14px',
              lineHeight: "21px",
              fontWeight: 400,
              textAlign: 'center',
              cursor: 'pointer',
            }}
          >
            Please take a picture of delivered item
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
                props.setTakePic(false);
                props.setCamera(true);
            }}
            style={{
              color: 'black',
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: "24px",
              textAlign: 'center',
              cursor: 'pointer',
            }}
          >
            Take a picture
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
            props.setDriverDetailsModal && props.setDriverDetailsModal(true)
            props.setIssued && props.setIssued(true);
            props.setComplete && props.setComplete(true);
            props.setTakePic(false)
            }}
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
