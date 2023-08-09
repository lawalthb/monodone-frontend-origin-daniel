import Media from '@/utils/media';
import ContactForm from './contactForm';
import ContactReusables from './contactReusables';

export default function Communication(props) {
  const { mobile, tabletAndDesktop } = Media();
  const { letsTalk, yourConcern, connectWithUs, socials, callAndEmail } =
    ContactReusables();
  return (
    <>
      {mobile && (
        <>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              padding: '10px',
            }}
          >
            {letsTalk}
            {yourConcern}
            <ContactForm />
            <div
              style={{
                marginTop: '30px',
              }}
            >
              {connectWithUs}
              {socials}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {callAndEmail}
              </div>
            </div>
          </div>
        </>
      )}
      {tabletAndDesktop && (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              padding: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '68%',
                border: '1px solid #E7E7E7',
                padding: '40px 80px',
              }}
            >
              {letsTalk}
              {yourConcern}
              <ContactForm />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '28%',
                padding: '5px',
              }}
            >
              {connectWithUs}
              {socials}
              {callAndEmail}
            </div>
          </div>
        </>
      )}
    </>
  );
}
