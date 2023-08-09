import Media from '@/utils/media';
import Image from 'next/image';
import { Form } from 'react-bootstrap';

export default function AbroadQuote(props) {
  const { mobile } = Media();
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          padding: '20px',
          border: '1px solid #E7E7E7',
          marginTop: '10px',
        }}
      >
        <div
          onClick={() => props.setGetAbroadQuote(false)}
          style={{
            display: 'flex',
            gap: '20px',
          }}
        >
          <Image
            style={{
              cursor: 'pointer',
            }}
            src="/img/arrowbackservice.png"
            width="14"
            height="14"
            alt="arrow"
          />
          <Form.Label
            style={{
              fontSize: '14px',
              fontWeight: '600',
              color: 'rgba(21, 21, 21, 0.8)',
              marginTop: '-3px',
              cursor: 'pointer',
            }}
          >
            Back
          </Form.Label>
        </div>
        <div
          style={
            mobile
              ? {
                  display: 'flex',
                  justifyContent: 'center',
                  alignContent: 'center',
                  marginTop: '20px',
                  flexDirection: 'column',
                }
              : {
                  display: 'flex',
                  justifyContent: 'center',
                  alignContent: 'center',
                  marginTop: '20px',
                }
          }
        >
          <Form.Label
            style={{
              fontSize: mobile ? '12px' : '16px',
              fontWeight: mobile ? '500' : '600',
              color: 'rgba(21, 21, 21, 0.8)',
              cursor: 'pointer',
            }}
          >
            Get Shipping Rate
          </Form.Label>
        </div>
        <div
          style={
            mobile
              ? {
                  display: 'flex',
                  flexDirection: 'column',
                }
              : {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '12px',
                }
          }
        >
          <div
            onClick={() => props.handleInboundQuote()}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: mobile ? '100%' : '644px',
              padding: mobile ? '10px' : '50px 70px',
              border: '1px solid #E7E7E7',
              cursor: 'pointer',
              marginTop: mobile ? '20px' : '0px',
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
                style={{
                  cursor: 'pointer',
                }}
                src="/img/shippingplane.png"
                width={mobile ? '40' : '80'}
                height={mobile ? '40' : '80'}
                alt="arrow"
              />
            </div>
            <div
              style={
                mobile
                  ? {
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '10px',
                    }
                  : {
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }
              }
            >
              <Form.Label
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'rgba(21, 21, 21, 0.8)',
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                Get quote for inbound shipping
              </Form.Label>
              <Form.Label
                style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  color: 'rgba(21, 21, 21, 0.8)',
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                Estimate shipping from U.S, UK China to Nigeria
              </Form.Label>
            </div>
          </div>
        </div>
        <div
          style={
            mobile
              ? {
                  display: 'flex',
                  flexDirection: 'column',
                }
              : {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '12px',
                }
          }
        >
          <div
            onClick={() => props.handleOutboundQuote()}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: mobile ? '100%' : '644px',
              padding: mobile ? '10px' : '50px 70px',
              border: '1px solid #E7E7E7',
              cursor: 'pointer',
              marginTop: mobile ? '20px' : '0px',
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
                style={{
                  cursor: 'pointer',
                }}
                src="/img/shippingplane.png"
                width={mobile ? '40' : '80'}
                height={mobile ? '40' : '80'}
                alt="arrow"
              />
            </div>
            <div
              style={
                mobile
                  ? {
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '10px',
                    }
                  : {
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }
              }
            >
              <Form.Label
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'rgba(21, 21, 21, 0.8)',
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                Get quote for outbound shipping
              </Form.Label>
              <Form.Label
                style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  color: 'rgba(21, 21, 21, 0.8)',
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                Estimate shipping from Nigeria to other countries of the world.
              </Form.Label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
