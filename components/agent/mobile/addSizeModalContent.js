import Image from 'next/image';
import { Form } from 'react-bootstrap';

export default function AddSizeModalContent(props) {
  return (
    <>
      <input
        onMouseEnter={() => props.setApplySettings(true)}
        onMouseOut={() => props.setApplySettings(false)}
        style={
          props.errors
            ? {
                border: '1px solid red',
                padding: props.applySettings ? '0px 10px' : '0px 30px',
                fontSize: '12px',
                borderRadius: '5px',
                height: '56px',
                width: '100%',
                marginTop: '10px',
              }
            : {
                border: '1px solid #E7E7E7',
                padding: props.applySettings ? '0px 10px' : '0px 30px',
                fontSize: '12px',
                borderRadius: '5px',
                height: '56px',
                width: '100%',
                marginTop: '10px',
              }
        }
        type="text"
        {...props.register(`${props.name}`, {
          required: true,
          pattern: /^\d+$/,
        })}
        placeholder={props.applySettings ? '' : props.placeholder}
      />
      <Image
        style={{
          display: props.applySettings ? 'none' : 'flex',
          marginTop: '-34px',
          marginLeft: '10px',
        }}
        src={props.imgSrc}
        width={props.imgWidth}
        height={props.imgHeight}
        alt="weight"
      />
      <div
        style={{
          display: props.applySettings ? 'block' : 'none',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '10px',
            marginTop: '-50px',
            marginLeft: '10px',
          }}
        >
          <Image
            src={props.imgSrc}
            width={props.imgWidth}
            height={props.imgHeight}
            alt="weight"
          />
          <Form.Label
            style={{
              fontSize: '10px',
              color: 'rgba(166, 166, 166, 1)',
            }}
          >
            {props.caption}
          </Form.Label>
        </div>
      </div>
    </>
  );
}
