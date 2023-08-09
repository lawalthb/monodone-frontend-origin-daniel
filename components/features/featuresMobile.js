import FeaturesContent from './featuresContent';

export default function FeaturesMobile(props) {
  return (
    <>
      <FeaturesContent
        imgSrc="/img/1.png"
        caption="Agent Services"
        desc={
          'Load offers reliable and timely delivery for your palletized freight weighing'
        }
        onMouseEnter={() => props.setAgentDesc(true)}
        onMouseLeave={() => props.setAgentDesc(false)}
        showDesc={props.agentDesc}
      />
      <FeaturesContent
        imgSrc="/img/2.png"
        caption="Driver Services"
        desc={
          'Load offers reliable and timely delivery for your palletized freight weighing more. Our company is developing rapidly and today is a leader in the field of logistics. What we can offer today.'
        }
        onMouseEnter={() => props.setDriverDesc(true)}
        onMouseLeave={() => props.setDriverDesc(false)}
        showDesc={props.driverDesc}
      />
      <FeaturesContent
        imgSrc="/img/3.png"
        caption="Future Services"
        desc={
          'Load offers reliable and timely delivery for your palletized freight weighing'
        }
        onMouseEnter={() => props.setFutureServices(true)}
        onMouseLeave={() => props.setFutureServices(false)}
        showDesc={props.futureServices}
      />
      <FeaturesContent
        imgSrc="/img/4.png"
        caption="Freelancer Services"
        desc={
          'Load offers reliable and timely delivery for your palletized freight weighing'
        }
        onMouseEnter={() => props.setFreelancerServices(true)}
        onMouseLeave={() => props.setFreelancerServices(false)}
        showDesc={props.freelancerServices}
      />
    </>
  );
}
