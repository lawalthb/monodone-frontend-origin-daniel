import ServicesMonologContent from './servicesMonologContent';

export default function WhyShippingMobile(props) {
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
        <ServicesMonologContent
          imgWidth="33"
          imgSrc="/img/monologloadboard.png"
          imgHeight="30"
          caption="Load Insurance"
          desc={`We ensure that your load shipped with us, 
                    are safe up till delivery and incase of damage, there will be compensation.`}
        />
        <ServicesMonologContent
          imgWidth="35"
          imgSrc="/img/monologrecentlyviewed.png"
          imgHeight="35"
          caption="Recent Technology"
          desc={`At momlog we give our customers a wonderful shipping 
                    experience with the help of recent technologies in logistics..`}
        />
        <ServicesMonologContent
          imgWidth="32"
          imgSrc="/img/monologreliablesupport.png"
          imgHeight="30"
          caption="Reliable Customer Support"
          desc={`Our customer support system is a topnotch. 
                    We make sure our customers come back after each experience.`}
        />
        <ServicesMonologContent
          imgWidth="40"
          imgSrc="/img/monologaccurate.png"
          imgHeight="40"
          caption="Accurate Delivery"
          desc={`We are sure to uphold our integrity, making sure that every 
                    load shipped with us, is delivered accurately and safely to the receipent.`}
        />
      </div>
    </>
  );
}
