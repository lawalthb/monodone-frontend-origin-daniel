import Image from 'next/image';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import AgentOrderDetailsMobileContent from './agentOrderDetailsMobileContent';
import AgentOrderBarcode from './agentOrderBarcode';
import AgentCashoutConfirmation from './agentCashoutConfirmation';

export default function AgentOrderDetailsMobileCashout(props) {
  const [approved, setApproved] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [barcode, setBarcode] = useState(false);
  const [agentCashoutConfirmation, setAgentcashoutConfirmation] =
    useState(false);
  const [successful, setSuccessful] = useState(false);

  return (
    <>
      {barcode ? (
        <>
          <AgentOrderBarcode
            setAgentcashoutConfirmation={setAgentcashoutConfirmation}
            setBarcode={setBarcode}
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
              onClick={() => props.setOrderDetailsCashout(false)}
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
              Cash out details
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
            <div
              style={{
                display: 'flex',
                gap: '10px',
              }}
            >
              <Image
                src="/img/agentavatar.png"
                width="40"
                height="40"
                alt="phone"
              />
              <Form.Label
                style={{
                  fontSize: '15px',
                  color: 'rgba(21, 21, 21, 1)',
                  fontWeight: 600,
                  marginTop: '6px',
                }}
              >
                Adaora Daberechi
              </Form.Label>
            </div>
            <hr
              style={{
                marginTop: '10px',
              }}
            />
            <Form.Label
              style={{
                fontSize: '12px',
                color: 'rgba(128, 128, 128, 1)',
                fontWeight: 400,
              }}
            >
              How much cash you need to give out
            </Form.Label>
            <div
              style={{
                display: 'flex',
                gap: '10px',
              }}
            >
              <Form.Label
                style={{
                  fontSize: '16px',
                  color: rejected ? 'red' : 'rgba(0, 144, 47, 1)',
                  fontWeight: 600,
                }}
              >
                #
              </Form.Label>
              <Form.Label
                style={{
                  fontSize: '16px',
                  color: rejected ? 'red' : 'rgba(21, 21, 21, 1)',
                  fontWeight: 600,
                }}
              >
                1 350.00
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
                marginTop: '2px',
              }}
            >
              <Image
                tyle={{
                  marginTop: '10px',
                }}
                src={
                  successful
                    ? '/img/Ellipse-green.png'
                    : rejected
                    ? '/img/Ellipse-dot.png'
                    : approved
                    ? '/img/Ellipse-green.png'
                    : '/img/Ellipse-dot.png'
                }
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
                {successful
                  ? 'Successful'
                  : rejected
                  ? 'Rejected'
                  : approved
                  ? 'Approved'
                  : 'Pending'}
              </Form.Label>
            </div>
            <hr
              style={{
                marginTop: '-0.09px',
              }}
            />
            <Form.Label
              style={{
                fontSize: '12px',
                color: 'rgba(128, 128, 128, 1)',
                fontWeight: 400,
                marginTop: '20px',
              }}
            >
              Personal info
            </Form.Label>
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
                caption="ID"
                dataFrom="ID 2490 9090 897 8080"
              />
              <AgentOrderDetailsMobileContent
                caption="Phone"
                dataFrom="+234 097 90 90 33"
              />
              <AgentOrderDetailsMobileContent
                caption="E-mail"
                dataFrom="daberechi@gmail.com"
              />
            </div>
            <Form.Label
              style={{
                fontSize: '12px',
                color: 'rgba(128, 128, 128, 1)',
                fontWeight: 400,
                marginTop: '20px',
              }}
            >
              Date info
            </Form.Label>
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
                caption="Request date"
                dataFrom="26 July 2022 | 11:59 PM"
              />
              {(approved || successful) && (
                <AgentOrderDetailsMobileContent
                  caption="Approved date"
                  dataFrom="27 July 2022 | 6:59 PM"
                />
              )}
              {rejected && (
                <AgentOrderDetailsMobileContent
                  caption="Rejected date"
                  dataFrom="27 July 2022 | 6:59 PM"
                />
              )}
              {successful && (
                <AgentOrderDetailsMobileContent
                  caption="Issue date"
                  dataFrom="27 July 2022 | 6:59 PM"
                />
              )}
            </div>
            {(!rejected || !successful) && (
              <>
                <Button
                  onClick={
                    approved
                      ? () => {
                          setBarcode(true);
                          setRejected(false);
                        }
                      : () => setApproved(true)
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
                    height: '56px',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    marginTop: '30px',
                  }}
                >
                  {approved ? 'Scan Barcode' : 'Approve'}
                </Button>
                <Button
                  onClick={() => {
                    setRejected(true);
                    setApproved(false);
                  }}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'white',
                    padding: '13px 20px',
                    width: '100%',
                    borderRadius: '6px',
                    border: '1px solid #7CC427',
                    color: '#151515',
                    fontSize: '12px',
                    fontWeight: '500',
                    height: '56px',
                    marginTop: '20px',
                    textTransform: 'uppercase',
                  }}
                >
                  Reject
                </Button>
              </>
            )}
          </div>
        </>
      )}
      <AgentCashoutConfirmation
        agentCashoutConfirmation={agentCashoutConfirmation}
        setAgentcashoutConfirmation={setAgentcashoutConfirmation}
        setSuccessful={setSuccessful}
        setBarcode={setBarcode}
      />
    </>
  );
}
