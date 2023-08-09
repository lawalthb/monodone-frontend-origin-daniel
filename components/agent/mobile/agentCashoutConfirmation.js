import GeneralModal from '@/components/modal/generalModal';
import Image from 'next/image';
import { Button, Form, Modal } from 'react-bootstrap';

export default function AgentCashoutConfirmation(props) {
  return (
    <>
      <GeneralModal
        size="md"
        show={props.agentCashoutConfirmation}
        onHide={() => {
          props.setAgentcashoutConfirmation(false);
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
              props.setAgentcashoutConfirmation(false);
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
              src="/img/agentsuccesslogo.png"
              width="165"
              height="165"
              alt="logo"
            />
          </div>
          <Form.Label
            style={{
              color: 'rgba(21, 21, 21, 1)',
              fontSize: '16px',
              fontWeight: '500',
              textAlign: 'center',
            }}
          >
            Cash out
          </Form.Label>
          <Form.Label
            style={{
              color: '#151515',
              fontSize: '12px',
              fontWeight: '500',
              textAlign: 'center',
            }}
          >
            Do you confirm that you received 1350 ?
          </Form.Label>
          <Form.Label
            style={{
              color: 'rgba(21, 21, 21, 1)',
              fontSize: '16px',
              fontWeight: '500',
              textAlign: 'center',
              marginTop: '20px',
            }}
          >
            Adaora Daberechi
          </Form.Label>
          <Form.Label
            style={{
              color: 'rgba(128, 128, 128, 1)',
              fontSize: '12px',
              fontWeight: '500',
              textAlign: 'center',
            }}
          >
            Do you confirm that you received 1350 ?
          </Form.Label>
          <hr />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '10px',
              gap: '10px',
            }}
          >
            <Form.Label
              style={{
                fontSize: '16px',
                color: 'rgba(0, 144, 47, 1)',
                fontWeight: 600,
              }}
            >
              #
            </Form.Label>
            <Form.Label
              style={{
                fontSize: '16px',
                color: 'rgba(21, 21, 21, 1)',
                fontWeight: 600,
              }}
            >
              1 350.00
            </Form.Label>
          </div>
          <Button
            onClick={() => {
              props.setSuccessful(true);
              props.setBarcode(false);
              props.setAgentcashoutConfirmation(false);
            }}
            style={{
              background: '#00902F',
              padding: '5px 10px 2px 10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              borderRadius: '6px',
              border: 'none',
              height: '56px',
              color: 'white',
              fontSize: '14px',
              fontWeight: '500',
              textTransform: 'uppercase',
              marginTop: '40px',
            }}
          >
            Confirm
          </Button>
        </Modal.Body>
      </GeneralModal>
    </>
  );
}
