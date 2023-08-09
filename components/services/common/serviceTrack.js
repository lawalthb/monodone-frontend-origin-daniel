import GeneralModal from '@/components/modal/generalModal';
import Media from '@/utils/media';
import Image from 'next/image';
import { Modal, Form } from 'react-bootstrap';
import ServiceTrackContent from './serviceTrackContent';

export default function ServiceTrack(props) {
  const { mobile } = Media();
  return (
    <>
      <GeneralModal
        size="lg"
        show={props.serviceTrack}
        onHide={() => {
          props.setServiceTrack(false);
        }}
        style={props.style}
      >
        <Modal.Body
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            padding: mobile ? '0px' : '30px 60px',
            width: '100%',
          }}
        >
          <Form.Label
            style={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              textAlign: 'center',
              fontSize: '14px',
              color: '#414141',
              letterSpacing: '0.02em',
              display: 'flex',
              fontWeight: 600,
            }}
          >
            Your Load is on the way.
          </Form.Label>
          <div
            style={{
              display: 'flex',
              gap: '10px',
            }}
          >
            <Image
              src="/img/servicetrack.png"
              width="30"
              height="400"
              alt="track"
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <ServiceTrackContent
                caption="Shipped  Mon, Feb 13"
                marginTop="0px"
              />
              <ServiceTrackContent caption="In transit" marginTop="100px" />
              <ServiceTrackContent
                caption="Out for delivery"
                marginTop="95px"
              />
              <ServiceTrackContent
                caption="Estimated day for delivery Fri, Feb 17"
                marginTop="95px"
              />
            </div>
          </div>
          <Form.Label
            style={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              textAlign: 'center',
              fontSize: '14px',
              color: '#414141',
              letterSpacing: '0.02em',
              display: 'flex',
              fontWeight: 500,
            }}
          >
            Live Tracking
          </Form.Label>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              src="/img/servicetrackmap.png"
              width={mobile ? '312' : '650'}
              height="270"
              alt="track"
            />
          </div>
          <Form.Label
            style={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              textAlign: 'center',
              fontSize: '14px',
              color: '#414141',
              letterSpacing: '0.02em',
              display: 'flex',
              fontWeight: 600,
              marginTop: '20px',
            }}
          >
            Tracking details
          </Form.Label>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '35%',
              }}
            >
              <div
                style={{
                  height: '80px',
                }}
              >
                <ServiceTrackContent caption="Tracking code" marginTop="0px" />
              </div>
              <div
                style={{
                  height: '80px',
                }}
              >
                <ServiceTrackContent
                  caption="Feb 13, 2023 2:30pm"
                  marginTop="0px"
                />
              </div>
              <div
                style={{
                  height: '80px',
                }}
              >
                <ServiceTrackContent
                  caption="Feb 13, 2023 2:30pm"
                  marginTop="0px"
                />
              </div>
              <div
                style={{
                  height: '80px',
                }}
              >
                <ServiceTrackContent
                  caption="Feb 13, 2023 2:30pm"
                  marginTop="0px"
                />
              </div>
              <div
                style={{
                  height: '80px',
                }}
              >
                <ServiceTrackContent
                  caption="Feb 13, 2023 2:30pm"
                  marginTop="0px"
                />
              </div>
              <div
                style={{
                  height: '80px',
                }}
              >
                <ServiceTrackContent
                  caption="Feb 13, 2023 2:30pm"
                  marginTop="0px"
                />
              </div>
              <div
                style={{
                  height: '80px',
                }}
              >
                <ServiceTrackContent
                  caption="Feb 13, 2023 2:30pm"
                  marginTop="0px"
                />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '60%',
              }}
            >
              <div
                style={{
                  height: '80px',
                }}
              >
                <ServiceTrackContent
                  caption="203849575689929"
                  marginTop="0px"
                />
              </div>
              <div
                style={{
                  height: '80px',
                }}
              >
                <ServiceTrackContent
                  caption="Departed Chisco Lekki Office Lekki Axis"
                  marginTop="0px"
                />
              </div>
              <div
                style={{
                  height: '80px',
                }}
              >
                <ServiceTrackContent
                  caption="Arrived at Benin 5 star agent location Benin City"
                  marginTop="0px"
                />
              </div>
              <div
                style={{
                  height: '80px',
                }}
              >
                <ServiceTrackContent
                  caption="Arrived at Onitsha Odogwu Ventures agent location 56 Ojoto Rd."
                  marginTop="0px"
                />
              </div>
              <div
                style={{
                  height: '80px',
                }}
              >
                <ServiceTrackContent
                  caption="Arrived at Odogwu Ventures upper Iweka 56 Aja Rd."
                  marginTop="0px"
                />
              </div>
              <div
                style={{
                  height: '80px',
                }}
              >
                <ServiceTrackContent
                  caption="Package waiting for owner to pick up"
                  marginTop="0px"
                />
              </div>
              <div
                style={{
                  height: '80px',
                }}
              >
                <ServiceTrackContent
                  caption="Delivered. Package has been picked up by the owner."
                  marginTop="0px"
                />
              </div>
            </div>
          </div>
        </Modal.Body>
      </GeneralModal>
    </>
  );
}
