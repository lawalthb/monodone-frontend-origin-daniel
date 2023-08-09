import { useState } from 'react';
import Media from '@/utils/media';
import DesktopNavigation from './desktopNavigation';
import MobileNavigation from './mobileNavigation';

export default function GeneralNav(props) {
  const [dropdown, setDropdown] = useState(false);
  const { desktopNav, mobileNav } = Media();
  return (
    <>
      <div
        style={{
          display: 'flex',
          width: '100%',
          margin: 0,
          padding: 0,
        }}
      >
        {mobileNav && (
          <MobileNavigation
            setLogin={props.setLogin}
            setSignup={props.setSignup}
            dropdown={dropdown}
            setDropdown={setDropdown}
            handleAboutUsClick={props.handleAboutUsClick}
            handleServicesClick={props.handleServicesClick}
            handleFeaturesClick={props.handleFeaturesClick}
            handleContactClick={props.handleContactClick}
          />
        )}
        {desktopNav && (
          <DesktopNavigation
            name={props.name}
            imgSrc={props.imgSrc}
            setLogin={props.setLogin}
            setSignup={props.setSignup}
            handleAboutUsClick={props.handleAboutUsClick}
            handleServicesClick={props.handleServicesClick}
            handleFeaturesClick={props.handleFeaturesClick}
            handleContactClick={props.handleContactClick}
          />
        )}
      </div>
    </>
  );
}
