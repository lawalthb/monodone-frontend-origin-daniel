import Image from 'next/image';
import { Form } from 'react-bootstrap';

export default function AgentWallet(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Image
          onClick={() => props.setWallet(false)}
          src="/img/agent-arrow-left.png"
          width="20"
          height="20"
          alt="left-arrow"
        />
        <Form.Label
          style={{
            color: 'rgba(21, 21, 21, 1)',
            fontSize: '16px',
            fontWeight: '500',
          }}
        >
          {'Wallet'}
        </Form.Label>
        <div></div>
      </div>
      <hr
        style={{
          marginTop: '-0.09px',
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          marginTop: '20px',
          marginBottom: '20px',
        }}
      >
        <Form.Label
          style={{
            color: 'rgba(21, 21, 21, 1)',
            fontSize: '14px',
            fontWeight: 600,
          }}
        >
          Balance:
        </Form.Label>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Form.Label
            style={{
              color: 'rgba(128, 128, 128, 1)',
              fontSize: '14px',
              fontWeight: 400,
            }}
          >
            Received funds for today:
          </Form.Label>
          <Form.Label
            style={{
              color: 'rgba(21, 21, 21, 1)',
              fontSize: '14px',
              fontWeight: 400,
            }}
          >
            ₦ 421.00
          </Form.Label>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Form.Label
            style={{
              color: 'rgba(128, 128, 128, 1)',
              fontSize: '14px',
              fontWeight: 400,
            }}
          >
            Received funds for all time:
          </Form.Label>
          <Form.Label
            style={{
              color: 'rgba(21, 21, 21, 1)',
              fontSize: '14px',
              fontWeight: 400,
            }}
          >
            ₦ 12 128.00
          </Form.Label>
        </div>
      </div>
    </>
  );
}
