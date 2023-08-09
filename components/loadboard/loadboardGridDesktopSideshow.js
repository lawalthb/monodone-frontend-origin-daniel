import Image from 'next/image';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const dataImages = [
  '/img/loadboardfigurine.png',
  '/img/loadboardsofa.png',
  '/img/loadboardcar.png',
];

export default function LoadboardGridDesktopSideshow(props) {
  const [images, setImages] = useState(dataImages);
  const [index, setIndex] = useState(0);

  const handlePrevious = () => {
    if (index === 0) {
      return;
    }
    setIndex(index - 1);
  };

  const handleNext = () => {
    if (index === props.specificData?.varieties.length - 1) {
      return;
    }
    setIndex(index + 1);
  };
  return (
    <>
      <Image
        style={{
          width: '500px',
          maxWidth: '100%',
        }}
        src="/img/loadboardmap.png"
        width="500"
        height="280"
        alt="map"
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '12px',
          borderBottom: '1px solid #E7E7E7',
        }}
      >
        <div
          style={{
            width: '60px',
            height: '40px',
            borderRadius: '5px',
            background: 'rgba(208, 255, 152, 0.15)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#00902F',
            fontSize: '13px',
            fontWeight: 500,
          }}
        >
          {props.specificData?.amount}
        </div>
        <Button
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '7px',
            width: '138px',
            height: '40px',
            background: 'transparent',
            border: '1px solid #7CC427',
            color: 'black',
            gap: '10px',
          }}
        >
          <Form.Label
            style={{
              fontSize: '13px',
              fontWeight: 500,
              color: '#151515',
              textAlign: 'center',
              marginTop: '9px',
            }}
          >
            Build a route
          </Form.Label>
          <Image
            style={{
              maxWidth: '100%',
              width: '6px',
            }}
            src="/img/buildroutearrow.png"
            width="6"
            height="10"
            alt="arrow"
          />
        </Button>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '12px',
          borderBottom: '1px solid #E7E7E7',
        }}
      >
        <Form.Label
          style={{
            fontSize: '17px',
            fontWeight: 500,
            color: '#303133',
            fontWeight: 600,
          }}
        >
          {props.specificData?.cargoTypeGrid}
        </Form.Label>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '13px',
          }}
        >
          <Form.Label
            style={{
              fontSize: '13px',
              fontWeight: 500,
              color: '#303133',
              fontWeight: 400,
            }}
          >
            {props.specificData?.weight}lbs • {props.specificData?.length}mm
          </Form.Label>
          <div
            style={{
              display: 'flex',
              gap: '12px',
            }}
          >
            <Image
              style={{
                maxWidth: '100%',
                width: '18px',
              }}
              src="/img/loadboardfigurinecup.png"
              width="18"
              height="20"
              alt="arrow"
            />
            <Form.Label
              style={{
                fontSize: '13px',
                fontWeight: 500,
                color: '#303133',
                fontWeight: 500,
              }}
            >
              {props.specificData?.packageType}
            </Form.Label>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '13px',
          padding: '12px',
          borderBottom: '1px solid #E7E7E7',
        }}
      >
        <Image
          style={{
            maxWidth: '100%',
            width: '14px',
          }}
          src="/img/loadboardmarkerlg.png"
          width="14"
          height="187"
          alt="arrow"
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Form.Label
            style={{
              fontSize: '12px',
              color: '#4E4C4C',
              fontWeight: 400,
            }}
          >
            DELIVER FROM
          </Form.Label>
          <Form.Label
            style={{
              fontSize: '15px',
              color: '#4E4C4C',
              fontWeight: 600,
            }}
          >
            {props.specificData?.deliveryLocationGrid}
          </Form.Label>
          <Form.Label
            style={{
              fontSize: '12px',
              color: '#4E4C4C',
              fontWeight: 400,
            }}
          >
            {props.specificData?.takeoffDate}
          </Form.Label>
          <Form.Label
            style={{
              fontSize: '12px',
              color: '#4E4C4C',
              fontWeight: 400,
              marginTop: '65px',
            }}
          >
            DELIVER TO
          </Form.Label>
          <Form.Label
            style={{
              fontSize: '15px',
              color: '#4E4C4C',
              fontWeight: 600,
            }}
          >
            {props.specificData?.cityTownGrid}
          </Form.Label>
          <Form.Label
            style={{
              fontSize: '12px',
              color: '#4E4C4C',
              fontWeight: 400,
            }}
          >
            {props.specificData?.pickupDate}
          </Form.Label>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '14px',
              marginTop: '110px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '7px',
                width: '40px',
                height: '40px',
                background: 'rgba(124, 196, 39, 0.15)',
                borderRadius: '3px',
              }}
            >
              <Image
                style={{
                  maxWidth: '100%',
                  width: '21px',
                }}
                src="/img/loadboardmsg.png"
                width="21"
                height="19"
                alt="arrow"
              />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '7px',
                width: '40px',
                height: '40px',
                background: 'rgba(124, 196, 39, 0.15)',
                borderRadius: '3px',
              }}
            >
              <Image
                style={{
                  maxWidth: '100%',
                  width: '21px',
                }}
                src="/img/loadboardphone.png"
                width="21"
                height="19"
                alt="arrow"
              />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              gap: '14px',
              marginTop: '110px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '7px',
                width: '40px',
                height: '40px',
                background: 'rgba(124, 196, 39, 0.15)',
                borderRadius: '3px',
              }}
            >
              <Image
                style={{
                  maxWidth: '100%',
                  width: '21px',
                }}
                src="/img/loadboardmsg.png"
                width="21"
                height="19"
                alt="arrow"
              />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '7px',
                width: '40px',
                height: '40px',
                background: 'rgba(124, 196, 39, 0.15)',
                borderRadius: '3px',
              }}
            >
              <Image
                style={{
                  maxWidth: '100%',
                  width: '21px',
                }}
                src="/img/loadboardphone.png"
                width="21"
                height="19"
                alt="arrow"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '15px',
        }}
      >
        <Image
          style={{
            maxWidth: '100%',
            width: '430px',
          }}
          src={
            props.specificData?.varieties
              ? props.specificData?.varieties[index]
              : props.specificData?.cargotypeImgGrid
          }
          width="430"
          height="444"
          alt="pic"
        />
      </div>
      {props.specificData?.varieties && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '16px',
          }}
        >
          <Button
            disabled={index == 0}
            onClick={handlePrevious}
            style={
              index === 0
                ? {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '8px',
                    width: '40px',
                    height: '40px',
                    background: 'transparent',
                    borderRadius: '50%',
                    border: '1px solid #E7E7E7',
                    cursor: 'pointer',
                  }
                : {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '8px',
                    width: '40px',
                    height: '40px',
                    background: 'transparent',
                    borderRadius: '50%',
                    border: '1px solid rgba(124, 196, 39, 1)',
                    cursor: 'pointer',
                  }
            }
          >
            <IoIosArrowBack
              style={
                index === 0
                  ? {
                      fontSize: '17px',
                      fontWeight: 500,
                      color: '#E7E7E7',
                    }
                  : {
                      fontSize: '17px',
                      fontWeight: 500,
                      color: 'black',
                    }
              }
            />
          </Button>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            {new Array(props.specificData?.varieties.length)
              .fill(
                <Image
                  style={{
                    maxWidth: '100%',
                    width: '10px',
                  }}
                  src="/img/loadboardblurredellipse.png"
                  width="10"
                  height="10"
                  alt="dot"
                />
              )
              .map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setIndex(idx)}
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  {idx === index ? (
                    <Image
                      style={{
                        maxWidth: '100%',
                        width: '10px',
                      }}
                      src="/img/loadboardfilledellipse.png"
                      width="10"
                      height="10"
                      alt="dot"
                    />
                  ) : (
                    img
                  )}
                </div>
              ))}
          </div>
          <Button
            disabled={index === props.specificData?.varieties.length - 1}
            onClick={handleNext}
            style={
              index === props.specificData?.varieties.length - 1
                ? {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '8px',
                    width: '40px',
                    height: '40px',
                    background: 'transparent',
                    borderRadius: '50%',
                    border: '1px solid #E7E7E7',
                    cursor: 'pointer',
                  }
                : {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '8px',
                    width: '40px',
                    height: '40px',
                    background: 'transparent',
                    borderRadius: '50%',
                    border: '1px solid rgba(124, 196, 39, 1)',
                    cursor: 'pointer',
                  }
            }
          >
            <IoIosArrowForward
              style={
                index === props.specificData?.varieties.length - 1
                  ? {
                      fontSize: '17px',
                      fontWeight: 500,
                      color: '#E7E7E7',
                    }
                  : {
                      fontSize: '17px',
                      fontWeight: 500,
                      color: 'black',
                    }
              }
            />
          </Button>
        </div>
      )}
      <p
        style={{
          fontSize: '14px',
          textAlign: 'justify',
          padding: '16px',
        }}
      >
        {props.specificData?.description}
      </p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '10px 16px',
          gap: '18px',
        }}
      >
        <Button
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '8px',
            width: '100%',
            height: '40px',
            background: 'transparent',
            border: '1px solid rgba(124, 196, 39, 1)',
            cursor: 'pointer',
            color: 'black',
          }}
        >
          Make a bid
        </Button>
        <Button
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '8px',
            width: '100%',
            height: '40px',
            background: 'rgba(124, 196, 39, 1)',
            border: 'none',
            cursor: 'pointer',
            color: 'white',
          }}
        >
          Accept order
        </Button>
      </div>
    </>
  );
}
