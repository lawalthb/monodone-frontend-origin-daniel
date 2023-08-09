import Image from 'next/image';
import { useEffect, useState } from 'react';
import LoardboardListCustomTabContent from './loadboardListCustomTabContent';
import LoadboardListCustomTabViewBtn from './loadboardListCustomTabViewBtn';
import MobilePagination from '@/utils/pagination/mobilePagination';

export default function LoadboardListCustomTab(props) {
  const [contentId, setContentId] = useState();
  const [multiplesTen, setMultiplesTen] = useState([]);
  const [multipleTen, setMultipleTen] = useState('');

  const showContent = (id) => {
    setContentId(id);
  };

  useEffect(() => {
    setContentId(0);
  }, []);
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          padding: '20px',
        }}
      >
        {props.loadboardData
          ?.slice(parseInt(multipleTen) - 10, parseInt(multipleTen))
          .map((data, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
              }}
            >
              <div
                onClick={() => showContent(idx)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  marginBottom: '20px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    width: '15%',
                    cursor: 'pointer',
                  }}
                >
                  <Image
                    src={contentId === idx ? '/img/up.png' : '/img/down.png'}
                    width="24"
                    height="24"
                    alt="up"
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    width: '45%',
                    fontSize: '12px',
                    fontWeight: '500',
                    color: '#000000',
                    cursor: 'pointer',
                  }}
                >
                  Cargo type
                </div>
                <div
                  style={{
                    display: 'flex',
                    width: '40%',
                    fontSize: '12px',
                    color: '#000000',
                    cursor: 'pointer',
                    fontWeight: '500',
                  }}
                >
                  {data.cargoTypeList}
                </div>
              </div>
              <div
                style={
                  contentId === idx
                    ? {
                        display: 'block',
                      }
                    : {
                        display: 'none',
                      }
                }
              >
                <LoardboardListCustomTabContent
                  caption="Posted"
                  content={data.timePosted}
                />
                <hr
                  style={{
                    marginTop: '-7px',
                    color: 'gray',
                  }}
                />
                <LoardboardListCustomTabContent
                  caption="Pick up date"
                  content={data.pickupDate}
                />
                <hr
                  style={{
                    marginTop: '-7px',
                    color: 'gray',
                  }}
                />
                <LoardboardListCustomTabContent
                  caption="Country"
                  content={data.country}
                />
                <hr
                  style={{
                    marginTop: '-7px',
                    color: 'gray',
                  }}
                />
                <LoardboardListCustomTabContent
                  caption="Delivery location"
                  content={data.deliveryLocationList}
                />
                <hr
                  style={{
                    marginTop: '-7px',
                    color: 'gray',
                  }}
                />
                <LoardboardListCustomTabContent
                  caption="Weight (ibs)"
                  content={data.weight}
                />
                <hr
                  style={{
                    marginTop: '-7px',
                    color: 'gray',
                  }}
                />
                <LoardboardListCustomTabContent
                  caption="Length (mm)"
                  content={data.length}
                />
                <hr
                  style={{
                    marginTop: '-7px',
                    color: 'gray',
                  }}
                />
                <LoardboardListCustomTabContent
                  caption="Amount"
                  content={data.amount}
                />
                <hr
                  style={{
                    marginTop: '-7px',
                    color: 'gray',
                  }}
                />
                <LoadboardListCustomTabViewBtn data={data} />
                <hr
                  style={{
                    marginTop: '-7px',
                    color: 'gray',
                  }}
                />
              </div>
            </div>
          ))}
        <MobilePagination
          allData={props.loadboardData}
          multiplesTen={multiplesTen}
          setMultiplesTen={setMultiplesTen}
          setMultipleTen={setMultipleTen}
          multipleTen={multipleTen}
        />
      </div>
    </>
  );
}
