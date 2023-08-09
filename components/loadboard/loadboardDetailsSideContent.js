import Media from '@/utils/media';
import { Form } from 'react-bootstrap';

export default function LoadboardDetailsSideContent(props) {
  const { mobile, tabletAndDesktop } = Media();
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Form.Label
          style={
            mobile
              ? {
                  fontSize: '12px',
                  fontWeight: 500,
                }
              : {
                  fontSize: '14px',
                  fontWeight: 500,
                }
          }
        >
          {props.caption}
        </Form.Label>
        <Form.Label
          style={
            mobile
              ? {
                  fontSize: '12px',
                  fontWeight: 400,
                }
              : {
                  fontSize: '14px',
                  fontWeight: 400,
                }
          }
        >
          {props.content}
        </Form.Label>
      </div>
    </>
  );
}
