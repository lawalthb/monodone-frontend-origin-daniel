import Image from 'next/image';
import { Button, Carousel, Container, Form } from 'react-bootstrap';
import GeneralNav from '../navigation/generalNav/generalNav';
import { useState } from 'react';
import styles from './home.module.css';
import { carouselData } from '@/utils/carousel/carouselData';
import AboutUsComp from '../aboutUs/aboutUsComp';
import OurServiceComp from '../services/ourServiceComp';
import Features from '../features/features';
import Partners from '../partners/partners';
import MonodomeAppFeatures from '../monodomeAppFeatures/monodomeAppFeatures';
import ContactComp from '../contact/contactComp';
import OurOffices from '../offices/ourOffices';
import FooterComp from '../footer/footerComp';
import Login from '../login/login';
import Signup from '../signup/signup';

export default function HomeDesktop(props) {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  
  return (
    <>
      <div
        className={styles.homeBgDesktop}
        style={{
          height: '660px',
          width: '100%',
        }}
      >
        <GeneralNav
          name="home"
          imgSrc="/img/monodomelogo.png"
          handleAboutUsClick={props.handleAboutUsClick}
          handleServicesClick={props.handleServicesClick}
          handleFeaturesClick={props.handleFeaturesClick}
          handleContactClick={props.handleContactClick}
          setLogin={setLogin}
          setSignup={setSignup}
        />
        <Carousel>
          {carouselData.map((data, idx) => (
            <Carousel.Item
              key={idx}
              style={{
                padding: '20px 50px',
              }}
            >
              <Container>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'space-between',
                    height: '500px',
                    padding: '0px 40px',
                    width: '100%',
                    gap: '50px',
                    marginTop: '40px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '55%',
                    }}
                  >
                    <div
                      style={
                        data.statement2 === 'Clearing and Forwarding Agent'
                          ? {
                              display: 'flex',
                              flexDirection: 'column',
                            }
                          : {
                              display: 'flex',
                              gap: '5px',
                            }
                      }
                    >
                      <Form.Label
                        style={{
                          fontWeight: 700,
                          fontSize: '30px',
                          color: 'white',
                        }}
                      >
                        {data.statement1}
                      </Form.Label>
                      <Form.Label
                        style={
                          data.statement2 === 'Clearing and Forwarding Agent'
                            ? {
                                fontWeight: 700,
                                fontSize: '30px',
                                color: '#7CC427',
                                marginTop: '-20px',
                              }
                            : {
                                fontWeight: 700,
                                fontSize: '30px',
                                color: '#7CC427',
                              }
                        }
                      >
                        {data.statement2}
                      </Form.Label>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        gap: '5px',
                        marginTop: '-10px',
                      }}
                    >
                      <Form.Label
                        style={{
                          fontWeight: 700,
                          fontSize: '30px',
                          color: 'white',
                        }}
                      >
                        {data.statement3}
                      </Form.Label>
                      <Form.Label
                        style={{
                          fontWeight: 700,
                          fontSize: '30px',
                          color: 'white',
                        }}
                      >
                        {data.statement4}
                      </Form.Label>
                    </div>
                    <p
                      style={{
                        fontSize: '12px',
                        color: '#d0d0d0',
                        textAlign: 'justify',
                        letterSpacing: '0.02em',
                        marginTop: '20px',
                      }}
                    >
                      {data.statement5} <br /> {data.statement6}
                    </p>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '20px',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          gap: '10px',
                        }}
                      >
                        <Image
                          style={{
                            maxWidth: '100%',
                            width: '40px',
                          }}
                          src="/img/monodomeicon1.png"
                          width="40"
                          height="40"
                          alt="icon"
                        />
                        <div
                          style={{
                            fontSize: '12px',
                            color: '#d0d0d0',
                          }}
                        >
                          {data.statement7} <br /> {data.statement8}
                        </div>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          gap: '10px',
                        }}
                      >
                        <Image
                          style={{
                            maxWidth: '100%',
                            width: '40px',
                          }}
                          src="/img/monodomeicon2.png"
                          width="40"
                          height="40"
                          alt="icon"
                        />
                        <div
                          style={{
                            fontSize: '12px',
                            color: '#d0d0d0',
                          }}
                        >
                          {data.statement9} <br /> {data.statement10}
                        </div>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          gap: '10px',
                        }}
                      >
                        <Image
                          style={{
                            maxWidth: '100%',
                            width: '40px',
                          }}
                          src="/img/monodomeicon3.png"
                          width="40"
                          height="40"
                          alt="icon"
                        />
                        <div
                          style={{
                            fontSize: '12px',
                            color: '#d0d0d0',
                          }}
                        >
                          {data.statement11} <br /> {data.statement12}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        marginTop: '40px',
                        display: 'flex',
                        justifyContent: 'flex-start',
                      }}
                    >
                      <Button
                        onClick={
                          data.statement13 === 'Become a driver'
                            ? () => props.setDriverRegistration(true)
                            : data.statement13 === 'Become an agent'
                            ? () => props.setAgentRegistration(true)
                            : data.statement13 === 'Start a business'
                            ? () => props.setBusinessRegistration(true)
                            : data.statement13 === 'Sell with monestate'
                            ? () => props.setClearingAgentRegistration(true)
                            : undefined
                        }
                        style={{
                          display: 'flex',
                          padding: '7px',
                          background: '#00902F',
                          width: '200px',
                          height: '40px',
                          justifyContent: 'center',
                          alignItems: 'center',
                          border: 'none',
                          gap: '10px',
                          cursor: 'pointer',
                        }}
                      >
                        <Image
                          style={{
                            maxWidth: '100%',
                            width: '13px',
                          }}
                          src="/img/monodomefly.png"
                          width="13"
                          height="13"
                          alt="icon"
                        />
                        <Form.Label
                          style={{
                            fontWeight: 600,
                            fontSize: '12px',
                            color: 'white',
                            marginTop: '5px',
                          }}
                        >
                          {data.statement13}
                        </Form.Label>
                      </Button>
                      <div
                        onClick={() => props.handleAboutUsClick()}
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: '40px',
                          width: '40px',
                          borderRadius: '50%',
                          border: '1px solid white',
                          marginLeft: '66px',
                          cursor: 'pointer',
                        }}
                      >
                        <Image
                          style={{
                            maxWidth: '100%',
                            width: '10px',
                          }}
                          src="/img/monodomescroll.png"
                          width="10"
                          height="13"
                          alt="icon"
                        />
                      </div>
                      <Form.Label
                        onClick={() => props.handleAboutUsClick()}
                        style={{
                          color: '#d0d0d0',
                          fontSize: '12px',
                          fontWeight: 'bold',
                          marginLeft: '16px',
                          marginTop: '10px',
                          cursor: 'pointer',
                        }}
                      >
                        {data.statement14}
                      </Form.Label>
                    </div>
                    <div
                      style={{
                        marginTop: '50px',
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          gap: '10px',
                        }}
                      >
                        <Image
                          style={{
                            maxWidth: '100%',
                            width: '22px',
                          }}
                          src="/img/monodomellipse.png"
                          width="22"
                          height="22"
                          alt="icon"
                        />
                        <Form.Label
                          style={{
                            color: '#d0d0d0',
                            fontSize: '12px',
                            fontWeight: '400',
                            marginTop: '5px',
                          }}
                        >
                          {data.statement15}
                        </Form.Label>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          gap: '10px',
                          marginTop: '10px',
                        }}
                      >
                        <Image
                          style={{
                            maxWidth: '100%',
                            width: '6px',
                          }}
                          src="/img/normalellipse.png"
                          width="6"
                          height="6"
                          alt="icon"
                        />
                        <Form.Label
                          style={{
                            color: '#d0d0d0',
                            fontSize: '12px',
                            fontWeight: '400',
                            marginTop: '-5px',
                          }}
                        >
                          {data.statement16}
                        </Form.Label>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          gap: '10px',
                          marginTop: '10px',
                        }}
                      >
                        <Image
                          style={{
                            maxWidth: '100%',
                            width: '6px',
                          }}
                          src="/img/normalellipse.png"
                          width="6"
                          height="6"
                          alt="icon"
                        />
                        <Form.Label
                          style={{
                            color: '#d0d0d0',
                            fontSize: '12px',
                            fontWeight: '400',
                            marginTop: '-5px',
                          }}
                        >
                          {data.statement17}
                        </Form.Label>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          gap: '10px',
                          marginTop: '10px',
                        }}
                      >
                        <Image
                          style={{
                            maxWidth: '100%',
                            width: '6px',
                          }}
                          src="/img/normalellipse.png"
                          width="6"
                          height="6"
                          alt="icon"
                        />
                        <Form.Label
                          style={{
                            color: '#d0d0d0',
                            fontSize: '12px',
                            fontWeight: '400',
                            marginTop: '-5px',
                          }}
                        >
                          {data.statement18}
                        </Form.Label>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          gap: '10px',
                          marginTop: '10px',
                        }}
                      >
                        <Image
                          style={{
                            maxWidth: '100%',
                            width: '6px',
                          }}
                          src="/img/normalellipse.png"
                          width="6"
                          height="6"
                          alt="icon"
                        />
                        <Form.Label
                          style={{
                            color: '#d0d0d0',
                            fontSize: '12px',
                            fontWeight: '400',
                            marginTop: '-5px',
                          }}
                        >
                          {data.statement19}
                        </Form.Label>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          gap: '10px',
                          marginTop: '10px',
                        }}
                      >
                        <Image
                          style={{
                            maxWidth: '100%',
                            width: '6px',
                          }}
                          src="/img/normalellipse.png"
                          width="6"
                          height="6"
                          alt="icon"
                        />
                        <Form.Label
                          style={{
                            color: '#d0d0d0',
                            fontSize: '12px',
                            fontWeight: '400',
                            marginTop: '-5px',
                          }}
                        >
                          {data.statement20}
                        </Form.Label>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '40%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: '-50px',
                    }}
                  >
                    <Image
                      style={{
                        maxWidth: '100%',
                        width: '420px',
                      }}
                      src={data.img}
                      width="420"
                      height="450"
                      alt="pic"
                    />
                  </div>
                </div>
              </Container>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div
        ref={props.aboutRef}
        id="aboutusSection"
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          margin: 0,
          background: 'white',
          padding: '40px 30px',
        }}
      >
        <AboutUsComp />
      </div>
      <div
        ref={props.servicesRef}
        id="ourserviceSection"
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          margin: 0,
          padding: '30px',
        }}
      >
        <OurServiceComp
          monolog={props.monolog}
          setMonolog={props.setMonolog}
          monofood={props.monofood}
          setMonofood={props.setMonofood}
          monoride={props.monoride}
          setMonoride={props.setMonoride}
          monohealth={props.monohealth}
          setMonohealth={props.setMonohealth}
          realEstate={props.realEstate}
          setRealEstate={props.setRealEstate}
          monowallet={props.monowallet}
          setMonowallet={props.setMonowallet}
          handleMonolog={props.handleMonolog}
          handleMonofood={props.handleMonofood}
          handleMonoride={props.handleMonoride}
          handleMonohealth={props.handleMonohealth}
          handleRealEstate={props.handleRealEstate}
          handleMonowallet={props.handleMonowallet}
        />
      </div>
      <div
        ref={props.featuresRef}
        id="ourfeaturesSection"
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          margin: 0,
          padding: '30px',
          background: 'white',
        }}
      >
        <Features />
      </div>
      <div
        id="ourpartnersSection"
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          margin: 0,
          padding: '30px',
        }}
      >
        <Partners caption1="Our" caption2="Partners" />
      </div>
      <div
        className={styles.monodomeappFeatures}
        id="monodomeAppFeatures"
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          margin: 0,
          padding: '30px',
          height: '515px',
          marginTop: '50px',
        }}
      >
        <MonodomeAppFeatures
          allAppFeatures={props.allAppFeatures}
          setAllAppFeatures={props.setAllAppFeatures}
          index={props.index}
          setIndex={props.setIndex}
          handlePrevious={props.handlePrevious}
          handleNext={props.handleNext}
        />
      </div>
      <div
        ref={props.contactRef}
        id="contactSection"
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          margin: 0,
          padding: '30px',
          background: 'white',
        }}
      >
        <ContactComp />
      </div>
      <div
        id="officeSection"
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          margin: 0,
          padding: '20px 30px',
          background: 'white',
        }}
      >
        <OurOffices />
      </div>
      <div
        id="footerSection"
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          margin: 0,
          padding: '30px',
          background: '#151515',
        }}
      >
        <FooterComp />
      </div>
      <Login login={login} setLogin={setLogin} setSignup={setSignup} />
      <Signup signup={signup} setSignup={setSignup} setLogin={setLogin} />
    </>
  );
}
