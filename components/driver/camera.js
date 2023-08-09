import Image from 'next/image';
import { backdrop, cameraContainer, cameraDiv, camera, closeCamera, captureBtn, camBottom } from './driver.module.css'
import Webcam from 'react-webcam';
import Media from '@/utils/media';

export default function Camera(props) {
    const { mobile } = Media();
    const videoConstraints = {
        width: 372,
        height: 500,
        facingMode: "environment"
      };
  return (
    <>
        <div className={backdrop}></div>
        <div
            className={cameraContainer}
        >
            <div className={cameraDiv}>
                <div className={camera}>
                    <div className={closeCamera}>
                    <Image
                        onClick={() => {
                            props.setIsPic(false)
                            props.setCamera(false);
                            props.setDriverDetailsModal && props.setDriverDetailsModal(true)
                            props.setIssued && props.setIssued(true);
                            props.setComplete && props.setComplete(true);
                            props.setTakePic(false)
                        }}
                        src="/img/closeIcon.png"
                        width="16"
                        height="16"
                        alt="points"
                    />
                    </div>
                    <Webcam
                        audio={false}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                        style={{
                            width: mobile ? '100%' : '372px',
                            height: 500,
                        }}
                    >
                        {({ getScreenshot }) => (
                        <button
                            className={captureBtn}
                            onClick={() => {
                            const imageSrc = getScreenshot()
                            props.setPic(imageSrc);
                            props.setIsPic(true)
                            props.setCamera(false);
                            props.setDriverDetailsModal && props.setDriverDetailsModal(true)
                            props.setIssued && props.setIssued(true);
                            props.setComplete && props.setComplete(true);
                            props.setTakePic(false)
                            }}
                        >
                        </button>
                        )}
                    </Webcam>
                    <div className={camBottom}>
                    
                    </div>
                </div>
            </div>
      </div>
    </>
  );
}
