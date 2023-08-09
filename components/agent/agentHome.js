import Image from 'next/image';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import AgentCheckAndNew from './agentCheckAndNew';
import NoParcel from './noParcel';
import ActiveParcel from './activeParcel';
import ParcelForm from './parcelForm';

export default function AgentHome(props) {
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
          <div style={{ marginRight: '35px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '30px',
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
                width="330"
                height="330"
                alt="agent-ellipse"
              />
            </div>
            <div
              onClick={props.handleAddNewAgent}
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '100px',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  paddingTop: '8px',
                  paddingRight: '740px',
                  zIndex: '1',
                }}
              >
                <Image
                  src="/img/agent-thick.png"
                  width="17"
                  height="17"
                  alt="tick"
                />
              </div>
              <hr
                style={{
                  width: '2px',
                  height: '38px',
                  position: 'absolute',
                  border: '1px solid #D2D2D2',
                  borderColor: '#D2D2D2',
                  zIndex: '1',
                  marginRight: '680px',
                  marginTop: '1px',
                }}
              />
              <Button
                style={{
                  boxSizing: 'border-box',
                  display: 'flex',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  width: '800px',
                  height: '40px',
                  backgroundColor: ' #F9F9F9',
                  color: '#151515',
                  fontSize: '16px',
                  border: '1px solid #D2D2D2',
                  borderColor: '#D2D2D2',
                  borderRadius: '10px',
                  letterSpacing: '3px',
                  fontWeight: 'bold',
                }}
              >
                Check/Add new
              </Button>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '30px',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  paddingTop: '8px',
                  paddingRight: '740px',
                  zIndex: '1',
                }}
              >
                <Image src="/img/scan.png" width="17" height="17" alt="tick" />
              </div>
              <hr
                style={{
                  width: '2px',
                  height: '38px',
                  position: 'absolute',
                  border: '1px solid #FFFFFF',
                  borderColor: '#FFFFFF',
                  zIndex: '1',
                  marginRight: '680px',
                  marginTop: '1px',
                }}
              />
              <Button
                style={{
                  boxSizing: 'border-box',
                  display: 'flex',
                  justifyContent: 'center',
                  width: '800px',
                  height: '40px',
                  backgroundColor: ' #00902F',
                  color: '#F9F9F9',
                  fontSize: '16px',
                  border: 'none',
                  borderColor: '#E7E7E7',
                  borderRadius: '10px',
                  letterSpacing: '3px',
                  cursor: 'pointer',
                }}
              >
                Scan
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
