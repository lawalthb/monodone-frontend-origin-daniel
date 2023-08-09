import Media from '@/utils/media';
import ServicesMonologMiniTab from './servicesMonologMiniTab';
import ServicesMonologMobileSmall from './servicesMonologMobileSmall';

export default function ServicesMonologMobile(props) {
  const { miniMobile, miniTab } = Media();
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '18px',
          fontWeight: 600,
          color: '#414141',
        }}
      >
        Services at Monolog
      </div>
      {miniTab && (
        <>
          <ServicesMonologMiniTab services={props.services} />
        </>
      )}
      {miniMobile && (
        <>
          <ServicesMonologMobileSmall services={props.services} />
        </>
      )}
    </>
  );
}
