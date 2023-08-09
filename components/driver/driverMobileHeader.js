import Image from 'next/image';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';

export default function DriverMobileHeader(props) {
  return (
    <>
      <Button
        onClick={
          props.caption === 'Broadcast'
            ? () => props.handleBroadcast()
            : props.caption === 'Orders'
            ? () => props.handleOrder()
            : props.caption === 'Settings'
            ? () => props.handleSettings()
            : undefined
        }
        style={
          (props.broadcast && props.caption === 'Broadcast') ||
          (props.order && props.caption === 'Orders') ||
          (props.settings && props.caption === 'Settings')
            ? {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'rgba(0, 144, 47, 1)',
                border: '1px solid #7CC427',
                borderRadius: '5px',
                padding: '5px',
                color: '#FFFFFF',
                width: '31%',
                height: '80px',
                gap: '5px',
              }
            : {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#F9F9F9',
                border: '1px solid #7CC427',
                borderRadius: '5px',
                padding: '5px',
                color: 'rgba(21, 21, 21, 1)',
                width: '31%',
                height: '80px',
                gap: '5px',
              }
        }
      >
        <Image
          style={{
            cursor: 'pointer',
            marginTop: '7px',
          }}
          src={props.imgSrc}
          width={props.imgWidth}
          height={props.imgHeight}
          alt="logo"
        />
        {props.caption}
      </Button>
    </>
  );
}
