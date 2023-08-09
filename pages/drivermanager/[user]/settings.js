import DriverLayout from '@/components/driver/driverLayout/driverLayout';
import Media from '@/utils/media';
import styles from '../../../components/driver/settings/settings.module.css'
import Setting from '@/components/driver/settings';
import { useState } from 'react';
import Profile from '@/components/driver/settings/profile';

export default function Settings(props) {
  const { mobile, tabletAndDesktop } = Media();
  const [profile, setProfile] = useState(false);

  const user = props.params.user
  const navData = [
      {
        imgSrc: "/img/home.png",
        caption: "Broadcast",
        imgWidth: "16",
        imgHeight: "17",
        section: "broadcast",
        handleSection: "handleBroadcast",
        route: `/drivermanager/${user}`,
      },
      {
        imgSrc: "/img/shopping-bag.png",
        caption: "Orders",
        imgWidth: "18",
        imgHeight: "20",
        section: "order",
        handleSection: "handleOrder",
        route: `/drivermanager/${user}/orders`,
      },
      (props.params.user == "superAdmin" || props.params.user == "admin") &&{
        imgSrc: "/img/drivers.png",
        caption: "Drivers",
        imgWidth: "18",
        imgHeight: "20",
        section: "order",
        handleSection: "handleOrder",
        route: `/drivermanager/${user}/drivers`,
      },
      props.params.user === "superAdmin" &&{
        imgSrc: "/img/drivers.png",
        caption: "Admins",
        imgWidth: "18",
        imgHeight: "20",
        section: "order",
        handleSection: "handleOrder",
        route: `/drivermanager/${user}/Admins`,
      },
      (props.params.user == "superAdmin" || props.params.user == "admin") &&{
        imgSrc: "/img/drivers.png",
        caption: "Available Drivers",
        imgWidth: "18",
        imgHeight: "20",
        section: "order",
        handleSection: "handleOrder",
        route: `/drivermanager/${user}/available-drivers`,
      },
      (props.params.user == "superAdmin" || props.params.user == "admin") &&{
        imgSrc: "/img/trucks.png",
        caption: "Available Trucks",
        imgWidth: "18",
        imgHeight: "20",
        section: "order",
        handleSection: "handleOrder",
        route: `/drivermanager/${user}/available-trucks`,
      },
      {
        imgSrc: "/img/wallet1.png",
        caption: "Wallet",
        imgWidth: "20",
        imgHeight: "14",
        section: "wallet",
        handleSection: "handleWallet",
        route: `/drivermanager/${user}/wallet`,
      },
      {
        imgSrc: "/img/settings.png",
        caption: "Settings",
        imgWidth: "20",
        imgHeight: "20",
        section: "settings",
        handleSection: "handleSettings",
        route: `/drivermanager/${user}/settings`,
      }
  ]

  return (
    <>
      {tabletAndDesktop && (
        <DriverLayout sideBarDetails={navData} title="Settings">
          {!profile &&
          <Setting 
            styles={styles} 
            setProfile={setProfile}
          />
          }
          {profile &&
            <Profile 
              styles={styles}
              setProfile={setProfile}
            />
          }
        </DriverLayout>
      )}

      {mobile && (
        <DriverLayout sideBarDetails={navData} title="Settings">
          {!profile &&
          <Setting 
            styles={styles} 
            setProfile={setProfile}
          />
          }
          {profile &&
            <Profile 
              styles={styles}
              setProfile={setProfile}
            />
          }
        </DriverLayout>
      )}
    </>
  );
}


export async function getServerSideProps(context){
  // const res = await fetch('https://.../posts')
// const posts = await res.json()
// console.log(context)
context.res.setHeader(
  'Cache-Control',
  'must-revalidate, public, max-age=31536000'
)

return {
  props: {
      params: context.params
  },
}
}