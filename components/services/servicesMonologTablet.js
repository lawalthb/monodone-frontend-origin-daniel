import ServicesMonologContent from './servicesMonologContent';

export default function ServicesMonologTablet(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          marginTop: '20px',
          gap: '10px',
        }}
      >
        {props.services?.slice(0, 3).map((service, idx) => (
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          marginTop: '20px',
          gap: '10px',
        }}
      >
        {props.services?.slice(3, 6).map((service, idx) => (
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          marginTop: '20px',
          gap: '10px',
        }}
      >
        {props.services?.slice(6).map((service, idx) => (
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
