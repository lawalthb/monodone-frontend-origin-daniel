import { Button, Form } from 'react-bootstrap';

export default function AddCardMobile(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '30px',
          width: '100%',
        }}
      >
        <Form.Label
          style={{
            fontSize: '12px',
            color: '#808080',
          }}
        >
          You need to pay this amount to Monodome
        </Form.Label>
        <div
          style={{
            display: 'flex',
            gap: '5px',
          }}
        >
          <span
            style={{
              color: '#00902F',
              fontWeight: '600',
              fontSize: '16px',
              fontFamily: 'Poppins',
            }}
          >
            #
          </span>
          <Form.Label
            style={{
              color: 'black',
              fontSize: '14px',
              textAlign: 'center',
              fontWeight: 600,
              margintop: '13px',
            }}
          >
            100.00
          </Form.Label>
        </div>
        <hr />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '-5px',
            width: '100%',
          }}
        >
          {props.addCardCompleted ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Form.Label
                style={{
                  color: '#808080',
                  fontSize: '12px',
                  marginTop: '10px',
                }}
              >
                Payment card
              </Form.Label>
              <Form.Label
                style={{
                  color: 'black',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                MasterCard **** 8009
              </Form.Label>
            </div>
          ) : (
            <Form.Label
              style={{
                color: '#808080',
                fontSize: '12px',
                marginTop: '10px',
              }}
            >
              No card
            </Form.Label>
          )}
          <Button
            onClick={() => props.setAddBankModal(true)}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '7px',
              color: 'black',
              background: 'white',
              border: '1px solid #7CC427',
              width: '30%',
              height: '35px',
            }}
          >
            {props.addCardCompleted ? 'Change' : 'Add'}
          </Button>
        </div>
        <hr
          style={{
            marginTop: '-0.09px',
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '200px',
            width: '100%',
          }}
        >
          <Button
            onClick={() => props.setSuccessModal(true)}
            disabled={!props.addCardCompleted}
            style={
              props.addCardCompleted
                ? {
                    background: '#00902F',
                    padding: '5px 10px 2px 10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    borderRadius: '6px',
                    border: 'none',
                    color: 'white',
                    fontSize: '14px',
                    marginLeft: '5px',
                    fontWeight: '500',
                    height: '56px',
                  }
                : {
                    background: '#D1D1D1',
                    padding: '5px 10px 2px 10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    borderRadius: '6px',
                    border: 'none',
                    color: 'white',
                    fontSize: '14px',
                    marginLeft: '5px',
                    fontWeight: '500',
                    height: '56px',
                  }
            }
          >
            Pay #100.00
          </Button>
        </div>
      </div>
    </>
  );
}
