import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import PackageDocumentSwitches from './packageDocumentSwitches';
import AddSizeModal from './addSizeModal';
import AddSizeModalContent from './addSizeModalContent';
import AgentOrdersMobile from './agentOrdersMobile';

export default function ParcelOptionsMobile(props) {
  const [isPackage, setIsPackage] = useState(false);
  const [isDocument, setIsDocument] = useState(false);
  const [isInsurance, setIsInsurance] = useState(false);
  const [isFragilePackage, setIsFragilePackage] = useState(false);
  const [isEnvelope, setIsEnvlope] = useState(false);
  const [addSizeModal, setAddSizeModal] = useState(false);
  const [applySettingsWeight, setApplySettingsWeight] = useState(false);
  const [estimatedDetails, setEstimatedDetails] = useState({
    deliveryPrice: 0,
    insurance: 0,
  });
  const [addSizeData, setAddSizeData] = useState();
  const [isDisabled, setIsDisabled] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [isOrders, setIsOrders] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      size: addSizeData
        ? addSizeData?.width +
          'x' +
          addSizeData?.length +
          'x' +
          addSizeData?.height
        : '',
    },
  });

  const handleIsPackage = () => {
    setIsPackage(true);
    setIsDocument(false);
  };

  const handleIsDocument = () => {
    setIsDocument(true);
    setIsPackage(false);
  };

  useEffect(() => {
    if (isPackage) {
      if (isInsurance && isFragilePackage && isReady) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    }

    if (isDocument) {
      if (isInsurance && isEnvelope && isReady) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    }
  }, [
    isEnvelope,
    isInsurance,
    isFragilePackage,
    isReady,
    isPackage,
    isDocument,
  ]);

  useEffect(() => {
    const handleSetValue = () => {
      setValue(
        'size',
        addSizeData
          ? addSizeData?.width +
              'x' +
              addSizeData?.length +
              'x' +
              addSizeData?.height
          : '0',
        { shouldValidate: false }
      );
    };
    handleSetValue();
  }, [
    addSizeData?.width,
    addSizeData?.length,
    addSizeData?.height,
    setValue,
    addSizeData,
  ]);

  useEffect(() => {
    if (isDocument) {
      setIsPackage(false);
    } else {
      setIsPackage(true);
    }
  }, [isDocument]);

  const submitForm = (data) => {
    setEstimatedDetails({
      deliveryPrice: 120.0,
      insurance: 8.0,
    });
    setIsReady(true);
    props.setParcelData((prevState) => {
      if (isDocument) {
        const newData = {
          ...prevState,
          documentData: data,
        };
        return newData;
      } else {
        const newData = {
          ...prevState,
          packageData: data,
        };
        return newData;
      }
    });
  };

  return (
    <>
      {isOrders ? (
        <>
          <AgentOrdersMobile setIsOrders={setIsOrders} />
        </>
      ) : (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Image
              onClick={() => props.setParcelOption(false)}
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
              Options of parcel
            </Form.Label>
            <div></div>
          </div>
          <hr
            style={{
              marginTop: '-0.09px',
            }}
          />
          <PackageDocumentSwitches
            isPackage={isPackage}
            setIsPackage={setIsPackage}
            isDocument={isDocument}
            setIsDocument={setIsDocument}
            handleIsPackage={handleIsPackage}
            handleIsDocument={handleIsDocument}
          />
          <hr
            style={{
              marginTop: '20px',
            }}
          />
          <form
            onSubmit={handleSubmit(submitForm)}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {isDocument && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <Form.Label
                  style={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '28px',
                    color: '#rgba(128, 128, 128, 1)',
                  }}
                >
                  Envelope (A4)
                </Form.Label>
                <Image
                  onClick={() => setIsEnvlope((prevState) => !prevState)}
                  style={{
                    display: 'flex',
                    maxWidth: '100%',
                    width: '41px',
                    marginTop: isEnvelope ? '3px' : '7px',
                  }}
                  src={
                    isEnvelope
                      ? '/img/agentswitchselected.png'
                      : '/img/agentswitch.png'
                  }
                  width="41"
                  height={isEnvelope ? '36' : '31'}
                  alt="location"
                />
              </div>
            )}
            <textarea
              style={
                errors.description
                  ? {
                      border: '1px solid red',
                      padding: '10px',
                      fontSize: '12px',
                      marginTop: '20px',
                      borderRadius: '5px',
                    }
                  : {
                      border: '1px solid rgba(209, 209, 209, 1)',
                      padding: '10px',
                      fontSize: '12px',
                      marginTop: '20px',
                      borderRadius: '5px',
                    }
              }
              {...register('description', { required: 'true' })}
              rows={3}
              placeholder="Description of parcel"
            />
            {errors.description && errors.description.type === 'required' && (
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
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                marginBottom: '20px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '48%',
                  marginTop: '10px',
                }}
              >
                <AddSizeModalContent
                  applySettings={applySettingsWeight}
                  setApplySettings={setApplySettingsWeight}
                  errors={errors.weight}
                  name="weight"
                  placeholder="Weight, lbs"
                  imgSrc="/img/agentmobilescale.png"
                  caption="Weight, lbs"
                  register={register}
                  imgWidth="18"
                  imgHeight="16"
                />
                {errors.weight && errors.weight.type === 'required' && (
                  <span
                    style={{
                      fontSize: '10px',
                      color: 'red',
                      fontStyle: 'italic',
                      marginTop: '20px',
                    }}
                  >
                    This field is required
                  </span>
                )}
                {errors.weight && errors.weight.type === 'pattern' && (
                  <span
                    style={{
                      fontSize: '10px',
                      color: 'red',
                      fontStyle: 'italic',
                      marginTop: '20px',
                    }}
                  >
                    It must be all numbers
                  </span>
                )}
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '48%',
                }}
              >
                <input
                  onMouseEnter={() => setAddSizeModal(true)}
                  style={
                    errors.size
                      ? {
                          border: '1px solid red',
                          padding: '0px 40px',
                          fontSize: '12px',
                          borderRadius: '5px',
                          height: '56px',
                          width: '100%',
                          marginTop: '20px',
                        }
                      : {
                          border: '1px solid #E7E7E7',
                          padding: '0px 40px',
                          fontSize: '12px',
                          borderRadius: '5px',
                          height: '56px',
                          width: '100%',
                          marginTop: '20px',
                        }
                  }
                  type="text"
                  {...register('size', {
                    required: true,
                  })}
                  placeholder={'Size, cm'}
                />
                <Image
                  style={{
                    marginTop: '-37px',
                    marginLeft: '10px',
                  }}
                  src="/img/agentmobilesize.png"
                  width="18"
                  height="18"
                  alt="size"
                />
                <Image
                  onClick={() => setAddSizeModal(true)}
                  style={{
                    marginLeft: 'auto',
                    marginTop: '-16px',
                    marginRight: '10px',
                    cursor: 'pointer',
                  }}
                  src="/img/agentmobilegreater.png"
                  width="6"
                  height="10"
                  alt="greater"
                />
                {errors.size && errors.size.type === 'required' && (
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
              </div>
            </div>
            <hr />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <Form.Label
                style={{
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '28px',
                  color: '#rgba(128, 128, 128, 1)',
                }}
              >
                Insurance:
              </Form.Label>
              <Image
                onClick={() => setIsInsurance((prevState) => !prevState)}
                style={{
                  display: 'flex',
                  maxWidth: '100%',
                  width: '41px',
                  marginTop: isInsurance ? '3px' : '7px',
                }}
                src={
                  isInsurance
                    ? '/img/agentswitchselected.png'
                    : '/img/agentswitch.png'
                }
                width="41"
                height={isInsurance ? '36' : '31'}
                alt="location"
              />
            </div>
            <input
              style={
                errors.estimatedValue
                  ? {
                      border: '1px solid red',
                      padding: '0px 10px',
                      fontSize: '12px',
                      borderRadius: '5px',
                      height: '56px',
                      width: '100%',
                      marginTop: '20px',
                    }
                  : {
                      border: '1px solid #E7E7E7',
                      padding: '0px 10px',
                      fontSize: '12px',
                      borderRadius: '5px',
                      height: '56px',
                      width: '100%',
                      marginTop: '20px',
                    }
              }
              type="text"
              {...register('estimatedValue', {
                required: true,
                pattern: /^\d+$/,
              })}
              placeholder="Estimated value"
            />
            {errors.estimatedValue &&
              errors.estimatedValue.type === 'required' && (
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
            {errors.estimatedValue &&
              errors.estimatedValue.type === 'pattern' && (
                <span
                  style={{
                    fontSize: '10px',
                    color: 'red',
                    fontStyle: 'italic',
                    marginTop: '10px',
                  }}
                >
                  It must be all numbers
                </span>
              )}
            <hr />
            {!isDocument && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <Form.Label
                  style={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '28px',
                    color: '#rgba(128, 128, 128, 1)',
                  }}
                >
                  Fragile product
                </Form.Label>
                <Image
                  onClick={() => setIsFragilePackage((prevState) => !prevState)}
                  style={{
                    display: 'flex',
                    maxWidth: '100%',
                    width: '41px',
                    marginTop: isFragilePackage ? '3px' : '7px',
                  }}
                  src={
                    isFragilePackage
                      ? '/img/agentswitchselected.png'
                      : '/img/agentswitch.png'
                  }
                  width="41"
                  height={isFragilePackage ? '36' : '31'}
                  alt="location"
                />
              </div>
            )}
            <div
              style={
                estimatedDetails.deliveryPrice && estimatedDetails.insurance
                  ? {
                      display: 'block',
                      marginTop: '20px',
                    }
                  : {
                      display: 'none',
                    }
              }
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '10px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Form.Label
                    style={{
                      fontFamily: 'Poppins',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '14px',
                      lineHeight: '28px',
                      color: 'rgba(128, 128, 128, 1)',
                    }}
                  >
                    Delivery price:
                  </Form.Label>
                  <Form.Label
                    style={{
                      fontFamily: 'Poppins',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '14px',
                      lineHeight: '28px',
                      color: 'rgba(128, 128, 128, 1)',
                    }}
                  >
                    Insurance:
                  </Form.Label>
                  <Form.Label
                    style={{
                      fontFamily: 'Poppins',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '14px',
                      lineHeight: '28px',
                      color: 'rgba(128, 128, 128, 1)',
                    }}
                  >
                    Total price:
                  </Form.Label>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Form.Label
                    style={{
                      fontFamily: 'Poppins',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '14px',
                      lineHeight: '28px',
                      color: 'rgba(21, 21, 21, 1)',
                      textAlign: 'right',
                    }}
                  >
                    {`#${estimatedDetails.deliveryPrice}.00`}
                  </Form.Label>
                  <Form.Label
                    style={{
                      fontFamily: 'Poppins',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '14px',
                      lineHeight: '28px',
                      color: '#rgba(21, 21, 21, 1)',
                      textAlign: 'right',
                    }}
                  >
                    {`#${estimatedDetails.insurance}.00`}
                  </Form.Label>
                  <Form.Label
                    style={{
                      fontFamily: 'Poppins',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '14px',
                      lineHeight: '28px',
                      color: '#rgba(21, 21, 21, 1)',
                      textAlign: 'right',
                    }}
                  >
                    #
                    {Number(`${estimatedDetails.deliveryPrice}`) +
                      Number(`${estimatedDetails.insurance}`)}
                    .00
                  </Form.Label>
                </div>
              </div>
            </div>
            <Button
              type="submit"
              style={{
                background: '#FFFFFF',
                padding: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                border: '1px solid #7CC427',
                borderRadius: '6px',
                marginTop: '20px',
                height: '56px',
                color: 'rgba(21, 21, 21, 1)',
                textTransform: 'uppercase',
                fontSize: '14px',
              }}
            >
              <Image
                style={{
                  marginLeft: '10px',
                  marginTop: '3px',
                }}
                src="/img/calc.png"
                width="18"
                height="18"
                alt="map"
              />
              Calculate the cost
              <div></div>
            </Button>
            <Button
              onClick={() => setIsOrders(true)}
              disabled={isDisabled}
              style={
                !isDisabled
                  ? {
                      background: '#00902F',
                      padding: '5px 10px 2px 10px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100%',
                      borderRadius: '6px',
                      border: 'none',
                      height: '56px',
                      marginTop: '20px',
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
                      height: '56px',
                      marginTop: '20px',
                    }
              }
            >
              NEXT
            </Button>
          </form>
        </>
      )}
      <AddSizeModal
        addSizeModal={addSizeModal}
        setAddSizeModal={setAddSizeModal}
        addSizeData={addSizeData}
        setAddSizeData={setAddSizeData}
        handleSetValue={() => handleSetValue()}
      />
    </>
  );
}
