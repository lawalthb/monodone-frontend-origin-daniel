import Media from '@/utils/media';
import WhyShippingMobile from './whyShippingMobile';
import WhyShippingMiniTab from './whyShippingMiniTab';
import WhyShippingTablet from './whyShippingTablet';
import WhyShippingDesktop from './whyShippingDesktop';

export default function WhyShipping(props) {
  const { miniMobile, miniTab, tablet2, desktop } = Media();
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
        Why Ship with Monolog?
      </div>
      <p
        style={{
          textAlign: 'center',
          fontSize: '12px',
          color: 'rgba(38, 38, 38, 0.8)',
          padding: '20px 0px',
        }}
      >
        {`Monolog is a company that offers series of services and opportunities to people. 
                Through our services and features, people get opportunities of either building a career in driving, 
                agents and we also build platforms for property buyers to meet real estate agents.`}
      </p>
      {miniMobile && (
        <>
          <WhyShippingMobile />
        </>
      )}
      {miniTab && (
        <>
          <WhyShippingMiniTab />
        </>
      )}
      {tablet2 && (
        <>
          <WhyShippingTablet />
        </>
      )}
      {desktop && (
        <>
          <WhyShippingDesktop />
        </>
      )}
    </>
  );
}
