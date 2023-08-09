import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Form } from 'react-bootstrap';

export default function ViewLoadboard(props) {
  const router = useRouter();
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
          gap: '10px',
        }}
      >
        <Image
          style={{
            cursor: 'pointer',
          }}
          src="/img/loadboardtrolley.png"
          width="20"
          height="18"
          alt="trolley"
        />
        <Form.Label
          style={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '14px',
            color: 'rgba(0, 144, 47, 1)',
            cursor: 'pointer',
          }}
        >
          <Link style={{ textDecoration: 'none', color: 'inherit'}} target="_blank" href="/loadboard">View Loadboard</Link>
        </Form.Label>
      </div>
    </>
  );
}
