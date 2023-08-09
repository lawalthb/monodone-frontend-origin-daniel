import Image from 'next/image';
import { Button } from 'react-bootstrap';

export default function PackageDocBtn(props) {
  return (
    <>
      <Button
        onClick={
          props.caption === 'Package'
            ? () => props.handleIsPackage()
            : props.caption === 'Document'
            ? () => props.handleIsDocument()
            : undefined
        }
        style={
          props.isPackage || props.isDocument
            ? {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                padding: '10px 20px',
                background: 'rgba(249, 249, 249, 1)',
                gap: '5px',
                color: 'rgba(21, 21, 21, 1)',
                height: '80px',
                background: 'rgba(249, 249, 249, 1)',
                border: '1px solid rgba(0, 144, 47, 1)',
                fontSize: '14px',
                width: '48%',
              }
            : {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                padding: '10px 20px',
                background: 'rgba(249, 249, 249, 1)',
                gap: '5px',
                color: '#A6A6A6',
                height: '80px',
                background: 'rgba(249, 249, 249, 1)',
                border: '1px solid #A6A6A6',
                fontSize: '14px',
                width: '48%',
              }
        }
      >
        <Image src={props.imgSrc} width="20" height="18" alt="left-arrow" />
        {props.caption}
      </Button>
    </>
  );
}
