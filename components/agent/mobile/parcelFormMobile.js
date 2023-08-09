import Image from 'next/image';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import ParcelFormMobileReusable from './parcelFormMobileReusable';
import AddressOfficeSwitches from '../common/addressOfficeSwitches';
import NextParcelFormMobile from './nextParcelFormMobile';

export default function ParcelFormMobile(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    props.setNextParcelForm(true);
    props.setParcelData(data);
  };
  return (
    <>
      {props.nextParcelForm ? (
        <NextParcelFormMobile
          setNextParcelForm={props.setNextParcelForm}
          setParcelData={props.setParcelData}
          map={props.map}
          setMap={props.setMap}
          parcelOption={props.parcelOption}
          setParcelOption={props.setParcelOption}
          setParcelForm={props.setParcelForm}
          setListOfParcel={props.setListOfParcel}
        />
      ) : (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Image
              onClick={() => props.setParcelForm(false)}
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
              Delivery information
            </Form.Label>
            <div></div>
          </div>
          <hr
            style={{
              marginTop: '-0.09px',
            }}
          />
          <form
            onSubmit={handleSubmit(submitForm)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
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
            <ParcelFormMobileReusable
              errors={errors.office}
              name="office"
              placeholder="No.13"
              register={register}
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
            <ParcelFormMobileReusable
              errors={errors.recepient}
              name="recepient"
              placeholder="Sender"
              register={register}
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
            <ParcelFormMobileReusable
              errors={errors.phoneNumber}
              name="phoneNumber"
              placeholder="Phone number"
              register={register}
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
              }}
            >
              Deliver To:
            </Form.Label>
            <AddressOfficeSwitches
              handleIsAddress={props.handleIsAddress}
              isAddress={props.isAddress}
              handleIsOffice={props.handleIsOffice}
              isOffice={props.isOffice}
            />
            <ParcelFormMobileReusable
              errors={errors.toAddress}
              name="toAddress"
              placeholder="Address"
              register={register}
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
            <ParcelFormMobileReusable
              errors={errors.toRecepient}
              name="toRecepient"
              placeholder="Recepient"
              register={register}
            />
            {errors.toRecepient && errors.toRecepient.type === 'required' && (
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
            <ParcelFormMobileReusable
              errors={errors.toPhoneNumber}
              name="toPhoneNumber"
              placeholder="Phone number"
              register={register}
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
                height: '56px',
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
        </>
      )}
    </>
  );
}
