import { Form } from 'react-bootstrap';
import Media from '@/utils/media';
import ContactContent from './contactContent';

export default function ContactComp(props) {
  const { mobile, tabletAndDesktop } = Media();
  return (
    <>
      <div
        style={
          tabletAndDesktop
            ? {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '30px',
              }
            : {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }
        }
      >
        <Form.Label
          style={{
            color: 'black',
            fontSize: '20px',
            fontWeight: 700,
          }}
        >
          Contact
        </Form.Label>
        <Form.Label
          style={{
            color: '#7CC427',
            fontSize: '20px',
            fontWeight: 700,
            marginLeft: '10px',
          }}
        >
          Us
        </Form.Label>
      </div>
      <p
        style={
          mobile
            ? {
                textAlign: 'center',
                padding: '0px 20px',
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
      <div
        style={
          tabletAndDesktop
            ? {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '50px',
                width: '100%',
                padding: '5px 70px',
              }
            : {
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }
        }
      >
        <ContactContent
          imgSrc="/img/monodomemsgicon.png"
          caption="info@monodome.com"
        />
        <ContactContent
          imgSrc="/img/monodomephoneicon.png"
          caption="+234 8149 0034 23"
        />
        <ContactContent imgSrc="/img/monodomesocials.png" caption="soccials" />
      </div>
    </>
  );
}
