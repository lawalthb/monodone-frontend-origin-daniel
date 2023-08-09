import Image from 'next/image';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import ParcelFormMobileReusable from './parcelFormMobileReusable';
import MapAgentMobile from './mapAgentMobile';
import ParcelOptionsMobile from './parcelOptionsMobile';

export default function NextParcelFormMobile(props) {
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
      {props.map ? (
        <>
          <MapAgentMobile setMap={props.setMap} />
        </>
      ) : (
        <>
          {props.parcelOption ? (
            <ParcelOptionsMobile
              setParcelOption={props.setParcelOption}
              setParcelData={props.setParcelData}
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
                  onClick={() => props.setNextParcelForm(false)}
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
                  Delivery From
                </Form.Label>
                <Form.Label
                  onClick={() => {
                    props.setParcelOption(true);
                  }}
                  style={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '16px',
                    lineHeight: '28px',
                    color: '#009027',
                    cursor: 'pointer',
                  }}
                >
                  Done
                </Form.Label>
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
                <ParcelFormMobileReusable
                  errors={errors.zipCodeTo}
                  name="zipCodeTo"
                  placeholder="Zip code"
                  register={register}
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
                <ParcelFormMobileReusable
                  errors={errors.cityTo}
                  name="cityTo"
                  placeholder="City"
                  register={register}
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
                <ParcelFormMobileReusable
                  errors={errors.streetTo}
                  name="streetTo"
                  placeholder="Street"
                  register={register}
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
                    <ParcelFormMobileReusable
                      errors={errors.numberTo}
                      name="numberTo"
                      placeholder="Number"
                      register={register}
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      width: '48%',
                    }}
                  >
                    <ParcelFormMobileReusable
                      errors={errors.apartmentTo}
                      name="apartmentTo"
                      placeholder="Apartment"
                      register={register}
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
                    {errors.apartmentTo &&
                      errors.apartmentTo.type === 'required' && (
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
                    height: '56px',
                    textTransform: 'uppercase',
                  }}
                >
                  <Image
                    style={{
                      marginLeft: '10px',
                      marginTop: '10px',
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
                      fontWeight: '400',
                      marginTop: '10px',
                    }}
                  >
                    Choose on the map
                  </Form.Label>
                  <div></div>
                </Button>
              </form>
            </>
          )}
        </>
      )}
    </>
  );
}
