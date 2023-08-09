import Image from 'next/image';
import { Button, Form } from 'react-bootstrap';
import AddCardMobile from './addCardMobile';

export default function AgentMobilePayment(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Image
          onClick={
            props.addCard
              ? () => props.setAddCard(false)
              : () => props.setGoToPayment(false)
          }
          src="/img/agent-arrow-left.png"
          width="20"
          height="20"
          alt="left-arrow"
        />
        <Form.Label
          style={{
            color: 'rgba(21, 21, 21, 1)',
            fontSize: '16px',
            fontWeight: '500',
          }}
        >
          Payment
        </Form.Label>
        <div></div>
      </div>
      <hr
        style={{
          marginTop: '-0.09px',
        }}
      />
      {props.addCard ? (
        <>
          <AddCardMobile
            addBankModal={props.addBankModal}
            setAddBankModal={props.setAddBankModal}
            addCardCompleted={props.addCardCompleted}
            setAddCardCompleted={props.setAddCardCompleted}
            setSuccessModal={props.setSuccessModal}
          />
        </>
      ) : (
        <>
          <div
            style={{
              display: 'flex',
              width: '100%',
              flexDirection: 'column',
            }}
          >
            <Form.Label
              style={{
                fontSize: '12px',
                marginTop: '10px',
                color: 'rgba(21, 21, 21, 1)',
              }}
            >
              Choose a payment method
            </Form.Label>
            <div
              style={{
                display: 'flex',
                marginTop: '20px',
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
                        width: '50%',
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
                        width: '50%',
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
                        width: '50%',
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
                        width: '50%',
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
                marginTop: '200px',
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
                  color: 'white',
                  fontSize: '14px',
                  marginLeft: '5px',
                  fontWeight: '500',
                  height: '56px',
                  textTransform: 'uppercase',
                }}
              >
                Confirm
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
