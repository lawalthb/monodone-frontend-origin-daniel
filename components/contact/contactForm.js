import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import SpinnerComp from '../spinner/spinner';
import { useDispatch, useSelector } from 'react-redux';
import { contactMessage } from '@/store/features/contact/contactActions';

export default function ContactForm(props) {
  const { loading, contactInfo, error } = useSelector((state) => state.contact);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    dispatch(contactMessage(data));
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(submitForm)}
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          marginTop: '20px',
          gap: '20px',
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
        <input
          style={
            errors.fullName
              ? {
                  border: '1px solid red',
                  padding: '0px 10px',
                  fontSize: '12px',
                }
              : {
                  border: '1px solid #E7E7E7',
                  padding: '0px 10px',
                  fontSize: '12px',
                }
          }
          type="text"
          {...register('fullName', {
            required: true,
            pattern: /^[a-zA-Z\s]*$/i,
          })}
          placeholder="Your Full name"
        />
        {errors.fullName && errors.fullName.type === 'required' && (
          <span
            style={{
              fontSize: '10px',
              color: 'red',
              fontStyle: 'italic',
              marginTop: '-10px',
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
              marginTop: '-10px',
            }}
          >
            It must be all letters
          </span>
        )}
        <input
          style={
            errors.email
              ? {
                  border: '1px solid red',
                  padding: '0px 10px',
                  fontSize: '12px',
                }
              : {
                  border: '1px solid #E7E7E7',
                  padding: '0px 10px',
                  fontSize: '12px',
                }
          }
          type="email"
          {...register('email', {
            required: true,
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
          placeholder="Your email"
        />
        {errors.email && errors.email.type === 'required' && (
          <span
            style={{
              fontSize: '10px',
              color: 'red',
              fontStyle: 'italic',
              marginTop: '-10px',
            }}
          >
            This field is required
          </span>
        )}
        {errors.email && errors.email.type === 'pattern' && (
          <span
            style={{
              fontSize: '10px',
              color: 'red',
              fontStyle: 'italic',
              marginTop: '-10px',
            }}
          >
            Invalid email address
          </span>
        )}
        <input
          style={
            errors.phone
              ? {
                  border: '1px solid red',
                  padding: '0px 10px',
                  fontSize: '12px',
                }
              : {
                  border: '1px solid #E7E7E7',
                  padding: '0px 10px',
                  fontSize: '12px',
                }
          }
          type="text"
          {...register('phone', { required: true, pattern: /^\d+$/ })}
          placeholder="Your phone"
        />
        {errors.phone && errors.phone.type === 'required' && (
          <span
            style={{
              fontSize: '10px',
              color: 'red',
              fontStyle: 'italic',
              marginTop: '-10px',
            }}
          >
            This field is required
          </span>
        )}
        {errors.phone && errors.phone.type === 'pattern' && (
          <span
            style={{
              fontSize: '10px',
              color: 'red',
              fontStyle: 'italic',
              marginTop: '-10px',
            }}
          >
            It must be all numbers
          </span>
        )}
        <textarea
          style={
            errors.message
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
          {...register('message', { required: 'true' })}
          rows={5}
          placeholder="Your message"
        />
        {errors.message && errors.message.type === 'required' && (
          <span
            style={{
              fontSize: '10px',
              color: 'red',
              fontStyle: 'italic',
              marginTop: '-10px',
            }}
          >
            This field is required
          </span>
        )}
        <Button
          type="submit"
          style={{
            display: 'flex',
            color: 'white',
            padding: '7px',
            border: 'none',
            background: '#009027',
            width: '168px',
            height: '40px',
            fontSize: '12px',
            fontWeight: 500,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10px',
          }}
        >
          {loading ? <SpinnerComp /> : 'Send your message'}
        </Button>
      </form>
    </>
  );
}
