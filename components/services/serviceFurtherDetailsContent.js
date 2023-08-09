import Media from '@/utils/media';
import Image from 'next/image';
import { Form } from 'react-bootstrap';
import DomesticQuote from './quotes/domesticQuote';
import AbroadQuote from './quotes/abroadQuote';
import InboundQuote from './quotes/inboundQuote';
import OutboundQuote from './quotes/outboundQuote';

export default function ServiceFurtherDetailsContent(props) {
  const { mobile, tabletAndDesktop } = Media();
  return (
    <>
      <div
        style={
          mobile
            ? {
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '4px',
                width: '100%',
              }
            : {
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '4px',
                width: '67%',
                paddingRight: '20px',
              }
        }
      >
        <Form.Label
          style={
            mobile
              ? {
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#414141',
                  marginTop: '20px',
                }
              : {
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#414141',
                }
          }
        >
          {props.specificServiceData?.title}
        </Form.Label>
        <p
          style={{
            fontSize: '12px',
            color: 'rgba(38, 38, 38, 0.8)',
            textAlign: 'justify',
          }}
        >
          {props.specificServiceData?.furtherDesc}
        </p>
        {props.specificServiceData?.name === 'Ship Now' && (
          <Form.Label
            style={{
              fontSize: '14px',
              fontWeight: 500,
              color: '#414141',
            }}
          >
            Please select the prefered channel to ship your load
          </Form.Label>
        )}
        {props.getDomesticQuote &&
        props.specificServiceData?.name === 'Get a Quote' ? (
          <>
            <DomesticQuote
              setDomesticQuote={props.setDomesticQuote}
              setEstimatedShippingModal={props.setEstimatedShippingModal}
            />
          </>
        ) : props.getAbroadQuote &&
          props.specificServiceData?.name === 'Get a Quote' ? (
          <>
            {props.inboundQuote ? (
              <InboundQuote
                setInboundQuote={props.setInboundQuote}
                handleGetAbroadQuote={props.handleGetAbroadQuote}
                setEstimatedShippingModal={props.setEstimatedShippingModal}
              />
            ) : props.outboundQuote ? (
              <>
                <OutboundQuote
                  setOutboundQuote={props.setOutboundQuote}
                  handleGetAbroadQuote={props.handleGetAbroadQuote}
                  setEstimatedShippingModal={props.setEstimatedShippingModal}
                />
              </>
            ) : (
              <AbroadQuote
                setGetAbroadQuote={props.setGetAbroadQuote}
                inboundQuote={props.inboundQuote}
                setInboundQuote={props.setInboundQuote}
                outboundQuote={props.outboundQuote}
                setOutboundQuote={props.setOutboundQuote}
                handleInboundQuote={props.handleInboundQuote}
                handleOutboundQuote={props.handleOutboundQuote}
                handleGetAbroadQuote={props.handleGetAbroadQuote}
              />
            )}
          </>
        ) : (
          <>
            <div
              style={{
                display: 'flex',
                justifyContent: mobile ? 'space-between' : 'flex-start',
                marginTop: '20px',
                gap: '20px',
              }}
            >
              {props.specificServiceData?.preferredChannel
                ?.slice(0, 2)
                .map((channel, idx) => (
                  <div
                    onClick={
                      channel.name === 'Domestic'
                        ? () => props.handleGetDomesticQuote()
                        : channel.name === 'Abroad'
                        ? () => props.handleGetAbroadQuote()
                        : undefined
                    }
                    key={idx}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                      padding: '67px 21px',
                      width: '260px',
                      height: '250px',
                      border: '1px solid #E7E7E7',
                      gap: '10px',
                      cursor: 'pointer',
                    }}
                  >
                    <Image
                      src={channel.imgSrc}
                      width={channel.imgWidth}
                      height={channel.imgHeight}
                      alt={channel.id}
                    />
                    <Form.Label
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#414141',
                      }}
                    >
                      {channel.name}
                    </Form.Label>
                    <p
                      style={{
                        fontSize: '12px',
                        color: 'rgba(38, 38, 38, 0.8)',
                        textAlign: 'center',
                      }}
                    >
                      {channel.desc}
                    </p>
                  </div>
                ))}
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: mobile ? 'space-between' : 'flex-start',
                marginTop: '20px',
                gap: '20px',
              }}
            >
              {props.specificServiceData?.preferredChannel
                ?.slice(2)
                .map((channel, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                      padding: '67px 21px',
                      width: '260px',
                      height: '250px',
                      border: '1px solid #E7E7E7',
                      gap: '10px',
                      cursor: 'pointer',
                    }}
                  >
                    <Image
                      src={channel.imgSrc}
                      width={channel.imgWidth}
                      height={channel.imgHeight}
                      alt={channel.id}
                    />
                    <Form.Label
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#414141',
                      }}
                    >
                      {channel.name}
                    </Form.Label>
                    <p
                      style={{
                        fontSize: '12px',
                        color: 'rgba(38, 38, 38, 0.8)',
                        textAlign: 'center',
                      }}
                    >
                      {channel.desc}
                    </p>
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
