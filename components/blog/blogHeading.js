import Media from '@/utils/media';
import { Form } from 'react-bootstrap';

export default function BlogHeading(props) {
  const { mobile, tabletAndDesktop } = Media();
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: mobile ? '70px' : '10px',
        }}
      >
        <Form.Label
          style={{
            color: 'white',
            fontWeight: 700,
            fontSize: '22px',
            textAlign: 'center',
          }}
        >
          Blog
        </Form.Label>
      </div>
    </>
  );
}
