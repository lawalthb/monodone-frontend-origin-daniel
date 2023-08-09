import Image from 'next/image';
import { Button } from 'react-bootstrap';
import AgentCheckAndNew from '../agentCheckAndNew';
import ActiveParcel from '../activeParcel';
import NoParcel from '../noParcel';
import AgentNavigationHeaderMobile from '../agentNavigationHeaderMobile';
import ParcelForm from '../parcelForm';

export default function AgentHomeMobile(props) {
  const handleAddParcel = () => {
    props.setParcelForm(true);
  };
  return (
    <>
      {props.hideAgentHomeLayout ? (
        <div style={{ display: 'none' }}></div>
      ) : props.listOfParcel && props.activeParcel ? (
        <>
          <ActiveParcel />
        </>
      ) : props.listOfParcel ? (
        <>
          {props.parcelForm ? (
            <>
              <ParcelForm
                setParcelForm={props.setParcelForm}
                setListOfParcel={props.setListOfParcel}
                parcelData={props.parcelData}
                setParcelData={props.setParcelData}
                setOrders={props.setOrders}
                parcelOption={props.parcelOption}
                setParcelOption={props.setParcelOption}
              />
            </>
          ) : (
            <NoParcel
              handleAddParcel={handleAddParcel}
              setListOfParcel={props.setListOfParcel}
            />
          )}
        </>
      ) : (
        <>
          <AgentNavigationHeaderMobile
            home={props.home}
            setHome={props.setHome}
            orders={props.orders}
            setOrders={props.setOrders}
            wallet={props.wallet}
            setWallet={props.setWallet}
            settings={props.settings}
            setSettings={props.setSettings}
            handleHome={props.handleHome}
            handleOrders={props.handleOrders}
            handleWallet={props.handleWallet}
            handleSettings={props.handleSettings}
            mobileSidebar={props.mobileSidebar}
            setMobileSidebar={props.setMobileSidebar}
          />
          <div
            style={{
              display: 'flex',
              width: '100%',
              flexDirection: 'column',
              padding: '10px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Button
                onClick={() => props.setListOfParcel(true)}
                style={{
                  boxSizing: 'border-box',
                  width: '139px',
                  height: '40px',
                  border: '1px solid #D1D1D1',
                  fontSize: '14px',
                  borderColor: '#D1D1D1',
                  borderRadius: '10px',
                  backgroundColor: '#FFFFFF',
                  color: '#00902F',
                  cursor: 'pointer',
                }}
              >
                List of parcels
              </Button>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '60px',
              }}
            >
              <Image
                src="/img/agentellipsemob.png"
                width="220"
                height="220"
                alt="agent-ellipse"
              />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '100px',
                cursor: 'pointer',
              }}
            >
              <Button
                onClick={props.handleAddNewAgent}
                style={{
                  boxSizing: 'border-box',
                  display: 'flex',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  width: '100%',
                  height: '64px',
                  backgroundColor: ' #F9F9F9',
                  color: 'rgba(21, 21, 21, 1)',
                  fontSize: '12px',
                  border: '1px solid #D2D2D2',
                  borderColor: '#D2D2D2',
                  borderRadius: '10px',
                  letterSpacing: '3px',
                  fontWeight: '400',
                  gap: '20px',
                  textTransform: 'uppercase',
                  padding: '20px 0px',
                }}
              >
                <Image
                  style={{
                    marginLeft: '-20px',
                  }}
                  src="/img/agent-thick.png"
                  width="17"
                  height="17"
                  alt="tick"
                />
                <Image
                  style={{
                    marginTop: '-10px',
                  }}
                  src="/img/agentmobilevertical.png"
                  width="2"
                  height="37"
                  alt="tick"
                />
                Check/Add new
              </Button>
            </div>
            <div
              // onClick={props.handleAddNewAgent}
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20px',
                cursor: 'pointer',
              }}
            >
              <Button
                style={{
                  boxSizing: 'border-box',
                  display: 'flex',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  width: '100%',
                  height: '64px',
                  backgroundColor: 'rgba(0, 144, 47, 1)',
                  color: 'white',
                  fontSize: '12px',
                  border: 'none',
                  borderColor: '#D2D2D2',
                  borderRadius: '10px',
                  letterSpacing: '3px',
                  fontWeight: '400',
                  gap: '20px',
                  textTransform: 'uppercase',
                  padding: '20px 0px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: '10px',
                    marginLeft: '30px',
                  }}
                >
                  <Image
                    src="/img/scan.png"
                    width="17"
                    height="17"
                    alt="tick"
                  />
                  <Image
                    style={{
                      marginTop: '-10px',
                    }}
                    src="/img/agentmobilevertical.png"
                    width="2"
                    height="37"
                    alt="tick"
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    marginRight: '40px',
                  }}
                >
                  scan
                </div>
                <div></div>
              </Button>
            </div>
          </div>
        </>
      )}
      {props.showAddNewAgent && (
        <AgentCheckAndNew
          setShowAddNewAgent={props.setShowAddNewAgent}
          setHideAgentHomeLayout={props.setHideAgentHomeLayout}
        />
      )}
    </>
  );
}
