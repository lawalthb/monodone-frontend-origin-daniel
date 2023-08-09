import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import ReusableDriverFreelancer from './reusableDriverFreelancer';
import Image from 'next/image';

export default function CompanyDeskTop(props) {
  const {
    hiddenProfileInput,
    hiddenVehicleInput,
    hiddenProofOfLicenseInput,
    profile,
    vehicleImg,
    proofOfLicense,
    handleProfileClick,
    handleVehicleClick,
    handleProofOfLicenseClick,
    handleProfileChange,
    handleVehicleChange,
    handleProofOfLicenseChange,
  } = ReusableDriverFreelancer();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    console.log('company data', data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(submitForm)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          marginTop: '10px',
        }}
      >
        <Form.Label
          style={{
            fontSize: '14px',
            fontWeight: 600,
            color: 'rgba(21, 21, 21, 1)',
            textTransform: 'uppercase',
          }}
        >
          Company:
        </Form.Label>
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
              width: '48%',
            }}
          >
            <Form.Label
              style={{
                fontSize: '12px',
                fontWeight: 500,
                color: 'rgba(21, 21, 21, 1)',
              }}
            >
              Company’s name
            </Form.Label>
          </div>
          <div
            style={{
              display: 'flex',
              width: '48%',
            }}
          >
            <Form.Label
              style={{
                fontSize: '12px',
                fontWeight: 500,
                color: 'rgba(21, 21, 21, 1)',
              }}
            >
              Contact phone number
            </Form.Label>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <input
            style={
              errors.companyName
                ? {
                    border: '1px solid red',
                    padding: '0px 10px',
                    fontSize: '12px',
                    width: '48%',
                  }
                : {
                    border: '1px solid #E7E7E7',
                    padding: '0px 10px',
                    fontSize: '12px',
                    width: '48%',
                  }
            }
            type="text"
            {...register('companyName', {
              required: true,
              pattern: /^[a-zA-Z\s]*$/i,
            })}
            placeholder="Your Full name"
          />
          <input
            style={
              errors.contactNumber
                ? {
                    border: '1px solid red',
                    padding: '0px 10px',
                    fontSize: '12px',
                    width: '48%',
                  }
                : {
                    border: '1px solid #E7E7E7',
                    padding: '0px 10px',
                    fontSize: '12px',
                    width: '48%',
                  }
            }
            type="text"
            {...register('contactNumber', { required: true, pattern: /^\d+$/ })}
            placeholder="+ ()"
          />
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
              width: '48%',
            }}
          >
            {errors.companyName && errors.companyName.type === 'required' && (
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
            {errors.companyName && errors.companyName.type === 'pattern' && (
              <span
                style={{
                  fontSize: '10px',
                  color: 'red',
                  fontStyle: 'italic',
                  marginTop: '10px',
                }}
              >
                It must be all letters
              </span>
            )}
          </div>
          <div
            style={{
              display: 'flex',
              width: '48%',
            }}
          >
            {errors.contactNumber &&
              errors.contactNumber.type === 'required' && (
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
            {errors.contactNumber &&
              errors.contactNumber.type === 'pattern' && (
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
            width: '100%',
            marginTop: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '48%',
            }}
          >
            <Form.Label
              style={{
                fontSize: '12px',
                fontWeight: 500,
                color: 'rgba(21, 21, 21, 1)',
              }}
            >
              Address
            </Form.Label>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '48%',
            }}
          >
            <div
              style={{
                display: 'flex',
                width: '50%',
              }}
            >
              <Form.Label
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  color: 'rgba(21, 21, 21, 1)',
                }}
              >
                State of residence
              </Form.Label>
            </div>
            <div
              style={{
                display: 'flex',
                width: '50%',
              }}
            >
              <Form.Label
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  color: 'rgba(21, 21, 21, 1)',
                }}
              >
                City of residence
              </Form.Label>
            </div>
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
              justifyContent: 'space-between',
              width: '48%',
            }}
          >
            <input
              style={
                errors.street
                  ? {
                      border: '1px solid red',
                      padding: '0px 10px',
                      fontSize: '12px',
                      width: '30%',
                    }
                  : {
                      border: '1px solid #E7E7E7',
                      padding: '0px 10px',
                      fontSize: '12px',
                      width: '30%',
                    }
              }
              type="text"
              {...register('street', {
                required: true,
                pattern: /^[a-zA-Z\s]*$/i,
              })}
              placeholder="Street"
            />
            <input
              style={
                errors.state
                  ? {
                      border: '1px solid red',
                      padding: '0px 10px',
                      fontSize: '12px',
                      width: '30%',
                    }
                  : {
                      border: '1px solid #E7E7E7',
                      padding: '0px 10px',
                      fontSize: '12px',
                      width: '30%',
                    }
              }
              type="text"
              {...register('state', {
                required: true,
                pattern: /^[a-zA-Z\s]*$/i,
              })}
              placeholder="State"
            />
            <input
              style={
                errors.lga
                  ? {
                      border: '1px solid red',
                      padding: '0px 10px',
                      fontSize: '12px',
                      width: '30%',
                    }
                  : {
                      border: '1px solid #E7E7E7',
                      padding: '0px 10px',
                      fontSize: '12px',
                      width: '30%',
                    }
              }
              type="text"
              {...register('lga', {
                required: true,
                pattern: /^[a-zA-Z\s]*$/i,
              })}
              placeholder="LGA"
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '48%',
            }}
          >
            <input
              style={
                errors.stateOfResidence
                  ? {
                      border: '1px solid red',
                      padding: '0px 10px',
                      fontSize: '12px',
                      width: '48%',
                    }
                  : {
                      border: '1px solid #E7E7E7',
                      padding: '0px 10px',
                      fontSize: '12px',
                      width: '48%',
                    }
              }
              type="text"
              {...register('stateOfResidence', {
                required: true,
                pattern: /^[a-zA-Z\s]*$/i,
              })}
              placeholder=""
            />
            <input
              style={
                errors.cityOfResidence
                  ? {
                      border: '1px solid red',
                      padding: '0px 10px',
                      fontSize: '12px',
                      width: '48%',
                    }
                  : {
                      border: '1px solid #E7E7E7',
                      padding: '0px 10px',
                      fontSize: '12px',
                      width: '48%',
                    }
              }
              type="text"
              {...register('cityOfResidence', {
                required: true,
                pattern: /^[a-zA-Z\s]*$/i,
              })}
              placeholder=""
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
              justifyContent: 'space-between',
              width: '48%',
            }}
          >
            <div
              style={{
                display: 'flex',
                width: '30%',
              }}
            >
              {errors.street && errors.street.type === 'required' && (
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
            <div
              style={{
                display: 'flex',
                width: '30%',
              }}
            >
              {errors.state && errors.state.type === 'required' && (
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
            <div
              style={{
                display: 'flex',
                width: '30%',
              }}
            >
              {errors.lga && errors.lga.type === 'required' && (
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
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '48%',
            }}
          >
            <div
              style={{
                display: 'flex',
                width: '48%',
              }}
            >
              {errors.stateOfResidence &&
                errors.stateOfResidence.type === 'required' && (
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
            <div
              style={{
                display: 'flex',
                width: '48%',
              }}
            >
              {errors.cityOfResidence &&
                errors.cityOfResidence.type === 'required' && (
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
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: '10px',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '48%',
            }}
          >
            <Form.Label
              style={{
                fontSize: '12px',
                fontWeight: 500,
                color: 'rgba(21, 21, 21, 1)',
              }}
            >
              Truck Type
            </Form.Label>
          </div>
          <div
            style={{
              display: 'flex',
              width: '48%',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                display: 'flex',
                width: '48%',
              }}
            >
              <Form.Label
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  color: 'rgba(21, 21, 21, 1)',
                }}
              >
                Number of trucks
              </Form.Label>
            </div>
            <div
              style={{
                display: 'flex',
                width: '48%',
              }}
            >
              <Form.Label
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  color: 'rgba(21, 21, 21, 1)',
                }}
              >
                Number of drivers
              </Form.Label>
            </div>
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
              justifyContent: 'space-between',
              width: '48%',
            }}
          >
            <select
              style={
                errors.truckType
                  ? {
                      border: '1px solid red',
                      height: '40px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      padding: '5px 10px',
                      width: '100%',
                    }
                  : {
                      border: '1px solid #E7E7E7',
                      height: '40px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      padding: '5px 10px',
                      width: '100%',
                    }
              }
              {...register('truckType', { required: true })}
            >
              <option value="">Select</option>
              <option value="mercedez">Mercedez</option>
              <option value="toyota">Toyota</option>
              <option value="ford">Ford</option>
            </select>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '48%',
            }}
          >
            <div
              style={{
                display: 'flex',
                width: '48%',
              }}
            >
              <input
                style={
                  errors.noOfTrucks
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
                {...register('noOfTrucks', {
                  required: true,
                })}
                placeholder=""
              />
            </div>
            <div
              style={{
                display: 'flex',
                width: '48%',
              }}
            >
              <input
                style={
                  errors.noOfDrivers
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
                {...register('noOfDrivers', {
                  required: true,
                })}
                placeholder=""
              />
            </div>
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
              justifyContent: 'space-between',
              width: '48%',
            }}
          >
            {errors.truckType && errors.truckType.type === 'required' && (
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
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '48%',
            }}
          >
            <div
              style={{
                display: 'flex',
                width: '48%',
              }}
            >
              {errors.noOfTrucks && errors.noOfTrucks.type === 'required' && (
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
            <div
              style={{
                display: 'flex',
                width: '48%',
              }}
            >
              {errors.noOfDrivers &&
                errors.noOfDrivers.type === 'required' && (
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
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'start',
            width: '100%',
            marginTop: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '33%',
            }}
          >
            <Form.Label
              style={{
                fontSize: '12px',
                fontWeight: 500,
                color: 'rgba(21, 21, 21, 1)',
              }}
            >
              Company’s logo
            </Form.Label>
          </div>
          <div
            style={{
              display: 'flex',
              width: '33%',
            }}
          >
            <Form.Label
              style={{
                fontSize: '12px',
                fontWeight: 500,
                color: 'rgba(21, 21, 21, 1)',
              }}
            >
              Copy of C.A.C Cert.
            </Form.Label>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'start',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '33%',
              gap: '5px',
            }}
          >
            <Button
              onClick={handleProfileClick}
              style={{
                display: 'flex',
                gap: '10px',
                background: 'transparent',
                border: '1px solid #7CC427',
                padding: '2px 10px',
                height: '25px',
              }}
            >
              <Image
                style={{
                  marginTop: '6px',
                }}
                src="/img/blogupload.png"
                width="10"
                height="10"
                alt="close"
              />
              <Form.Label
                style={{
                  fontSize: '10px',
                  color: '#7CC427',
                  fontWeight: 500,
                  marginTop: '2px',
                }}
              >
                Choose file
              </Form.Label>
            </Button>
            <input
              type="file"
              ref={hiddenProfileInput}
              onChange={handleProfileChange}
              style={{
                display: 'none',
              }}
            />
            {profile.name ? (
              <Form.Label
                style={{
                  fontSize: '12px',
                  color: '#A6A6A6',
                  fontWeight: 500,
                  marginTop: '4px',
                }}
              >
                {profile.name}
              </Form.Label>
            ) : (
              <Form.Label
                style={{
                  fontSize: '12px',
                  color: '#A6A6A6',
                  fontWeight: 500,
                  marginTop: '4px',
                }}
              >
                No picture chosen
              </Form.Label>
            )}
          </div>
          <div
            style={{
              display: 'flex',
              width: '33%',
              gap: '5px',
            }}
          >
            <Button
              onClick={handleVehicleClick}
              style={{
                display: 'flex',
                gap: '10px',
                background: 'transparent',
                border: '1px solid #7CC427',
                padding: '2px 10px',
                height: '25px',
              }}
            >
              <Image
                style={{
                  marginTop: '6px',
                }}
                src="/img/blogupload.png"
                width="10"
                height="10"
                alt="close"
              />
              <Form.Label
                style={{
                  fontSize: '10px',
                  color: '#7CC427',
                  fontWeight: 500,
                  marginTop: '2px',
                }}
              >
                Choose file
              </Form.Label>
            </Button>
            <input
              type="file"
              ref={hiddenVehicleInput}
              onChange={handleVehicleChange}
              style={{
                display: 'none',
              }}
            />
            {vehicleImg.name ? (
              <Form.Label
                style={{
                  fontSize: '12px',
                  color: '#A6A6A6',
                  fontWeight: 500,
                  marginTop: '4px',
                }}
              >
                {vehicleImg.name}
              </Form.Label>
            ) : (
              <Form.Label
                style={{
                  fontSize: '12px',
                  color: '#A6A6A6',
                  fontWeight: 500,
                  marginTop: '4px',
                }}
              >
                No picture chosen
              </Form.Label>
            )}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '40px',
          }}
        >
          <Button
            type="submit"
            style={{
              display: 'flex',
              color: 'white',
              padding: '7px',
              border: 'none',
              background: '#009027',
              width: '30%',
              height: '40px',
              fontSize: '12px',
              fontWeight: 500,
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Image
              style={{
                maxWidth: '100%',
                width: '13px',
              }}
              src="/img/monodomefly.png"
              width="13"
              height="13"
              alt="icon"
            />
            Send application
            {/* {loading ? <SpinnerComp /> : 'Send your message'} */}
          </Button>
        </div>
      </form>
    </>
  );
}
