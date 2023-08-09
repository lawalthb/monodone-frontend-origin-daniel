import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';

const adminChanges = [
  {
    name: 'AGENT CHANGES',
    agentNo: '03456',
  },
  {
    name: 'DRIVER CHANGES',
    agentNo: '03477',
  },
  {
    name: 'DRIVER CHANGES',
    agentNo: '03482',
  },
  {
    name: 'AGENT CHANGES',
    agentNo: '03490',
  },
];

export default function AdminpanelContentTopNav(props) {
  const [badgeContent, setBadgeContent] = useState(false);
  const [agentNumber, setAgentNumber] = useState('');
  const [changes, setChanges] = useState(false);
  const ref = useRef();

  console.log('agent number', agentNumber);

  useEffect(() => {
    const handler = (event) => {
      if (badgeContent && ref.current && !ref.current.contains(event.target)) {
        setBadgeContent(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
    };
  }, [badgeContent]);
  return (
    <>
      <div
        ref={ref}
        style={{
          display: 'flex',
          width: '100%',
          height: '72px',
        }}
      >
        <div
          style={{
            width: '22%',
            // maxWidth: '420px',
            background: 'linear-gradient(90deg, #00902F 0%, #7CC427 99.69%)',
            height: '100%',
          }}
        >
          <Form.Label
            style={{
              color: 'white',
              fontWeight: '600',
              fontSize: '18px',
              marginTop: '20px',
              marginLeft: '30px',
            }}
          >
            monodome
          </Form.Label>
        </div>
        <div
          style={{
            width: '80%',
            background: 'white',
            height: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '10px',
          }}
        >
          <div
            style={
              badgeContent
                ? {
                    display: 'block',
                    position: 'absolute',
                    top: '60px',
                    right: '170px',
                    width: '327px',
                    padding: '16px 16px 16px 8px',
                    background: '#FFFFFF',
                    boxSizing: 'border-box',
                    height: '243px',
                    borderRadius: '5px',
                    zIndex: 100,
                  }
                : {
                    display: 'none',
                  }
            }
          >
            <Image
              onClick={() => setBadgeContent((prevState) => !prevState)}
              style={{
                cursor: 'pointer',
                margin: '6px 0px 0px 5px',
                position: 'absolute',
                right: '6px',
                top: '-3px',
              }}
              src="/img/closebadge.png"
              width="12"
              height="12"
              alt="close"
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                padding: '2px 16px 16px 8px',
              }}
            >
              {adminChanges.map((data, idx) => {
                return (
                  <div
                    key={idx}
                    style={
                      idx < adminChanges.length - 1
                        ? {
                            display: 'flex',
                            justifyContent: 'space-between',
                            borderBottom: '1px solid #E7E7E7',
                            marginTop: '7px',
                          }
                        : {
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '7px',
                          }
                    }
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <Form.Label
                        style={{
                          fontSize: '12px',
                          fontWeight: '500',
                          color: 'black',
                        }}
                      >
                        {data.name}
                      </Form.Label>
                      <Form.Label
                        style={{
                          fontSize: '10px',
                          fontWeight: '400',
                          color: 'black',
                        }}
                      >
                        {`Agent ${data.agentNo} wants to make a change`}
                      </Form.Label>
                    </div>
                    <div>
                      <Button
                        onClick={() => {
                          setChanges(true);
                          setAgentNumber(data.agentNo);
                          props.setBackdrop(true);
                          setBadgeContent(false);
                        }}
                        style={{
                          background: 'transparent',
                          fontSize: '12px',
                          color: '#7CC427',
                          border: '1px solid #D1D1D1',
                          height: '30px',
                        }}
                      >
                        Watch
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            style={
              changes
                ? {
                    display: 'block',
                    position: 'absolute',
                    width: '504px',
                    height: '230px',
                    background: 'white',
                    padding: '20px',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 100,
                    boxShadow: '0px 10px 17px 0px rgba(0, 0, 0, 0.15)',
                  }
                : {
                    display: 'none',
                  }
            }
          >
            <Image
              onClick={() => {
                setChanges((prevState) => !prevState);
                props.setBackdrop(false);
              }}
              style={{
                cursor: 'pointer',
                margin: '6px 0px 0px 5px',
                position: 'absolute',
                right: '2px',
                top: '-22px',
              }}
              src="/img/close.png"
              width="12"
              height="12"
              alt="close"
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '20px',
                gap: '5px',
              }}
            >
              <Form.Label
                style={{
                  fontSize: '19px',
                  fontWeight: '600',
                  textAlign: 'center',
                  color: '#303133',
                }}
              >
                Confirm changes
              </Form.Label>
              <Form.Label
                style={{
                  fontSize: '14px',
                  fontWeight: '400',
                  textAlign: 'center',
                  color: '#808080',
                }}
              >
                {`Agent ${agentNumber} wants to change phone number`}
              </Form.Label>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    color: '#303133',
                    fontWeight: '600',
                    marginRight: '10px',
                  }}
                >
                  07378137738
                </span>
                <span
                  style={{
                    marginRight: '10px',
                  }}
                >
                  to
                </span>
                <span
                  style={{
                    color: '#303133',
                    fontWeight: '600',
                  }}
                >
                  73820039321
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '10px',
                }}
              >
                <Button
                  onClick={() => {
                    setChanges(false);
                    props.setBackdrop(false);
                    props.setIsAgentRequest(false);
                    props.setIsAgentManagement(false);
                    props.setAgentList(true);
                    props.setIsAgents(false);
                    props.setIsDrivers(false);
                    props.setIsCustomers(false);
                    props.setIsBrokers(false);
                    props.setIsDriverManagers(false);
                    props.setIsShippingCompanies(false);
                    props.setIsTransportCompanies(false);
                    props.setIsClearingForwardingAgent(false);
                    props.setIsSpecializedShipment(false);
                    props.setIsEmployee(false);
                    props.setIsWallet(false);
                    props.setIsWebsite(false);
                    props.setIsLoadboard(false);
                    props.setIsBlog(false);
                  }}
                  style={{
                    display: 'flex',
                    padding: '3px',
                    background: '#00902F',
                    border: 'none',
                    width: '200px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <Form.Label
                    style={{
                      fontSize: '18px',
                      color: 'white',
                      fontWeight: '500',
                      textAlign: 'center',
                      marginTop: '2px',
                    }}
                  >
                    {'+'}
                  </Form.Label>
                  <Form.Label
                    style={{
                      fontSize: '12px',
                      color: 'white',
                      fontWeight: '500',
                      textAlign: 'center',
                      marginTop: '2px',
                    }}
                  >
                    Confirm
                  </Form.Label>
                </Button>
                <Button
                  style={{
                    display: 'flex',
                    padding: '3px',
                    background: '#F20808',
                    border: 'none',
                    width: '200px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <Image
                    style={{
                      marginTop: '-3px',
                    }}
                    src="/img/reject.png"
                    width="13"
                    height="13"
                    alt="close"
                  />
                  <Form.Label
                    style={{
                      fontSize: '12px',
                      color: 'white',
                      fontWeight: '500',
                      textAlign: 'center',
                      marginTop: '2px',
                    }}
                  >
                    Reject
                  </Form.Label>
                </Button>
              </div>
            </div>
          </div>
          <Image
            onClick={() => setBadgeContent(true)}
            style={{
              width: '39px',
              maxWidth: '100%',
              marginTop: '14px',
              cursor: 'pointer',
            }}
            src="/img/adminbadge.png"
            width="39"
            height="32"
            alt="badge"
          />
          <Image
            style={{
              width: '44px',
              maxWidth: '100%',
              marginTop: '7px',
            }}
            src="/img/user.png"
            width="44"
            height="44"
            alt="badge"
          />
          <Form.Label
            style={{
              color: 'black',
              fontSize: '13px',
              marginTop: '20px',
              marginRight: '30px',
            }}
          >
            Admin_777
          </Form.Label>
        </div>
      </div>
    </>
  );
}
