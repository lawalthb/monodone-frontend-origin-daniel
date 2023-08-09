import { useRef, useState } from 'react';

export default function ReusableRefs(props) {
  const [whoWeAre, setWhoWeAre] = useState(false);
  const [ourMissionStatus, setOurMissionStatus] = useState(false);
  const [ourVisionStatus, setOurVisionStatus] = useState(false);
  const [faq, setFaq] = useState(false);
  const [testimonials, setTestimonials] = useState(false);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const featuresRef = useRef(null);
  const contactRef = useRef(null);
  const whoAreWeRef = useRef(null);
  const ourMissionRef = useRef(null);
  const ourVisionRef = useRef(null);
  const faqRef = useRef(null);
  const testimonialsRef = useRef(null);

  const handleAboutUsClick = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleServicesClick = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFeaturesClick = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhoAreWeClick = () => {
    whoAreWeRef.current?.scrollIntoView({ behavior: 'smooth' });
    setWhoWeAre(true);
    setOurMissionStatus(false);
    setOurVisionStatus(false);
    setFaq(false);
    setTestimonials(false);
  };

  const handleOurMissionClick = () => {
    ourMissionRef.current?.scrollIntoView({ behavior: 'smooth' });
    setOurMissionStatus(true);
    setWhoWeAre(false);
    setOurVisionStatus(false);
    setFaq(false);
    setTestimonials(false);
  };

  const handleOurVisionClick = () => {
    ourVisionRef.current?.scrollIntoView({ behavior: 'smooth' });
    setOurVisionStatus(true);
    setOurMissionStatus(false);
    setWhoWeAre(false);
    setFaq(false);
    setTestimonials(false);
  };

  const handleFaqClick = () => {
    faqRef.current?.scrollIntoView({ behavior: 'smooth' });
    setFaq(true);
    setOurVisionStatus(false);
    setOurMissionStatus(false);
    setWhoWeAre(false);
    setTestimonials(false);
  };

  const handleTestimonialsClick = () => {
    testimonialsRef.current?.scrollIntoView({ behavior: 'smooth' });
    setTestimonials(true);
    setFaq(false);
    setOurVisionStatus(false);
    setOurMissionStatus(false);
    setWhoWeAre(false);
  };

  return {
    aboutRef,
    servicesRef,
    featuresRef,
    contactRef,
    whoAreWeRef,
    ourMissionRef,
    ourVisionRef,
    faqRef,
    testimonialsRef,
    whoWeAre,
    ourMissionStatus,
    ourVisionStatus,
    faq,
    testimonials,
    handleAboutUsClick,
    handleServicesClick,
    handleFeaturesClick,
    handleContactClick,
    handleWhoAreWeClick,
    handleOurMissionClick,
    handleOurVisionClick,
    handleFaqClick,
    handleTestimonialsClick,
  };
}
