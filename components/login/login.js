import Image from 'next/image';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';
import { signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';
import GeneralModal from '../modal/generalModal';
import { Button, Form, Modal } from 'react-bootstrap';
import LoginSignupCommon from '../common/loginSignup';
import { useForm } from 'react-hook-form';
import { BsEyeSlashFill } from 'react-icons/bs';
import Providers from '../common/providers';
import ForgotPassword from './forgotPassword';

export default function Login(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    }).then(({ ok, error }) => {
      if (ok) {
        const returnUrl = router.query?.callbackUrl ?? '/';
        router.push(returnUrl);
        // router.push(router.query.from ? decodeURIComponent(router.query.from) : '/')
        props.setLogin(false);
      } else {
        console.log(error);
        setError('Credentials do not match!');
      }
    });
  };

  return (
    <>
      <GeneralModal
        size="md"
        show={props.login}
        onHide={() => {
          props.setLogin(false);
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
              props.setLogin(false);
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
          {forgotPassword ? (
            <ForgotPassword />
          ) : (
            <>
              <LoginSignupCommon
                caption1="Welcome To Monolog"
                caption2="Login to your account."
              />
              <form
                onSubmit={handleSubmit(submitForm)}
                style={{
                  width: '100%',
                  display: 'grid',
                  marginTop: '20px',
                }}
              >
                {error && (
                  <span
                    style={{
                      fontSize: '12px',
                      color: 'red',
                      fontStyle: 'italic',
                      textAlign: 'center',
                      marginTop: '-10px',
                      margin:'0',
                    }}
                  >
                    {error}
                  </span>
                )}
              
                    
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
                  <select 
                    style={
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
                    <p
                      style={{
                        fontSize: '10px',
                        color: 'red',
                        fontStyle: 'italic',
                      }}
                    >
                      This field is required
                    </p>
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
                  <p
                    style={{
                      fontSize: '10px',
                      color: 'red',
                      fontStyle: 'italic',
                      marginTop: '-10px',
                      margin:'0',
                    }}
                  >
                    This field is required
                  </p>
                )}
                {errors.email && errors.email.type === 'pattern' && (
                  <p
                    style={{
                      fontSize: '10px',
                      color: 'red',
                      fontStyle: 'italic',
                      marginTop: '-10px',
                      margin:'0',
                    }}
                  >
                    Invalid email address
                  </p>
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
                  <p
                    style={{
                      fontSize: '10px',
                      color: 'red',
                      fontStyle: 'italic',
                      marginTop: '-10px',
                      margin:'0',
                    }}
                  >
                    This field is required
                  </p>
                )}
                {errors.password && errors.password.type === 'pattern' && (
                  <p
                    style={{
                      fontSize: '10px',
                      color: 'red',
                      fontStyle: 'italic',
                      marginTop: '-10px',
                      margin:'0',
                    }}
                  >
                    Password must be more that 8 characters
                  </p>
                )}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '30px',
                    width: '100%',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      gap: '10px',
                    }}
                  >
                    <div
                      onClick={() => setRememberMe((prevState) => !prevState)}
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '7px',
                        height: '24px',
                        width: '24px',
                        border: '1px solid rgba(128, 128, 128, 1)',
                        borderRadius: '4px',
                        cursor: 'pointer',
                      }}
                    >
                      {rememberMe ? (
                        <Image
                          src="/img/remembermecheck.png"
                          width="14"
                          height="10"
                          alt="close"
                        />
                      ) : undefined}
                    </div>
                    <Form.Label
                      onClick={() => setRememberMe((prevState) => !prevState)}
                      style={{
                        fontSize: '12px',
                        fontWeight: '400',
                        color: 'rgba(128, 128, 128, 1)',
                        cursor: 'pointer',
                        marginTop: '3px',
                      }}
                    >
                      Remember me
                    </Form.Label>
                  </div>
                  <Form.Label
                    onClick={() => setForgotPassword(true)}
                    style={{
                      fontSize: '12px',
                      fontWeight: '400',
                      color: 'rgba(0, 144, 47, 1)',
                      cursor: 'pointer',
                      marginTop: '3px',
                    }}
                  >
                    Forgot Password?
                  </Form.Label>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '50px',
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
                    Login
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
                    Don’t have an account yet?
                  </Form.Label>
                  <Form.Label
                    onClick={() => {
                      props.setSignup(true);
                      props.setLogin(false);
                    }}
                    style={{
                      fontSize: '12px',
                      fontWeight: '500',
                      color: 'rgba(0, 144, 47, 1)',
                      cursor: 'pointer',
                      marginTop: '10px',
                    }}
                  >
                    Sign Up
                  </Form.Label>
                </div>
                <Providers />
              </form>
            </>
          )}
        </Modal.Body>
      </GeneralModal>
    </>
  );
}
