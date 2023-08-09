import Head from 'next/head';
import AgentMobile from '@/components/agent/agentMobile';
import Media from '@/utils/media';
import AgentDesktop from '@/components/agent/agentDesktop';
import mockData from '../../data.json';
import DriverAndAgentReusables from '@/utils/driverAndAgentReusables';
import { useState } from 'react';

export default function Agent(props) {
  const {
    home,
    setHome,
    orders,
    setOrders,
    wallet,
    setWallet,
    settings,
    setSettings,
    mobileSidebar,
    setMobileSidebar,
    handleHome,
    handleOrders,
    handleWallet,
    handleSettings,
  } = DriverAndAgentReusables();

  const { mobile, tabletAndDesktop } = Media();

  const [showAddNewAgent, setShowAddNewAgent] = useState(false);
  const [hideAgentHomeLayout, setHideAgentHomeLayout] = useState(false);
  const [listOfParcel, setListOfParcel] = useState(false);
  const [activeParcel, setActiveParcel] = useState(false);
  const [parcelForm, setParcelForm] = useState(false);
  const [parcelOption, setParcelOption] = useState(false);

  const handleAddNewAgent = () => {
    setShowAddNewAgent(true);
    setHideAgentHomeLayout(true);
    console.log('clicked');
  };

  return (
    <>
      <Head>
        <title>Mondome - Agent</title>
        <meta name="description" content="Monodome" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {mobile && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            padding: '20px',
            height: '190vh',
          }}
        >
          <AgentMobile
            home={home}
            setHome={setHome}
            orders={orders}
            setOrders={setOrders}
            wallet={wallet}
            setWallet={setWallet}
            settings={settings}
            setSettings={setSettings}
            handleHome={handleHome}
            handleOrders={handleOrders}
            handleWallet={handleWallet}
            handleSettings={handleSettings}
            mobileSidebar={mobileSidebar}
            setMobileSidebar={setMobileSidebar}
            handleAddNewAgent={handleAddNewAgent}
            hideAgentHomeLayout={hideAgentHomeLayout}
            setHideAgentHomeLayout={setHideAgentHomeLayout}
            showAddNewAgent={showAddNewAgent}
            setShowAddNewAgent={setShowAddNewAgent}
            listOfParcel={listOfParcel}
            setListOfParcel={setListOfParcel}
            activeParcel={activeParcel}
            setActiveParcel={setActiveParcel}
            parcelForm={parcelForm}
            setParcelForm={setParcelForm}
            parcelOption={parcelOption}
            setParcelOption={setParcelOption}
          />
        </div>
      )}
      {tabletAndDesktop && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '140vh',
            background: 'white',
          }}
        >
          <AgentDesktop
            user={props.user}
            home={home}
            setHome={setHome}
            orders={orders}
            setOrders={setOrders}
            wallet={wallet}
            setWallet={setWallet}
            settings={settings}
            setSettings={setSettings}
            handleHome={handleHome}
            handleOrders={handleOrders}
            handleWallet={handleWallet}
            handleSettings={handleSettings}
            handleAddNewAgent={handleAddNewAgent}
            hideAgentHomeLayout={hideAgentHomeLayout}
            setHideAgentHomeLayout={setHideAgentHomeLayout}
            showAddNewAgent={showAddNewAgent}
            setShowAddNewAgent={setShowAddNewAgent}
            listOfParcel={listOfParcel}
            setListOfParcel={setListOfParcel}
            activeParcel={activeParcel}
            setActiveParcel={setActiveParcel}
            parcelForm={parcelForm}
            setParcelForm={setParcelForm}
          />
        </div>
      )}
    </>
  );
}

export const getStaticProps = async () => {
  const { users } = mockData;
  return { props: { user: users[Math.floor(Math.random() * users.length)] } };
};
