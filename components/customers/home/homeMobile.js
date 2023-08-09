import { useState } from 'react';
import GeneralNav from '../navigation/generalNav/generalNav';
import styles from './home.module.css';
import { Button, Form } from 'react-bootstrap';
import Image from 'next/image';
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

export default function HomeMobile(props) {
  const [allData, setAllData] = useState(carouselData);
  const [index, setIndex] = useState(0);
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? allData.length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= allData.length ? 0 : newIndex);
  };
  return (
    <>
      <GeneralNav
        handleAboutUsClick={props.handleAboutUsClick}
        handleServicesClick={props.handleServicesClick}
        handleFeaturesClick={props.handleFeaturesClick}
        handleContactClick={props.handleContactClick}
        setLogin={setLogin}
        setSignup={setSignup}
      />
      <div
        className={styles.homeBgMobile}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          padding: '30px',
          marginTop: '30px',
          height: '830px',
        }}
      >
        {allData[index].statement2 === 'Clearing and Forwarding Agent' ? (
          <>
            <Form.Label
              style={{
                color: 'white',
                fontSize: '16px',
                fontWeight: 700,
              }}
            >
              {allData[index].statement1}
            </Form.Label>
            <Form.Label
              style={{
                color: '#7CC427',
                fontSize: '16px',
                fontWeight: 700,
              }}
            >
              {allData[index].statement2}
            </Form.Label>
          </>
        ) : (
          <div
            style={{
              display: 'flex',
              gap: '7px',
            }}
          >
            <Form.Label
              style={{
                color: 'white',
                fontSize: '16px',
                fontWeight: 700,
              }}
            >
              {allData[index].statement1}
            </Form.Label>
            <Form.Label
              style={{
                color: '#7CC427',
                fontSize: '16px',
                fontWeight: 700,
              }}
            >
              {allData[index].statement2}
            </Form.Label>
          </div>
        )}
        <Form.Label
          style={{
            color: 'white',
            fontSize: '16px',
            fontWeight: 700,
          }}
        >
          {`${allData[index].statement3} ${allData[index].statement4}`}
        </Form.Label>
        <p
          style={{
            fontSize: '12px',
            color: '#d0d0d0',
            textAlign: 'justify',
            letterSpacing: '0.02em',
            marginTop: '10px',
          }}
        >
          {`${allData[index].statement5} ${allData[index].statement6}`}
        </p>
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
          <Form.Label
            style={{
              fontSize: '12px',
              color: '#d0d0d0',
            }}
          >
            {`${allData[index].statement7}` +
              `${allData[index].statement8.slice(
                0,
                allData[index].statement8.indexOf('work')
              )}`}{' '}
            <br />{' '}
            {`${allData[index].statement8.slice(
              allData[index].statement8.indexOf('work')
            )}`}
          </Form.Label>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '10px',
            marginTop: '20px',
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
          <Form.Label
            style={{
              fontSize: '12px',
              color: '#d0d0d0',
            }}
          >
            {allData[index].statement9} <br /> {allData[index].statement10}
          </Form.Label>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '10px',
            marginTop: '20px',
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
          <Form.Label
            style={{
              fontSize: '12px',
              color: '#d0d0d0',
            }}
          >
            {`${allData[index].statement11}` +
              `${allData[index].statement12.slice(
                0,
                allData[index].statement12.indexOf('for')
              )}`}{' '}
            <br />{' '}
            {`${allData[index].statement12.slice(
              allData[index].statement12.indexOf('for')
            )}`}
          </Form.Label>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            onClick={handlePrevious}
            style={{
              maxWidth: '100%',
              width: '12px',
            }}
            src="/img/backwardarrow.png"
            width="12"
            height="24"
            alt="arrow"
          />
          <Image
            style={{
              maxWidth: '100%',
              width: '240px',
            }}
            src={allData[index].img}
            width="240"
            height="280"
            alt="pic"
          />
          <Image
            onClick={handleNext}
            style={{
              maxWidth: '100%',
              width: '12px',
            }}
            src="/img/forwardarrow.png"
            width="12"
            height="24"
            alt="arrow"
          />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: '20px',
            padding: '0px 20px',
          }}
        >
          <Button
            onClick={
              allData[index].statement13 === 'Become a driver'
                ? () => props.setDriverRegistration(true)
                : allData[index].statement13 === 'Become an agent'
                ? () => props.setModalShowAgent(true)
                : allData[index].statement13 === 'Start a business'
                ? () => props.setModalShowBusiness(true)
                : undefined
            }
            style={{
              display: 'flex',
              padding: '7px',
              background: '#00902F',
              width: '150px',
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
              {allData[index].statement13}
            </Form.Label>
          </Button>
          <div
            onClick={() => props.handleAboutUsClick()}
            style={{
              display: 'flex',
              marginTop: '5px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '25px',
                width: '25px',
                borderRadius: '50%',
                border: '1px solid white',
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
              style={{
                color: '#d0d0d0',
                fontSize: '12px',
                fontWeight: 'bold',
                marginLeft: '16px',
                marginTop: '5px',
              }}
            >
              {allData[index].statement14}
            </Form.Label>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: '20px',
            padding: '0px 20px',
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
              {allData[index].statement15}
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
              {allData[index].statement16}
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
              {allData[index].statement17}
            </Form.Label>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: '10px',
            padding: '0px 20px',
          }}
        >
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
              {allData[index].statement18}
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
              {allData[index].statement19}
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
              {allData[index].statement20}
            </Form.Label>
          </div>
        </div>
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
          padding: '20px',
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
          background: 'white',
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
          height: '754px',
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
