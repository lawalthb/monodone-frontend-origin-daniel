import Media from '@/utils/media';
import Image from 'next/image';
import { Button, Form } from 'react-bootstrap';

export default function FilterAndPostComp(props) {
  const { mobile, tabletAndDesktop } = Media();
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: mobile ? 'space-between' : 'flex-end',
          marginTop: '30px',
          padding: '20px',
          gap: '10px',
        }}
      >
        <Button
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            width: '142px',
            height: '40px',
            border: '1px solid #E7E7E7',
            background: 'transparent',
            padding: '7px',
            cursor: 'pointer',
          }}
        >
          <Image src="/img/filter1.png" width="16" height="15" alt="filter" />
          <Form.Label
            style={{
              color: 'black',
              fontWeight: 400,
              fontSize: '12px',
              marginTop: '5px',
            }}
          >
            Filter here
          </Form.Label>
        </Button>
        <Button
          onClick={() => props.setBlogUpload(true)}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            width: '142px',
            height: '40px',
            border: '1px solid #00902F',
            background: 'white',
            padding: '7px',
            cursor: 'pointer',
          }}
        >
          <Image src="/img/addstory.png" width="14" height="14" alt="add" />
          <Form.Label
            style={{
              color: '#00920F',
              fontWeight: 500,
              fontSize: '12px',
              marginTop: '5px',
            }}
          >
            Post a story
          </Form.Label>
        </Button>
      </div>
    </>
  );
}
