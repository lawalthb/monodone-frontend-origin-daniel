import Media from '@/utils/media';
import Image from 'next/image';
import { Form } from 'react-bootstrap';

export default function LoadboardDetailsBreadrumb(props) {
  const { mobile, tabletAndDesktop } = Media();
  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '20px',
          marginLeft: mobile ? '20px' : '80px',
          marginTop: mobile ? '30px' : '0px',
        }}
      >
        <Form.Label
          style={{
            fontSize: '12px',
            color: 'black',
          }}
        >
          {props.caption1}
        </Form.Label>
        <Image
          style={{
            marginTop: '-3px',
          }}
          src="/img/chevrondouble.png"
          width="24"
          height="24"
          alt="chevron"
        />
        <Form.Label
          style={{
            fontSize: '12px',
            color: 'black',
          }}
        >
          {props.caption2}
        </Form.Label>
      </div>
    </>
  );
}
