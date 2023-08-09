import Media from '@/utils/media';
import { Form } from 'react-bootstrap';

export default function LoadboardCargoFilterContent(props) {
  const { mobile, tabletAndDesktop } = Media();
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: mobile ? '20px' : '30px',
          width: '100%',
          marginBottom: props.marginBottom,
        }}
      >
        <Form.Label
          style={{
            fontSize: mobile ? '12px' : '14px',
            fontWeight: '400',
            color: '#808080',
          }}
        >
          {props.heading}
        </Form.Label>
        <select
          style={
            props.isCountryError ||
            props.isDeliveryLocationError ||
            props.isCargoTypeError ||
            props.isCityTownError
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
          {...props.register(props.name, { required: true })}
        >
          <option value="">{props.caption}</option>
          {props.contents.map((content, idx) => (
            <option key={idx} value={`${content}`}>
              {content}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
