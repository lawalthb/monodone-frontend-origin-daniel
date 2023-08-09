import Image from 'next/image';
import { Button } from 'react-bootstrap';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function LoadboardDetailsCycle(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '50px',
          padding: '16px',
        }}
      >
        <Button
          disabled={props.index == 0}
          onClick={props.handlePrevious}
          style={
            props.index === 0
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
              props.index === 0
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
          {new Array(props.images.length)
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
                onClick={() => props.setIndex(idx)}
                style={{
                  cursor: 'pointer',
                }}
              >
                {idx === props.index ? (
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
          disabled={props.index === props.images.length - 1}
          onClick={props.handleNext}
          style={
            props.index === props.images.length - 1
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
              props.index === props.images.length - 1
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
    </>
  );
}
