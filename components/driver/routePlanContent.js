import Media from '@/utils/media';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import RoutePlanReusable from './routePlanReusable';

export default function RoutePlanContent(props) {
  const [list, setList] = useState(false);
  const [map, setMap] = useState(false);
  const { mobile } = Media();

  const handleList = () => {
    setList(true);
    setMap(false);
    props.setSaveRoutePlan(false);
  };
  const handleMap = () => {
    setMap(true);
    setList(false);
    props.setSaveRoutePlan(false);
  };

  useEffect(() => {
    if (map) {
      setList(false);
    } else {
      setList(true);
    }
  }, [map]);
  return (
    <>
      <div
        style={{
          display: 'flex',
        }}
      >
        <Button
          onClick={() => handleList()}
          style={
            list
              ? {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: '#FFFFFF',
                  boxShadow:
                    '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
                  border: '0.5px solid rgba(0, 0, 0, 0.04)',
                  borderRadius: '6px',
                  height: '36px',
                  width: mobile ? '50%' : '216px',
                  color: 'black',
                }
              : {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: '#EEEEEF',
                  borderRadius: '6px',
                  height: '36px',
                  width: mobile ? '50%' : '216px',
                  color: 'black',
                  border: 'none',
                }
          }
        >
          List
        </Button>
        <Button
          onClick={() => handleMap()}
          style={
            map
              ? {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: '#FFFFFF',
                  boxShadow:
                    '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
                  border: '0.5px solid rgba(0, 0, 0, 0.04)',
                  borderRadius: '6px',
                  height: '36px',
                  width: mobile ? '50%' : '216px',
                  color: 'black',
                }
              : {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: '#EEEEEF',
                  borderRadius: '6px',
                  height: '36px',
                  width: mobile ? '50%' : '216px',
                  color: 'black',
                  border: 'none',
                }
          }
        >
          Map
        </Button>
      </div>
      {list && (
        <>
          <div
            style={{
              display: 'flex',
              width: '100%',
              marginTop: '20px',
              gap: '10px',
            }}
          >
            <Image
              src={
                props.saveRoutePlan
                  ? '/img/driverroutesave.png'
                  : '/img/driverrouteplan.png'
              }
              width="24"
              height="700"
              alt="left-arrow"
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
              }}
            >
              <RoutePlanReusable
                address="21 Alex Ekwueme Way, Jabi 900108, Abuja"
                date="Mon, July 26 | 9–9:30 AM"
                marginTop="0px"
                buildRoute={true}
                saveRoutePlan={props.saveRoutePlan}
                setSaveRoutePlan={props.setSaveRoutePlan}
              />
              <RoutePlanReusable
                address="21 Alex Ekwueme Way, Jabi 900108, Abuja"
                date="Mon, July 26 | 9–9:30 AM"
                marginTop={mobile ? '30px' : '54px'}
                saveRoutePlan={props.saveRoutePlan}
                setSaveRoutePlan={props.setSaveRoutePlan}
              />
              <RoutePlanReusable
                address="21 Alex Ekwueme Way, Jabi 900108, Abuja"
                date="Mon, July 26 | 9–9:30 AM"
                marginTop={mobile ? '10px' : '28px'}
                saveRoutePlan={props.saveRoutePlan}
                setSaveRoutePlan={props.setSaveRoutePlan}
              />
              <RoutePlanReusable
                address="21 Alex Ekwueme Way, Jabi 900108, Abuja"
                date="Mon, July 26 | 9–9:30 AM"
                marginTop={mobile ? '2px' : '28px'}
                saveRoutePlan={props.saveRoutePlan}
                setSaveRoutePlan={props.setSaveRoutePlan}
              />
              <RoutePlanReusable
                address="21 Alex Ekwueme Way, Jabi 900108, Abuja"
                date="Mon, July 26 | 9–9:30 AM"
                marginTop={mobile ? '2px' : '28px'}
                saveRoutePlan={props.saveRoutePlan}
                setSaveRoutePlan={props.setSaveRoutePlan}
              />
              <RoutePlanReusable
                address="21 Alex Ekwueme Way, Jabi 900108, Abuja"
                date="Mon, July 26 | 9–9:30 AM"
                marginTop={mobile ? '2px' : '28px'}
                saveRoutePlan={props.saveRoutePlan}
                setSaveRoutePlan={props.setSaveRoutePlan}
              />
            </div>
          </div>
        </>
      )}
      {map && (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '20px',
            }}
          >
            <Image
              onClick={() => props.setSaveRoutePlan(true)}
              src="/img/RouteMap.png"
              width={mobile ? '320' : '816'}
              height="812"
              alt="left-arrow"
            />
          </div>
        </>
      )}
    </>
  );
}
