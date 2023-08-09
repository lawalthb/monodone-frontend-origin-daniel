import { useState } from 'react';
import { IoChevronBackOutline } from 'react-icons/io5';
import EditProfileFormDesktop from './editProfileFormDesktop';
import ViewProfileFormDesktop from './viewProfileFormDesktop';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import RequestSentModal from './requestSentModal';
import RequestResponseModal from './requestResponseModal';

export default function SettingsProfile(props) {
  const [editProfile, setEditProfile] = useState(false);
  const [profileEdited, setProfileEdited] = useState(false);
  const [showRequestSentModal, setShowRequestSentModal] = useState(false);
  const [userData, setUserData] = useState(props.user);

  const handleOnProfileEdit = () => {
    setShowRequestSentModal(true);
    setProfileEdited(true);
  };

  const handleEditProfileToggle = () => {
    if (editProfile && !profileEdited) {
      handleOnProfileEdit();
    }
    setEditProfile(!editProfile);
  };

  const handleOnCancelProfileEdit = () => {
    setShowRequestSentModal(false);
    setProfileEdited(false);
    setEditProfile(false);
  };

  const handleBackButtonClick = () => {
    if (editProfile) {
      return setEditProfile(false);
    }
    props.setSettings(false);
  };

  return (
    <>
      <main style={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>
        <header>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '23px 10px',
              maxWidth: '808px',
              margin: '0 auto',
            }}
          >
            <Button
              onClick={() => handleBackButtonClick()}
              style={{
                background: 'none',
                border: 'none',
                color: '#000',
              }}
            >
              <IoChevronBackOutline />
            </Button>

            <h2
              style={{
                fontFamily: 'Poppins',
                fontSize: '22px',
                fontWeight: 600,
                color: '#4E4C4C',
              }}
            >
              {editProfile ? 'Edit profile' : 'Profile'}
            </h2>
            <Button
              onClick={() => handleEditProfileToggle()}
              style={{
                background: 'none',
                border: 'none',
                color: '#00902F',
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontSize: '18px',
              }}
            >
              {editProfile ? 'Done' : 'Edit'}
            </Button>
          </div>
        </header>

        <div
          style={{
            maxWidth: '629px',
            margin: '10px auto 20px',
            border: '1px solid #E7E7E7',
          }}
        >
          {editProfile ? (
            <EditProfileFormDesktop
              userData={userData}
              setUserData={setUserData}
              isPendingApproval={profileEdited}
              onCancelRequest={handleOnCancelProfileEdit}
            />
          ) : (
            <ViewProfileFormDesktop user={userData} />
          )}
        </div>
      </main>
      <RequestSentModal
        show={showRequestSentModal}
        onClose={() => setShowRequestSentModal(false)}
      />

      <RequestResponseModal />
    </>
  );
}

SettingsProfile.propType = {
  setSettings: PropTypes.func.isRequired,
};
