import Image from 'next/image';
import { Form } from 'react-bootstrap';
import AgentSidebarContent from './agentSidebarContent';

export default function AgentNavigationHeaderMobile(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
          color: 'rgba(21, 21, 21, 1)',
          fontSize: '19px',
          fontWeight: 700,
        }}
      >
        Agent
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          margin: 0,
          height: '48px',
          padding: '20px',
          border: '1px solid #E7E7E7',
          borderRadius: '6px',
          background: '#F9F9F9',
          marginTop: '10px',
        }}
      >
        <Image
          onClick={() => props.setMobileSidebar((prevState) => !prevState)}
          style={{
            marginTop: props.mobileSidebar ? '-7px' : '-10px',
          }}
          src={
            props.mobileSidebar
              ? '/img/close.png'
              : '/img/agentmobileburger.png'
          }
          height={props.mobileSidebar ? '15' : '18'}
          width="20"
          alt="logo"
        />
        <div
          style={{
            display: 'flex',
            gap: '10px',
            marginTop: '-10px',
          }}
        >
          <Form.Label
            style={{
              fontSize: '14px',
              color: 'black',
              marginRight: '10px',
            }}
          >
            Office #34
          </Form.Label>
          <Form.Label
            style={{
              fontSize: '14px',
              color: 'black',
              marginRight: '10px',
            }}
          >
            {'|'}
          </Form.Label>
          <Form.Label
            style={{
              fontSize: '14px',
              color: 'black',
              marginRight: '10px',
            }}
          >
            to 30 kg
          </Form.Label>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '10px',
            marginTop: '-10px',
          }}
        >
          <Image
            style={{
              margin: '0px 10px',
            }}
            src="/img/agentonline.png"
            width="25"
            height="25"
            alt="message"
          />
        </div>
      </div>
      <div
        style={
          props.mobileSidebar
            ? {
                display: 'block',
              }
            : {
                display: 'none',
              }
        }
      >
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            flexDirection: 'column',
            width: '50%',
            height: '60vh',
            background: 'linear-gradient(90deg, #00902F 0%, #7CC427 99.69%)',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.06)',
            padding: '30px 20px',
          }}
        >
          <AgentSidebarContent
            imgSrc="/img/home.png"
            caption="Home"
            imgWidth="16"
            imgHeight="17"
            home={props.home}
            setHome={props.setHome}
            handleClick={props.handleHome}
          />
          <AgentSidebarContent
            imgSrc="/img/shopping-bag.png"
            caption="Orders"
            imgWidth="18"
            imgHeight="20"
            orders={props.orders}
            setOrders={props.setOrders}
            handleClick={props.handleOrders}
          />
          <AgentSidebarContent
            imgSrc="/img/wallet1.png"
            caption="Wallet"
            imgWidth="20"
            imgHeight="14"
            wallet={props.wallet}
            setWallet={props.setWallet}
            handleClick={props.handleWallet}
          />
          <AgentSidebarContent
            imgSrc="/img/settings.png"
            caption="Settings"
            imgWidth="20"
            imgHeight="20"
            settings={props.settings}
            setSettings={props.setSettings}
            handleClick={props.handleSettings}
          />
          <div
            style={{
              display: 'flex',
            }}
          >
            <Image
              style={{
                cursor: 'pointer',
              }}
              src="/img/logout1.png"
              width="20"
              height="20"
              alt="shopping"
            />
            <Form.Label
              style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '14px',
                color: 'white',
                marginLeft: '20px',
                cursor: 'pointer',
              }}
            >
              Logout
            </Form.Label>
          </div>
        </div>
      </div>
    </>
  );
}
