import Media from '@/utils/media';
import Image from 'next/image';
import { useEffect, useRef } from "react";
import { Button, Form } from 'react-bootstrap';
import AddIcon from "@mui/icons-material/Add";

export default function LoadboardAddComp(props) {
  const { mobile, tabletAndDesktop } = Media();
  const target = useRef(null);

  useEffect(() => {
    props.setIsPackage(true)
  }, [props.setIsPackage])

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '89px',
          marginBottom: '64px',
        }}
      >
        <Form.Label
          style={{
            color: 'white',
            fontWeight: mobile ? '600' : '700',
            fontSize: mobile ? '20px' : '25px',
          }}
        >
          Load Board
        </Form.Label>
        <Button
          onClick={
            props.isCarClearing ? () => props.handleAddCarClearingParcel() :
            props.isContainerShipment ? () => props.handleAddContainerShipment() :
            props.isSpecializedShipment ? () => props.handleAddSpecializedShipment() :
            () => props.handleAddParcel()
          }
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: mobile? '0px' : '5px',
            maxWidth: mobile ? '150px' : '150px',
            height: '40px',
            border: '1px solid #00902F',
            background: 'transparent',
            padding: mobile ? '7px' : '10px 20px',
            marginTop: mobile ? '0px' : '10px',
            color: '#FFFFFF',
            fontWeight: '500',
            fontSize: '12px',
          }}
        >
          <AddIcon /> Post Load
        </Button>
      </div>
    </>
  );
}
