import { Button } from 'react-bootstrap';

export default function PackagesCashoutSwitches(props) {
  return (
    <>
      <Button
        onClick={
          props.caption === 'Packages'
            ? () => props.handlePackages()
            : props.caption === 'Cash out'
            ? () => props.handleCashout()
            : undefined
        }
        style={
          props.packages || props.cashout
            ? {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#FFFFFF',
                height: '36px',
                color: '#151515',
                borderRadius: '5px',
                textTransform: 'uppercase',
                border: '0.5px solid rgba(0, 0, 0, 0.04)',
                fontSize: '12px',
                width: '50%',
                fontweight: 500,
                boxShadow:
                  '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
              }
            : {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'rgba(238, 238, 239, 1)',
                height: '36px',
                color: '#A6A6A6',
                borderRadius: '5px',
                textTransform: 'uppercase',
                border: 'none',
                fontSize: '12px',
                width: '50%',
                fontweight: 500,
              }
        }
      >
        {props.caption}
      </Button>
    </>
  );
}
