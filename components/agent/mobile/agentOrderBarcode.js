import Image from 'next/image';
import { Button } from 'react-bootstrap';

export default function AgentOrderBarcode(props) {
  return (
    <>
      <Image
        src="/img/agentorderscan.png"
        width="375"
        height="818"
        alt="scan"
      />
      <Button
        onClick={() => {
          props.setAgentcashoutConfirmation(true);
        }}
        style={{
          background: '#00902F',
          padding: '5px 10px 2px 10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          borderRadius: '6px',
          border: 'none',
          height: '56px',
          color: 'white',
          fontSize: '14px',
          fontWeight: '500',
          textTransform: 'uppercase',
          marginTop: '-70px',
        }}
      >
        Confirm
      </Button>
    </>
  );
}
