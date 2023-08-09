import Image from 'next/image';
import { Form } from 'react-bootstrap';

export default function AgentOrderDetailsMobileContent(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          padding: '10px 0px',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '30%',
          }}
        >
          <Form.Label
            style={{
              fontSize: '12px',
              marginTop: '-5px',
              marginLeft: '10px',
              color: '#808080',
            }}
          >
            {props.caption}
          </Form.Label>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '68%',
          }}
        >
          {props.editDeliveryInfo ? (
            <input
              style={
                props.errors
                  ? {
                      border: '1px solid red',
                      padding: '10px',
                      fontSize: '10px',
                      borderRadius: '5px',
                      height: '56px',
                      width: '100%',
                      marginTop: '-5px',
                    }
                  : {
                      // border: '1px solid #E7E7E7',
                      padding: '10px',
                      fontSize: '10px',
                      borderRadius: '5px',
                      height: '56px',
                      width: '100%',
                      marginTop: '-5px',
                    }
              }
              type="text"
              {...props.register(`${props.name}`, { required: true })}
              placeholder=""
            />
          ) : (
            <>
              <Form.Label
                style={{
                  fontSize: '12px',
                  marginTop: '-5px',
                  marginLeft: '10px',
                  color: '#808080',
                  marginLeft: 'auto',
                }}
              >
                {props.dataFrom}
              </Form.Label>
              {props.phone && (
                <div
                  style={{
                    display: 'flex',
                    gap: '10px',
                  }}
                >
                  <Image
                    style={{
                      marginTop: '-10px',
                      marginLeft: 'auto',
                    }}
                    src="/img/agentphone.png"
                    width="15"
                    height="20"
                    alt="phone"
                  />
                  <Form.Label
                    style={{
                      fontSize: '12px',
                      marginTop: '-5px',
                      color: '#808080',
                      marginLeft: 'auto',
                    }}
                  >
                    {props.phone}
                  </Form.Label>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <hr
        style={{
          marginTop: '-0.09px',
        }}
      />
    </>
  );
}
