import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { BsExclamationOctagon } from 'react-icons/bs';

// TODO: Check for form value edit
export default function EditProfileFormDesktop({
  userData,
  setUserData,
  onCancelRequest,
  isPendingApproval,
}) {
  const handleInputChange = (e) => {
    const input = e.target;
    setUserData({ ...userData, [input.name]: input.value });
  };
  return (
    <div
      style={{
        padding: '44px 40px',
      }}
    >
      <Form
        style={{
          ...(isPendingApproval && { opacity: 0.5, pointerEvents: 'none' }),
          display: 'flex',
          flexDirection: 'column',
          rowGap: '24px',
        }}
      >
        <Form.Group>
          <Form.Label
            htmlFor="inputName"
            style={{
              color: '#808080',
              fontFamily: 'Poppins',
              fontSize: '16px ',
            }}
          >
            Name
          </Form.Label>
          <Form.Control
            type="text"
            id="inputName"
            name="name"
            defaultValue={userData.name}
            autoComplete="name"
            onChange={handleInputChange}
            style={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              color: '#151515',
              fontSize: '16px',
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label
            htmlFor="inputPhoneNumber"
            style={{
              color: '#808080',
              fontFamily: 'Poppins',
              fontSize: '16px ',
            }}
          >
            Phone
          </Form.Label>
          <Form.Control
            type="tel"
            id="inputPhoneNumber"
            name="phone"
            defaultValue={userData.phone}
            onChange={handleInputChange}
            style={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              color: '#151515',
              fontSize: '16px',
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label
            htmlFor="inputOfficeNumber"
            style={{
              color: '#808080',
              fontFamily: 'Poppins',
              fontSize: '16px ',
            }}
          >
            Office Number
          </Form.Label>
          <Form.Control
            type="text"
            id="inputOfficeNumber"
            name="officeNumber"
            defaultValue={userData.officeNumber}
            onChange={handleInputChange}
            style={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              color: '#151515',
              fontSize: '16px',
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label
            htmlFor="inputOfficeAddress"
            style={{
              color: '#808080',
              fontFamily: 'Poppins',
              fontSize: '16px ',
            }}
          >
            Office address
          </Form.Label>
          <Form.Control
            type="text"
            id="inputOfficeAddress"
            name="officeAddress"
            defaultValue={userData.officeAddress}
            onChange={handleInputChange}
            style={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              color: '#151515',
              fontSize: '16px',
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label
            htmlFor="inputAllowableWeight"
            style={{
              color: '#808080',
              fontFamily: 'Poppins',
              fontSize: '16px ',
            }}
          >
            Allowable weight
          </Form.Label>
          <Form.Control
            type="text"
            name="allowableWeight"
            id="inputAllowableWeight"
            defaultValue={userData.allowableWeight}
            onChange={handleInputChange}
            style={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              color: '#151515',
              fontSize: '16px',
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label
            htmlFor="inputAllowableDimensions"
            style={{
              color: '#808080',
              fontFamily: 'Poppins',
              fontSize: '16px ',
            }}
          >
            Allowable dimensions
          </Form.Label>
          <Form.Control
            type="text"
            name="allowableHeight"
            id="inputAllowableDimensions"
            defaultValue={userData.allowableHeight}
            onChange={handleInputChange}
            style={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              color: '#151515',
              fontSize: '16px',
            }}
          />
        </Form.Group>
      </Form>
      {isPendingApproval && (
        <>
          <div
            style={{
              display: 'flex',
              padding: '12px 14px',
              background: 'rgba(124, 196, 39, 0.15)',
              color: '#A6A6A6',
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: '12px',
              columnGap: '14px',
              alignItems: 'center',
              marginTop: '32px',
            }}
          >
            <BsExclamationOctagon
              style={{
                color: '#00902F',
                fontSize: '1.25rem',
              }}
            />
            <p
              style={{
                margin: 0,
                paddingLeft: '12px',
                borderLeft: '1px solid rgba(0, 144, 47, 0.2)',
              }}
            >
              Your request is pending. Wait for a response from the moderator
              about the changes
            </p>
          </div>

          <div
            style={{
              paddingTop: '24px',
              borderTop: '1px solid #A6A6A6',
              marginTop: '32px',
              textAlign: 'center',
            }}
          >
            <Button
              style={{
                background: 'none',
                border: 'none',
                color: '#00902F',
                fontFamily: 'Poppins',
                fontSize: '14px',
                fontWeight: 400,
              }}
              onClick={() => {
                if (onCancelRequest) {
                  onCancelRequest();
                }
              }}
            >
              Cancel Request
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

EditProfileFormDesktop.propType = {
  userData: PropTypes.object.isRequired,
  setUserData: PropTypes.func.isRequired,
  onCancelRequest: PropTypes.func,
  isPendingApproval: PropTypes.bool,
};
