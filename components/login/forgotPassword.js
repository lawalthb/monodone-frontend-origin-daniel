import Media from '@/utils/media';
import Image from 'next/image';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export default function ForgotPassword(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mobile } = Media();
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <Image src="/img/success-logo.png" width="47" height="34" alt="logo" />
        <Form.Label
          style={{
            fontSize: '18px',
            textAlign: 'center',
            color: 'black',
            fontWeight: 500,
          }}
        >
          Reset Password
        </Form.Label>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '20px',
          width: '100%',
        }}
      >
        <Form.Label
          style={{
            fontSize: '12px',
            fontWeight: '400',
            color: 'rgba(38, 38, 38, 1)',
            cursor: 'pointer',
            marginTop: '3px',
          }}
        >
          Enter email address
        </Form.Label>
        <Form.Label
          style={{
            fontSize: mobile ? '10px' : '12px',
            fontWeight: '400',
            color: 'rgba(0, 144, 47, 1)',
            cursor: 'pointer',
            marginTop: '3px',
          }}
        >
          Reset with phone number
        </Form.Label>
      </div>
      <input
        style={
          errors.email
            ? {
                border: '1px solid red',
                padding: '0px 10px',
                fontSize: '12px',
                marginTop: '-10px',
              }
            : {
                border: '1px solid #E7E7E7',
                padding: '0px 10px',
                fontSize: '12px',
                marginTop: '-10px',
              }
        }
        type="email"
        {...register('email', {
          required: true,
          pattern:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}
        placeholder="kcfedigo@gmail.com"
      />
      {errors.email && errors.email.type === 'required' && (
        <span
          style={{
            fontSize: '10px',
            color: 'red',
            fontStyle: 'italic',
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
          }}
        >
          Invalid email address
        </span>
      )}
      <Form.Label
        style={{
          fontSize: '12px',
          fontWeight: '400',
          color: 'rgba(38, 38, 38, 1)',
          cursor: 'pointer',
          marginTop: '3px',
        }}
      >
        Enter 6-digit code
      </Form.Label>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          marginTop: '-10px',
        }}
      >
        <input
          style={
            errors.code
              ? {
                  border: '1px solid red',
                  padding: '0px 10px',
                  fontSize: '12px',
                  borderRadius: '4px',
                  width: mobile ? '75%' : '80%',
                }
              : {
                  border: '1px solid #E7E7E7',
                  padding: '0px 10px',
                  fontSize: '12px',
                  borderRadius: '4px',
                  width: mobile ? '75%' : '80%',
                }
          }
          type="number"
          {...register('code', { required: true })}
          placeholder="Enter code"
        />
        <Button
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: mobile ? '30%' : '25%',
            height: '40px',
            background: 'transparent',
            border: '1px solid #E7E7E7',
            color: 'rgba(0, 144, 47, 1)',
            fontSize: mobile ? '10px' : '12px',
          }}
        >
          Send code
        </Button>
      </div>
      {errors.code && errors.code.type === 'required' && (
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
          color: 'rgba(38, 38, 38, 1)',
          cursor: 'pointer',
          marginTop: '3px',
        }}
      >
        Old password
      </Form.Label>
      <input
        style={
          errors.oldPassword
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
        type={'password'}
        {...register('oldPassword', {
          required: true,
          pattern: /^[a-zA-Z0-9-]{8,}$/,
        })}
        placeholder="Kcfedio124"
      />
      {errors.oldPassword && errors.oldPassword.type === 'required' && (
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
      {errors.oldPassword && errors.oldPassword.type === 'pattern' && (
        <span
          style={{
            fontSize: '10px',
            color: 'red',
            fontStyle: 'italic',
            marginTop: '-10px',
          }}
        >
          Password must be more that 8 characters
        </span>
      )}
      <div
        style={{
          display: 'flex',
        }}
      >
        <Form.Label
          style={{
            fontSize: '12px',
            fontWeight: '400',
            color: 'rgba(38, 38, 38, 1)',
            cursor: 'pointer',
            marginTop: '3px',
          }}
        >
          New password
        </Form.Label>
        <Form.Label
          style={{
            fontSize: '12px',
            fontWeight: '400',
            color: 'rgba(242, 8, 8, 1)',
            cursor: 'pointer',
            marginTop: '3px',
          }}
        >
          *
        </Form.Label>
      </div>
      <input
        style={
          errors.newPassword
            ? {
                border: '1px solid red',
                padding: '0px 10px',
                fontSize: '12px',
                marginTop: '-10px',
              }
            : {
                border: '1px solid #E7E7E7',
                padding: '0px 10px',
                fontSize: '12px',
                marginTop: '-10px',
              }
        }
        type={'password'}
        {...register('newPassword', {
          required: true,
          pattern: /^[a-zA-Z0-9-]{8,}$/,
        })}
        placeholder="Kcfedio124"
      />
      {errors.newPassword && errors.newPassword.type === 'required' && (
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
      {errors.newPassword && errors.newPassword.type === 'pattern' && (
        <span
          style={{
            fontSize: '10px',
            color: 'red',
            fontStyle: 'italic',
            marginTop: '-10px',
          }}
        >
          Password must be more that 8 characters
        </span>
      )}
      <div
        style={{
          display: 'flex',
        }}
      >
        <Form.Label
          style={{
            fontSize: '12px',
            fontWeight: '400',
            color: 'rgba(38, 38, 38, 1)',
            cursor: 'pointer',
            marginTop: '3px',
          }}
        >
          Confirm New password
        </Form.Label>
        <Form.Label
          style={{
            fontSize: '12px',
            fontWeight: '400',
            color: 'rgba(242, 8, 8, 1)',
            cursor: 'pointer',
            marginTop: '3px',
          }}
        >
          *
        </Form.Label>
      </div>
      <input
        style={
          errors.confirmNewPassword
            ? {
                border: '1px solid red',
                padding: '0px 10px',
                fontSize: '12px',
                marginTop: '-10px',
              }
            : {
                border: '1px solid #E7E7E7',
                padding: '0px 10px',
                fontSize: '12px',
                marginTop: '-10px',
              }
        }
        type={'password'}
        {...register('confirmNewPassword', {
          required: true,
          pattern: /^[a-zA-Z0-9-]{8,}$/,
        })}
        placeholder="Kcfedio124"
      />
      {errors.confirmNewPassword &&
        errors.confirmNewPassword.type === 'required' && (
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
      {errors.confirmNewPassword &&
        errors.confirmNewPassword.type === 'pattern' && (
          <span
            style={{
              fontSize: '10px',
              color: 'red',
              fontStyle: 'italic',
              marginTop: '-10px',
            }}
          >
            Password must be more that 8 characters
          </span>
        )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '30px',
        }}
      >
        <Button
          type="submit"
          style={{
            display: 'flex',
            background: 'rgba(0, 144, 47, 1)',
            color: 'white',
            width: '100%',
            height: '40px',
            border: 'none',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '12px',
          }}
        >
          Confirm
        </Button>
      </div>
    </>
  );
}
