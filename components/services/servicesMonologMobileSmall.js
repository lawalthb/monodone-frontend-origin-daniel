import ServicesMonologContent from './servicesMonologContent';

export default function ServicesMonologMobileSmall(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
          gap: '10px',
        }}
      >
        {props.services?.map((service, idx) => (
          <ServicesMonologContent
            key={idx}
            id={service.id}
            imgWidth={service.imgWidth}
            imgSrc={service.imgSrc}
            imgHeight={service.imgHeight}
            caption={service.name}
            desc={service.shortDesc}
          />
        ))}
      </div>
    </>
  );
}
