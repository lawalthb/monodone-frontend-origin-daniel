import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import ReusableDriverFreelancer from './reusableDriverFreelancer';

export default function FreelancerMobile(props) {
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
    hiddenGuaranteeOnePhotoInput,
    guaranteeOnePhoto,
    handleGuaranteeOnePhotoClick,
    handleGuaranteeOnePhotoChange,
    hiddenGuaranteeTwoPhotoInput,
    guaranteeTwoPhoto,
    handleGuaranteeTwoPhotoClick,
    handleGuaranteeTwoPhotoChange,
  } = ReusableDriverFreelancer();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    data = {
      ...data,
      profile: profile,
      vehicleImg: vehicleImg,
      proofOfLicence: proofOfLicense,
      guaranteeOnePhoto: guaranteeOnePhoto,
      guaranteeTwoPhoto: guaranteeTwoPhoto,
    };
    console.log('all data', data);
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
          Driver:
        </Form.Label>
        <Form.Label
          style={{
            fontSize: '12px',
            fontWeight: 500,
            color: 'rgba(21, 21, 21, 1)',
          }}
        >
          Full name
        </Form.Label>
        <input
          style={
            errors.fullName
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
          {...register('fullName', {
            required: true,
            pattern: /^[a-zA-Z\s]*$/i,
          })}
          placeholder=""
        />
        {errors.fullName && errors.fullName.type === 'required' && (
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
        {errors.fullName && errors.fullName.type === 'pattern' && (
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
          Phone number
        </Form.Label>
        <input
          style={
            errors.phoneNumber
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
          {...register('phoneNumber', { required: true, pattern: /^\d+$/ })}
          placeholder="Your phoneNumber"
        />
        {errors.phoneNumber && errors.phoneNumber.type === 'required' && (
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
        {errors.phoneNumber && errors.phoneNumber.type === 'pattern' && (
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
          )}
        <Form.Label
          style={{
            fontSize: '12px',
            fontWeight: 500,
            color: 'rgba(21, 21, 21, 1)',
            marginTop: '10px',
          }}
        >
          Type vehicle
        </Form.Label>
        <select
          style={
            errors.vehicleType
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
          {...register('vehicleType', { required: true })}
        >
          <option value="">Select</option>
          <option value="mercedez">Mercedez</option>
          <option value="toyota">Toyota</option>
          <option value="ford">Ford</option>
        </select>
        {errors.vehicleType && errors.vehicleType.type === 'required' && (
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
          NIN number
        </Form.Label>
        <input
          style={
            errors.ninNumber
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
          {...register('ninNumber', {
            required: true,
          })}
          placeholder=""
        />
        {errors.ninNumber && errors.ninNumber.type === 'required' && (
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
          License number
        </Form.Label>
        <input
          style={
            errors.licenseNumber
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
          {...register('licenseNumber', {
            required: true,
          })}
          placeholder=""
        />
        {errors.licenseNumber && errors.licenseNumber.type === 'required' && (
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
          Profile picture
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
          Vehicle’s Image
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
        <Form.Label
          style={{
            fontSize: '12px',
            fontWeight: 500,
            color: 'rgba(21, 21, 21, 1)',
            marginTop: '10px',
          }}
        >
          Proof of License
        </Form.Label>
        <div
          style={{
            display: 'flex',
            width: '100%',
            gap: '5px',
          }}
        >
          <Button
            onClick={handleProofOfLicenseClick}
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
            ref={hiddenProofOfLicenseInput}
            onChange={handleProofOfLicenseChange}
            style={{
              display: 'none',
            }}
          />
          {proofOfLicense.name ? (
            <Form.Label
              style={{
                fontSize: '12px',
                color: '#A6A6A6',
                fontWeight: 500,
                marginTop: '4px',
              }}
            >
              {proofOfLicense.name}
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
          Guarantor 1:
        </Form.Label>
        <Form.Label
          style={{
            fontSize: '12px',
            fontWeight: 500,
            color: 'rgba(21, 21, 21, 1)',
            marginTop: '10px',
          }}
        >
          Full name
        </Form.Label>
        <input
          style={
            errors.guaranteeOneFullname
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
          {...register('guaranteeOneFullname', {
            required: true,
          })}
          placeholder=""
        />
        {errors.guaranteeOneFullname &&
          errors.guaranteeOneFullname.type === 'required' && (
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
          Phone number
        </Form.Label>
        <input
          style={
            errors.guaranteeOnePhoneNumber
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
          {...register('guaranteeOnePhoneNumber', {
            required: true,
          })}
          placeholder="+ ()"
        />
        {errors.guaranteeOnePhoneNumber &&
          errors.guaranteeOnePhoneNumber.type === 'required' && (
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
          Address
        </Form.Label>
        <input
          style={
            errors.guaranteeOneStreet
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
          {...register('guaranteeOneStreet', {
            required: true,
          })}
          placeholder="Street"
        />
        {errors.guaranteeOneStreet &&
          errors.guaranteeOneStreet.type === 'required' && (
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
            errors.guaranteeOneState
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
          {...register('guaranteeOneState', {
            required: true,
          })}
          placeholder="State"
        />
        {errors.guaranteeOneState &&
          errors.guaranteeOneState.type === 'required' && (
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
            errors.guaranteeOneLga
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
          {...register('guaranteeOneLga', {
            required: true,
          })}
          placeholder="LGA"
        />
        {errors.guaranteeOneLga &&
          errors.guaranteeOneLga.type === 'required' && (
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
          State of residence
        </Form.Label>
        <input
          style={
            errors.guaranteeOneStateResidence
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
          {...register('guaranteeOneStateResidence', {
            required: true,
          })}
          placeholder="LGA"
        />
        {errors.guaranteeOneStateResidence &&
          errors.guaranteeOneStateResidence.type === 'required' && (
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
            errors.guaranteeOneCityResidence
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
          {...register('guaranteeOneCityResidence', {
            required: true,
          })}
          placeholder="LGA"
        />
        {errors.guaranteeOneCityResidence &&
          errors.guaranteeOneCityResidence.type === 'required' && (
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
            marginTop: '20px',
          }}
        >
          Photo:
        </Form.Label>
        <div
          style={{
            display: 'flex',
            width: '100%',
            gap: '5px',
          }}
        >
          <Button
            onClick={handleGuaranteeOnePhotoClick}
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
            ref={hiddenGuaranteeOnePhotoInput}
            onChange={handleGuaranteeOnePhotoChange}
            style={{
              display: 'none',
            }}
          />
          {guaranteeOnePhoto.name ? (
            <Form.Label
              style={{
                fontSize: '12px',
                color: '#A6A6A6',
                fontWeight: 500,
                marginTop: '4px',
              }}
            >
              {guaranteeOnePhoto.name}
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
          Guarantor 2:
        </Form.Label>
        <Form.Label
          style={{
            fontSize: '12px',
            fontWeight: 500,
            color: 'rgba(21, 21, 21, 1)',
            marginTop: '10px',
          }}
        >
          Full name
        </Form.Label>
        <input
          style={
            errors.guaranteeTwoFullname
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
          {...register('guaranteeTwoFullname', {
            required: true,
          })}
          placeholder=""
        />
        {errors.guaranteeTwoFullname &&
          errors.guaranteeTwoFullname.type === 'required' && (
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
          Phone number
        </Form.Label>
        <input
          style={
            errors.guaranteeTwoPhoneNumber
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
          {...register('guaranteeTwoPhoneNumber', {
            required: true,
          })}
          placeholder="+ ()"
        />
        {errors.guaranteeTwoPhoneNumber &&
          errors.guaranteeTwoPhoneNumber.type === 'required' && (
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
          Address
        </Form.Label>
        <input
          style={
            errors.guaranteeTwoStreet
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
          {...register('guaranteeTwoStreet', {
            required: true,
          })}
          placeholder="Street"
        />
        {errors.guaranteeTwoStreet &&
          errors.guaranteeTwoStreet.type === 'required' && (
            <span
              style={{
                fontSize: '10px',
                color: 'red',
                fontStyle: 'italic',
                marginTop: '10px',
                width: '100%',
              }}
            >
              This field is required
            </span>
          )}
        <input
          style={
            errors.guaranteeTwoState
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
          {...register('guaranteeTwoState', {
            required: true,
          })}
          placeholder="State"
        />
        {errors.guaranteeTwoState &&
          errors.guaranteeTwoState.type === 'required' && (
            <span
              style={{
                fontSize: '10px',
                color: 'red',
                fontStyle: 'italic',
                marginTop: '10px',
                width: '100%',
              }}
            >
              This field is required
            </span>
          )}
        <input
          style={
            errors.guaranteeTwoLga
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
          {...register('guaranteeTwoLga', {
            required: true,
          })}
          placeholder="LGA"
        />
        {errors.guaranteeTwoLga &&
          errors.guaranteeTwoLga.type === 'required' && (
            <span
              style={{
                fontSize: '10px',
                color: 'red',
                fontStyle: 'italic',
                marginTop: '10px',
                width: '100%',
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
          State of residence
        </Form.Label>
        <input
          style={
            errors.guaranteeTwoStateResidence
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
          {...register('guaranteeTwoStateResidence', {
            required: true,
          })}
          placeholder=""
        />
        {errors.guaranteeTwoStateResidence &&
          errors.guaranteeTwoStateResidence.type === 'required' && (
            <span
              style={{
                fontSize: '10px',
                color: 'red',
                fontStyle: 'italic',
                marginTop: '10px',
                width: '100%',
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
            errors.guaranteeTwoCityResidence
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
          {...register('guaranteeTwoCityResidence', {
            required: true,
          })}
          placeholder=""
        />
        {errors.guaranteeTwoCityResidence &&
          errors.guaranteeTwoCityResidence.type === 'required' && (
            <span
              style={{
                fontSize: '10px',
                color: 'red',
                fontStyle: 'italic',
                marginTop: '10px',
                width: '100%',
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
            marginTop: '20px',
          }}
        >
          Photo:
        </Form.Label>
        <div
          style={{
            display: 'flex',
            width: '100%',
            gap: '5px',
          }}
        >
          <Button
            onClick={handleGuaranteeTwoPhotoClick}
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
            ref={hiddenGuaranteeTwoPhotoInput}
            onChange={handleGuaranteeTwoPhotoChange}
            style={{
              display: 'none',
            }}
          />
          {guaranteeTwoPhoto.name ? (
            <Form.Label
              style={{
                fontSize: '12px',
                color: '#A6A6A6',
                fontWeight: 500,
                marginTop: '4px',
              }}
            >
              {guaranteeTwoPhoto.name}
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
