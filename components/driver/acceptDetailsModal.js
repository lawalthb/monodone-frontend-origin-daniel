import { Button, Form, Modal } from 'react-bootstrap';
import { useState } from 'react';
import GeneralModal from '../modal/generalModal';
import Image from 'next/image';
import Media from '@/utils/media';
import { alert, alert_text, alert_div } from './driver.module.css'

export default function AcceptDetailsModal(props) {
  const [accept, setAccept] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const { mobile } = Media();
  return (
    <>
      <GeneralModal
        size="md"
        show={props.acceptDetails}
        onHide={() => {
          props.setAcceptDetails(false); setAccept(false); setConfirm(false);
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
          {confirm && 
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
                  src="/img/Ellipse-green.png"
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
                  On the way
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
          <hr
            style={{
              color: 'gray',
              fontWeight: 600,
            }}
          />
          {(props.barcode == "scanned" && !confirm) && 
            <div className={alert}>
              <Image
                src="/img/verified.png"
                width="24"
                height="24"
                alt="alert"
              />
              <span className={alert_div}></span>
              <p className={alert_text}>Barcode is attached</p>
            </div>
          }
          
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
          
          {(accept || props.barcode == "scanned") && (
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
          {confirm && 
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              background: 'rgba(3, 4, 94, 0.15)',
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
          }
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              marginTop: confirm ? '30px' : '0',
            }}
          >
            {!accept && props.barcode != "scanned" && (
              <Button
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '48%',
                  height: mobile ? '56px' : '40px',
                  borderRadius: '6px',
                  border: '1px solid #7CC427',
                  background: 'transparent',
                  textTransform: mobile ? 'uppercase' : undefined,
                  color: 'black',
                }}
              >
                Reject
              </Button>
            )}
            {confirm && (
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
                (accept && props.barcode != "scanned") ? () => {props.setBarcode("scanning"); props.setAcceptDetails(false); setAccept(false); setConfirm(false)} 
                : 
                (props.barcode == "scanned" && !confirm) ? () => setConfirm(true) 
                : 
                confirm ? () => {props.setTakePic(true); props.setAcceptDetails(false); setAccept(false); setConfirm(false)} 
                :
                () => setAccept(true)
              }
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: !confirm ? (accept || props.barcode == "scanned") ? '100%' : '48%' : mobile ? '75%' : '80%',
                height: mobile ? '56px' : '40px',
                borderRadius: '6px',
                border: 'none',
                background: 'rgba(0, 144, 47, 1)',
                textTransform: mobile ? 'uppercase' : undefined,
              }}
            >
              {(props.barcode == "scanned" && !confirm) && "Confirm"}{ accept && props.barcode != "scanned" && 'Scan barcode'}{!accept && props.barcode != "scanned" && 'Accept'}{confirm && " Done"}
            </Button>
          </div>
        </Modal.Body>
      </GeneralModal>
    </>
  );
}
