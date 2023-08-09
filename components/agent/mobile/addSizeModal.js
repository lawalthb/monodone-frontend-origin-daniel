import Image from 'next/image';
import { useEffect, useState } from 'react';
import GeneralModal from '@/components/modal/generalModal';
import { Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import AddSizeModalContent from './addSizeModalContent';

export default function AddSizeModal(props) {
  const [applySettingsLength, setApplySettingsLength] = useState(false);
  const [applySettingsWidth, setApplySettingsWidth] = useState(false);
  const [applySettingsHeight, setApplySettingsHeight] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    props.setAddSizeData(data);
    props.setAddSizeModal(false);
  };
  return (
    <>
      <GeneralModal
        size="md"
        show={props.addSizeModal}
        onHide={() => {
          props.setAddSizeModal(false);
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
              props.setAddSizeModal(false);
            }}
            style={{
              position: 'absolute',
              top: '-1rem',
              left: '-0.8rem',
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
              fontSize: '16px',
              fontWeight: 600,
            }}
          >
            Add a size
          </div>
          <form
            onSubmit={handleSubmit(submitForm)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <AddSizeModalContent
                setApplySettings={setApplySettingsWidth}
                applySettings={applySettingsWidth}
                errors={errors.width}
                name="width"
                placeholder="Width, cm"
                imgSrc="/img/agentmobilewidth.png"
                caption="Width, cm"
                register={register}
                imgWidth="9"
                imgHeight="14"
              />
              {errors.width && errors.width.type === 'required' && (
                <span
                  style={{
                    fontSize: '10px',
                    color: 'red',
                    fontStyle: 'italic',
                    marginTop: '25px',
                  }}
                >
                  This field is required
                </span>
              )}
              {errors.width && errors.width.type === 'pattern' && (
                <span
                  style={{
                    fontSize: '10px',
                    color: 'red',
                    fontStyle: 'italic',
                    marginTop: '25px',
                  }}
                >
                  It must be all numbers
                </span>
              )}
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <AddSizeModalContent
                setApplySettings={setApplySettingsLength}
                applySettings={applySettingsLength}
                errors={errors.length}
                name="length"
                placeholder="Length, cm"
                imgSrc="/img/agentmobilelength.png"
                caption="Length, cm"
                register={register}
                imgWidth="17"
                imgHeight="12"
              />
              {errors.length && errors.length.type === 'required' && (
                <span
                  style={{
                    fontSize: '10px',
                    color: 'red',
                    fontStyle: 'italic',
                    marginTop: '25px',
                  }}
                >
                  This field is required
                </span>
              )}
              {errors.length && errors.length.type === 'pattern' && (
                <span
                  style={{
                    fontSize: '10px',
                    color: 'red',
                    fontStyle: 'italic',
                    marginTop: '25px',
                  }}
                >
                  It must be all numbers
                </span>
              )}
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <AddSizeModalContent
                setApplySettings={setApplySettingsHeight}
                applySettings={applySettingsHeight}
                errors={errors.height}
                name="height"
                placeholder="Height, cm"
                imgSrc="/img/agentmobileheight.png"
                caption="Height, cm"
                register={register}
                imgWidth="18"
                imgHeight="14"
              />
              {errors.height && errors.height.type === 'required' && (
                <span
                  style={{
                    fontSize: '10px',
                    color: 'red',
                    fontStyle: 'italic',
                    marginTop: '25px',
                  }}
                >
                  This field is required
                </span>
              )}
              {errors.height && errors.height.type === 'pattern' && (
                <span
                  style={{
                    fontSize: '10px',
                    color: 'red',
                    fontStyle: 'italic',
                    marginTop: '25px',
                  }}
                >
                  It must be all numbers
                </span>
              )}
            </div>
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
                color: 'white',
                fontSize: '12px',
                marginLeft: '5px',
                fontWeight: '500',
              }}
            >
              ADD
            </Button>
          </form>
        </Modal.Body>
      </GeneralModal>
    </>
  );
}
