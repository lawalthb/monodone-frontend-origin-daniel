import Media from '@/utils/media';
import { Button, Form } from 'react-bootstrap';

export default function AddressOfficeSwitches(props) {
  const { mobile, tabletAndDesktop } = Media();
  return (
    <div
      style={{
        display: 'flex',
        marginTop: '10px',
      }}
    >
      <Button
        onClick={props.handleIsAddress}
        style={
          props.isAddress
            ? {
                background: '#FFFFFF',
                padding: '5px 10px 2px 10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '406px',
                border: '0.5px solid rgba(0, 0, 0, 0.04)',
                boxShadow:
                  '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
                borderRadius: '6px',
              }
            : {
                background: '#EEEEEF',
                padding: '5px 10px 2px 10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '406px',
                border: '0.5px solid rgba(0, 0, 0, 0.04)',
                borderRadius: '6px',
              }
        }
      >
        <Form.Label
          style={
            props.isAddress
              ? {
                  color: '#151515',
                  fontSize: '12px',
                  marginLeft: '5px',
                  fontWeight: '500',
                }
              : {
                  color: '#A6A6A6',
                  fontSize: '12px',
                  marginLeft: '5px',
                  fontWeight: '500',
                }
          }
        >
          ADDRESS
        </Form.Label>
      </Button>
      <Button
        onClick={props.handleIsOffice}
        style={
          props.isOffice
            ? {
                background: '#FFFFFF',
                padding: '5px 10px 2px 10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '406px',
                border: '0.5px solid rgba(0, 0, 0, 0.04)',
                boxShadow:
                  '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
                borderRadius: '6px',
              }
            : {
                background: '#EEEEEF',
                padding: '5px 10px 2px 10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '406px',
                border: '0.5px solid rgba(0, 0, 0, 0.04)',
                borderRadius: '6px',
              }
        }
      >
        <Form.Label
          style={
            props.isOffice
              ? {
                  color: '#151515',
                  fontSize: '12px',
                  marginLeft: '5px',
                  fontWeight: '500',
                }
              : {
                  color: '#A6A6A6',
                  fontSize: '12px',
                  marginLeft: '5px',
                  fontWeight: '500',
                }
          }
        >
          OFFICE
        </Form.Label>
      </Button>
    </div>
  );
}
