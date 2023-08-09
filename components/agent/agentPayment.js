import { Button, Form } from 'react-bootstrap';
import AddCard from './addCard';

export default function AgentPayment(props) {
  return (
    <>
      <div
        style={{
          width: '100%',
          padding: '20px',
        }}
      >
        <div
          style={{
            width: '100%',
            border: '1px solid #E7E7E7',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            background: 'white',
          }}
        >
          {props.addCard ? (
            <AddCard
              setAddBankModal={props.setAddBankModal}
              addCardCompleted={props.addCardCompleted}
              setAddCardCompleted={props.setAddCardCompleted}
              successModal={props.successModal}
              setSuccessModal={props.setSuccessModal}
            />
          ) : (
            <>
              <Form.Label
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: 'black',
                  marginLeft: '140px',
                }}
              >
                Choose a payment method
              </Form.Label>
              <div
                style={{
                  display: 'flex',
                  marginTop: '20px',
                  marginLeft: '140px',
                }}
              >
                <Button
                  onClick={props.handleIsCash}
                  style={
                    props.isCash
                      ? {
                          background: '#FFFFFF',
                          padding: '5px 10px 2px 10px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: '288px',
                          border: '0.5px solid rgba(0, 0, 0, 0.04)',
                          boxShadow:
                            '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
                          borderRadius: '6px',
                        }
                      : {
                          background: '#EEEEEF',
                          padding: '5px 10px 2px 10px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: '288px',
                          border: '0.5px solid rgba(0, 0, 0, 0.04)',
                          borderRadius: '6px',
                        }
                  }
                >
                  <Form.Label
                    style={
                      props.isCash
                        ? {
                            color: '#151515',
                            fontSize: '12px',
                            marginLeft: '5px',
                            fontWeight: '500',
                          }
                        : {
                            color: '#A6A6A6',
                            fontSize: '12px',
                            marginLeft: '5px',
                            fontWeight: '500',
                          }
                    }
                  >
                    CASH
                  </Form.Label>
                </Button>
                <Button
                  onClick={() => {
                    props.handleIsCard();
                    props.setAddCard(true);
                  }}
                  style={
                    props.isCard
                      ? {
                          background: '#FFFFFF',
                          padding: '5px 10px 2px 10px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: '288px',
                          border: '0.5px solid rgba(0, 0, 0, 0.04)',
                          boxShadow:
                            '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
                          borderRadius: '6px',
                        }
                      : {
                          background: '#EEEEEF',
                          padding: '5px 10px 2px 10px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: '288px',
                          border: '0.5px solid rgba(0, 0, 0, 0.04)',
                          borderRadius: '6px',
                        }
                  }
                >
                  <Form.Label
                    style={
                      props.isCard
                        ? {
                            color: '#151515',
                            fontSize: '12px',
                            marginLeft: '5px',
                            fontWeight: '500',
                          }
                        : {
                            color: '#A6A6A6',
                            fontSize: '12px',
                            marginLeft: '5px',
                            fontWeight: '500',
                          }
                    }
                  >
                    CARD
                  </Form.Label>
                </Button>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '40px',
                }}
              >
                <Form.Label
                  style={{
                    color: '#A6A6A6',
                    fontSize: '10px',
                    textAlign: 'center',
                  }}
                >
                  Total cost
                </Form.Label>
                <Form.Label
                  style={{
                    color: '#A6A6A6',
                    fontSize: '10px',
                    textAlign: 'center',
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
                  </span>{' '}
                  <span
                    style={{
                      color: 'black',
                      fontWeight: '600',
                      fontSize: '16px',
                      fontFamily: 'Poppins',
                    }}
                  >
                    128.00
                  </span>
                </Form.Label>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '30px',
                  marginBottom: '30px',
                }}
              >
                <Button
                  onClick={() => {
                    props.setAddCardCompleted(true);
                    props.setAddCard(true);
                  }}
                  style={{
                    background: '#00902F',
                    padding: '5px 10px 2px 10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    borderRadius: '6px',
                    border: 'none',
                  }}
                >
                  <Form.Label
                    style={{
                      color: 'white',
                      fontSize: '12px',
                      marginLeft: '5px',
                      fontWeight: '500',
                    }}
                  >
                    Confirm
                  </Form.Label>
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
