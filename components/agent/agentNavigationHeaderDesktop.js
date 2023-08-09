import Image from 'next/image';
import { Form } from 'react-bootstrap';

export default function AgentNavigationHeaderDesktop(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          paddingLeft: '20px',
          width: '100%',
          height: '72px',
          background: 'white',
          borderBottom: '1px solid rgba(231, 231, 231, 1)',
        }}
      >
        <Image
          style={{
            margin: '12px 0px',
            cursor: 'pointer',
            marginTop: '17px',
            marginRight: '10px',
          }}
          src="/img/agentuimessage.png"
          width="39"
          height="32"
          alt="message"
        />
        <Image
          style={{
            margin: '12px 0px',
            marginRight: '10px',
            marginTop: '17px',
          }}
          src="/img/agentonline.png"
          width="30"
          height="30"
          alt="message"
        />
        <Form.Label
          style={{
            fontSize: '12px',
            marginTop: '23px',
            color: 'black',
            marginRight: '10px',
          }}
        >
          Agent
        </Form.Label>
        <Form.Label
          style={{
            fontSize: '12px',
            marginTop: '23px',
            color: 'black',
            marginRight: '10px',
          }}
        >
          Office #34
        </Form.Label>
        <Form.Label
          style={{
            fontSize: '11px',
            marginTop: '23px',
            color: 'black',
            marginRight: '10px',
          }}
        >
          {'|'}
        </Form.Label>
        <Form.Label
          style={{
            fontSize: '11px',
            marginTop: '23px',
            color: 'black',
            marginRight: '35px',
          }}
        >
          to 30 kg
        </Form.Label>
      </div>
    </>
  );
}
