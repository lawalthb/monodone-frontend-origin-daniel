import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button, Form } from 'react-bootstrap';

export default function LoadboardListCustomTabViewBtn(props) {
  const router = useRouter();
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          marginBottom: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '15%',
            cursor: 'pointer',
          }}
        >
          {' '}
        </div>
        <div
          style={{
            display: 'flex',
            width: '45%',
            fontSize: '12px',
            fontWeight: '500',
            color: '#000000',
            cursor: 'pointer',
          }}
        >
          Actions
        </div>
        <div
          style={{
            display: 'flex',
            width: '40%',
          }}
        >
          <Button
            onClick={() => router.push(`/loadboard/${props.data.id}`)}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '11px',
              height: '30px',
              width: '100px',
              background: '#7CC427',
              border: 'none',
              marginTop: '-3px',
              padding: '7px',
              marginBottom: '11px',
            }}
          >
            <Form.Label
              style={{
                fontSize: '10px',
                fontWeight: 400,
                color: 'white',
                marginTop: '7px',
              }}
            >
              View details
            </Form.Label>
            <Image
              style={{}}
              src="/img/cargoarrowforward.png"
              width="6"
              height="10"
              alt="arrow"
            />
          </Button>
        </div>
      </div>
    </>
  );
}
