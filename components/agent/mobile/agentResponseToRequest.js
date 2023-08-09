import GeneralModal from '@/components/modal/generalModal';
import { Button, Form, Modal } from 'react-bootstrap';

export default function AgentResponseToRequest(props) {
  return (
    <>
      <GeneralModal
        size="md"
        show={props.agentResponseToRequest}
        onHide={() => {
          props.setAgentResponseToRequest(false);
        }}
        style={{
          marginTop: '10%',
        }}
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
              textAlign: 'center',
            }}
          >
            Response to request!
          </Form.Label>
          <Form.Label
            style={{
              color: '#808080',
              fontSize: '12px',
              fontWeight: 400,
              textAlign: 'center',
            }}
          >
            Your data has been confirmed by the moderator and changed. Except
            for the branch number, because it is not variable information.
          </Form.Label>
          <Button
            onClick={() => {
              props.setAgentResponseToRequest(false);
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
