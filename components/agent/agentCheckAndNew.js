import Image from 'next/image';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import AgentCheckAndNewNavItem from './agentCheckAndNewNavItem';
import AgentCheckAndNewNavContent from './agentCheckAndNewNavContent';
import AgentPhoneTab from './agentPhoneTab';
import AgentTtnTab from './agentTtnTab';
import AgentCashCode from './agentCashcode';
import Media from '@/utils/media';
import AgentCheckAndNewMobile from './mobile/agentCheckAndNewMobile';

export default function AgentCheckAndNew(props) {
  const [activeTab, setActiveTab] = useState('tab1');

  const { mobile, tabletAndDesktop } = Media();

  const handleBack = () => {
    props.setHideAgentHomeLayout(false);
    props.setShowAddNewAgent(false);
  };

  return (
    <>
      {mobile ? (
        <AgentCheckAndNewMobile
          handleBack={handleBack}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      ) : (
        <div style={{ marginLeft: '30px' }}>
          <div
            style={{
              marginTop: '30px',
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <div style={{ cursor: 'pointer' }} onClick={handleBack}>
              {' '}
              <Image
                src="/img/agent-arrow-left.png"
                width="20"
                height="20"
                alt="left-arrow"
              />{' '}
            </div>
            <span
              style={{
                paddingRight: '350px',
                color: '#4E4C4C',
                fontSize: '22px',
                fontWeight: '600',
              }}
            >
              Check / Add new
            </span>
          </div>
          <div
            style={{
              boxSizing: 'border-box',
              border: '1px solid #D1D1D1',
              borderColor: '#D1D1D1',
              width: '85%',
              paddingLeft: '30px',
              paddingRight: '30px',
              paddingTop: '30px',
              marginTop: '90px',
              paddingBottom: '30px',
              cursor: 'pointer',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  borderRadius: '12px',
                  justifyContent: 'center',
                }}
              >
                <AgentCheckAndNewNavItem
                  id="tab1"
                  title="PHONE"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <AgentCheckAndNewNavItem
                  id="tab2"
                  title="TTN"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <AgentCheckAndNewNavItem
                  id="tab3"
                  title="CASH CODE"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </div>
              <div style={{ marginTop: '30px' }}>
                <AgentCheckAndNewNavContent id="tab1" activeTab={activeTab}>
                  <AgentPhoneTab />
                </AgentCheckAndNewNavContent>
                <AgentCheckAndNewNavContent id="tab2" activeTab={activeTab}>
                  <AgentTtnTab />
                </AgentCheckAndNewNavContent>
                <AgentCheckAndNewNavContent id="tab3" activeTab={activeTab}>
                  <AgentCashCode />
                </AgentCheckAndNewNavContent>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '260px',
              }}
            >
              <Button
                style={{
                  boxSizing: 'border-box',
                  letterSpacing: '3px',
                  cursor: 'pointer',
                  width: '96%',
                  height: '40px',
                  backgroundColor: '#00902F',
                  color: '#FFFFFF',
                  fontSize: '16px',
                  borderRadius: '6px',
                  fontWeight: '400',
                  border: 'none',
                }}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
