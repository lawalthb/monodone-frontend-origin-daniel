import { Form } from 'react-bootstrap';
import LoadboardCargoFilterContent from './loadboardCargoFilterContent';
import { useForm } from 'react-hook-form';
import { cargosType, cityTown, countries } from '@/utils/data/data';
import LoadboardCargoSearchBtn from './loadboardCargoSearchBtn';

export default function LoadboardCargoFilterMobile(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    console.log('cargo data', data);
  };
  return (
    <>
      <Form.Label
        style={{
          fontSize: '16px',
          fontWeight: 600,
          color: '#111111',
        }}
      >
        CARGO FILTERS
      </Form.Label>
      <form
        onSubmit={handleSubmit(submitForm)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <LoadboardCargoFilterContent
          register={register}
          errors={errors}
          heading="Cargo Type"
          name="cargoType"
          caption="Select the type of parcel"
          contents={cargosType}
          marginBottom="0px"
          isCargoTypeError={errors.cargoType}
        />
        {errors.cargoType && errors.cargoType.type === 'required' && (
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
        <LoadboardCargoFilterContent
          register={register}
          errors={errors}
          heading="Delivery Location"
          name="deliveryLocation"
          caption="Сhoose a country"
          contents={countries}
          marginBottom="0px"
          isDeliveryLocationError={errors.deliveryLocation}
        />
        {errors.deliveryLocation &&
          errors.deliveryLocation.type === 'required' && (
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
        <LoadboardCargoFilterContent
          register={register}
          errors={errors}
          heading="Country"
          name="country"
          caption="Сhoose a country"
          contents={countries}
          marginBottom={errors.country ? '0px' : '30px'}
          isCountryError={errors.country}
        />
        {errors.country && errors.country.type === 'required' && (
          <span
            style={{
              fontSize: '10px',
              color: 'red',
              fontStyle: 'italic',
              marginTop: '10px',
              marginBottom: '30px',
            }}
          >
            This field is required
          </span>
        )}
        <Form.Label
          style={{
            fontSize: '14px',
            fontWeight: '400',
            color: '#808080',
          }}
        >
          Pickup Day
        </Form.Label>
        <input
          style={
            errors.pickupDate
              ? {
                  border: '1px solid red',
                  padding: '0px 10px',
                  fontSize: '12px',
                  borderRadius: '4px',
                }
              : {
                  border: '1px solid #E7E7E7',
                  padding: '0px 10px',
                  fontSize: '12px',
                  borderRadius: '4px',
                }
          }
          type="date"
          {...register('pickupDate', {
            required: true,
          })}
          placeholder="choose a date"
        />
        {errors.pickupDate && errors.pickupDate.type === 'required' && (
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
        <LoadboardCargoFilterContent
          register={register}
          errors={errors}
          heading="City or Town"
          name="cityTown"
          caption="Choose city or town"
          contents={cityTown}
          marginBottom={errors.cityTown ? '0px' : '30px'}
          isCityTownError={errors.cityTown}
        />
        {errors.cityTown && errors.cityTown.type === 'required' && (
          <span
            style={{
              fontSize: '10px',
              color: 'red',
              fontStyle: 'italic',
              marginTop: '10px',
              marginBottom: '30px',
            }}
          >
            This field is required
          </span>
        )}
        <Form.Label
          style={{
            fontSize: '14px',
            fontWeight: '400',
            color: '#808080',
          }}
        >
          Delivery Distance
        </Form.Label>
        <input
          style={
            errors.deliveryDistance
              ? {
                  border: '1px solid red',
                  padding: '0px 10px',
                  fontSize: '12px',
                  borderRadius: '4px',
                }
              : {
                  border: '1px solid #E7E7E7',
                  padding: '0px 10px',
                  fontSize: '12px',
                  borderRadius: '4px',
                }
          }
          type="number"
          {...register('deliveryDistance', { required: true })}
          placeholder="100"
        />
        {errors.deliveryDistance &&
          errors.deliveryDistance.type === 'required' && (
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
            fontSize: '14px',
            fontWeight: '400',
            color: '#808080',
            marginTop: '30px',
          }}
        >
          Pickup Distance
        </Form.Label>
        <input
          style={
            errors.pickupDistance
              ? {
                  border: '1px solid red',
                  padding: '0px 10px',
                  fontSize: '12px',
                  borderRadius: '4px',
                }
              : {
                  border: '1px solid #E7E7E7',
                  padding: '0px 10px',
                  fontSize: '12px',
                  borderRadius: '4px',
                }
          }
          type="number"
          {...register('pickupDistance', { required: true })}
          placeholder="1000"
        />
        {errors.pickupDistance && errors.pickupDistance.type === 'required' && (
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
        <LoadboardCargoSearchBtn />
      </form>
    </>
  );
}
