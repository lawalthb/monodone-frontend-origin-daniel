import { Form } from 'react-bootstrap';
import Media from '@/utils/media';
import PartnerContentMobile from './partnerContentMobile';
import PartnersContentDesktop from './partnersContentDesktop';

export default function Partners(props) {
  const { mobile, tablet, desktop } = Media();

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: 'auto',
          gap: '6px',
        }}
      >
        <Form.Label
          style={{
            color: 'black',
            fontSize: '19px',
            fontWeight: 700,
          }}
        >
          {props.caption1}
        </Form.Label>
        <Form.Label
          style={{
            color: '#7CC427',
            fontSize: '19px',
            fontWeight: 700,
          }}
        >
          {props.caption2}
        </Form.Label>
      </div>
      <p
        style={
          mobile
            ? {
                textAlign: 'center',
                padding: '10px 20px',
                fontSize: '12px',
              }
            : {
                textAlign: 'center',
                padding: '10px 70px',
              }
        }
      >
        Our company is developing rapidly and today is a leader in the field of
        logistics. What we can offer today.
      </p>
      {mobile && (
        <>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <PartnerContentMobile
              imgSrc1="/img/nipost.png"
              imgSrc2="/img/zimpost.png"
              caption1="Niposts"
              caption2="Zimposts"
            />
            <PartnerContentMobile
              imgSrc1="/img/yrcfreight.png"
              imgSrc2="/img/fedex.png"
              caption1="YRC Freight"
              caption2="Fedex Express"
            />
            <PartnerContentMobile
              imgSrc1="/img/postia.png"
              imgSrc2="/img/dhl.png"
              caption1="Iposita"
              caption2="DHL"
            />
            <PartnerContentMobile
              imgSrc1="/img/nssa.png"
              imgSrc2="/img/dhl.png"
              caption1="NSSA"
              caption2="DHL"
            />
          </div>
        </>
      )}
      {desktop && (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              padding: '20px',
            }}
          >
            <PartnersContentDesktop
              imgSrc1="/img/nipost.png"
              caption1="Nigposts"
            />
            <PartnersContentDesktop
              imgSrc1="/img/zimpost.png"
              caption1="Zimposts"
            />
            <PartnersContentDesktop
              imgSrc1="/img/yrcfreight.png"
              caption1="YRC Freight"
            />
            <PartnersContentDesktop
              imgSrc1="/img/fedex.png"
              caption1="Fedex Express"
            />
            <PartnersContentDesktop
              imgSrc1="/img/postia.png"
              caption1="Iposita"
            />
            <PartnersContentDesktop imgSrc1="/img/dhl.png" caption1="DHL" />
            <PartnersContentDesktop imgSrc1="/img/nssa.png" caption1="NSSA" />
          </div>
        </>
      )}
      {tablet && (
        <>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                padding: '20px',
              }}
            >
              <PartnersContentDesktop
                imgSrc1="/img/nipost.png"
                caption1="Nigposts"
              />
              <PartnersContentDesktop
                imgSrc1="/img/zimpost.png"
                caption1="Zimposts"
              />
              <PartnersContentDesktop
                imgSrc1="/img/yrcfreight.png"
                caption1="YRC Freight"
              />
              <PartnersContentDesktop
                imgSrc1="/img/fedex.png"
                caption1="Fedex Express"
              />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                padding: '20px',
              }}
            >
              <PartnersContentDesktop
                imgSrc1="/img/postia.png"
                caption1="Iposita"
              />
              <PartnersContentDesktop imgSrc1="/img/dhl.png" caption1="DHL" />
              <PartnersContentDesktop imgSrc1="/img/nssa.png" caption1="NSSA" />
            </div>
          </div>
        </>
      )}
    </>
  );
}
