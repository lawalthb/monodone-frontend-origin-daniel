import Image from 'next/image';
import { Form } from 'react-bootstrap';
import AgentSidebarContent from './agentSidebarContent';

export default function AgentSidebar(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '40px',
          padding: '10px 20px',
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
            flexDirection: 'column',
            width: '100%',
            paddingTop: '20px',
            marginTop: '150px',
          }}
        >
          <hr
            style={{
              color: 'white',
            }}
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
