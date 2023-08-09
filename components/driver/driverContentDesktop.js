import Image from 'next/image';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export default function DriverContentDesktop(props) {
  const [select, setSelect] = useState();
  return (
    <>
      <div
        onMouseEnter={() => setSelect(props.address1)}
        onMouseLeave={() => setSelect('')}
        style={
          select === props.address1
            ? {
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                padding: '20px',
                background: '#EBF6DF',
              }
            : {
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                padding: '20px',
                background: 'white',
              }
        }
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
            src="/img/driverfromto.png"
            width="14"
            height="69"
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
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '14px',
                color: 'rgba(21, 21, 21, 1)',
              }}
            >
              {props.address1}
            </Form.Label>
            <Form.Label
              style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '12px',
                color: 'rgba(128, 128, 128, 1)',
              }}
            >
              {props.date1}
            </Form.Label>
            <Form.Label
              style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '14px',
                color: 'rgba(21, 21, 21, 1)',
              }}
            >
              {props.address2}
            </Form.Label>
            <Form.Label
              style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '12px',
                color: 'rgba(128, 128, 128, 1)',
              }}
            >
              {props.date2}
            </Form.Label>
          </div>
        </div>
        {props.orders && (
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
                src={props.imgSrcStatus}
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
                {props.status}
              </Form.Label>
            </div>
            <Image
              style={{
                cursor: 'pointer',
                marginTop: '6px',
              }}
              src={props.imgSrcStatus1}
              width="24"
              height="12"
              alt="logo"
            />
          </div>
        )}
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
              gap: '20px',
            }}
          >
            <Button
              style={{
                display: 'flex',
                background: 'rgba(124, 196, 39, 0.15)',
                border: 'none',
                borderRadius: '5px',
                padding: '5px',
                color: 'rgba(0, 144, 47, 1)',
              }}
            >
              {props.amount}
            </Button>
            {props.isInfo && (
              <Button
                style={{
                  display: 'flex',
                  background:
                    'linear-gradient(90deg, #00902F 0%, #7CC427 99.69%)',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '5px',
                  color: 'white',
                }}
              >
                {props.extraAmount}
              </Button>
            )}
            {props.isRefresh && (
              <Button
                style={{
                  display: 'flex',
                  background: '#FFC700',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '5px',
                  color: 'black',
                }}
              >
                {props.extraAmount}
              </Button>
            )}
            <Form.Label
              style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '14px',
                color: 'rgba(21, 21, 21, 1)',
                marginTop: '7px',
              }}
            >
              {props.distance}
            </Form.Label>
          </div>
          {props.isRefresh && (
            <div
              style={{
                display: 'flex',
                gap: '20px',
              }}
            >
              <Image
                style={{
                  cursor: 'pointer',
                  marginTop: '6px',
                }}
                src="/img/driverrefresh.png"
                width="20"
                height="20"
                alt="refresh"
              />
            </div>
          )}
          {props.isInfo && (
            <div
              style={{
                display: 'flex',
                gap: '20px',
              }}
            >
              <Image
                style={{
                  cursor: 'pointer',
                  marginTop: '6px',
                }}
                src="/img/driverinfo.png"
                width="20"
                height="20"
                alt="info"
              />
            </div>
          )}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: '10px',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '20px',
            }}
          >
            {(props.isRefresh || props.isInfo || props.isBulk) && (
              <Form.Label
                onClick={props.orders && (() => props.setBid(true))}
                style={{
                  cursor: 'pointer',
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '14px',
                  color: 'rgba(21, 21, 21, 1)',
                  marginTop: '7px',
                }}
              >
                {props.bulk}
              </Form.Label>
            )}
            <Form.Label
              style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '14px',
                color: 'rgba(21, 21, 21, 1)',
                marginTop: '7px',
              }}
            >
              {props.description}
            </Form.Label>
          </div>
          <Button
            onClick={() => {props.setDriverDetailsModal(true), props.refreshData()}}
            style={{
              display: 'flex',
              background: 'none',
              border: 'none',
              borderRadius: '5px',
              padding: '5px',
              color: 'rgba(0, 144, 47, 1)',
              gap: '10px',
            }}
          >
            View
            <Image
              style={{
                cursor: 'pointer',
                marginTop: '7px',
              }}
              src="/img/arrowforward.png"
              width="5"
              height="10"
              alt="arrow"
            />
          </Button>
        </div>
      </div>
    </>
  );
}
