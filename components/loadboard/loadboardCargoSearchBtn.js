import Media from '@/utils/media';
import Image from 'next/image';
import { Button, Form } from 'react-bootstrap';

export default function LoadboardCargoSearchBtn(props) {
  const { mobile, tabletAndDesktop } = Media();
  return (
    <>
      <Button
        type="submit"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          width: mobile ? '100%' : '100%',
          height: '33px',
          border: 'none',
          background: '#7CC427',
          padding: '7px',
          marginTop: mobile ? '20px' : '60px',
        }}
      >
        <Image src="/img/cargosearch.png" width="13" height="13" alt="search" />
        <Form.Label
          style={{
            color: '#FFFFFF',
            fontWeight: '500',
            fontSize: '13px',
            marginTop: '7px',
          }}
        >
          Search
        </Form.Label>
      </Button>
    </>
  );
}
