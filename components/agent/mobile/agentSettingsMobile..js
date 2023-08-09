import Image from 'next/image';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import AgentSettingsMobileEdit from './agentSettingsMobileEdit';
import AgentSettingsEditSuccess from './agentSettingsEditSuccess';
import AgentResponseToRequest from './agentResponseToRequest';
import AgentWallet from './agentWallet';

export default function AgentSettingsMobile(props) {
  const [settingsEdit, setSettingsEdit] = useState(false);
  const [settingsData, setSettingsData] = useState();
  const [agentSettingsEditSuccess, setAgentSettingsEditSuccess] =
    useState(false);
  const [agentResponseToRequest, setAgentResponseToRequest] = useState(false);
  const [wallet, setWallet] = useState(false);

  console.log(' settings data', settingsData);
  return (
    <>
      {settingsEdit ? (
        <AgentSettingsMobileEdit
          setSettingsEdit={setSettingsEdit}
          setSettingsData={setSettingsData}
          setAgentSettingsEditSuccess={setAgentSettingsEditSuccess}
        />
      ) : wallet ? (
        <AgentWallet setWallet={setWallet} />
      ) : (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Image
              onClick={() => props.setSettings(false)}
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
              {'Profile'}
            </Form.Label>
            <Form.Label
              onClick={() => setSettingsEdit(true)}
              style={{
                color: 'rgba(0, 144, 47, 1)',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
              }}
            >
              {'Edit'}
            </Form.Label>
          </div>
          <hr
            style={{
              marginTop: '-0.09px',
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              marginTop: '20px',
              marginBottom: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '10px',
              }}
            >
              <Image
                src="/img/agentavatar.png"
                width="50"
                height="50"
                alt="left-arrow"
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Form.Label
                  style={{
                    color: 'rgba(21, 21, 21, 1)',
                    fontSize: '16px',
                    fontWeight: 600,
                  }}
                >
                  {settingsData ? settingsData.name : 'Adaora Daberechi'}
                </Form.Label>
                <Form.Label
                  style={{
                    color: 'rgba(141, 141, 141, 1)',
                    fontSize: '12px',
                    fontWeight: 600,
                  }}
                >
                  {settingsData ? settingsData.phoneNumber : '097 433 44 33'}
                </Form.Label>
              </div>
            </div>
            <hr
              style={{
                marginTop: '10px',
              }}
            />
            <Form.Label
              style={{
                color: 'rgba(128, 128, 128, 1)',
                fontSize: '12px',
                fontWeight: 400,
              }}
            >
              Office number
            </Form.Label>
            <Form.Label
              style={{
                color: 'rgba(21, 21, 21, 1)',
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              {settingsData ? settingsData.officeNumber : '34'}
            </Form.Label>
            <hr
              style={{
                marginTop: '10px',
              }}
            />
            <Form.Label
              style={{
                color: 'rgba(128, 128, 128, 1)',
                fontSize: '12px',
                fontWeight: 400,
              }}
            >
              Office address
            </Form.Label>
            <Form.Label
              style={{
                color: 'rgba(21, 21, 21, 1)',
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              {settingsData
                ? settingsData.officeAddress
                : '21 Alex Ekwueme Way, Jabi 900108, Abuja'}
            </Form.Label>
            <hr
              style={{
                marginTop: '10px',
              }}
            />
            <Form.Label
              style={{
                color: 'rgba(128, 128, 128, 1)',
                fontSize: '12px',
                fontWeight: 400,
              }}
            >
              Allowable weight
            </Form.Label>
            <Form.Label
              style={{
                color: 'rgba(21, 21, 21, 1)',
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              {settingsData ? settingsData.allowableWeight : 'to 30 lbs'}
            </Form.Label>
            <hr
              style={{
                marginTop: '10px',
              }}
            />
            <Form.Label
              style={{
                color: 'rgba(128, 128, 128, 1)',
                fontSize: '12px',
                fontWeight: 400,
              }}
            >
              Dimensions
            </Form.Label>
            <Form.Label
              style={{
                color: 'rgba(21, 21, 21, 1)',
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              {settingsData
                ? settingsData.allowableDimensions
                : '22 x 155 x 32'}
            </Form.Label>
            <hr
              style={{
                marginTop: '10px',
              }}
            />
            <Button
              onClick={() => setWallet(true)}
              style={{
                background: 'transparent',
                padding: '15px',
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                borderRadius: '6px',
                border: '1px solid #7CC427',
                height: '56px',
                color: 'rgba(21, 21, 21, 1)',
                fontSize: '14px',
                marginTop: '30px',
                fontWeight: '500',
                textTransform: 'uppercase',
              }}
            >
              <Image
                src="/img/agentmobilewallet.png"
                width="20"
                height="18"
                alt="wallet"
              />
              My wallet
              <div></div>
            </Button>
            <div
              style={{
                display: 'flex',
                gap: '20px',
                marginTop: '60px',
              }}
            >
              <Image
                src="/img/agentmobilelogout.png"
                width="20"
                height="20"
                alt="logout"
              />
              <Form.Label
                style={{
                  color: 'rgba(21, 21, 21, 1)',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                Logout
              </Form.Label>
            </div>
            <div
              style={{
                display: 'flex',
                gap: '20px',
                marginTop: '20px',
              }}
            >
              <Image
                src="/img/agentwalletdelete.png"
                width="18"
                height="20"
                alt="logout"
              />
              <Form.Label
                style={{
                  color: 'rgba(21, 21, 21, 1)',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                Delete account
              </Form.Label>
            </div>
          </div>
        </>
      )}
      <AgentSettingsEditSuccess
        agentSettingsEditSuccess={agentSettingsEditSuccess}
        setAgentSettingsEditSuccess={setAgentSettingsEditSuccess}
        setAgentResponseToRequest={setAgentResponseToRequest}
      />
      <AgentResponseToRequest
        agentResponseToRequest={agentResponseToRequest}
        setAgentResponseToRequest={setAgentResponseToRequest}
      />
    </>
  );
}
