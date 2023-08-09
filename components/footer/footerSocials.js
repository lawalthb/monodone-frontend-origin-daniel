import Image from 'next/image';

export default function FooterSocials(props) {
  return (
    <>
      <Image
        style={{
          maxWidth: '100%',
          width: '24px',
        }}
        src={props.imgSrc}
        width="24"
        height="24"
        alt="social"
      />
    </>
  );
}
