import GeneralModal from '@/components/modal/generalModal';
import Image from 'next/image';
import { Button, Form, Modal } from 'react-bootstrap';

export default function AgentSettingsEditSuccess(props) {
  return (
    <>
      <GeneralModal
        size="md"
        show={props.agentSettingsEditSuccess}
        onHide={() => {
          props.setAgentSettingsEditSuccess(false);
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
          <Form.Label
            style={{
              color: 'rgba(21, 21, 21, 1)',
              fontSize: '14px',
              fontWeight: 600,
              marginTop: '100px',
              textAlign: 'center',
            }}
          >
            The request has been sent
          </Form.Label>
          <Form.Label
            style={{
              color: '#808080',
              fontSize: '12px',
              fontWeight: 400,
              textAlign: 'center',
            }}
          >
            Wait for a response from the moderator about the changes
          </Form.Label>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              src="/img/success-thick.png"
              width="127"
              height="127"
              alt="success"
            />
          </div>
          <Button
            onClick={() => {
              props.setAgentResponseToRequest(true);
              props.setAgentSettingsEditSuccess(false);
            }}
            style={{
              background: '#00902F',
              padding: '15px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              borderRadius: '6px',
              border: 'none',
              height: '56px',
              color: 'white',
              fontSize: '14px',
              marginTop: '100px',
              fontWeight: '500',
              textTransform: 'uppercase',
            }}
          >
            Ok
          </Button>
        </Modal.Body>
      </GeneralModal>
    </>
  );
}
