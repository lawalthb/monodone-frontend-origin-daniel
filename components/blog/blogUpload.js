import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import GeneralModal from '../modal/generalModal';
import { useForm, Controller } from 'react-hook-form';
import Media from '@/utils/media';
import { useDispatch, useSelector } from 'react-redux';
import { blogMessage } from '@/store/features/blog/blogActions';
import SpinnerComp from '../spinner/spinner';

export default function BlogUpload(props) {
  const [blogPicture, setBlogPicture] = useState();
  const [blogPictureName, setBlogPictureName] = useState();
  const router = useRouter();
  const { loading, blogInfo, error, success } = useSelector(
    (state) => state.blog
  );
  const dispatch = useDispatch();
  const { mobile } = Media();

  console.log('blog info', blogInfo);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleFileChange = (event) => {
    const fileUploaded = event.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
      setBlogPicture(e.target.result);
      setBlogPictureName(fileUploaded);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  useEffect(() => {
    if (success) {
      props.setSuccessModal(true);
      props.setBlogUpload(false);
      router.push('/blog');
      return;
    }
    if (error) {
      props.setFailureModal(true);
    }
  }, [error, router, success, props]);

  const submitForm = (data) => {
    const formData = new FormData();
    data = {
      ...data,
      blogPicture,
      blogPictureName: blogPictureName.name,
    };
    dispatch(blogMessage(data));
  };

  return (
    <>
      <GeneralModal
        size="lg"
        show={props.blogUpload}
        onHide={() => {
          props.setBlogUpload(false);
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
              props.setBlogUpload(false);
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
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '20px',
              fontWeight: 600,
            }}
          >
            Blog Upload
          </div>
          <p
            style={{
              fontSize: '12px',
              textAlign: 'center',
              marginTop: '20px',
            }}
          >
            Select the document you want to upload.
          </p>
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
                color: '#262626',
                cursor: 'pointer',
                marginTop: '20px',
              }}
            >
              Title
            </Form.Label>
            <input
              style={
                errors.title
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
              type="text"
              {...register('title', {
                required: true,
              })}
              placeholder="Enter title"
            />
            {errors.title && errors.title.type === 'required' && (
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
            <Form.Label
              style={{
                fontSize: '12px',
                fontWeight: '400',
                color: '#262626',
                cursor: 'pointer',
                marginTop: '20px',
              }}
            >
              Write a blog
            </Form.Label>
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
                  // marginTop: '-10px',
                }}
              >
                This field is required
              </span>
            )}
            <Form.Label
              style={{
                fontSize: '12px',
                fontWeight: '400',
                color: '#262626',
                cursor: 'pointer',
                marginTop: '20px',
              }}
            >
              Upload a photo
            </Form.Label>
            <div
              style={{
                display: 'flex',
                gap: '20px',
              }}
            >
              <Button
                onClick={handleClick}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  width: '120px',
                  height: '40px',
                  border: '1px solid #E7E7E7',
                  background: 'transparent',
                  padding: '7px',
                  cursor: 'pointer',
                }}
              >
                <Image
                  src="/img/uploadicon.png"
                  width="13"
                  height="13"
                  alt="icon"
                />
                <Form.Label
                  style={{
                    fontSize: '12px',
                    fontWeight: '500',
                    color: '#7CC427',
                    cursor: 'pointer',
                    marginTop: '8px',
                  }}
                >
                  Choose file
                </Form.Label>
              </Button>
              <Form.Label
                style={{
                  fontSize: '12px',
                  fontWeight: '500',
                  color: '#A6A6A6',
                  cursor: 'pointer',
                  marginTop: '8px',
                }}
              >
                {blogPictureName ? blogPictureName.name : 'No picture chosen'}
              </Form.Label>
            </div>
            <input
              type="file"
              ref={hiddenFileInput}
              onChange={handleFileChange}
              style={{
                display: 'none',
              }}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px',
              }}
            >
              <Button
                type="submit"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  width: mobile ? '100%' : '530px',
                  height: '40px',
                  border: 'none',
                  background: '#00902F',
                  padding: '7px',
                  cursor: 'pointer',
                  color: 'white',
                  fontSize: '12px',
                }}
              >
                {loading ? <SpinnerComp /> : 'Submit Blog'}
              </Button>
            </div>
          </form>
        </Modal.Body>
      </GeneralModal>
    </>
  );
}
