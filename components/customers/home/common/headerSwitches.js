import Media from '@/utils/media';
import { Form } from 'react-bootstrap';

export default function HeaderSwitches(props) {
  const { mobile, tabletAndDesktop } = Media();
  return (
    <Form.Label
      onClick={
        props.caption === 'Freelancer'
          ? () => props.handleFreelancer()
          : props.caption === 'Company'
          ? () => props.handleCompany()
          : props.caption === 'Drivers (ONLy)'
          ? () => props.handleDrivers()
          : props.caption === 'Office'
          ? () => props.handleOffice()
          /* : props.caption === 'Store'
          ? () => props.handleStore() */
          : props.caption === 'Driver Manager'
          ? () => props.handleDriverManager()
          : props.caption === 'Truck (ONLY)'
          ? () => props.handleTruckOnly()
          : undefined
      }
      style={
        props.freelancer || props.company || props.drivers || props.office /* || props.store */ || props.driverManager || props.truckOnly
          ? {
              fontSize: mobile ? '11px' : '12px',
              fontWeight: 500,
              color: 'rgba(0, 144, 47, 1)',
              textTransform: 'uppercase',
              cursor: 'pointer',
              paddingBottom: '6px',
              borderBottom: '1px solid rgba(0, 144, 47, 1)',
              marginTop: '5px',
            }
          : {
              fontSize: mobile ? '11px' : '12px',
              fontWeight: 500,
              color: 'rgba(166, 166, 166, 1)',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }
      }
    >
      {props.caption}
    </Form.Label>
  );
}
