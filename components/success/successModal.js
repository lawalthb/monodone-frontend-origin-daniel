import { Button, Form, Modal } from 'react-bootstrap';
import GeneralModal from '../modal/generalModal';
import Image from 'next/image';

export default function SuccessModal(props) {
  return (
    <>
      <GeneralModal
        size="md"
        show={props.successModal}
        onHide={() => {
          props.setSuccessModal(false);
        }}
        style={props.style}
      >
        <Modal.Body
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            paddingBottom: '30px',
          }}
        >
          <div
            onClick={() => {
              props.setSuccessModal(false);
            }}
            style={{
              position: 'absolute',
              top: '-1rem',
              right: '-0.8rem',
              cursor: 'pointer',
            }}
          >
            <Image src="/img/close.png" width="14" height="14" alt="close" />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '10px',
            }}
          >
            <Image
              src="/img/success-logo.png"
              width="50"
              height="30"
              alt="logo"
            />
          </div>
          <Form.Label
            style={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: '18px',
              color: '#151515',
              letterSpacing: '0.02em',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {props.caption}
          </Form.Label>
          <Form.Label
            style={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              textAlign: 'center',
              fontSize: '12px',
              color: '#151515',
              letterSpacing: '0.02em',
              marginBottom: '20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {props.msg}
          </Form.Label>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '20px',
              marginBottom: '20px',
            }}
          >
            <Image
              src="/img/success-thick.png"
              width="300"
              height="300"
              alt="success"
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '20px',
              marginBottom: '20px',
            }}
          >
            <Button
              onClick={props.handleClick}
              style={{
                boxSizing: 'border-box',
                width: '100%',
                height: '40px',
                background: '#00902F',
                bordeRadius: '6px',
                flex: 'none',
                order: '0',
                flexGrow: '0',
                border: 'none',
                fontSize: '14px',
              }}
            >
              {props.ok}
            </Button>
          </div>
        </Modal.Body>
      </GeneralModal>
    </>
  );
}
