import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import AgentPayment from './agentPayment';
import AddBankCardModal from './addBankCardModal';
import SuccessModal from '../success/successModal';
import AgentBarcodeModalSetup from './agentBarcodeModalSetup';

export default function AgentOrders(props) {
  const [orderDetailsCreated, setOrderDetailsCreated] = useState(false);
  const [editDeliveryInfo, setEditDeliveryInfo] = useState(false);
  const [editOptionsparcel, setEditOptionsParcel] = useState(false);
  const [goToPayment, setGoToPayment] = useState(false);
  const [isCash, setIsCash] = useState(false);
  const [isCard, setIsCard] = useState(false);
  const [addCard, setAddCard] = useState(false);
  const [addBankModal, setAddBankModal] = useState(false);
  const [cardNumber, setCardNumber] = useState();
  const [expiryDate, setExpiryDate] = useState();
  const [secureCode, setSecureCode] = useState();
  const [addCardCompleted, setAddCardCompleted] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [barcode, setBarcode] = useState(false);

  const { register, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: {
      office: props.parcelData?.office,
      streetTo: props.parcelData?.data.streetTo,
      recepient: props.parcelData?.recepient,
      phoneNumber: props.parcelData?.phoneNumber,
      toRecepient: props.parcelData?.toRecepient,
      toPhoneNumber: props.parcelData?.toPhoneNumber,
    },
  });

  const handleIsCash = () => {
    setIsCash(true);
    setIsCard(false);
  };

  const handleIsCard = () => {
    setIsCard(true);
    setIsCash(false);
  };

  useEffect(() => {
    if (isCard) {
      setIsCash(false);
    } else {
      setIsCash(true);
    }
  }, [isCard]);

  const submitForm = (data) => {
    console.log('delivery info', data);
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          padding: '10px 40px',
          // marginTop: '-40px',
        }}
      >
        <Form.Label
          onClick={
            addCard
              ? () => setAddCard(false)
              : goToPayment
              ? () => setGoToPayment(false)
              : orderDetailsCreated
              ? () => {
                  setOrderDetailsCreated(false);
                }
              : () => {
                  props.setOrders(false);
                }
          }
          style={{
            fontWeight: '400',
            fontSize: '25px',
            color: 'black',
            cursor: 'pointer',
          }}
        >
          {'<'}
        </Form.Label>
        <Form.Label
          style={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '28px',
            color: '#4E4C4C',
          }}
        >
          {goToPayment ? 'History' : 'Order details'}
        </Form.Label>
        <div></div>
      </div>
      {goToPayment ? (
        <>
          <AgentPayment
            isCash={isCash}
            setIsCash={setIsCash}
            isCard={isCard}
            setIsCard={setIsCard}
            handleIsCash={handleIsCash}
            handleIsCard={handleIsCard}
            addCard={addCard}
            setAddCard={setAddCard}
            setAddBankModal={setAddBankModal}
            addCardCompleted={addCardCompleted}
            setAddCardCompleted={setAddCardCompleted}
            successModal={successModal}
            setSuccessModal={setSuccessModal}
          />
        </>
      ) : (
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
              <Form.Label
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: 'black',
                }}
              >
                #20 40028668 0998
              </Form.Label>
              {orderDetailsCreated && (
                <div
                  style={{
                    display: 'flex',
                    marginTop: '10px',
                  }}
                >
                  <Image
                    tyle={{
                      marginTop: '10px',
                    }}
                    src="/img/elipse-dot.png"
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
                    Created
                  </Form.Label>
                </div>
              )}
              <hr
                style={{
                  marginTop: '5px',
                  width: '100%',
                }}
              />
              <form
                onSubmit={
                  editDeliveryInfo ? handleSubmit(submitForm) : undefined
                }
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                >
                  <Form.Label
                    style={{
                      fontSize: '14px',
                      fontWeight: '500',
                      color: 'black',
                    }}
                  >
                    Delivery information
                  </Form.Label>
                  {orderDetailsCreated && (
                    <Button
                      onClick={
                        editDeliveryInfo
                          ? () => setEditDeliveryInfo(false)
                          : () => setEditDeliveryInfo(true)
                      }
                      style={{
                        fontSize: '14px',
                        fontWeight: '500',
                        color: 'rgba(0, 144, 47, 1)',
                        cursor: 'pointer',
                        background: 'white',
                        border: 'none',
                      }}
                    >
                      {editDeliveryInfo ? 'Done' : 'Edit'}
                    </Button>
                  )}
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid #E7E7E7',
                    width: '100%',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '20px',
                      width: '100%',
                    }}
                  >
                    <Form.Label
                      style={{
                        fontSize: '12px',
                        color: '#808080',
                        marginTop: '-18px',
                      }}
                    >
                      From:
                    </Form.Label>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        width: '30%',
                      }}
                    >
                      <Form.Label
                        style={{
                          display: editDeliveryInfo ? 'none' : 'block',
                          fontSize: '12px',
                          color: '#808080',
                          fontWeight: '400',
                          color: 'black',
                          marginTop: '-18px',
                        }}
                      >
                        {props.parcelData?.office}
                      </Form.Label>
                      {orderDetailsCreated && (
                        <input
                          style={{
                            border: '1px solid #E7E7E7',
                            fontSize: '12px',
                            borderRadius: '5px',
                            marginTop: '-18px',
                            width: '100%',
                            display: editDeliveryInfo ? 'block' : 'none',
                            padding: '5px',
                          }}
                          type="text"
                          {...register('office', {
                            required: true,
                          })}
                        />
                      )}
                    </div>
                  </div>
                  <hr
                    style={{
                      marginTop: '-10px',
                    }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '20px',
                      width: '100%',
                    }}
                  >
                    <Form.Label
                      style={{
                        fontSize: '12px',
                        color: '#808080',
                        marginTop: '-30px',
                      }}
                    >
                      To:
                    </Form.Label>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        width: '30%',
                        marginTop: '-10px',
                      }}
                    >
                      <Form.Label
                        style={{
                          display: editDeliveryInfo ? 'none' : 'block',
                          fontSize: '12px',
                          color: '#808080',
                          fontWeight: '400',
                          color: 'black',
                          marginTop: '-18px',
                        }}
                      >
                        {props.parcelData?.data.streetTo}
                      </Form.Label>
                      {orderDetailsCreated && (
                        <input
                          style={{
                            border: '1px solid #E7E7E7',
                            fontSize: '12px',
                            borderRadius: '5px',
                            marginTop: '-18px',
                            width: '100%',
                            display: editDeliveryInfo ? 'block' : 'none',
                            padding: '5px',
                          }}
                          type="text"
                          {...register('streetTo', {
                            required: true,
                          })}
                        />
                      )}
                    </div>
                  </div>
                  <hr
                    style={{
                      marginTop: '-10px',
                    }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '20px',
                      width: '100%',
                    }}
                  >
                    <Form.Label
                      style={{
                        fontSize: '12px',
                        color: '#808080',
                        marginTop: '-30px',
                      }}
                    >
                      Sender:
                    </Form.Label>
                    <Image
                      style={{
                        marginTop: '-10px',
                      }}
                      src="/img/agentphone.png"
                      width="15"
                      height="20"
                      alt="phone"
                    />
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '30%',
                      }}
                    >
                      <Form.Label
                        style={{
                          fontSize: '12px',
                          color: '#808080',
                          fontWeight: '400',
                          color: 'black',
                          marginTop: '-30px',
                          marginLeft: 'auto',
                          display: editDeliveryInfo ? 'none' : 'block',
                        }}
                      >
                        {props.parcelData?.recepient}
                      </Form.Label>
                      {orderDetailsCreated && (
                        <input
                          style={{
                            border: '1px solid #E7E7E7',
                            fontSize: '12px',
                            borderRadius: '5px',
                            marginTop: '-25px',
                            width: '100%',
                            display: editDeliveryInfo ? 'block' : 'none',
                            padding: '5px',
                          }}
                          type="text"
                          {...register('recepient', {
                            required: true,
                          })}
                        />
                      )}
                      <Form.Label
                        style={{
                          fontSize: '12px',
                          color: '#808080',
                          fontWeight: '400',
                          color: 'black',
                          // marginTop: "-30px",
                          marginLeft: 'auto',
                          display: editDeliveryInfo ? 'none' : 'block',
                        }}
                      >
                        {props.parcelData?.phoneNumber}
                      </Form.Label>
                      {orderDetailsCreated && (
                        <input
                          style={{
                            border: '1px solid #E7E7E7',
                            fontSize: '12px',
                            borderRadius: '5px',
                            marginTop: '5px',
                            width: '100%',
                            display: editDeliveryInfo ? 'block' : 'none',
                            padding: '5px',
                          }}
                          type="text"
                          {...register('phoneNumber', {
                            required: true,
                          })}
                        />
                      )}
                    </div>
                  </div>
                  <hr
                    style={{
                      marginTop: '-10px',
                    }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '20px',
                    }}
                  >
                    <Form.Label
                      style={{
                        fontSize: '12px',
                        color: '#808080',
                        marginTop: '-30px',
                      }}
                    >
                      Recepient:
                    </Form.Label>
                    <Image
                      style={{
                        marginTop: '-10px',
                      }}
                      src="/img/agentphone.png"
                      width="15"
                      height="20"
                      alt="phone"
                    />
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '30%',
                      }}
                    >
                      <Form.Label
                        style={{
                          fontSize: '12px',
                          color: '#808080',
                          fontWeight: '400',
                          color: 'black',
                          marginTop: '-30px',
                          marginLeft: 'auto',
                          display: editDeliveryInfo ? 'none' : 'block',
                        }}
                      >
                        {props.parcelData?.toRecepient}
                      </Form.Label>
                      {orderDetailsCreated && (
                        <input
                          style={{
                            border: '1px solid #E7E7E7',
                            fontSize: '12px',
                            borderRadius: '5px',
                            marginTop: '-25px',
                            width: '100%',
                            display: editDeliveryInfo ? 'block' : 'none',
                            padding: '5px',
                          }}
                          type="text"
                          {...register('toRecepient', {
                            required: true,
                          })}
                        />
                      )}
                      <Form.Label
                        style={{
                          fontSize: '12px',
                          color: '#808080',
                          fontWeight: '400',
                          color: 'black',
                          // marginTop: "-30px",
                          marginLeft: 'auto',
                          display: editDeliveryInfo ? 'none' : 'block',
                        }}
                      >
                        {props.parcelData?.toPhoneNumber}
                      </Form.Label>
                      {orderDetailsCreated && (
                        <input
                          style={{
                            border: '1px solid #E7E7E7',
                            fontSize: '12px',
                            borderRadius: '5px',
                            marginTop: '5px',
                            width: '100%',
                            display: editDeliveryInfo ? 'block' : 'none',
                            padding: '5px',
                          }}
                          type="text"
                          {...register('toPhoneNumber', {
                            required: true,
                          })}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </form>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <Form.Label
                  style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    marginTop: '20px',
                    color: 'black',
                  }}
                >
                  Options of Parcel
                </Form.Label>
                {orderDetailsCreated && (
                  <Button
                    onClick={() => setEditOptionsParcel(true)}
                    style={{
                      fontSize: '14px',
                      fontWeight: '500',
                      color: 'rgba(0, 144, 47, 1)',
                      cursor: 'pointer',
                      background: 'white',
                      border: 'none',
                    }}
                  >
                    {editOptionsparcel ? 'Done' : 'Edit'}
                  </Button>
                )}
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid #E7E7E7',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '20px',
                  }}
                >
                  <Form.Label
                    style={{
                      fontSize: '12px',
                      color: '#808080',
                    }}
                  >
                    Description:
                  </Form.Label>
                  <Form.Label
                    style={{
                      fontSize: '12px',
                      color: '#808080',
                      fontWeight: '400',
                      color: 'black',
                    }}
                  >
                    {props.parcelData?.packageData?.description}
                  </Form.Label>
                </div>
                <hr
                  style={{
                    marginTop: '-10px',
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '20px',
                    marginTop: '-20px',
                  }}
                >
                  <Form.Label
                    style={{
                      fontSize: '12px',
                      color: '#808080',
                    }}
                  >
                    Weight, lbs
                  </Form.Label>
                  <Form.Label
                    style={{
                      fontSize: '12px',
                      color: '#808080',
                      fontWeight: '400',
                      color: 'black',
                    }}
                  >
                    {props.parcelData?.packageData?.weight}
                  </Form.Label>
                </div>
                <hr
                  style={{
                    marginTop: '-10px',
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '20px',
                    marginTop: '-20px',
                  }}
                >
                  <Form.Label
                    style={{
                      fontSize: '12px',
                      color: '#808080',
                    }}
                  >
                    Size, cm
                  </Form.Label>
                  <Form.Label
                    style={{
                      fontSize: '12px',
                      color: '#808080',
                      fontWeight: '400',
                      color: 'black',
                    }}
                  >
                    {props.parcelData?.packageData?.width} {'x'}{' '}
                    {props.parcelData?.packageData?.length} {'x'}{' '}
                    {props.parcelData?.packageData?.height}
                  </Form.Label>
                </div>
                <hr
                  style={{
                    marginTop: '-10px',
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '20px',
                    marginTop: '-20px',
                  }}
                >
                  <Form.Label
                    style={{
                      fontSize: '12px',
                      color: '#808080',
                    }}
                  >
                    Estimated value
                  </Form.Label>
                  <Form.Label
                    style={{
                      fontSize: '12px',
                      color: '#808080',
                      fontWeight: '400',
                      color: 'black',
                    }}
                  >
                    220
                  </Form.Label>
                </div>
                <hr
                  style={{
                    marginTop: '-10px',
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '20px',
                    marginTop: '-20px',
                  }}
                >
                  <Form.Label
                    style={{
                      fontSize: '12px',
                      color: '#808080',
                    }}
                  >
                    Other
                  </Form.Label>
                  <Form.Label
                    style={{
                      fontSize: '12px',
                      color: '#808080',
                      fontWeight: '400',
                      color: 'black',
                    }}
                  >
                    Fragile product
                  </Form.Label>
                </div>
              </div>
              <Form.Label
                style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  marginTop: '20px',
                  color: 'black',
                }}
              >
                Date Information
              </Form.Label>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid #E7E7E7',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '20px',
                  }}
                >
                  <Form.Label
                    style={{
                      fontSize: '12px',
                      color: '#808080',
                    }}
                  >
                    Date:
                  </Form.Label>
                  <Form.Label
                    style={{
                      fontSize: '12px',
                      color: '#808080',
                      fontWeight: '400',
                      color: 'black',
                    }}
                  >
                    19 July 2022
                  </Form.Label>
                </div>
                <hr
                  style={{
                    marginTop: '-10px',
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '20px',
                    marginTop: '-20px',
                  }}
                >
                  <Form.Label
                    style={{
                      fontSize: '12px',
                      color: '#808080',
                    }}
                  >
                    Expected to arrive
                  </Form.Label>
                  <Form.Label
                    style={{
                      fontSize: '12px',
                      color: '#808080',
                      fontWeight: '400',
                      color: 'black',
                    }}
                  >
                    22 Jul 2022
                  </Form.Label>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  marginTop: '30px',
                }}
              >
                <Form.Label
                  style={{
                    fontSize: '13px',
                    color: '#808080',
                    fontWeight: '400',
                  }}
                >
                  Price of parcel:{' '}
                </Form.Label>
                <Form.Label
                  style={{
                    fontSize: '13px',
                    color: '#808080',
                    fontWeight: '500',
                    color: 'black',
                  }}
                >
                  ₦ 120.00
                </Form.Label>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <Form.Label
                  style={{
                    fontSize: '13px',
                    color: '#808080',
                    fontWeight: '400',
                  }}
                >
                  Insurance Price:{' '}
                </Form.Label>
                <Form.Label
                  style={{
                    fontSize: '13px',
                    color: '#808080',
                    fontWeight: '500',
                    color: 'black',
                  }}
                >
                  ₦ 8.00
                </Form.Label>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <Form.Label
                  style={{
                    fontSize: '13px',
                    color: '#808080',
                    fontWeight: '400',
                  }}
                >
                  Total Price:{' '}
                </Form.Label>
                <Form.Label
                  style={{
                    fontSize: '13px',
                    color: '#808080',
                    fontWeight: '500',
                    color: 'black',
                  }}
                >
                  ₦ 128.00
                </Form.Label>
              </div>
              <div
                style={{
                  display: 'center',
                  justifyContent: 'center',
                  marginTop: '30px',
                }}
              >
                <Button
                  onClick={
                    orderDetailsCreated
                      ? () => setGoToPayment(true)
                      : () => setOrderDetailsCreated(true)
                  }
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
                    {orderDetailsCreated ? 'Go to payment' : 'ACCEPT'}
                  </Form.Label>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
      <AddBankCardModal
        addBankModal={addBankModal}
        setAddBankModal={setAddBankModal}
        style={{
          marginLeft: '5%',
          marginTop: '6%',
        }}
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        expiryDate={expiryDate}
        setExpiryDate={setExpiryDate}
        secureCode={secureCode}
        setSecureCode={setSecureCode}
        setAddCardCompleted={setAddCardCompleted}
      />
      <SuccessModal
        successModal={successModal}
        setSuccessModal={setSuccessModal}
        caption={'Successful!'}
        msg={'The parcel has been created - 34 Lagos Street, Kaduna.'}
        ok="Send ₦ 95 to Monodome"
        style={{
          marginLeft: '5%',
          marginTop: '1%',
        }}
      />
      {/* <AgentBarcodeModalSetup 
            agentBarcodeModalSetup
            setAgentBarcodeModalSetup
       /> */}
    </>
  );
}
