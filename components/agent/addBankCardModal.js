import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import GeneralModal from '../modal/generalModal';
import Media from '@/utils/media';

export default function AddBankCardModal(props) {
  const [showTootip, setShowTooltip] = useState(false);
  const ref = useRef();
  const { mobile, tabletAndDesktop } = Media();
  const handleTooltip = () => {
    setShowTooltip((prevState) => !prevState);
  };

  useEffect(() => {
    const handler = (event) => {
      if (showTootip && ref.current && !ref.current.contains(event.target)) {
        setShowTooltip(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
    };
  }, [showTootip]);
  return (
    <>
      <GeneralModal
        size="lg"
        show={props.addBankModal}
        onHide={() => {
          props.setAddBankModal(false);
        }}
        style={props.style}
      >
        <Modal.Body
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            paddingBottom: '30px',
          }}
        >
          <div
            onClick={() => {
              props.setAddBankModal(false);
            }}
            style={{
              position: 'absolute',
              top: '-1rem',
              right: '-0.8rem',
              cursor: 'pointer',
            }}
          >
            <Image src="/img/close.png" width="14" height="14" alt="close" />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Form.Label
              style={{
                fontSize: '16px',
                fontWeight: '600',
                color: 'black',
              }}
            >
              Add your card
            </Form.Label>
          </div>
          <div
            ref={ref}
            style={{
              display: 'flex',
            }}
          >
            <Image
              style={{
                position: 'absolute',
                top: '100px',
                left: '40px',
              }}
              src="/img/bnkcard.png"
              width="20"
              height="15"
              alt="bankcard"
            />
            {showTootip && (
              <Image
                style={{
                  position: 'absolute',
                  top: '194px',
                  right: '23px',
                }}
                src="/img/Tooltip.png"
                width="142"
                height="65"
                alt="tootip"
              />
            )}
            <Image
              onClick={handleTooltip}
              style={{
                position: 'absolute',
                top: '174px',
                right: mobile ? '13px' : '40px',
                cursor: 'pointer',
              }}
              src="/img/warn.png"
              width="20"
              height="20"
              alt="bankcard"
            />
            <input
              style={{
                width: '100%',
                height: '40px',
                border: '1px solid #D1D1D1',
                borderRadius: '6px',
                background: '#F9F9F9',
                display: 'flex',
                marginTop: '30px',
                padding: '2px 60px',
                fontSize: '10px',
              }}
              name="cardNumber"
              value={props.cardNumber}
              onChange={(event) => props.setCardNumber(event.target.value)}
              type="text"
              placeholder="Card number"
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '20px',
            }}
          >
            <input
              style={{
                width: '49%',
                height: '40px',
                border: '1px solid #D1D1D1',
                borderRadius: '6px',
                background: '#F9F9F9',
                display: 'flex',
                marginTop: '30px',
                padding: '2px 20px',
              }}
              name="expiryDate"
              value={props.expiryDate}
              onChange={(event) => props.setExpiryDate(event.target.value)}
              type="text"
              placeholder="Expiry date"
            />
            <input
              style={{
                width: '49%',
                height: '40px',
                border: '1px solid #D1D1D1',
                borderRadius: '6px',
                background: '#F9F9F9',
                display: 'flex',
                marginTop: '30px',
                padding: '2px 20px',
              }}
              name="secureCode"
              value={props.secureCode}
              onChange={(event) => props.setSecureCode(event.target.value)}
              type="text"
              placeholder="Secure code"
            />
          </div>
          <Form.Label
            style={{
              fontSize: '13px',
              color: 'black',
              marginTop: '30px',
              fontWeight: '400',
            }}
          >
            Your payment info will be stored securely
          </Form.Label>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '20px',
              marginBottom: '20px',
            }}
          >
            <Button
              onClick={() => {
                props.setAddBankModal(false);
                props.setAddCardCompleted(true);
              }}
              disabled={
                !props.cardNumber || !props.expiryDate || !props.secureCode
              }
              style={
                props.cardNumber && props.expiryDate && props.secureCode
                  ? {
                      background: '#00902F',
                      padding: '5px 10px 2px 10px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '800px',
                      borderRadius: '6px',
                      border: 'none',
                    }
                  : {
                      background: '#D1D1D1',
                      padding: '5px 10px 2px 10px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '800px',
                      borderRadius: '6px',
                      border: 'none',
                    }
              }
            >
              <Form.Label
                style={{
                  color: 'white',
                  fontSize: '12px',
                  marginLeft: '5px',
                  fontWeight: '500',
                }}
              >
                ADD CARD
              </Form.Label>
            </Button>
          </div>
        </Modal.Body>
      </GeneralModal>
    </>
  );
}
