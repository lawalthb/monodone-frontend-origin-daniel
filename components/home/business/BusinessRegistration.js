import GeneralModal from '@/components/modal/generalModal';
import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import Heading from '../common/heading';
import Media from '@/utils/media';
import { FaTimes } from "react-icons/fa";
import BusinessRegistrationMobile from './BusinessRegistrationMobile';
import BusinessRegistrationDesktop from './BusinessRegistrationDesktop';

export default function BusinessRegistration({businessRegistration, setBusinessRegistration}) {
    const [driverManager, setDriverManager] = useState(false);
    const [truckOnly, setTruckOnly] = useState(false);
    const { mobile, tabletAndDesktop } = Media();

    const handleDriverManager = () => {
        setDriverManager(true);
        setTruckOnly(false);
    };

    const handleTruckOnly = () => {
        setTruckOnly(true);
        setDriverManager(false);
    };

    useEffect(() => {
        if (truckOnly) {
          setDriverManager(false);
        } else {
          setDriverManager(true);
        }
    }, [truckOnly]);

    return (
        <>
            <GeneralModal
                size="lg"
                show={businessRegistration}
                onHide={() => {
                    setBusinessRegistration(false);
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
                            setBusinessRegistration(false);
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
                        caption1="Business registration"
                        caption2={`You are registering as a transporter. A transporter has the ability to move goods or items around. That is they own one ormore vehicles. This can either be a business entity or an individual (freelancer).`}
                    />
                    {mobile && (
                        <BusinessRegistrationMobile
                            driverManager={driverManager}
                            setDriverManager={setDriverManager}
                            truckOnly={truckOnly}
                            setTruckOnly={setTruckOnly}
                            handleDriverManager={handleDriverManager}
                            handleTruckOnly={handleTruckOnly}
                        />
                    )}
                    {tabletAndDesktop && (
                        <BusinessRegistrationDesktop 
                            driverManager={driverManager}
                            setDriverManager={setDriverManager}
                            truckOnly={truckOnly}
                            setTruckOnly={setTruckOnly}
                            handleDriverManager={handleDriverManager}
                            handleTruckOnly={handleTruckOnly}
                        />
                    )}
                </Modal.Body>
            </GeneralModal>
        </>
    )
}
