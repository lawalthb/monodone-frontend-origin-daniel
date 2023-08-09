import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button, Form } from 'react-bootstrap';
import Media from '@/utils/media';
import ServiceFurtherDetailsContent from './serviceFurtherDetailsContent';

export default function ServiceDetailsComp(props) {
  const router = useRouter();
  const { mobile, tabletAndDesktop } = Media();
  return (
    <>
      {mobile && (
        <>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid #E7E7E7',
              borderRadius: '4px',
              padding: '20px 0px',
              width: '100%',
              height: '450px',
            }}
          >
            {props.allData?.map((data, idx) => (
              <div
                onClick={() => router.push(`/services/${data?.id}`)}
                key={idx}
                style={
                  props.specificServiceData?.name === data.name
                    ? {
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        marginBottom: '10px',
                        padding: '7px 20px',
                        background: '#00902F',
                      }
                    : {
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        marginBottom: '10px',
                        padding: '7px 20px',
                      }
                }
              >
                <Form.Label
                  style={
                    props.specificServiceData?.name === data.name
                      ? {
                          fontSize: '12px',
                          color: 'white',
                          marginTop: '3px',
                        }
                      : {
                          fontSize: '12px',
                          color: 'rgba(21, 21, 21, 0.8)',
                        }
                  }
                >
                  {data.name}
                </Form.Label>
                <Image
                  style={{
                    marginTop: '5px',
                  }}
                  src={
                    props.specificServiceData?.name === data.name
                      ? '/img/servicesarrowrightselected.png'
                      : '/img/servicesarrowright.png'
                  }
                  width="7"
                  height="12"
                  alt="arrow"
                />
              </div>
            ))}
          </div>
          {props.furtherDetails ? (
            <ServiceFurtherDetailsContent
              specificServiceData={props.specificServiceData}
              getDomesticQuote={props.getDomesticQuote}
              setDomesticQuote={props.setDomesticQuote}
              getAbroadQuote={props.getAbroadQuote}
              setGetAbroadQuote={props.setGetAbroadQuote}
              handleGetDomesticQuote={props.handleGetDomesticQuote}
              handleGetAbroadQuote={props.handleGetAbroadQuote}
              inboundQuote={props.inboundQuote}
              setInboundQuote={props.setInboundQuote}
              outboundQuote={props.outboundQuote}
              setOutboundQuote={props.setOutboundQuote}
              handleInboundQuote={props.handleInboundQuote}
              handleOutboundQuote={props.handleOutboundQuote}
              setEstimatedShippingModal={props.setEstimatedShippingModal}
            />
          ) : (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '4px',
                width: '100%',
                marginTop: '20px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignContent: 'center',
                }}
              >
                <Image
                  style={{
                    maxWidth: '100%',
                    width: '343px',
                  }}
                  src={props.specificServiceData?.img}
                  width="343"
                  height="202"
                  alt="service"
                />
              </div>
              <p
                style={{
                  fontSize: '12px',
                  textAlign: 'justify',
                  color: 'rgba(38, 38, 38, 0.8)',
                  width: '720px',
                  maxWidth: '100%',
                  marginTop: '20px',
                }}
              >
                {props.specificServiceData?.description}
              </p>
              <Button
                onClick={() => props.specificServiceData.name === 'Loadboard'
                ? router.push('/loadboard') : props.setFurtherDetails(true)}
                style={{
                  marginTop: '30px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '8px',
                  background: '#00902F',
                  width: '100%',
                  height: '40px',
                  color: 'white',
                  border: 'none',
                }}
              >
                {props.specificServiceData.name === 'Ship Now'
                  ? 'Ship Now'
                  : props.specificServiceData.name === 'Get a Quote'
                  ? 'Get a Quote'
                  : props.specificServiceData.name === 'Loadboard'
                  ? 'View Loadboard'
                  : props.specificServiceData.name === 'Load Management'
                  ? 'Manage Load'
                  : props.specificServiceData.name === 'Driver Management'
                  ? 'Manage Drivers'
                  : props.specificServiceData.name === 'Truck Management'
                  ? 'Manage Truck'
                  : props.specificServiceData.name ===
                    'Clearing and Forwarding Agents'
                  ? 'Manage Clearing'
                  : props.specificServiceData.name === 'Specialized Shipment'
                  ? 'Specialized Shipment'
                  : undefined}
              </Button>
            </div>
          )}
        </>
      )}
      {tabletAndDesktop && (
        <>
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              marginLeft: '30px',
              padding: '20px 40px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid #E7E7E7',
                borderRadius: '4px',
                padding: '20px 0px',
                width: '30%',
                height: '450px',
              }}
            >
              {props.allData?.map((data, idx) => (
                <div
                  onClick={() => router.push(`/services/${data?.id}`)}
                  key={idx}
                  style={
                    props.specificServiceData?.name === data.name
                      ? {
                          display: 'flex',
                          justifyContent: 'space-between',
                          width: '100%',
                          marginBottom: '10px',
                          padding: '7px 20px',
                          background: '#00902F',
                          cursor: 'pointer',
                        }
                      : {
                          display: 'flex',
                          justifyContent: 'space-between',
                          width: '100%',
                          marginBottom: '10px',
                          padding: '7px 20px',
                          cursor: 'pointer',
                        }
                  }
                >
                  <Form.Label
                    style={
                      props.specificServiceData?.name === data.name
                        ? {
                            fontSize: '12px',
                            color: 'white',
                            marginTop: '3px',
                            cursor: 'pointer',
                          }
                        : {
                            fontSize: '12px',
                            color: 'rgba(21, 21, 21, 0.8)',
                            cursor: 'pointer',
                          }
                    }
                  >
                    {data.name}
                  </Form.Label>
                  <Image
                    style={{
                      marginTop: '5px',
                      cursor: 'pointer',
                    }}
                    src={
                      props.specificServiceData?.name === data.name
                        ? '/img/servicesarrowrightselected.png'
                        : '/img/servicesarrowright.png'
                    }
                    width="7"
                    height="12"
                    alt="arrow"
                  />
                </div>
              ))}
            </div>
            {props.furtherDetails ? (
              <>
                <ServiceFurtherDetailsContent
                  specificServiceData={props.specificServiceData}
                  getDomesticQuote={props.getDomesticQuote}
                  setDomesticQuote={props.setDomesticQuote}
                  getAbroadQuote={props.getAbroadQuote}
                  setGetAbroadQuote={props.setGetAbroadQuote}
                  handleGetDomesticQuote={props.handleGetDomesticQuote}
                  handleGetAbroadQuote={props.handleGetAbroadQuote}
                  inboundQuote={props.inboundQuote}
                  setInboundQuote={props.setInboundQuote}
                  outboundQuote={props.outboundQuote}
                  setOutboundQuote={props.setOutboundQuote}
                  handleInboundQuote={props.handleInboundQuote}
                  handleOutboundQuote={props.handleOutboundQuote}
                  setEstimatedShippingModal={props.setEstimatedShippingModal}
                />
              </>
            ) : (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '4px',
                  width: '67%',
                }}
              >
                <Image
                  style={{
                    maxWidth: '100%',
                    width: '720px',
                  }}
                  src={props.specificServiceData?.img}
                  width="720"
                  height="450"
                  alt="service"
                />
                <p
                  style={{
                    fontSize: '12px',
                    textAlign: 'justify',
                    color: 'rgba(38, 38, 38, 0.8)',
                    width: '720px',
                    maxWidth: '100%',
                    marginTop: '20px',
                  }}
                >
                  {props.specificServiceData?.description}
                </p>
                <Button
                  onClick={() => props.specificServiceData.name === 'Loadboard'
                  ? router.push('/loadboard') : props.setFurtherDetails(true)}
                  style={{
                    marginTop: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '8px',
                    background: '#00902F',
                    width: '262px',
                    height: '40px',
                    color: 'white',
                    border: 'none',
                  }}
                >
                  {props.specificServiceData.name === 'Ship Now'
                    ? 'Ship Now'
                    : props.specificServiceData.name === 'Get a Quote'
                    ? 'Get a Quote'
                    : props.specificServiceData.name === 'Loadboard'
                    ? 'View Loadboard'
                    : props.specificServiceData.name === 'Load Management'
                    ? 'Manage Load'
                    : props.specificServiceData.name === 'Driver Management'
                    ? 'Manage Drivers'
                    : props.specificServiceData.name === 'Truck Management'
                    ? 'Manage Truck'
                    : props.specificServiceData.name ===
                      'Clearing and Forwarding Agents'
                    ? 'Manage Clearing'
                    : props.specificServiceData.name === 'Specialized Shipment'
                    ? 'Specialized Shipment'
                    : undefined}
                </Button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
