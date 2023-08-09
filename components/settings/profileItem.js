import PropTypes from 'prop-types';

export default function ProfileItem(props) {
  return (
    <div
      style={{
        fontFamily: 'Poppins',
        paddingBottom: '9px',
        borderBottom: '1px solid #D1D1D1',
      }}
    >
      <p
        style={{
          color: '#808080',
          fontWeight: 400,
          fontSize: '14px',
          margin: '0px',
        }}
      >
        {props.name}
      </p>
      <strong
        style={{
          color: '#151515',
          fontWeight: 600,
          fontSize: '18px',
        }}
      >
        {props.value}
      </strong>
    </div>
  );
}

ProfileItem.propType = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
