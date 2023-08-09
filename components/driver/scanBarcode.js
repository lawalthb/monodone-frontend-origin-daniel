import { useState } from "react";
import QrReader from "react-qr-reader";
import styles from './driver.module.css'
import { Button } from 'react-bootstrap';
import Media from '@/utils/media';



function ScanBarcode(props){
    const { mobile } = Media();
    const [data, setData] = useState("");
    const [delayScan , setDelayScan] = useState(500);

    const handleScan = async (scanData) => {
      console.log(`loaded data data`, scanData);
      if (scanData && scanData !== "") {
        console.log(`loaded >>>`, scanData);
        // setData(scanData);
        // setStartScan(false);
        // setLoadingScan(false);
        // setPrecScan(scanData);
      }
    };
    const handleError = (err) => {
      console.error(err);
    };
    
      return (
        <div className={styles.barCodeContainer}>
            <>
              <div className={styles.scanCamContainer}>
                <div className={styles.scanCamera}>
                    <QrReader
                        facingMode={'environment'}
                        delay={1000}
                        onError={handleError}
                        onScan={handleScan}
                        style={{ width: "100%" }}
                    />
                </div>

                <Button
                onClick={
                    () => {
                        setDelayScan(false)
                        props.setBarcode("scanned")
                        props.setAcceptDetails(true);
                    }
                }
                style={{
                        height: mobile ? '56px' : '40px',
                        textTransform: mobile ? 'uppercase' : undefined,
                        }}
                className={styles.scanCamBtn}
                >
                    Attach
                </Button>
                </div>
            </>
        </div>
    );
}

export default ScanBarcode