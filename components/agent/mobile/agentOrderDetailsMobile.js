import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import AgentOrderDetailsMobileContent from './agentOrderDetailsMobileContent';
import AgentMobilePayment from './agentMobilePayment';
import AddBankCardModal from '../addBankCardModal';
import SuccessModal from '@/components/success/successModal';

export default function AgentOrderDetailsMobile(props) {
  const [editDeliveryInfo, setEditDeliveryInfo] = useState(false);
  const [dataFrom, setDataFrom] = useState();
  const [editParcelOptions, setEditParcelOptions] = useState(false);
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      from: '21 Alex Ekwueme Way, Jabi 900108, Abuja',
      to: 'Jabi 900108, Abuja. 21 Alex Ekwueme Way,',
      sender: 'Alex Ekwueme',
      senderPhone: '898 432 44 44',
      recepient: 'Alex Ekwueme',
      recepientPhone: '898 432 44 44',
      description: 'Lego Technic Tractor John',
      weight: '10',
      size: '22 x 155 x 32',
      estimatedValue: '220.00',
      other: 'Fragile product',
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

  const handleSetValue = () => {
    setValue('from', dataFrom, { shouldValidate: false });
  };

  return (
    <>
      {goToPayment ? (
        <>
          <AgentMobilePayment
            setGoToPayment={setGoToPayment}
            isCash={isCash}
            setIsCash={setIsCash}
            isCard={isCard}
            setIsCard={setIsCard}
            handleIsCash={handleIsCash}
            handleIsCard={handleIsCard}
            addCard={addCard}
            setAddCard={setAddCard}
            addBankModal={addBankModal}
            setAddBankModal={setAddBankModal}
            addCardCompleted={addCardCompleted}
            setAddCardCompleted={setAddCardCompleted}
            setSuccessModal={setSuccessModal}
          />
        </>
      ) : (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Image
              onClick={() => props.setOrderDetails(false)}
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
              Orders details
            </Form.Label>
            <div></div>
          </div>
          <hr
            style={{
              marginTop: '-0.09px',
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
            }}
          >
            <Form.Label
              style={{
                fontSize: '15px',
                color: '#151515',
                fontWeight: 600,
              }}
            >
              # 20 4002 8668 0998
            </Form.Label>
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
                src="/img/ordercreatedellipse.png"
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
            <hr
              style={{
                marginTop: '-0.09px',
              }}
            />
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
              <Form.Label
                onClick={() => setEditDeliveryInfo((prevState) => !prevState)}
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
              </Form.Label>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                border: 'ips solid #E7E7E7',
                borderRadius: '6px',
                background: '#F9F9F9',
                padding: '10px',
              }}
            >
              <AgentOrderDetailsMobileContent
                caption="From"
                editDeliveryInfo={editDeliveryInfo}
                errors={errors.from}
                register={register}
                name="from"
                dataFrom={
                  dataFrom
                    ? dataFrom
                    : '21 Alex Ekwueme Way, Jabi 900108, Abuja'
                }
              />
              <AgentOrderDetailsMobileContent
                caption="To"
                editDeliveryInfo={editDeliveryInfo}
                errors={errors.to}
                register={register}
                name="to"
                dataFrom={
                  dataFrom
                    ? dataFrom
                    : 'Jabi 900108, Abuja. 21 Alex Ekwueme Way, '
                }
              />
              <AgentOrderDetailsMobileContent
                caption="Sender"
                editDeliveryInfo={editDeliveryInfo}
                errors={errors.sender}
                register={register}
                name="sender"
                dataFrom={dataFrom ? dataFrom : 'Alex Ekwueme'}
                phone={'898 432 44 44'}
              />
              <AgentOrderDetailsMobileContent
                caption="Recepient"
                editDeliveryInfo={editDeliveryInfo}
                errors={errors.recepient}
                register={register}
                name="recepient"
                dataFrom={dataFrom ? dataFrom : 'Alex Ekwueme'}
                phone={'898 432 44 44'}
              />
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
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'black',
                }}
              >
                Options of parcel
              </Form.Label>
              <Form.Label
                onClick={() => setEditParcelOptions((prevState) => !prevState)}
                style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'rgba(0, 144, 47, 1)',
                  cursor: 'pointer',
                  background: 'white',
                  border: 'none',
                }}
              >
                {editParcelOptions ? 'Done' : 'Edit'}
              </Form.Label>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                border: 'ips solid #E7E7E7',
                borderRadius: '6px',
                background: '#F9F9F9',
                padding: '10px',
              }}
            >
              <AgentOrderDetailsMobileContent
                caption="Description"
                editDeliveryInfo={editParcelOptions}
                errors={errors.description}
                register={register}
                name="description"
                dataFrom={dataFrom ? dataFrom : 'Lego Technic Tractor John'}
              />
              <AgentOrderDetailsMobileContent
                caption="Weight, lbs"
                editDeliveryInfo={editParcelOptions}
                errors={errors.weight}
                register={register}
                name="weight"
                dataFrom={dataFrom ? dataFrom : '10'}
              />
              <AgentOrderDetailsMobileContent
                caption="Size, cm"
                editDeliveryInfo={editParcelOptions}
                errors={errors.size}
                register={register}
                name="size"
                dataFrom={dataFrom ? dataFrom : '22 x 155 x 32'}
              />
              <AgentOrderDetailsMobileContent
                caption="Estimated value"
                editDeliveryInfo={editParcelOptions}
                errors={errors.estimatedValue}
                register={register}
                name="estimatedValue"
                dataFrom={dataFrom ? dataFrom : '220.00'}
              />
              <AgentOrderDetailsMobileContent
                caption="Other"
                editDeliveryInfo={editParcelOptions}
                errors={errors.other}
                register={register}
                name="other"
                dataFrom={dataFrom ? dataFrom : 'Fragile product'}
              />
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
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'black',
                }}
              >
                Date information
              </Form.Label>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                border: 'ips solid #E7E7E7',
                borderRadius: '6px',
                background: '#F9F9F9',
                padding: '10px',
              }}
            >
              <AgentOrderDetailsMobileContent
                caption="Date"
                dataFrom="19 Jul 2022"
              />
              <AgentOrderDetailsMobileContent
                caption="Expected to arrive"
                dataFrom="22 Jul 2022"
              />
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
                marginBottom: '30px',
              }}
            >
              <Button
                onClick={() => setGoToPayment(true)}
                style={{
                  background: '#00902F',
                  padding: '5px 10px 2px 10px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  borderRadius: '6px',
                  border: 'none',
                  height: '56px',
                  color: 'white',
                  fontSize: '14px',
                  marginLeft: '5px',
                  fontWeight: '500',
                }}
              >
                GO TO PAYMENT
              </Button>
            </div>
          </div>
        </>
      )}
      <AddBankCardModal
        addBankModal={addBankModal}
        setAddBankModal={setAddBankModal}
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
      />
    </>
  );
}
