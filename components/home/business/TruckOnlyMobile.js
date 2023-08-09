import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import ReusableDriverFreelancer from "../diver/reusableDriverFreelancer";

export default function TruckOnlyMobile() {
  const {
    hiddenInsideTruckInput,
    hiddenOutsideTruckInput,
    hiddenCacCertTruckInput,
    hiddenTruckDocumentInput,
    hiddenTruckOwnerInput,
    hiddenCacCertTruckTwoInput,
    insideTruck,
    outsideTruck,
    cacCertTruck,
    truckDocument,
    truckOwner,
    cacCertTruckTwo,
    handleInsideTruckClick,
    handleOutsideTruckClick,
    handleCacCertTruckClick,
    handleTruckDocumentClick,
    handleTruckOwnerClick,
    handleCacCertTruckTwoClick,
    handleInsideTruckChange,
    handleOutsideTruckChange,
    handleCacCertTruckChange,
    handleTruckDocumentChange,
    handleTruckOwnerChange,
    handleCacCertTruckTwoChange,
  } = ReusableDriverFreelancer();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    data = {
      ...data,
      insideTruck: insideTruck,
      truckOwner: truckOwner,
      truckDocument: truckDocument,
      outsideTruck: outsideTruck,
      cacCertTruck: cacCertTruck,
      cacCertTruckTwo: cacCertTruckTwo,
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
          Truck (only):
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
          placeholder="+ ()"
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
          Truck Owner Image
        </Form.Label>
        <div
          style={{
            display: 'flex',
            width: '100%',
            gap: '5px',
          }}
        >
          <Button
            onClick={handleTruckOwnerClick}
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
            ref={hiddenTruckOwnerInput}
            onChange={handleTruckOwnerChange}
            style={{
              display: 'none',
            }}
          />
          {truckOwner.name ? (
            <Form.Label
              style={{
                fontSize: '12px',
                color: '#A6A6A6',
                fontWeight: 500,
                marginTop: '4px',
              }}
            >
              {truckOwner.name}
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
          Copy of CAC Certificate
        </Form.Label>
        <div
          style={{
            display: 'flex',
            width: '100%',
            gap: '5px',
          }}
        >
          <Button
            onClick={handleCacCertTruckClick}
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
            ref={hiddenCacCertTruckInput}
            onChange={handleCacCertTruckChange}
            style={{
              display: 'none',
            }}
          />
          {cacCertTruck.name ? (
            <Form.Label
              style={{
                fontSize: '12px',
                color: '#A6A6A6',
                fontWeight: 500,
                marginTop: '4px',
              }}
            >
              {cacCertTruck.name}
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
            fontSize: '14px',
            fontWeight: 600,
            color: 'rgba(21, 21, 21, 1)',
            textTransform: 'uppercase',
            marginTop: '35px',
          }}
        >
          Truck Details:
        </Form.Label>
        <Form.Label
          style={{
            fontSize: '12px',
            fontWeight: 500,
            color: 'rgba(21, 21, 21, 1)',
            marginTop: '10px',
          }}
        >
          Truck name
        </Form.Label>
        <input
          style={
            errors.truckName
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
          {...register('truckName', {
            required: true,
          })}
          placeholder=""
        />
        {errors.truckName &&
          errors.truckName.type === 'required' && (
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
          Truck type
        </Form.Label>
        <input
          style={
            errors.truckType
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
          {...register('truckType', {
            required: true,
          })}
          placeholder=""
        />
        {errors.truckType &&
          errors.truckType.type === 'required' && (
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
          Truck location
        </Form.Label>
        <input
          style={
            errors.truckLocation
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
          {...register('truckLocation', {
            required: true,
          })}
          placeholder=""
        />
        {errors.truckLocation &&
          errors.truckLocation.type === 'required' && (
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
          Truck make
        </Form.Label>
        <input
          style={
            errors.truckMake
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
          {...register('truckMake', {
            required: true,
          })}
          placeholder=""
        />
        {errors.truckMake &&
          errors.truckMake.type === 'required' && (
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
          Plate number
        </Form.Label>
        <input
          style={
            errors.plateNumber
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
          {...register('plateNumber', {
            required: true,
          })}
          placeholder=""
        />
        {errors.plateNumber &&
          errors.plateNumber.type === 'required' && (
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
          CAC number
        </Form.Label>
        <input
          style={
            errors.cacNumber
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
          {...register('cacNumber', {
            required: true,
          })}
          placeholder=""
        />
        {errors.cacNumber &&
          errors.cacNumber.type === 'required' && (
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
          Truck description
        </Form.Label>
        <textarea
          style={
            errors.truckDescription
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
          {...register('truckDescription', {
            required: true,
          })}
          placeholder=""
          rows={6}
        />
        {errors.truckDescription &&
          errors.truckDescription.type === 'required' && (
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
          Picture of the inside of the truck
        </Form.Label>
        <div
          style={{
            display: 'flex',
            width: '100%',
            gap: '5px',
          }}
        >
          <Button
            onClick={handleInsideTruckClick}
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
            ref={hiddenInsideTruckInput}
            onChange={handleInsideTruckChange}
            style={{
              display: 'none',
            }}
          />
          {insideTruck.name ? (
            <Form.Label
              style={{
                fontSize: '12px',
                color: '#A6A6A6',
                fontWeight: 500,
                marginTop: '4px',
              }}
            >
              {insideTruck.name}
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
          Picture of the outside of the truck
        </Form.Label>
        <div
          style={{
            display: 'flex',
            width: '100%',
            gap: '5px',
          }}
        >
          <Button
            onClick={handleOutsideTruckClick}
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
            ref={hiddenOutsideTruckInput}
            onChange={handleOutsideTruckChange}
            style={{
              display: 'none',
            }}
          />
          {outsideTruck.name ? (
            <Form.Label
              style={{
                fontSize: '12px',
                color: '#A6A6A6',
                fontWeight: 500,
                marginTop: '4px',
              }}
            >
              {outsideTruck.name}
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
          Copy of the Truck's document
        </Form.Label>
        <div
          style={{
            display: 'flex',
            width: '100%',
            gap: '5px',
          }}
        >
          <Button
            onClick={handleTruckDocumentClick}
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
            ref={hiddenTruckDocumentInput}
            onChange={handleTruckDocumentChange}
            style={{
              display: 'none',
            }}
          />
          {truckDocument.name ? (
            <Form.Label
              style={{
                fontSize: '12px',
                color: '#A6A6A6',
                fontWeight: 500,
                marginTop: '4px',
              }}
            >
              {truckDocument.name}
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
          Copy of CAC Certificate
        </Form.Label>
        <div
          style={{
            display: 'flex',
            width: '100%',
            gap: '5px',
          }}
        >
          <Button
            onClick={handleCacCertTruckTwoClick}
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
            ref={hiddenCacCertTruckTwoInput}
            onChange={handleCacCertTruckTwoChange}
            style={{
              display: 'none',
            }}
          />
          {cacCertTruckTwo.name ? (
            <Form.Label
              style={{
                fontSize: '12px',
                color: '#A6A6A6',
                fontWeight: 500,
                marginTop: '4px',
              }}
            >
              {cacCertTruckTwo.name}
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
  )
}
