import { Button, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import DriverLayout from '@/components/driver/driverLayout/driverLayout';
import EditPackageMobile from '@/components/driver/editPackageMobile';
import Media from '@/utils/media';
import Image from 'next/image';

export default function EditPackage(props) {
  const router = useRouter();
  const [estimatedDetails, setEstimatedDetails] = useState({
    deliveryPrice: 0,
    insurance: 0,
  });
  const [isInsurance, setIsInsurance] = useState(false);
  const [isFragilePackage, setIsFragilePackage] = useState(false);
  const [packageReady, setPackageReady] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mobile, tabletAndDesktop } = Media();

  useEffect(() => {
    if (isInsurance && isFragilePackage) {
      setPackageReady(true);
    } else {
      setPackageReady(false);
    }
  }, [isInsurance, isFragilePackage]);

  const submitForm = (data) => {
    setEstimatedDetails({
      deliveryPrice: 120.0,
      insurance: 8.0,
    });
  };

  return (
    <>
      {mobile && (
        <>
          <EditPackageMobile title="Edit Package" />
        </>
      )}
      {tabletAndDesktop && (
        <DriverLayout title="Edit package">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              padding: '30px',
            }}
          >
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
              <Form.Label
                style={{
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  fontSize: '12px',
                  lineHeight: '28px',
                  color: '#rgba(128, 128, 128, 1)',
                  marginTop: '14px',
                }}
              >
                Description
              </Form.Label>
              <textarea
                style={
                  errors.description
                    ? {
                        border: '1px solid red',
                        padding: '10px',
                        fontSize: '12px',
                      }
                    : {
                        border: '1px solid #E7E7E7',
                        padding: '10px',
                        fontSize: '12px',
                      }
                }
                {...register('description', { required: 'true' })}
                rows={5}
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
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    width: '23%',
                  }}
                >
                  <Form.Label
                    style={{
                      fontFamily: 'Poppins',
                      fontStyle: 'normal',
                      fontWeight: '500',
                      fontSize: '12px',
                      lineHeight: '28px',
                      color: '#rgba(128, 128, 128, 1)',
                      marginTop: '14px',
                    }}
                  >
                    Weight, lbs
                  </Form.Label>
                </div>
                <div
                  style={{
                    display: 'flex',
                    width: '23%',
                  }}
                >
                  <Form.Label
                    style={{
                      fontFamily: 'Poppins',
                      fontStyle: 'normal',
                      fontWeight: '500',
                      fontSize: '12px',
                      lineHeight: '28px',
                      color: '#rgba(128, 128, 128, 1)',
                      marginTop: '14px',
                    }}
                  >
                    Size
                  </Form.Label>
                </div>
                <div
                  style={{
                    display: 'flex',
                    width: '23%',
                  }}
                ></div>
                <div
                  style={{
                    display: 'flex',
                    width: '23%',
                  }}
                ></div>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    width: '23%',
                  }}
                >
                  <input
                    style={
                      errors.weight
                        ? {
                            border: '1px solid red',
                            padding: '0px 10px',
                            fontSize: '12px',
                            width: '100%',
                          }
                        : {
                            border: '1px solid #E7E7E7',
                            padding: '0px 10px',
                            fontSize: '12px',
                            width: '100%',
                          }
                    }
                    type="text"
                    {...register('weight', {
                      required: true,
                      pattern: /^\d+$/,
                    })}
                    placeholder="0.05"
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    width: '23%',
                  }}
                >
                  <input
                    style={
                      errors.width
                        ? {
                            border: '1px solid red',
                            padding: '0px 10px',
                            fontSize: '12px',
                            width: '100%',
                          }
                        : {
                            border: '1px solid #E7E7E7',
                            padding: '0px 10px',
                            fontSize: '12px',
                            width: '100%',
                          }
                    }
                    type="text"
                    {...register('width', { required: true, pattern: /^\d+$/ })}
                    placeholder="Width, cm"
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    width: '23%',
                  }}
                >
                  <input
                    style={
                      errors.length
                        ? {
                            border: '1px solid red',
                            padding: '0px 10px',
                            fontSize: '12px',
                            width: '100%',
                          }
                        : {
                            border: '1px solid #E7E7E7',
                            padding: '0px 10px',
                            fontSize: '12px',
                            width: '100%',
                          }
                    }
                    type="text"
                    {...register('length', {
                      required: true,
                      pattern: /^\d+$/,
                    })}
                    placeholder="Length, cm"
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    width: '23%',
                  }}
                >
                  <input
                    style={
                      errors.height
                        ? {
                            border: '1px solid red',
                            padding: '0px 10px',
                            fontSize: '12px',
                            width: '100%',
                          }
                        : {
                            border: '1px solid #E7E7E7',
                            padding: '0px 10px',
                            fontSize: '12px',
                            width: '100%',
                          }
                    }
                    type="text"
                    {...register('height', {
                      required: true,
                      pattern: /^\d+$/,
                    })}
                    placeholder="Height, cm"
                  />
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    width: '23%',
                  }}
                >
                  {errors.weight && errors.weight.type === 'required' && (
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
                  {errors.weight && errors.weight.type === 'pattern' && (
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
                </div>
                <div
                  style={{
                    display: 'flex',
                    width: '23%',
                  }}
                >
                  {errors.width && errors.width.type === 'required' && (
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
                  {errors.width && errors.width.type === 'pattern' && (
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
                </div>
                <div
                  style={{
                    display: 'flex',
                    width: '23%',
                  }}
                >
                  {errors.length && errors.length.type === 'required' && (
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
                  {errors.length && errors.length.type === 'pattern' && (
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
                </div>
                <div
                  style={{
                    display: 'flex',
                    width: '23%',
                  }}
                >
                  {errors.height && errors.height.type === 'required' && (
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
                  {errors.height && errors.height.type === 'pattern' && (
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
                </div>
              </div>
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
                    width: '48%',
                    flexDirection: 'column',
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
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: '12px',
                        lineHeight: '28px',
                        color: '#rgba(128, 128, 128, 1)',
                        marginTop: '14px',
                      }}
                    >
                      Insurance
                    </Form.Label>
                    <Image
                      onClick={() => {
                        setIsInsurance((prevState) => !prevState);
                      }}
                      style={{
                        display: 'flex',
                        maxWidth: '100%',
                        width: '41px',
                        marginTop: '15px',
                      }}
                      src={
                        isInsurance
                          ? '/img/agentswitchselected.png'
                          : '/img/agentswitch.png'
                      }
                      width="41"
                      height="31"
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
                            width: '100%',
                            marginTop: '10px',
                          }
                        : {
                            border: '1px solid #E7E7E7',
                            padding: '0px 10px',
                            fontSize: '12px',
                            width: '100%',
                            marginTop: '10px',
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
                        fontWeight: '500',
                        fontSize: '12px',
                        lineHeight: '28px',
                        color: '#rgba(128, 128, 128, 1)',
                        marginTop: '14px',
                      }}
                    >
                      Fragile product
                    </Form.Label>
                    <Image
                      onClick={() => {
                        setIsFragilePackage((prevState) => !prevState);
                      }}
                      style={{
                        display: 'flex',
                        maxWidth: '100%',
                        width: '41px',
                        marginTop: '15px',
                      }}
                      src={
                        isFragilePackage
                          ? '/img/agentswitchselected.png'
                          : '/img/agentswitch.png'
                      }
                      width="41"
                      height="31"
                      alt="location"
                    />
                  </div>
                  <hr />
                </div>

                <div
                  style={{
                    display: 'flex',
                    width: '48%',
                  }}
                ></div>
              </div>
              <div
                style={
                  estimatedDetails.deliveryPrice && estimatedDetails.insurance
                    ? {
                        display: 'block',
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
                        color: '#rgba(128, 128, 128, 1)',
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
                        color: '#rgba(128, 128, 128, 1)',
                      }}
                    >
                      Insurance:
                    </Form.Label>
                    <Form.Label
                      style={{
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '28px',
                        color: 'rgba(21, 21, 21, 1)',
                      }}
                    >
                      Total delivery price:
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
                        color: '#rgba(128, 128, 128, 1)',
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
                        color: '#rgba(128, 128, 128, 1)',
                        textAlign: 'right',
                      }}
                    >
                      {`#${estimatedDetails.insurance}.00`}
                    </Form.Label>
                    <Form.Label
                      style={{
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '28px',
                        color: '#rgba(128, 128, 128, 1)',
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
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '40px',
                }}
              >
                <Button
                  type="submit"
                  style={{
                    background: '#FFFFFF',
                    padding: '5px 10px 2px 10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '48%',
                    border: '1px solid #7CC427',
                    borderRadius: '6px',
                  }}
                >
                  <Image
                    style={{
                      marginLeft: '10px',
                      marginTop: '3px',
                    }}
                    src="/img/calc.png"
                    width="18"
                    height="14"
                    alt="map"
                  />
                  <Form.Label
                    style={{
                      color: '#151515',
                      fontSize: '12px',
                      marginLeft: '5px',
                      fontWeight: '500',
                    }}
                  >
                    Calculate the cost
                  </Form.Label>
                  <div></div>
                </Button>
                <Button
                  disabled={!packageReady}
                  style={
                    packageReady
                      ? {
                          background: 'rgba(0, 144, 47, 1)',
                          padding: '5px 10px 2px 10px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: '48%',
                          borderRadius: '6px',
                          border: 'none',
                        }
                      : {
                          background: '#D1D1D1',
                          padding: '5px 10px 2px 10px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: '48%',
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
                    Done
                  </Form.Label>
                </Button>
              </div>
            </form>
          </div>
        </DriverLayout>
      )}
    </>
  );
}
