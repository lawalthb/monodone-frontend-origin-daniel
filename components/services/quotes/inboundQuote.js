import SpinnerComp from '@/components/spinner/spinner';
import { quoteData } from '@/store/features/quote/quoteActions';
import Media from '@/utils/media';
import Image from 'next/image';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

export default function InboundQuote(props) {
  const { loading, quoteInfo, error } = useSelector((state) => state.quote);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mobile } = Media();

  console.log('quote info', quoteInfo);

  const submitForm = (data) => {
    props.setEstimatedShippingModal(true);
    // dispatch(quoteData(data));
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          padding: '20px',
          border: '1px solid #E7E7E7',
          marginTop: '10px',
        }}
      >
        <div
          onClick={() => {
            props.setInboundQuote(false);
            props.handleGetAbroadQuote();
          }}
          style={{
            display: 'flex',
            gap: '20px',
          }}
        >
          <Image
            style={{
              cursor: 'pointer',
            }}
            src="/img/arrowbackservice.png"
            width="14"
            height="14"
            alt="arrow"
          />
          <Form.Label
            style={{
              fontSize: '14px',
              fontWeight: '600',
              color: 'rgba(21, 21, 21, 0.8)',
              marginTop: '-3px',
              cursor: 'pointer',
            }}
          >
            Back
          </Form.Label>
        </div>
        <div
          style={
            mobile
              ? {
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '20px',
                }
              : {
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '20px 50px',
                }
          }
        >
          <Form.Label
            style={{
              fontSize: '14px',
              fontWeight: '600',
              color: 'rgba(21, 21, 21, 0.8)',
              marginTop: '-3px',
              cursor: 'pointer',
            }}
          >
            Get a quote with an estimated cost for your load.
          </Form.Label>
          <form
            onSubmit={handleSubmit(submitForm)}
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {error && (
              <span
                style={{
                  fontSize: '10px',
                  color: 'red',
                  fontStyle: 'italic',
                  marginTop: '-10px',
                }}
              >
                {error}
              </span>
            )}
            <Form.Label
              style={{
                fontSize: '12px',
                fontWeight: '400',
                color: 'rgba(21, 21, 21, 0.8)',
                cursor: 'pointer',
                marginTop: '20px',
              }}
            >
              Delivery From
            </Form.Label>
            <select
              style={
                errors.deliveryFrom
                  ? {
                      border: '1px solid red',
                      height: '40px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      padding: '5px 10px',
                    }
                  : {
                      border: '1px solid #E7E7E7',
                      height: '40px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      padding: '5px 10px',
                    }
              }
              {...register('deliveryFrom', { required: true })}
            >
              <option value="">Choose a country</option>
              <option value="usa">USA</option>
              <option value="england">England</option>
              <option value="ghana">Ghana</option>
              <option value="australia">Australia</option>
              <option value="cameroun">Cameroun</option>
              <option value="ivorycoast">Ivory Coast</option>
              <option value="canada">Canada</option>
            </select>
            {errors.deliveryFrom && errors.deliveryFrom.type === 'required' && (
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
                fontWeight: '400',
                color: 'rgba(21, 21, 21, 0.8)',
                cursor: 'pointer',
                marginTop: '20px',
              }}
            >
              Delivery To
            </Form.Label>
            <select
              style={
                errors.deliveryTo
                  ? {
                      border: '1px solid red',
                      height: '40px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      padding: '5px 10px',
                    }
                  : {
                      border: '1px solid #E7E7E7',
                      height: '40px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      padding: '5px 10px',
                    }
              }
              {...register('deliveryTo', { required: true })}
            >
              <option value="">Choose a country</option>
              <option value="usa">USA</option>
              <option value="england">England</option>
              <option value="ghana">Ghana</option>
              <option value="australia">Australia</option>
              <option value="cameroun">Cameroun</option>
              <option value="ivorycoast">Ivory Coast</option>
              <option value="canada">Canada</option>
            </select>
            {errors.deliveryTo && errors.deliveryTo.type === 'required' && (
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
                fontWeight: '400',
                color: 'rgba(21, 21, 21, 0.8)',
                cursor: 'pointer',
                marginTop: '20px',
              }}
            >
              Item Category
            </Form.Label>
            <select
              style={
                errors.category
                  ? {
                      border: '1px solid red',
                      height: '40px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      padding: '5px 10px',
                    }
                  : {
                      border: '1px solid #E7E7E7',
                      height: '40px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      padding: '5px 10px',
                    }
              }
              {...register('category', { required: true })}
            >
              <option value="">Choose a category</option>
              <option value="bag">Bag</option>
              <option value="shoes">Shoes</option>
              <option value="watches">watches</option>
              <option value="jewelries">Jewelries</option>
            </select>
            {errors.category && errors.category.type === 'required' && (
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
                fontWeight: '400',
                color: 'rgba(21, 21, 21, 0.8)',
                cursor: 'pointer',
                marginTop: '20px',
              }}
            >
              Quantity
            </Form.Label>
            <input
              style={
                errors.quantity
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
              {...register('quantity', { required: true })}
              placeholder="Add quantity"
            />
            {errors.quantity && errors.quantity.type === 'required' && (
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
                fontWeight: '400',
                color: 'rgba(21, 21, 21, 0.8)',
                cursor: 'pointer',
                marginTop: '20px',
              }}
            >
              Weight (KG)
            </Form.Label>
            <input
              style={
                errors.weight
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
              {...register('weight', { required: true })}
              placeholder="Add weight"
            />
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
            <Button
              type="submit"
              style={{
                marginTop: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '8px',
                background: '#00902F',
                width: mobile ? '100%' : '262px',
                height: '40px',
                color: 'white',
                border: 'none',
              }}
            >
              {loading ? <SpinnerComp /> : 'Get a Quote'}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
