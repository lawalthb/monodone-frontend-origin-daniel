import Image from 'next/image';
import FooterContent from './footerContent';
import FooterSocials from './footerSocials';

export default function FooterContentDesktop(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          padding: '5px 70px',
        }}
      >
        <Image
          style={{
            maxWidth: '100%',
            width: '123px',
          }}
          src="/img/monodomelogo.png"
          width="123"
          height="20"
          alt="map"
        />
        <FooterContent
          imgWidth="4"
          imgHeight="4"
          caption="Become a driver"
          imgSrc="/img/elipse-dot.png"
          marginTop="6px"
        />
        <FooterContent
          imgWidth="4"
          imgHeight="4"
          caption="Become a partner"
          imgSrc="/img/elipse-dot.png"
          marginTop="6px"
        />
        <FooterContent
          imgWidth="21"
          imgHeight="21"
          caption="Mobile App Manual"
          imgSrc="/img/monodomepdficon.png"
        />
        <FooterContent
          imgWidth="21"
          imgHeight="21"
          caption="Website Manual"
          imgSrc="/img/monodomepdficon.png"
        />
        <div
          style={{
            display: 'flex',
            gap: '10px',
          }}
        >
          <FooterSocials imgSrc="/img/monodomeinstagram.png" />
          <FooterSocials imgSrc="/img/monodometwittericon.png" />
          <FooterSocials imgSrc="/img/monodomefacebookicon.png" />
          <FooterSocials imgSrc="/img/monodomelinkedinicon.png" />
          <FooterSocials imgSrc="/img/monodomeutubeicon.png" />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          padding: '5px 70px',
        }}
      >
        <div></div>
        <div></div>
        <div></div>
        <FooterContent
          imgWidth="4"
          imgHeight="4"
          caption="Become an agent"
          imgSrc="/img/elipse-dot.png"
          marginTop="6px"
        />
        <FooterContent
          imgWidth="4"
          imgHeight="4"
          caption="Become a full staff member"
          imgSrc="/img/elipse-dot.png"
          marginTop="6px"
        />
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
