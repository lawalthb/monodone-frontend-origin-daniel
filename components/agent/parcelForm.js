import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import NextParcelForm from './nextParcelForm';
import Media from '@/utils/media';
import ParcelFormMobile from './mobile/parcelFormMobile';
import AddressOfficeSwitches from './common/addressOfficeSwitches';

export default function ParcelForm(props) {
  const [isOffice, setIsOffice] = useState(false);
  const [isAddress, setIsAddress] = useState(false);
  const [nextParcelForm, setNextParcelForm] = useState(false);
  const [map, setMap] = useState(false);
  const [deliveryTo, setDeliveryTo] = useState(false);
  const [agentMapDeliveryTo, setAgentMapDeliveryTo] = useState(false);
  const [parcelOption, setParcelOption] = useState(false);
  const [isPackage, setIsPackage] = useState(false);
  const [isDocument, setIsDocument] = useState(false);
  const { mobile, tabletAndDesktop } = Media();

  const handleIsPackage = () => {
    setIsPackage(true);
    setIsDocument(false);
  };

  const handleIsDocument = () => {
    setIsDocument(true);
    setIsPackage(false);
  };

  const handleIsOffice = () => {
    setIsOffice(true);
    setIsAddress(false);
  };
  const handleIsAddress = () => {
    setIsAddress(true);
    setIsOffice(false);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isDocument) {
      setIsPackage(false);
    } else {
      setIsPackage(true);
    }
  }, [isDocument]);

  useEffect(() => {
    if (isOffice) {
      setIsAddress(false);
    } else {
      setIsAddress(true);
    }
  }, [isOffice]);

  const submitForm = (data) => {
    setNextParcelForm(true);
    props.setParcelData(data);
  };

  return (
    <>
      {mobile ? (
        <>
          <ParcelFormMobile
            setParcelForm={props.setParcelForm}
            setNextParcelForm={setNextParcelForm}
            setParcelData={props.setParcelData}
            handleIsAddress={handleIsAddress}
            isAddress={isAddress}
            handleIsOffice={handleIsOffice}
            isOffice={isOffice}
            nextParcelForm={nextParcelForm}
            map={map}
            setMap={setMap}
            parcelOption={props.parcelOption}
            setParcelOption={props.setParcelOption}
            setListOfParcel={props.setListOfParcel}
          />
        </>
      ) : (
        <>
          {!map && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                padding: '10px 40px',
              }}
            >
              <Form.Label
                onClick={
                  nextParcelForm
                    ? () => {
                        setNextParcelForm(false);
                        props.setParcelForm(true);
                      }
                    : () => {
                        props.setParcelForm(false);
                        props.setListOfParcel(true);
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
                {nextParcelForm ? 'Delivery From' : 'Delivery Information'}
              </Form.Label>
              {nextParcelForm ? (
                <Form.Label
                  onClick={() => {
                    setNextParcelForm(false);
                    setDeliveryTo(true);
                  }}
                  style={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '16px',
                    lineHeight: '28px',
                    color: '#009027',
                    cursor: 'pointer',
                  }}
                >
                  Done
                </Form.Label>
              ) : (
                <>
                  <div></div>
                  <div></div>
                </>
              )}
            </div>
          )}
          <div
            style={{
              marginTop: '40px',
              display: 'flex',
              flexDirection: 'column',
              padding: '10px 40px',
              width: '100%',
              marginBottom: '50px',
              height: '140vh',
            }}
          >
            {nextParcelForm ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <NextParcelForm
                  setParcelData={props.setParcelData}
                  map={map}
                  setMap={setMap}
                  agentMapDeliveryTo={agentMapDeliveryTo}
                  parcelOption={parcelOption}
                  setParcelOption={setParcelOption}
                  isPackage={isPackage}
                  setIsPackage={setIsPackage}
                  isDocument={isDocument}
                  setIsDocument={setIsDocument}
                  handleIsPackage={handleIsPackage}
                  handleIsDocument={handleIsDocument}
                  setOrders={props.setOrders}
                />
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(submitForm)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Form.Label
                  style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#151515',
                  }}
                >
                  Deliver From:
                </Form.Label>
                <Form.Label
                  style={{
                    fontSize: '13px',
                    color: '#808080',
                  }}
                >
                  Office
                </Form.Label>
                <input
                  style={
                    errors.office
                      ? {
                          border: '1px solid red',
                          padding: '0px 10px',
                          fontSize: '12px',
                          borderRadius: '5px',
                        }
                      : {
                          border: '1px solid #E7E7E7',
                          padding: '0px 10px',
                          fontSize: '12px',
                          borderRadius: '5px',
                        }
                  }
                  type="text"
                  {...register('office', {
                    required: true,
                  })}
                  placeholder="No. 13"
                />
                {errors.office && errors.office.type === 'required' && (
                  <span
                    style={{
                      fontSize: '10px',
                      color: 'red',
                      fontStyle: 'italic',
                      marginTop: '10px',
                    }}
                  >
                    This field is required
                  </span>
                )}
                <Form.Label
                  style={{
                    fontSize: '13px',
                    color: '#808080',
                    marginTop: '10px',
                  }}
                >
                  Recipient
                </Form.Label>
                <input
                  style={
                    errors.recepient
                      ? {
                          border: '1px solid red',
                          padding: '0px 10px',
                          fontSize: '12px',
                          borderRadius: '5px',
                        }
                      : {
                          border: '1px solid #E7E7E7',
                          padding: '0px 10px',
                          fontSize: '12px',
                          borderRadius: '5px',
                        }
                  }
                  type="text"
                  {...register('recepient', {
                    required: true,
                  })}
                  placeholder="Alex Ekwueme"
                />
                {errors.recepient && errors.recepient.type === 'required' && (
                  <span
                    style={{
                      fontSize: '10px',
                      color: 'red',
                      fontStyle: 'italic',
                      marginTop: '10px',
                    }}
                  >
                    This field is required
                  </span>
                )}
                <Form.Label
                  style={{
                    fontSize: '13px',
                    color: '#808080',
                    marginTop: '10px',
                  }}
                >
                  Phone number
                </Form.Label>
                <input
                  style={
                    errors.phoneNumber
                      ? {
                          border: '1px solid red',
                          padding: '0px 10px',
                          fontSize: '12px',
                          borderRadius: '5px',
                        }
                      : {
                          border: '1px solid #E7E7E7',
                          padding: '0px 10px',
                          fontSize: '12px',
                          borderRadius: '5px',
                        }
                  }
                  type="text"
                  {...register('phoneNumber', {
                    required: true,
                  })}
                  placeholder="898 432 44 44"
                />
                {errors.phoneNumber &&
                  errors.phoneNumber.type === 'required' && (
                    <span
                      style={{
                        fontSize: '10px',
                        color: 'red',
                        fontStyle: 'italic',
                        marginTop: '10px',
                      }}
                    >
                      This field is required
                    </span>
                  )}
                <hr
                  style={{
                    marginTop: '20px',
                  }}
                />
                <Form.Label
                  style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#151515',
                    marginTop: '20px',
                  }}
                >
                  Deliver To:
                </Form.Label>
                <AddressOfficeSwitches
                  handleIsAddress={handleIsAddress}
                  isAddress={isAddress}
                  handleIsOffice={handleIsOffice}
                  isOffice={isOffice}
                />
                <Form.Label
                  style={{
                    fontSize: '13px',
                    color: '#808080',
                    marginTop: '20px',
                  }}
                >
                  Address
                </Form.Label>
                <Form.Label
                  style={{
                    fontSize: '13px',
                    color: '#808080',
                    marginTop: '10px',
                  }}
                >
                  Recepient
                </Form.Label>
                <input
                  style={
                    errors.toRecepient
                      ? {
                          border: '1px solid red',
                          padding: '0px 10px',
                          fontSize: '12px',
                          borderRadius: '5px',
                        }
                      : {
                          border: '1px solid #E7E7E7',
                          padding: '0px 10px',
                          fontSize: '12px',
                          borderRadius: '5px',
                        }
                  }
                  type="text"
                  {...register('toRecepient', {
                    required: true,
                  })}
                  placeholder="Alex Ekwueme"
                />
                {errors.toRecepient &&
                  errors.toRecepient.type === 'required' && (
                    <span
                      style={{
                        fontSize: '10px',
                        color: 'red',
                        fontStyle: 'italic',
                        marginTop: '10px',
                      }}
                    >
                      This field is required
                    </span>
                  )}
                <Form.Label
                  style={{
                    fontSize: '13px',
                    color: '#808080',
                    marginTop: '10px',
                  }}
                >
                  Phone number
                </Form.Label>
                <input
                  style={
                    errors.toPhoneNumber
                      ? {
                          border: '1px solid red',
                          padding: '0px 10px',
                          fontSize: '12px',
                          borderRadius: '5px',
                        }
                      : {
                          border: '1px solid #E7E7E7',
                          padding: '0px 10px',
                          fontSize: '12px',
                          borderRadius: '5px',
                        }
                  }
                  type="text"
                  {...register('toPhoneNumber', {
                    required: true,
                  })}
                  placeholder="898 432 44 44"
                />
                {errors.toPhoneNumber &&
                  errors.toPhoneNumber.type === 'required' && (
                    <span
                      style={{
                        fontSize: '10px',
                        color: 'red',
                        fontStyle: 'italic',
                        marginTop: '10px',
                      }}
                    >
                      This field is required
                    </span>
                  )}
                <input
                  style={
                    errors.toAddress
                      ? {
                          border: '1px solid red',
                          padding: '0px 10px',
                          fontSize: '12px',
                          borderRadius: '5px',
                          marginTop: '20px',
                        }
                      : {
                          border: '1px solid #E7E7E7',
                          padding: '0px 10px',
                          fontSize: '12px',
                          borderRadius: '5px',
                          marginTop: '20px',
                        }
                  }
                  type="text"
                  {...register('toAddress', {
                    required: true,
                  })}
                  placeholder="21 Alex Ekwueme Way, Jabi 9001408..."
                />
                {errors.toAddress && errors.toAddress.type === 'required' && (
                  <span
                    style={{
                      fontSize: '10px',
                      color: 'red',
                      fontStyle: 'italic',
                      marginTop: '10px',
                    }}
                  >
                    This field is required
                  </span>
                )}
                <Button
                  type="submit"
                  style={{
                    background: '#00902F',
                    padding: '5px 10px 2px 10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    border: '0.5px solid rgba(0, 0, 0, 0.04)',
                    borderRadius: '6px',
                    marginTop: '40px',
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
                    NEXT
                  </Form.Label>
                </Button>
              </form>
            )}
          </div>
        </>
      )}
    </>
  );
}
