import { Button, Form, Modal } from 'react-bootstrap';
import GeneralModal from '../modal/generalModal';
import Image from 'next/image';
import Media from '@/utils/media';

export default function DriverInvoiceModal(props) {
  const { mobile } = Media();
  return (
    <>
      <GeneralModal
        size="md"
        show={props.printInvoice}
        onHide={() => {
          props.setPrintInvoice(false);
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
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                src="/img/success-logo.png"
                width="54"
                height="34"
                alt="logo"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Form.Label
                style={{
                  color: 'black',
                  fontSize: '19px',
                  fontWeight: 600,
                  textAlign: 'right',
                  cursor: 'pointer',
                }}
              >
                Invoice
              </Form.Label>
              <Form.Label
                style={{
                  color: 'black',
                  fontSize: '12px',
                  fontWeight: 400,
                  textAlign: 'right',
                  cursor: 'pointer',
                }}
              >
                #00001
              </Form.Label>
              <Form.Label
                style={{
                  color: 'black',
                  fontSize: '12px',
                  fontWeight: 400,
                  textAlign: 'right',
                  cursor: 'pointer',
                }}
              >
                Issued on: 09/01/2023
              </Form.Label>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: '10px',
            }}
          >
            <Form.Label
              style={{
                color: 'black',
                fontSize: '14px',
                fontWeight: 400,
                textAlign: 'right',
                cursor: 'pointer',
              }}
            >
              Order Number:
            </Form.Label>
            <Form.Label
              style={{
                color: 'black',
                fontSize: '14px',
                fontWeight: 600,
                textAlign: 'right',
                cursor: 'pointer',
              }}
            >
              # 20 4002 8668 0998
            </Form.Label>
          </div>
          <div
            style={{
              display: 'flex',
              gap: '10px',
            }}
          >
            <Image
              style={{
                marginTop: '15px',
              }}
              src="/img/driverfromto.png"
              width="14"
              height="85"
              alt="fromto"
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
                  fontWeight: 400,
                  cursor: 'pointer',
                  marginTop: '-20px',
                }}
              >
                From:
              </Form.Label>
              <Form.Label
                style={{
                  color: 'black',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                21 Alex Ekwueme Way, Jabi 900108, Abuja
              </Form.Label>
              <Form.Label
                style={{
                  color: 'black',
                  fontSize: '14px',
                  fontWeight: 400,
                  cursor: 'pointer',
                  marginTop: '-7px',
                }}
              >
                14 Jul 2022
              </Form.Label>
              <Form.Label
                style={{
                  color: 'black',
                  fontSize: '14px',
                  fontWeight: 400,
                  cursor: 'pointer',
                  marginTop: '-2px',
                }}
              >
                To:
              </Form.Label>
              <Form.Label
                style={{
                  color: 'black',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Kaduna Name City
              </Form.Label>
              <Form.Label
                style={{
                  color: 'black',
                  fontSize: '14px',
                  fontWeight: 400,
                  cursor: 'pointer',
                  marginTop: '-7px',
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
          <Button
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: mobile ? '56px' : '40px',
              borderRadius: '6px',
              border: 'none',
              background: 'rgba(0, 144, 47, 1)',
              textTransform: mobile ? 'uppercase' : undefined,
              marginTop: '20px',
            }}
          >
            Print Invoice
          </Button>
        </Modal.Body>
      </GeneralModal>
    </>
  );
}
