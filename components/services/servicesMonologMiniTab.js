import ServicesMonologContent from './servicesMonologContent';

export default function ServicesMonologMiniTab(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          marginTop: '20px',
          gap: '20px',
        }}
      >
        {props.services?.slice(0, 2).map((service, idx) => (
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
          justifyContent: 'center',
          width: '100%',
          marginTop: '20px',
          gap: '20px',
        }}
      >
        {props.services?.slice(2, 4).map((service, idx) => (
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
          justifyContent: 'center',
          width: '100%',
          marginTop: '20px',
          gap: '20px',
        }}
      >
        {props.services?.slice(4, 6).map((service, idx) => (
          <ServicesMonologContent
            key={idx}
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
          justifyContent: 'center',
          width: '100%',
          marginTop: '20px',
          gap: '20px',
        }}
      >
        {props.services?.slice(6).map((service, idx) => (
          <ServicesMonologContent
            key={idx}
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
