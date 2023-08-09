import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import DriverLayout from '@/components/driver/driverLayout/driverLayout';
import Media from '@/utils/media';
import { Form } from 'react-bootstrap';
import RoutePlanContent from '@/components/driver/routePlanContent';

export default function RoutePlan(props) {
  const router = useRouter();
  const [saveRoutePlan, setSaveRoutePlan] = useState(false);
  const { mobile, tabletAndDesktop } = Media();
  const navData = [
    {
      imgSrc: "/img/home.png",
      caption: "Broadcast",
      imgWidth: "16",
      imgHeight: "17",
      section: "broadcast",
      handleSection: "handleBroadcast",
      route: "/driver",
    },
    {
      imgSrc: "/img/shopping-bag.png",
      caption: "Orders",
      imgWidth: "18",
      imgHeight: "20",
      section: "order",
      handleSection: "handleOrder",
      route: "/driver/orders",
    },
    {
      imgSrc: "/img/wallet1.png",
      caption: "Wallet",
      imgWidth: "20",
      imgHeight: "14",
      section: "wallet",
      handleSection: "handleWallet",
      route: "/driver/wallet",
    },
    {
      imgSrc: "/img/settings.png",
      caption: "Settings",
      imgWidth: "20",
      imgHeight: "20",
      section: "settings",
      handleSection: "handleSettings",
      route: "/driver/settings",
    }
  ]

  return (
    <>
      {mobile && (
        <DriverLayout sideBarDetails={navData} title="Route plan">
          <div
            style={{
              marginTop: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Image
                onClick={() => props.setParcelOption(false)}
                src="/img/agent-arrow-left.png"
                width="20"
                height="20"
                alt="left-arrow"
              />
              <Form.Label
                style={{
                  color: 'rgba(21, 21, 21, 1)',
                  fontSize: '16px',
                  fontWeight: '500',
                }}
              >
                Route plan
              </Form.Label>
              <Form.Label
                style={{
                  color: 'rgba(0, 144, 47, 1)',
                  fontSize: '16px',
                  fontWeight: '500',
                }}
              >
                {saveRoutePlan ? 'Save' : 'Edit'}
              </Form.Label>
            </div>
            <hr
              style={{
                marginTop: '-0.09px',
              }}
            />
            <RoutePlanContent
              saveRoutePlan={saveRoutePlan}
              setSaveRoutePlan={setSaveRoutePlan}
            />
          </div>
        </DriverLayout>
      )}
      {tabletAndDesktop && (
        <DriverLayout sideBarDetails={navData} title="Route plan">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              padding: '30px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Image
                onClick={() => props.setParcelOption(false)}
                src="/img/agent-arrow-left.png"
                width="20"
                height="20"
                alt="left-arrow"
              />
              <Form.Label
                style={{
                  color: 'rgba(21, 21, 21, 1)',
                  fontSize: '16px',
                  fontWeight: '500',
                }}
              >
                Route plan
              </Form.Label>
              <Form.Label
                style={{
                  color: 'rgba(0, 144, 47, 1)',
                  fontSize: '16px',
                  fontWeight: '500',
                }}
              >
                {saveRoutePlan ? 'Save' : 'Edit'}
              </Form.Label>
            </div>
            <hr
              style={{
                marginTop: '-0.09px',
              }}
            />
            <div
              style={{
                marginTop: '10px',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                border: '1px solid rgba(231, 231, 231, 1)',
                borderRadius: '4px',
                padding: '20px',
              }}
            >
              <RoutePlanContent
                saveRoutePlan={saveRoutePlan}
                setSaveRoutePlan={setSaveRoutePlan}
              />
            </div>
          </div>
        </DriverLayout>
      )}
    </>
  );
}
