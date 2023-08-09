import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import PackagesCashoutSwitches from './packagesCashoutSwitches';
import PackagesCashoutContent from './packagesCashoutContent';
import AgentOrdersHistory from './agentOrdersHistory';
import AgentOrderDetailsMobile from './agentOrderDetailsMobile';
import AgentOrderDetailsMobileCashout from './agentOrderDetailsMobileCashout';

const statuses = ['Searching for driver', 'Waiting for driver', 'Arrived'];

export default function AgentOrdersMobile(props) {
  const [packages, setPackages] = useState(false);
  const [cashout, setCashout] = useState(false);
  const [history, setHistory] = useState(false);
  const [orderDetails, setOrderDetails] = useState(false);
  const [orderDetailsCashout, setOrderDetailsCashout] = useState(false);

  const handlePackages = () => {
    setPackages(true);
    setCashout(false);
  };

  const handleCashout = () => {
    setCashout(true);
    setPackages(false);
  };

  useEffect(() => {
    if (cashout) {
      setPackages(false);
    } else {
      setPackages(true);
    }
  }, [cashout]);

  return (
    <>
      {history ? (
        <>
          <AgentOrdersHistory setHistory={setHistory} history={history} />
        </>
      ) : orderDetails ? (
        <>
          <AgentOrderDetailsMobile setOrderDetails={setOrderDetails} />
        </>
      ) : orderDetailsCashout ? (
        <>
          <AgentOrderDetailsMobileCashout
            setOrderDetailsCashout={setOrderDetailsCashout}
          />
        </>
      ) : (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Image
              onClick={() => props.setIsOrders(false)}
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
              Orders
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
              marginTop: '20px',
              width: '100%',
            }}
          >
            <PackagesCashoutSwitches
              caption="Packages"
              packages={packages}
              setPackages={setPackages}
              handlePackages={handlePackages}
            />
            <PackagesCashoutSwitches
              caption="Cash out"
              cashout={cashout}
              setCashout={setCashout}
              handleCashout={handleCashout}
            />
          </div>
          {statuses.map((status, idx) => (
            <PackagesCashoutContent
              key={idx}
              caption1={
                packages
                  ? '# 20 4002 8668 0998'
                  : cashout
                  ? 'ID 2490 9090 897 8080'
                  : undefined
              }
              caption2={
                packages
                  ? 'Lego Technic Tractor John Deer'
                  : cashout
                  ? '26 July 2022 | 11:59 PM'
                  : undefined
              }
              amount={packages ? '' : cashout ? '₦ 1 350.00' : undefined}
              from={packages ? 'Abuja Name City' : cashout ? '' : undefined}
              to={packages ? 'Abuja Name City' : cashout ? '' : undefined}
              dateFrom={packages ? '14 Jul 2022' : cashout ? '' : undefined}
              dateTo={packages ? '16 Jul 2022' : cashout ? '' : undefined}
              status={packages ? status : cashout ? 'Pednding' : undefined}
              cashout={cashout}
              packages={packages}
              setOrderDetails={setOrderDetails}
              setOrderDetailsCashout={setOrderDetailsCashout}
            />
          ))}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '100px auto',
              width: '100%',
            }}
          >
            <Button
              onClick={() => setHistory(true)}
              style={{
                background: 'white',
                padding: '13px 20px',
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                borderRadius: '6px',
                border: '1px solid #7CC427',
                color: '#151515',
                fontSize: '12px',
                marginLeft: '5px',
                fontWeight: '500',
                height: '56px',
              }}
            >
              <Image
                style={{
                  marginTop: '2px',
                  marginLeft: '2px',
                }}
                src="/img/history.png"
                width="20"
                height="18"
                alt="history"
              />
              History
              <div></div>
            </Button>
          </div>
        </>
      )}
    </>
  );
}
