import { Button, Form, Modal } from 'react-bootstrap';
import GeneralModal from '../modal/generalModal';
import Image from 'next/image';
import Media from '@/utils/media';
import { useState } from 'react';
import { deliveryPicImg } from './driver.module.css'

export default function DriverDetailsModal(props) {
  const { mobile } = Media();
  const [accept, setAccept] = useState(false);
  return (
    <>
      <GeneralModal
        size="md"
        show={props.driverDetailsModal}
        onHide={() => {
          props.setDriverDetailsModal(false);
          setAccept(false)
        }}
        style={props.style}
      >
        <Modal.Body
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            paddingBottom: '30px',
          }}
        >
          <Form.Label
            style={{
              color: 'black',
              fontSize: '16px',
              fontWeight: 600,
            }}
          >
            # 20 4002 8668 0998
          </Form.Label>
          {props.issued && 
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '10px',
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
                    cursor: 'pointer',
                    marginTop: '6px',
                  }}
                  src="/img/Ellipse-black.png"
                  width="6"
                  height="6"
                  alt="logo"
                />
                <Form.Label
                  style={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '12px',
                    color: 'rgba(128, 128, 128, 1)',
                  }}
                >
                  Issued
                </Form.Label>
              </div>
              <Image
                style={{
                  cursor: 'pointer',
                  marginTop: '6px',
                }}
                src="/img/driverorderway.png"
                width="24"
                height="12"
                alt="logo"
              />
            </div>
          }
          {accept && !props.issued && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                }}
              >
                <Image
                  src="/img/Ellipse-dot.png"
                  width="7"
                  height="6"
                  alt="dot"
                />
                <Form.Label
                  style={{
                    color: '#808080',
                    fontSize: '12px',
                    fontWeight: 400,
                    marginTop: '-6px',
                  }}
                >
                  Waiting for driver
                </Form.Label>
              </div>
              <Image
                src="/img/driverorderwaiting.png"
                width="26"
                height="12"
                alt="logo"
              />
            </div>
          )}
          <hr
            style={{
              color: 'gray',
              fontWeight: 600,
            }}
          />
          <div
            style={{
              display: 'flex',
              gap: '10px',
            }}
          >
            <Image
              src="/img/driverfromto.png"
              width="16"
              height="83"
              alt="points"
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Form.Label
                style={{
                  color: 'black',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              >
                21 Alex Ekwueme Way, Jabi 900108, Abuja
              </Form.Label>
              <Form.Label
                style={{
                  color: '#808080',
                  fontSize: '12px',
                  fontWeight: 400,
                  marginTop: '-6px',
                }}
              >
                14 Jul 2022
              </Form.Label>
              <Form.Label
                style={{
                  color: 'black',
                  fontSize: '14px',
                  fontWeight: 600,
                  marginTop: mobile ? '0px' : '17px',
                }}
              >
                Kaduna Name City
              </Form.Label>
              <Form.Label
                style={{
                  color: '#808080',
                  fontSize: '12px',
                  fontWeight: 400,
                  marginTop: '-6px',
                }}
              >
                16 Jul 2022
              </Form.Label>
            </div>
          </div>
          <hr
            style={{
              color: 'gray',
              fontWeight: 600,
            }}
          />
          <Form.Label
            style={{
              color: 'rgba(21, 21, 21, 1)',
              fontSize: '14px',
              fontWeight: 400,
            }}
          >
            Package description, for example furniture
          </Form.Label>
          <hr
            style={{
              color: 'gray',
              fontWeight: 600,
            }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Form.Label
              style={{
                color: '#808080',
                fontSize: '14px',
                fontWeight: 400,
              }}
            >
              Weight, kg
            </Form.Label>
            <Form.Label
              style={{
                color: '#151515',
                fontSize: '14px',
                fontWeight: 400,
              }}
            >
              10
            </Form.Label>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: '-6px',
            }}
          >
            <Form.Label
              style={{
                color: '#808080',
                fontSize: '14px',
                fontWeight: 400,
              }}
            >
              Size, cm
            </Form.Label>
            <Form.Label
              style={{
                color: '#151515',
                fontSize: '14px',
                fontWeight: 400,
              }}
            >
              22 x 155 x 32
            </Form.Label>
          </div>
          <hr
            style={{
              color: 'gray',
              fontWeight: 600,
            }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: '-6px',
            }}
          >
            <Form.Label
              style={{
                color: '#808080',
                fontSize: '14px',
                fontWeight: 400,
              }}
            >
              Fragile product
            </Form.Label>
            <Image
              src="/img/driverunion.png"
              width="18"
              height="20"
              alt="union"
            />
          </div>
          {(accept || props.issued) && (
            <>
              <hr
                style={{
                  color: 'gray',
                  fontWeight: 600,
                }}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  marginTop: '-6px',
                }}
              >
                <Form.Label
                  style={{
                    color: '#808080',
                    fontSize: '14px',
                    fontWeight: 400,
                  }}
                >
                  Sender
                </Form.Label>
                <Form.Label
                  style={{
                    color: '#151515',
                    fontSize: '14px',
                    fontWeight: 400,
                  }}
                >
                  Adaora Daberechi
                </Form.Label>
              </div>
              <hr
                style={{
                  color: 'gray',
                  fontWeight: 600,
                }}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  marginTop: '-6px',
                }}
              >
                <Form.Label
                  style={{
                    color: '#808080',
                    fontSize: '14px',
                    fontWeight: 400,
                  }}
                >
                  Receiver
                </Form.Label>
                <Form.Label
                  style={{
                    color: '#151515',
                    fontSize: '14px',
                    fontWeight: 400,
                  }}
                >
                  Alex Daberechi
                </Form.Label>
              </div>
            </>
          )}
          <hr
            style={{
              color: 'gray',
              fontWeight: 600,
            }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: '-6px',
            }}
          >
            <Form.Label
              style={{
                color: '#808080',
                fontSize: '14px',
                fontWeight: 400,
              }}
            >
              Delivery price
            </Form.Label>
            <Form.Label
              style={{
                color: '#151515',
                fontSize: '14px',
                fontWeight: 400,
              }}
            >
              ₦ 128.00
            </Form.Label>
          </div>
          {accept && !props.issued && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                background: 'rgba(124, 196, 39, 0.15)',
                padding: '5px 20px',
                borderRadius: '6px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Form.Label
                  style={{
                    color: '#151515',
                    fontSize: '12px',
                    fontWeight: 400,
                  }}
                >
                  Sender
                </Form.Label>
                <Form.Label
                  style={{
                    color: '#151515',
                    fontSize: '16px',
                    fontWeight: 600,
                  }}
                >
                  Call Adaora
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
                  src="/img/drivercall.png"
                  width="20"
                  height="17"
                  alt="union"
                />
              </div>
            </div>
          )}
          {mobile && (
            <hr
              style={{
                color: 'gray',
                fontWeight: 600,
              }}
            />
          )}

          {props.isdeliveryPic && 
            <Image
              src={props.deliveryPic}
              width={320}
              height={279}
              style={{
                alignSelf: 'center',
                margin: '1rem 0'
              }}
              className={deliveryPicImg}
              alt="union"
            />
          }
          
          {props.issued ?
            <Button
              onClick={() => {
                      props.setDriverDetailsModal(false);
                      setAccept(false)
                    }
              }
              style={ {
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100%',
                      height: mobile ? '56px' : '40px',
                      borderRadius: '6px',
                      border: '1px solid rgba(124, 196, 39, 1)',
                      background: 'rgba(255, 255, 255, 1)',
                      textTransform: mobile ? 'uppercase' : undefined,
                      color:'rgba(21, 21, 21, 1)',
                    }
              }
            >
              Close
            </Button>
            :
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: '30px',
              }}
            >
              {!accept && (
                <Button
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: mobile ? '20%' : '10%',
                    height: mobile ? '56px' : '40px',
                    borderRadius: '6px',
                    border: '1px solid #7CC427',
                    background: 'transparent',
                  }}
                >
                  <Image
                    src="/img/driverarrowdown.png"
                    width="17"
                    height="7"
                    alt="arrowdown"
                  />
                </Button>
              )}
              <Button
                onClick={
                  accept
                    ? () => {
                        props.setReview(true);
                        props.setDriverDetailsModal(false);
                        setAccept(false)
                      }
                    : () => setAccept(true)
                }
                style={
                  accept
                    ? {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: mobile ? '56px' : '40px',
                        borderRadius: '6px',
                        border: 'none',
                        background: 'rgba(0, 144, 47, 1)',
                        textTransform: mobile ? 'uppercase' : undefined,
                      }
                    : {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: mobile ? '75%' : '80%',
                        height: mobile ? '56px' : '40px',
                        borderRadius: '6px',
                        border: 'none',
                        background: 'rgba(0, 144, 47, 1)',
                        textTransform: mobile ? 'uppercase' : undefined,
                      }
                }
              >
                {accept ? 'Review' : 'Accept'}
              </Button>
            </div>
          }
        </Modal.Body>
      </GeneralModal>
    </>
  );
}
