import Image from 'next/image';
import { Button, Form } from 'react-bootstrap';
import AgentCheckAndNewNavItem from '../agentCheckAndNewNavItem';
import AgentCheckAndNewNavContent from '../agentCheckAndNewNavContent';
import AgentPhoneTab from '../agentPhoneTab';
import AgentTtnTab from '../agentTtnTab';
import AgentCashCode from '../agentCashcode';

export default function AgentCheckAndNewMobile(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Image
          onClick={() => props.handleBack()}
          src="/img/agent-arrow-left.png"
          width="20"
          height="20"
          alt="left-arrow"
        />
        <Form.Label
          style={{
            color: 'rgba(21, 21, 21, 1)',
            fontSize: '14px',
            fontWeight: '500',
          }}
        >
          Check / Add new
        </Form.Label>
        <div></div>
      </div>
      <hr
        style={{
          marginTop: '-0.09px',
        }}
      />
      <div
        style={{
          display: 'flex',
          width: '100%',
          marginTop: '10px',
        }}
      >
        <AgentCheckAndNewNavItem
          id="tab1"
          title="PHONE"
          activeTab={props.activeTab}
          setActiveTab={props.setActiveTab}
        />
        <AgentCheckAndNewNavItem
          id="tab2"
          title="TTN"
          activeTab={props.activeTab}
          setActiveTab={props.setActiveTab}
        />
        <AgentCheckAndNewNavItem
          id="tab3"
          title="CASH CODE"
          activeTab={props.activeTab}
          setActiveTab={props.setActiveTab}
        />
      </div>
      <div style={{ marginTop: '40px' }}>
        <AgentCheckAndNewNavContent id="tab1" activeTab={props.activeTab}>
          <AgentPhoneTab />
        </AgentCheckAndNewNavContent>
        <AgentCheckAndNewNavContent id="tab2" activeTab={props.activeTab}>
          <AgentTtnTab />
        </AgentCheckAndNewNavContent>
        <AgentCheckAndNewNavContent id="tab3" activeTab={props.activeTab}>
          <AgentCashCode />
        </AgentCheckAndNewNavContent>
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
            width: '100%',
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
    </>
  );
}
