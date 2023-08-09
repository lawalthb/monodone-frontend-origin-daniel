import Image from 'next/image';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import MapAgent from './mapAgent';

export default function NextParcelForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    props.setMap(true);
    props.setParcelData((prevState) => {
      const newData = {
        ...prevState,
        data,
      };
      return newData;
    });
  };
  return (
    <>
      {props.map || props.agentMapDeliveryTo ? (
        <>
          <MapAgent
            setMap={props.setMap}
            parcelOption={props.parcelOption}
            setParcelOption={props.setParcelOption}
            isPackage={props.isPackage}
            setIsPackage={props.setIsPackage}
            isDocument={props.isDocument}
            setIsDocument={props.setIsDocument}
            handleIsPackage={props.handleIsPackage}
            handleIsDocument={props.handleIsDocument}
            setParcelData={props.setParcelData}
            setOrders={props.setOrders}
          />
        </>
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
            Enter the address:
          </Form.Label>
          <Form.Label
            style={{
              fontSize: '13px',
              color: '#808080',
            }}
          >
            Zip code
          </Form.Label>
          <input
            style={
              errors.zipCodeTo
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
            {...register('zipCodeTo', {
              required: true,
            })}
            placeholder="900108"
          />
          {errors.zipCodeTo && errors.zipCodeTo.type === 'required' && (
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
            City
          </Form.Label>
          <input
            style={
              errors.cityTo
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
            {...register('cityTo', {
              required: true,
            })}
            placeholder="Abuja"
          />
          {errors.cityTo && errors.cityTo.type === 'required' && (
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
            Street
          </Form.Label>
          <input
            style={
              errors.streetTo
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
            {...register('streetTo', {
              required: true,
            })}
            placeholder="Alex Ekwueme Way"
          />
          {errors.streetTo && errors.streetTo.type === 'required' && (
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
            Number
          </Form.Label>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <input
              style={
                errors.numberTo
                  ? {
                      border: '1px solid red',
                      padding: '0px 10px',
                      fontSize: '12px',
                      borderRadius: '5px',
                      width: '48%',
                    }
                  : {
                      border: '1px solid #E7E7E7',
                      padding: '0px 10px',
                      fontSize: '12px',
                      borderRadius: '5px',
                      width: '48%',
                    }
              }
              type="text"
              {...register('numberTo', {
                required: true,
              })}
              placeholder="21"
            />
            <input
              style={
                errors.apartmentTo
                  ? {
                      border: '1px solid red',
                      padding: '0px 10px',
                      fontSize: '12px',
                      borderRadius: '5px',
                      width: '48%',
                    }
                  : {
                      border: '1px solid #E7E7E7',
                      padding: '0px 10px',
                      fontSize: '12px',
                      borderRadius: '5px',
                      width: '48%',
                    }
              }
              type="text"
              {...register('apartmentTo', {
                required: true,
              })}
              placeholder="Apartment"
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
              {errors.numberTo && errors.numberTo.type === 'required' && (
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
              {errors.apartmentTo && errors.apartmentTo.type === 'required' && (
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
          <Button
            type="submit"
            style={{
              background: 'transparent',
              padding: '5px 10px 2px 10px',
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              border: '1px solid #7CC427',
              borderRadius: '6px',
              marginTop: '40px',
            }}
          >
            <Image
              style={{
                marginLeft: '10px',
                marginTop: '3px',
              }}
              src="/img/map.png"
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
              Choose on the map
            </Form.Label>
            <div></div>
          </Button>
        </form>
      )}
    </>
  );
}
