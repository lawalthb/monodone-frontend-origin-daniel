import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import ReusableDriverFreelancer from './reusableDriverFreelancer';
import Image from 'next/image';

export default function CompanyMobile(props) {
  const {
    hiddenProfileInput,
    hiddenVehicleInput,
    profile,
    vehicleImg,
    handleProfileClick,
    handleVehicleClick,
    handleProfileChange,
    handleVehicleChange,
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
        <Form.Label
          style={{
            fontSize: '12px',
            fontWeight: 500,
            color: 'rgba(21, 21, 21, 1)',
          }}
        >
          Company’s name
        </Form.Label>
        <input
          style={
            errors.companyName
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
          {...register('companyName', {
            required: true,
            pattern: /^[a-zA-Z\s]*$/i,
          })}
          placeholder="Your Full name"
        />
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
        <Form.Label
          style={{
            fontSize: '12px',
            fontWeight: 500,
            color: 'rgba(21, 21, 21, 1)',
            marginTop: '10px',
          }}
        >
          Contact phone number
        </Form.Label>
        <input
          style={
            errors.contactNumber
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
          {...register('contactNumber', {
            required: true,
            pattern: /^[a-zA-Z\s]*$/i,
          })}
          placeholder="+ ()"
        />
        {errors.contactNumber && errors.contactNumber.type === 'required' && (
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
        {errors.contactNumber && errors.contactNumber.type === 'pattern' && (
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
        <Form.Label
          style={{
            fontSize: '12px',
            fontWeight: 500,
            color: 'rgba(21, 21, 21, 1)',
            marginTop: '10px',
          }}
        >
          Address
        </Form.Label>
        <input
          style={
            errors.street
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
          {...register('street', {
            required: true,
            pattern: /^[a-zA-Z\s]*$/i,
          })}
          placeholder="Street"
        />
        <div
          style={{
            display: 'flex',
            width: '100%',
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
        <input
          style={
            errors.state
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
          {...register('state', {
            required: true,
            pattern: /^[a-zA-Z\s]*$/i,
          })}
          placeholder="State"
        />
        <div
          style={{
            display: 'flex',
            width: '100%',
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
        <input
          style={
            errors.lga
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
          {...register('lga', {
            required: true,
            pattern: /^[a-zA-Z\s]*$/i,
          })}
          placeholder="LGA"
        />
        <div
          style={{
            display: 'flex',
            width: '100%',
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
        <Form.Label
          style={{
            fontSize: '12px',
            fontWeight: 500,
            color: 'rgba(21, 21, 21, 1)',
            marginTop: '10px',
          }}
        >
          State of residence
        </Form.Label>
        <input
          style={
            errors.stateOfResidence
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
          {...register('stateOfResidence', {
            required: true,
            pattern: /^[a-zA-Z\s]*$/i,
          })}
          placeholder=""
        />
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
        <Form.Label
          style={{
            fontSize: '12px',
            fontWeight: 500,
            color: 'rgba(21, 21, 21, 1)',
            marginTop: '10px',
          }}
        >
          City of residence
        </Form.Label>
        <input
          style={
            errors.cityOfResidence
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
          {...register('cityOfResidence', {
            required: true,
            pattern: /^[a-zA-Z\s]*$/i,
          })}
          placeholder=""
        />
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
          )
        }
        <Form.Label
          style={{
            fontSize: '12px',
            fontWeight: 500,
            color: 'rgba(21, 21, 21, 1)',
            marginTop: '10px',
          }}
        >
          Truck type
        </Form.Label>
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
        <Form.Label
          style={{
            fontSize: '12px',
            fontWeight: 500,
            color: 'rgba(21, 21, 21, 1)',
            marginTop: '10px',
          }}
        >
          Number of trucks
        </Form.Label>
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
        <Form.Label
          style={{
            fontSize: '12px',
            fontWeight: 500,
            color: 'rgba(21, 21, 21, 1)',
            marginTop: '10px',
          }}
        >
          Number of drivers
        </Form.Label>
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
        {errors.noOfDrivers && errors.noOfDrivers.type === 'required' && (
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
            fontSize: '12px',
            fontWeight: 500,
            color: 'rgba(21, 21, 21, 1)',
            marginTop: '10px',
          }}
        >
          Company's logo
        </Form.Label>
        <div
          style={{
            display: 'flex',
            width: '100%',
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
        <Form.Label
          style={{
            fontSize: '12px',
            fontWeight: 500,
            color: 'rgba(21, 21, 21, 1)',
            marginTop: '10px',
          }}
        >
          Copy of C.A.C Cert.
        </Form.Label>
        <div
          style={{
            display: 'flex',
            width: '100%',
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
              width: '80%',
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
