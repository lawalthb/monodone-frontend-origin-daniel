import GeneralModal from '@/components/modal/generalModal';
import Image from 'next/image';
import { Form, Modal } from 'react-bootstrap';

export default function EstimatedShippingModal(props) {
  return (
    <>
      <GeneralModal
        size="lg"
        show={props.estimatedShippingModal}
        onHide={() => {
          props.setEstimatedShippingModal(false);
        }}
        style={props.style}
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
              props.setEstimatedShippingModal(false);
            }}
            style={{
              position: 'absolute',
              top: '-1rem',
              right: '-0.8rem',
              cursor: 'pointer',
            }}
          >
            <Image src="/img/close.png" width="14" height="14" alt="close" />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '20px',
              fontWeight: 600,
            }}
          >
            {props.estimatedShippingDetails[0].title}
          </div>
          <p
            style={{
              fontSize: '12px',
              textAlign: 'center',
              marginTop: '20px',
            }}
          >
            {props.estimatedShippingDetails[0].desc}
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '20px',
              fontWeight: 600,
            }}
          >
            <Image
              src={props.estimatedShippingDetails[0].imgSrc}
              width={props.estimatedShippingDetails[0].imgWidth}
              height={props.estimatedShippingDetails[0].imgHeight}
              alt="package"
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '20px',
            }}
          >
            <Form.Label
              style={{
                fontsize: '11px',
                color: 'rgba(38, 38, 38, 0.8)',
              }}
            >
              Quantity: {props.estimatedShippingDetails[0].quantity}
            </Form.Label>
            <Form.Label
              style={{
                fontsize: '12px',
                color: 'rgba(38, 38, 38, 0.8)',
              }}
            >
              Weight: {props.estimatedShippingDetails[0].weight}
            </Form.Label>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '20px',
            }}
          >
            <Form.Label
              style={{
                fontsize: '11px',
                color: 'rgba(38, 38, 38, 0.8)',
              }}
            >
              Total Item Cost
            </Form.Label>
            <Form.Label
              style={{
                fontsize: '12px',
                color: '#00902F',
                fontWeight: 600,
              }}
            >
              {props.estimatedShippingDetails[0].total}
            </Form.Label>
          </div>
        </Modal.Body>
      </GeneralModal>
    </>
  );
}
