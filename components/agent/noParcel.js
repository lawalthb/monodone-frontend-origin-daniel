import Media from '@/utils/media';
import Image from 'next/image';
import { Form } from 'react-bootstrap';
import NoparcelMobile from './mobile/noparcelMobile';

export default function NoParcel(props) {
  const { mobile, tabletAndDesktop } = Media();
  return (
    <>
      {mobile ? (
        <>
          <NoparcelMobile
            setListOfParcel={props.setListOfParcel}
            handleAddParcel={props.handleAddParcel}
          />
        </>
      ) : (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginLeft: mobile ? 0 : '130px',
              marginTop: '20px',
            }}
          >
            <Form.Label
              onClick={() => {
                props.setListOfParcel(false);
              }}
              style={{
                fontWeight: '400',
                fontSize: '25px',
                color: 'black',
                cursor: 'pointer',
              }}
            >
              {'<'}
            </Form.Label>
            <Form.Label
              style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '16px',
                lineHeight: '28px',
                color: '#4E4C4C',
              }}
            >
              List of Parcels
            </Form.Label>
            <div></div>
            <div></div>
          </div>
          <div
            style={{
              width: '896px',
              marginTop: '40px',
              border: '1px solid #E7E7E7',
              marginLeft: '20px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Form.Label
                  style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#151515',
                  }}
                >
                  User Name
                </Form.Label>
                <div
                  style={{
                    display: 'flex',
                  }}
                >
                  <Image
                    src="/img/agentphone.png"
                    width="18"
                    height="20"
                    alt="phone"
                  />
                  <Form.Label
                    style={{
                      marginLeft: '10px',
                      color: '#808080',
                      fontWeight: '400',
                    }}
                  >
                    097 433 44 33
                  </Form.Label>
                </div>
              </div>
              <Image
                onClick={props.handleAddParcel}
                style={{
                  cursor: 'pointer',
                }}
                src="/img/btnadd.png"
                width="56"
                height="56"
                alt="btn"
              />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '50px',
              }}
            >
              <Image
                src="/img/nolist.png"
                width="214"
                height="229"
                alt="no list"
              />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px',
              }}
            >
              <Form.Label
                style={{
                  width: '290px',
                  color: '#151515',
                  textAlign: 'center',
                }}
              >
                No active parcels have been found, at the moment...
              </Form.Label>
            </div>
          </div>
        </>
      )}
    </>
  );
}
