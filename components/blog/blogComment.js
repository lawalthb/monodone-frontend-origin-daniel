import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import SpinnerComp from '../spinner/spinner';
import { useDispatch, useSelector } from 'react-redux';
import { blogCommentMessage } from '@/store/features/blogComment/blogCommentActions';

export default function BlogComment(props) {
  const { loading, blogCommentInfo, error } = useSelector(
    (state) => state.blogComment
  );
  const dispatch = useDispatch();

  console.log('comment info', blogCommentInfo);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    dispatch(blogCommentMessage(data));
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(submitForm)}
        style={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          marginTop: '50px',
        }}
      >
        <Form.Label
          style={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontSize: '14px',
            fontWeight: 600,
            color: 'black',
            letterSpacing: '0.02em',
          }}
        >
          What’s your take on this topic?
        </Form.Label>
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '48%',
            }}
          >
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
              placeholder="Your name"
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
          </div>
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
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '48%',
            }}
          >
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
          </div>
        </div>
        <textarea
          style={
            errors.message
              ? {
                  border: '1px solid red',
                  padding: '10px',
                  fontSize: '12px',
                  width: '100%',
                  marginTop: '20px',
                }
              : {
                  border: '1px solid #E7E7E7',
                  padding: '10px',
                  fontSize: '12px',
                  width: '100%',
                  marginTop: '20px',
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
            }}
          >
            This field is required
          </span>
        )}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginTop: '20px',
          }}
        >
          <Form.Check type={'checkbox'} />
          <Form.Label
            style={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontSize: '10px',
              fontWeight: 400,
              color: 'black',
              letterSpacing: '0.02em',
              marginTop: '6px',
            }}
          >
            Remember my name and email for next time.
          </Form.Label>
        </div>
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
            marginTop: '20px',
          }}
        >
          {loading ? <SpinnerComp /> : 'Post Comment'}
        </Button>
      </form>
    </>
  );
}
