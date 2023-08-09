import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button, Form } from 'react-bootstrap';
import LoadboardListCustomDesktopHeader from './loadboardLIstCustomDesktopHeader';

const headings = [
  'Posted',
  'Cargo type',
  'Pickup date',
  'Country',
  'City / Town',
  'Delivery Location',
  'Weight (Ibs)',
  'Length (mm)',
  'Amount',
  '',
];

export default function LoadboardListCustomDesktop(props) {
  const router = useRouter();
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          padding: '20px 40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: '60px',
            width: '100%',
            marginBottom: '20px',
          }}
        >
          {headings.map((data, idx) => (
            <Form.Label
              key={idx}
              style={{
                fontSize: '12px',
                fontWeight: 500,
                color: 'rgba(38, 38, 38, 1)',
                textAlign: 'left',
                marginLeft:
                  data === 'Cargo type'
                    ? '24px'
                    : data === 'Pickup date'
                    ? '30px'
                    : data === 'Weight (Ibs)'
                    ? '-20px'
                    : data === 'Length (mm)'
                    ? '-20px'
                    : '0px',
              }}
            >
              {data}
            </Form.Label>
          ))}
        </div>
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
              flexDirection: 'column',
              marginBottom: '10px',
            }}
          >
            {props.loadboardData?.slice(0, 16).map((data, idx) => (
              <LoadboardListCustomDesktopHeader
                key={idx}
                caption={data.timePosted}
                isContent={true}
                marginBottom="20px"
              />
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '10px',
            }}
          >
            {props.loadboardData?.slice(0, 16).map((data, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  gap: '10px',
                  marginBottom: '12px',
                }}
              >
                <Image
                  style={{
                    marginTop: '-7px',
                  }}
                  src={data.cargotypeImgList}
                  width="30"
                  height="30"
                  alt="sofa"
                />
                <Form.Label
                  style={{
                    fontSize: '12px',
                    fontWeight: 400,
                    color: 'rgba(38, 38, 38, 1)',
                  }}
                >
                  {data.cargoTypeList}
                </Form.Label>
              </div>
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '10px',
            }}
          >
            {props.loadboardData?.slice(0, 16).map((data, idx) => (
              <LoadboardListCustomDesktopHeader
                key={idx}
                caption={data.pickupDate}
                isContent={true}
                marginBottom="20px"
              />
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '10px',
            }}
          >
            {props.loadboardData?.slice(0, 16).map((data, idx) => (
              <LoadboardListCustomDesktopHeader
                key={idx}
                caption={data.country}
                isContent={true}
                marginBottom="20px"
              />
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '10px',
            }}
          >
            {props.loadboardData?.slice(0, 16).map((data, idx) => (
              <LoadboardListCustomDesktopHeader
                key={idx}
                caption={data.cityTownList}
                isContent={true}
                marginBottom="20px"
              />
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '10px',
            }}
          >
            {props.loadboardData?.slice(0, 16).map((data, idx) => (
              <LoadboardListCustomDesktopHeader
                key={idx}
                caption={data.deliveryLocationList}
                isContent={true}
                marginBottom="20px"
              />
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '10px',
            }}
          >
            {props.loadboardData?.slice(0, 16).map((data, idx) => (
              <LoadboardListCustomDesktopHeader
                key={idx}
                caption={data.weight}
                isContent={true}
                marginBottom="20px"
                marginLeft="0px"
              />
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '10px',
            }}
          >
            {props.loadboardData?.slice(0, 16).map((data, idx) => (
              <LoadboardListCustomDesktopHeader
                key={idx}
                caption={data.length}
                isContent={true}
                marginBottom="20px"
                marginLeft="30px"
              />
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '10px',
            }}
          >
            {props.loadboardData?.slice(0, 16).map((data, idx) => (
              <LoadboardListCustomDesktopHeader
                key={idx}
                caption={data.amount}
                isContent={true}
                marginBottom="20px"
              />
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '10px',
            }}
          >
            {props.loadboardData?.slice(0, 16).map((data, idx) => (
              <Button
                onClick={() => router.push(`/loadboard/${data.id}`)}
                key={idx}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '11px',
                  height: '30px',
                  width: '100px',
                  background: '#7CC427',
                  border: 'none',
                  marginTop: '-3px',
                  padding: '7px',
                  marginBottom: '11px',
                }}
              >
                <Form.Label
                  style={{
                    fontSize: '10px',
                    fontWeight: 400,
                    color: 'white',
                    marginTop: '7px',
                  }}
                >
                  View details
                </Form.Label>
                <Image
                  style={{}}
                  src="/img/cargoarrowforward.png"
                  width="6"
                  height="10"
                  alt="arrow"
                />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
