import Image from 'next/image';
import { Form } from 'react-bootstrap';

export default function PackagesCashoutContent(props) {
  return (
    <>
      <div
        onClick={
          props.packages
            ? () => props.setOrderDetails(true)
            : props.amount === '₦ 1 350.00'
            ? () => props.setOrderDetailsCashout(true)
            : undefined
        }
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          border: 'ips solid #E7E7E7',
          borderRadius: '6px',
          background: '#F9F9F9',
          padding: '10px',
          marginTop: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'space-between',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '60%',
            }}
          >
            <Form.Label
              style={{
                fontSize: '15px',
                color: '#151515',
                fontWeight: 600,
              }}
            >
              {props.caption1}
            </Form.Label>
            <Form.Label
              style={{
                fontSize: '11px',
                color: '#808080',
                fontWeight: 400,
              }}
            >
              {props.caption2}
            </Form.Label>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '38%',
            }}
          >
            <Form.Label
              style={{
                fontSize: '14px',
                color: '#00902F',
                fontWeight: 500,
                marginLeft: 'auto',
              }}
            >
              {props.amount}
            </Form.Label>
          </div>
        </div>
        <hr
          style={{
            marginTop: '-1px',
            color: 'gray',
            fontWeight: '600',
          }}
        />
        {(!props.cashout || props.noPoint) && (
          <>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                }}
              >
                <Image
                  src="/img/Points.png"
                  width="33"
                  height="46"
                  alt="point"
                />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Form.Label
                    style={{
                      fontSize: '12px',
                      color: '#151515',
                    }}
                  >
                    {props.from}
                  </Form.Label>
                  <Form.Label
                    style={{
                      fontSize: '12px',
                      color: '#151515',
                    }}
                  >
                    {props.to}
                  </Form.Label>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Form.Label
                  style={{
                    fontSize: '12px',
                    color: '#808080',
                  }}
                >
                  {props.dateFrom}
                </Form.Label>
                <Form.Label
                  style={{
                    fontSize: '12px',
                    color: '#808080',
                  }}
                >
                  {props.dateTo}
                </Form.Label>
              </div>
            </div>
            <hr
              style={{
                marginTop: '-1px',
                color: 'gray',
                fontWeight: '600',
              }}
            />
          </>
        )}
        <div
          style={{
            display: 'flex',
            marginTop: '2px',
          }}
        >
          <Image
            tyle={{
              marginTop: '10px',
            }}
            src={props.imgSrc ? props.imgSrc : '/img/Ellipse-dot.png'}
            width="6"
            height="6"
            alt="ellipse"
          />
          <Form.Label
            style={{
              fontSize: '10px',
              marginTop: '-5px',
              marginLeft: '10px',
              color: '#808080',
            }}
          >
            {props.status}
          </Form.Label>
        </div>
      </div>
    </>
  );
}
