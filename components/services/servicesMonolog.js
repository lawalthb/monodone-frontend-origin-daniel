import Media from '@/utils/media';
import ServicesMonologTablet from './servicesMonologTablet';
import ServicesMonologDesktop from './servicesMonologDesktop';

export default function ServicesMonolog(props) {
  const { tablet2, desktop } = Media();
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px',
          fontWeight: 600,
          color: '#414141',
        }}
      >
        Services at Monolog
      </div>
      {tablet2 && (
        <>
          <ServicesMonologTablet services={props.services} />
        </>
      )}
      {desktop && (
        <>
          <ServicesMonologDesktop services={props.services} />
        </>
      )}
    </>
  );
}
