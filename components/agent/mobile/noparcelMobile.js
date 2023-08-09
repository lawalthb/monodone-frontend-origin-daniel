import Image from 'next/image';
import { Form } from 'react-bootstrap';

export default function NoparcelMobile(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Image
          onClick={() => props.setListOfParcel(false)}
          src="/img/agent-arrow-left.png"
          width="20"
          height="20"
          alt="left-arrow"
        />
        <Form.Label
          style={{
            color: 'rgba(21, 21, 21, 1)',
            fontSize: '14px',
            fontWeight: '500',
          }}
        >
          List of parcels
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
          justifyContent: 'space-between',
          width: '100%',
          marginTop: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Form.Label
            style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#151515',
            }}
          >
            User Name
          </Form.Label>
          <div
            style={{
              display: 'flex',
            }}
          >
            <Image
              src="/img/agentphone.png"
              width="15"
              height="20"
              alt="phone"
            />
            <Form.Label
              style={{
                marginLeft: '10px',
                color: '#808080',
                fontWeight: '400',
              }}
            >
              097 433 44 33
            </Form.Label>
          </div>
        </div>
        <Image
          onClick={props.handleAddParcel}
          style={{
            cursor: 'pointer',
          }}
          src="/img/btnadd.png"
          width="56"
          height="56"
          alt="btn"
        />
      </div>
      <hr />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '200px',
        }}
      >
        <Image src="/img/nolist.png" width="114" height="120" alt="no list" />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <Form.Label
          style={{
            width: '290px',
            color: 'rgba(141, 141, 141, 1)',
            textAlign: 'center',
            fontSize: '13px',
          }}
        >
          No active parcels have been found, at the moment...
        </Form.Label>
      </div>
    </>
  );
}
