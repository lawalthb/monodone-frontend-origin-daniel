import PropTypes from 'prop-types';
import { AiOutlineUser } from 'react-icons/ai';
import ProfileItem from './profileItem';
import { BsTrash } from 'react-icons/bs';
import { Button } from 'react-bootstrap';

export default function ViewProfileFormDesktop(props) {
  return (
    <div
      style={{
        padding: '44px 40px',
      }}
    >
      <div
        style={{
          display: 'flex',
          columnGap: '16px',
          alignItems: 'center',
          paddingBottom: '40px',
          borderBottom: '1px solid #D1D1D1',
          marginBottom: '6px',
        }}
      >
        <div
          style={{
            background: 'rgba(124, 196, 39, 0.3)',
            width: '54px',
            height: '54px',
            borderRadius: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            color: '#00902F',
            fontSize: '1.875rem',
          }}
        >
          <AiOutlineUser />
        </div>
        <div
          style={{
            fontFamily: 'Poppins',
          }}
        >
          <strong style={{ fontWeight: 600, fontSize: '22px' }}>
            {props.user.name}
          </strong>
          <p
            style={{
              margin: '8px 0 0 0',
              color: '#8D8D8D',
              fontWeight: 400,
              fontSize: '16px',
            }}
          >
            {props.user.phoneNumber}
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '20px' }}>
        <ProfileItem name="Office number" value={props.user.officeNumber} />
        <ProfileItem name="Office address" value={props.user.officeAddress} />
        <ProfileItem
          name="Allowable weight"
          value={props.user.allowableWeight}
        />
        <ProfileItem name="Dimensions" value={props.user.allowableHeight} />
      </div>
      <div
        style={{
          marginTop: '134px',
          paddingTop: '16px',
          borderTop: '1px solid #E7E7E7',
        }}
      >
        <Button
          style={{
            columnGap: '0.8rem',
            display: 'flex',
            alignItems: 'center',
            background: 'none',
            border: 'none',
            color: '#151515',
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: '16px',
          }}
        >
          <BsTrash style={{ color: '#A6A6A6' }} />
          <span>Delete account</span>
        </Button>
      </div>
    </div>
  );
}

ViewProfileFormDesktop.propTypes = {
  user: PropTypes.object.isRequired,
};
