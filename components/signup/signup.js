import { Button, Form, Modal } from 'react-bootstrap';
import GeneralModal from '../modal/generalModal';
import Image from 'next/image';
import LoginSignupCommon from '../common/loginSignup';
import { useForm } from 'react-hook-form';
import { BsEyeSlashFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import Providers from '../common/providers';

async function createUser(email, password, fullName) {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password, fullName }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
}

export default function Signup(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (registered) {
      props.setLogin(true);
      props.setSignup(false);
    }
  });

  const submitForm = async (data) => {
    setLoading(true);
    try {
      const result = await createUser(data.email, data.password, data.fullName);
      setRegistered(true);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <GeneralModal
        size="md"
        show={props.signup}
        onHide={() => {
          props.setSignup(false);
        }}
        style={props.style}
      >
        <Modal.Body
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            paddingBottom: '30px',
          }}
        >
          <div
            onClick={() => {
              props.setSignup(false);
            }}
            style={{
              position: 'absolute',
              top: '-1rem',
              right: '-0.8rem',
              cursor: 'pointer',
            }}
          >
            <Image src="/img/close.png" width="14" height="14" alt="close" />
          </div>
          <LoginSignupCommon
            caption1="Welcome To Monolog"
            caption2="Create your account to grow with us."
          />
          <form
            onSubmit={handleSubmit(submitForm)}
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              marginTop: '20px',
            }}
          >
              {props.service && props.service == 'monolog' && 
                <>
                  <Form.Label
                    style={{
                      fontSize: '12px',
                      fontWeight: '500',
                      color: 'rgba(38, 38, 38, 1)',
                      cursor: 'pointer',
                    }}
                  >
                    I am signing up as a/an
                  </Form.Label>
                  <select style={
                      errors.user
                        ? {
                            border: '1px solid red',
                            padding: '0px 10px',
                            fontSize: '12px',
                            height: '40px',
                          }
                        : {
                            border: '1px solid #E7E7E7',
                            padding: '0px 10px',
                            fontSize: '12px',
                            height: '40px',
                          }
                    }
                    {...register('user', {
                      required: true,
                    })}
                    placeholder=""
                  >
                    <option value='Agent'>Agent</option>
                    <option value='Agent'>Customer</option>
                  </select>
                  {errors.user && errors.user.type === 'required' && (
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
                </>
              }
            <Form.Label
              style={{
                fontSize: '12px',
                fontWeight: '500',
                color: 'rgba(38, 38, 38, 1)',
                cursor: 'pointer',
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
              placeholder="Kc Fedigo"
            />
            {errors.fullName && errors.fullName.type === 'required' && (
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
            {errors.fullName && errors.fullName.type === 'pattern' && (
              <span
                style={{
                  fontSize: '10px',
                  color: 'red',
                  fontStyle: 'italic',
                }}
              >
                It must be all letters
              </span>
            )}
            <Form.Label
              style={{
                fontSize: '12px',
                fontWeight: '500',
                color: 'rgba(38, 38, 38, 1)',
                cursor: 'pointer',
                marginTop: '10px',
              }}
            >
              Email
            </Form.Label>
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
                fontWeight: '500',
                color: 'rgba(38, 38, 38, 1)',
                cursor: 'pointer',
                marginTop: '10px',
              }}
            >
              Password
            </Form.Label>
            <input
              style={
                errors.password
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
              type={showPassword ? 'text' : 'password'}
              {...register('password', {
                required: true,
                pattern: /^[a-zA-Z0-9-]{8,}$/,
              })}
              placeholder="Kcfedio124"
            />
            {showPassword ? (
              <BsEyeSlashFill
                onClick={() => setShowPassword(false)}
                style={{
                  marginLeft: 'auto',
                  marginTop: '-28px',
                  marginRight: '10px',
                  cursor: 'pointer',
                }}
              />
            ) : (
              <Image
                onClick={() => setShowPassword(true)}
                style={{
                  marginLeft: 'auto',
                  marginTop: '-28px',
                  marginRight: '10px',
                  cursor: 'pointer',
                }}
                src="/img/showpassword.png"
                width="20"
                height="15"
                alt="close"
              />
            )}
            {errors.password && errors.password.type === 'required' && (
              <span
                style={{
                  fontSize: '10px',
                  color: 'red',
                  fontStyle: 'italic',
                  marginTop: '15px',
                }}
              >
                This field is required
              </span>
            )}
            {errors.password && errors.password.type === 'pattern' && (
              <span
                style={{
                  fontSize: '10px',
                  color: 'red',
                  fontStyle: 'italic',
                  marginTop: '15px',
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
                marginTop: '50px',
              }}
            >
              <Button
                disabled={loading}
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
                {loading ? 'Creating' : 'Create account'}
              </Button>
            </div>
            <div
              style={{
                display: 'flex',
                marginLeft: 'auto',
                marginTop: '10px',
                gap: '6px',
              }}
            >
              <Form.Label
                style={{
                  fontSize: '12px',
                  fontWeight: '500',
                  color: 'rgba(38, 38, 38, 1)',
                  marginTop: '10px',
                }}
              >
                Already have account?
              </Form.Label>
              <Form.Label
                onClick={() => {
                  props.setLogin(true);
                  props.setSignup(false);
                }}
                style={{
                  fontSize: '12px',
                  fontWeight: '500',
                  color: 'rgba(0, 144, 47, 1)',
                  cursor: 'pointer',
                  marginTop: '10px',
                }}
              >
                Sign in
              </Form.Label>
            </div>
            <Providers />
          </form>
        </Modal.Body>
      </GeneralModal>
    </>
  );
}
