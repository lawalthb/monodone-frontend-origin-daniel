import GeneralModal from '@/components/modal/generalModal';
import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import Heading from '../common/heading';
import Media from '@/utils/media';
import { FaTimes } from "react-icons/fa";
import AgentRegistrationMobile from './agentRegistrationMobile';
import AgentRegistrationDesktop from './agentRegistrationDesktop';

export default function AgentRegistration({agentRegistration, setAgentRegistration}) {
    const [office, setOffice] = useState(false);
    const [store, setStore] = useState(false);
    const { mobile, tabletAndDesktop } = Media();

    const handleOffice = () => {
        setOffice(true);
        setStore(false);
    };
    
    const handleStore = () => {
        setStore(true);
        setOffice(false);
    };

    useEffect(() => {
        if (store) {
          setOffice(false);
        } else {
          setOffice(true);
        }
    }, [store]);

    return (
        <>
            <GeneralModal
                size="lg"
                show={agentRegistration}
                onHide={() => {
                    setAgentRegistration(false);
                }}
                /* style={props.style} */
            >
                <Modal.Body
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        paddingBottom: '30px',
                    }}
                >
                    <div
                        onClick={() => {
                            setAgentRegistration(false);
                        }}
                        style={{
                            position: 'absolute',
                            top: '-1rem',
                            right: '-0.8rem',
                            cursor: 'pointer',
                        }}
                    >
                        <FaTimes />
                    </div>
                    <Heading
                        caption1="Agent registration"
                        caption2={`You are registering as a transporter. A transporter has the ability to move goods or items around. That is they own one ormore vehicles. This can either be a business entity or an individual (freelancer).`}
                    />
                    {mobile && (
                        <AgentRegistrationMobile
                            office={office}
                            setOffice={setOffice}
                            store={store}
                            setStore={setStore}
                            handleOffice={handleOffice}
                            handleStore={handleStore}
                        />
                    )}
                    {tabletAndDesktop && (
                        <AgentRegistrationDesktop 
                            office={office}
                            setOffice={setOffice}
                            store={store}
                            setStore={setStore}
                            handleOffice={handleOffice}
                            handleStore={handleStore}
                        />
                    )}
                </Modal.Body>
            </GeneralModal>
        </>
    )
}
