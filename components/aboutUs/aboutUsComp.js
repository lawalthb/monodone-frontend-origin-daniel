import Media from '@/utils/media';
import { Form } from 'react-bootstrap';

export default function AboutUsComp(props) {
  const { mobile } = Media();
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
          gap: '7px',
        }}
      >
        <Form.Label
          style={{
            color: 'black',
            fontSize: '16px',
            fontWeight: 700,
            marginTop: '15px',
          }}
        >
          What We Do At
        </Form.Label>
        <Form.Label
          style={{
            color: '#7CC427',
            fontSize: '16px',
            fontWeight: 700,
            marginTop: '15px',
          }}
        >
          Monodome!
        </Form.Label>
      </div>
      <p
        style={
          mobile
            ? {
                textAlign: 'center',
                fontSize: '12px',
              }
            : {
                textAlign: 'center',
                padding: '30px 70px',
              }
        }
      >
        Monodome is a company that offers series of services and opportunities
        to people. Through our services and features, people get opportunities
        of either building a career in driving, agents and we also build
        platforms for property buyers to meet real estate agents.
      </p>
    </>
  );
}
