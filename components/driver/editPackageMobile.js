import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import AddSizeModalContent from '../agent/mobile/addSizeModalContent';
import Image from 'next/image';
import AddSizeModal from '../agent/mobile/addSizeModal';

export default function EditPackageMobile(props) {
  const [applySettingsWeight, setApplySettingsWeight] = useState(false);
  const [addSizeModal, setAddSizeModal] = useState(false);
  const [addSizeData, setAddSizeData] = useState();
  const [isInsurance, setIsInsurance] = useState(false);
  const [isFragilePackage, setIsFragilePackage] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [estimatedDetails, setEstimatedDetails] = useState({
    deliveryPrice: 0,
    insurance: 0,
  });
  const router = useRouter();
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

  useEffect(() => {
    if (isInsurance && isFragilePackage && isReady) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [isInsurance, isFragilePackage, isReady]);

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

  const submitForm = (data) => {
    setEstimatedDetails({
      deliveryPrice: 120.0,
      insurance: 8.0,
    });
    setIsReady(true);
  };
  return (
    <>
      <Head>
        <title>Mondome - Driver {props.title ? props.title : ''}</title>
        <meta name="description" content="Monodome" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          padding: '10px',
        }}
      >
        <Form.Label
          onClick={() => {
            router.push('/driver/orders');
          }}
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
            fontWeight: '500',
            fontSize: '16px',
            lineHeight: '28px',
            color: '#4E4C4C',
            marginTop: '5px',
          }}
        >
          Options of parcel
        </Form.Label>
        <div></div>
      </div>
      <hr
        style={{
          color: 'gray',
          fontWeight: 600,
          marginTop: '-10px',
        }}
      />
      <form
        onSubmit={handleSubmit(submitForm)}
        style={{
          width: '100%',
          marginTop: '20px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <textarea
          style={
            errors.description
              ? {
                  border: '1px solid red',
                  padding: '10px',
                  fontSize: '12px',
                  borderRadius: '5px',
                  width: '100%',
                }
              : {
                  border: '1px solid rgba(209, 209, 209, 1)',
                  padding: '10px',
                  fontSize: '12px',
                  borderRadius: '5px',
                  width: '100%',
                }
          }
          {...register('description', { required: 'true' })}
          rows={3}
          placeholder="Lego Technic Tractor John Deer"
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
        {errors.estimatedValue && errors.estimatedValue.type === 'required' && (
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
        {errors.estimatedValue && errors.estimatedValue.type === 'pattern' && (
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
          Calculate cost
          <div></div>
        </Button>
        <Button
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
          DONE
        </Button>
      </form>
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
