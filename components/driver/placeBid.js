import { Button, Form, Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import GeneralModal from '../modal/generalModal';
import Image from 'next/image';
import Media from '@/utils/media';
import styles from './placeBid.module.css'
import TakePicModal from './takePicModal';
import Camera from './camera';

export default function PlaceBid(props) {
  const [accept, setAccept] = useState(false);
  const [acceptModal, setAcceptModal] = useState(false);
  const [review, setReview] = useState(false);
  const [reviewModal, setReviewModal] = useState(false);
  const [complete, setComplete] = useState(false);
  const { mobile } = Media();
  const [timeCount, setTimeCount] = useState(2);
  const [bidValue, setBidValue] = useState(0);
  const [addBid, setAddBid] = useState(false);
  const [bids, setBids] = useState([]);
  const [camera, setCamera] = useState(false);
  const [takePic, setTakePic] = useState(false);
  const [isBidPic, setIsBidPic] = useState(false);
  const [bidPic, setBidPic] = useState('');
  const bidSuggestions = [20, 25, 30, 35];
  const images = [
    "/img/bulk.png",
    "/img/bulk.png",
    "/img/bulk.png",
  ]

  useEffect(() => {
    if(props.bid){
        setTimeout(() => {
              if(timeCount > 0){
                  setTimeCount(timeCount- 1)
              }
          }, 1000)
    }
  })

  const incBid = (value) => {
    setBidValue(value);
  }

  const addNewBid = (value) => {
    if(value > 0 ){
        console.log(value);
        bids.push(value);
        setBids(bids);
        console.log(bids);
        setAddBid(false);
    }
  }

  return (
    <>
        {!takePic && !camera &&
        <GeneralModal
            size="md"
            show={props.bid}
            onHide={() => {
                props.setBid(false); 
                setAccept(false); 
                setAcceptModal(false); 
                setComplete(false);
                setReview(false)
                setReviewModal(false)
                setTimeCount(2)
                setBidValue(0)
                setAddBid(false)
                setBids([])
                setCamera(false)
                setTakePic(false)
                setIsBidPic(false)
                setBidPic('')
            }}
            style={{padding:'0'}}
        >
            {addBid &&
            
                <AddBid 
                setAddBid={setAddBid}
                bidValue={bidValue}
                setBidValue={setBidValue}
                bidSuggestions={bidSuggestions}
                incBid={incBid}
                addNewBid={addNewBid}

                />

            }

            {acceptModal && 
            <AcceptModal
                setAccept={setAccept}
                setAcceptModal={setAcceptModal}
            />

            }

            {reviewModal && 
            <ReviewModal
                setReview={setReview}
                setReviewModal={setReviewModal}
                setAccept={setAccept}
            />

            }


            {!addBid && !acceptModal && !reviewModal && !takePic && !camera &&
            <Modal.Body
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                paddingBottom: '30px',
            }}
            >
            <Form.Label
                style={{
                color: 'black',
                fontSize: '16px',
                fontWeight: 600,
                }}
            >
                # 20 4002 8668 0998
            </Form.Label>
            {complete && 
                <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '10px',
                }}
                >
                <div
                    style={{
                    display: 'flex',
                    gap: '10px',
                    }}
                >
                    <Image
                    style={{
                        cursor: 'pointer',
                        marginTop: '6px',
                    }}
                    src="/img/Ellipse-green.png"
                    width="6"
                    height="6"
                    alt="logo"
                    />
                    <Form.Label
                    style={{
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '12px',
                        color: 'rgba(128, 128, 128, 1)',
                    }}
                    >
                    Arrived
                    </Form.Label>
                </div>
                <Image
                    style={{
                    cursor: 'pointer',
                    marginTop: '6px',
                    }}
                    src="/img/driverorderway.png"
                    width="24"
                    height="12"
                    alt="logo"
                />
                </div>
            }
            <hr
                style={{
                color: 'gray',
                fontWeight: 600,
                }}
            />
            
            <div
                style={{
                display: 'flex',
                gap: '10px',
                }}
            >
                <Image
                src="/img/driverfromto.png"
                width="16"
                height="83"
                alt="points"
                />
                <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
                >
                <Form.Label
                    style={{
                    color: 'black',
                    fontSize: '14px',
                    fontWeight: 600,
                    }}
                >
                    21 Alex Ekwueme Way, Jabi 900108, Abuja
                </Form.Label>
                <Form.Label
                    style={{
                    color: '#808080',
                    fontSize: '12px',
                    fontWeight: 400,
                    marginTop: '-6px',
                    }}
                >
                    14 Jul 2022
                </Form.Label>
                <Form.Label
                    style={{
                    color: 'black',
                    fontSize: '14px',
                    fontWeight: 600,
                    marginTop: mobile ? '0px' : '17px',
                    }}
                >
                    Kaduna Name City
                </Form.Label>
                <Form.Label
                    style={{
                    color: '#808080',
                    fontSize: '12px',
                    fontWeight: 400,
                    marginTop: '-6px',
                    }}
                >
                    16 Jul 2022
                </Form.Label>
                </div>
            </div>
            <hr
                style={{
                color: 'gray',
                fontWeight: 600,
                }}
            />
            <Form.Label
                style={{
                color: 'rgba(21, 21, 21, 1)',
                fontSize: '14px',
                fontWeight: 400,
                }}
            >
                Package description, for example furniture
            </Form.Label>
            <div className={styles.packageImgs}>
                {
                    images.map((value, index) => {
                        return(
                            <Image
                            key={index}
                            src={value}
                            className={styles.packageImg}
                            width="101"
                            height="101"
                            alt="union"
                            />
                        )
                    })
                }
            </div>
            <hr
                style={{
                color: 'gray',
                fontWeight: 600,
                }}
            />
            <div
                style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                }}
            >
                <Form.Label
                style={{
                    color: '#808080',
                    fontSize: '14px',
                    fontWeight: 400,
                }}
                >
                Transport
                </Form.Label>
                <Form.Label
                style={{
                    color: '#151515',
                    fontSize: '14px',
                    fontWeight: 400,
                }}
                >
                    Van
                </Form.Label>
            </div>
            <hr
                style={{
                color: 'gray',
                fontWeight: 600,
                margin: 0,
                }}
            />
            <div
                style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                }}
            >
                <Form.Label
                style={{
                    color: '#808080',
                    fontSize: '14px',
                    fontWeight: 400,
                }}
                >
                Pick up time
                </Form.Label>
                <Form.Label
                style={{
                    color: '#151515',
                    fontSize: '14px',
                    fontWeight: 400,
                    textAlign: 'end',
                }}
                >
                    Mon, July 26
                    <br />
                    9-9:30AM
                </Form.Label>
            </div>
            <hr
                style={{
                color: 'gray',
                fontWeight: 600,
                marginTop: 0,
                }}
            />
            <div
                style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: '-6px',
                }}
            >
                <Form.Label
                style={{
                    color: '#808080',
                    fontSize: '14px',
                    fontWeight: 400,
                }}
                >
                Fragile product
                </Form.Label>
                <Image
                src="/img/driverunion.png"
                width="18"
                height="20"
                alt="union"
                />
            </div>
            
            {(accept || complete) && (
                <>
                <hr
                    style={{
                    color: 'gray',
                    fontWeight: 600,
                    }}
                />
                <div
                    style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    marginTop: '-6px',
                    }}
                >
                    <Form.Label
                    style={{
                        color: '#808080',
                        fontSize: '14px',
                        fontWeight: 400,
                    }}
                    >
                    Sender
                    </Form.Label>
                    <Form.Label
                    style={{
                        color: '#151515',
                        fontSize: '14px',
                        fontWeight: 400,
                    }}
                    >
                    Adaora Daberechi
                    </Form.Label>
                </div>
                <hr
                    style={{
                    color: 'gray',
                    fontWeight: 600,
                    }}
                />
                <div
                    style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    marginTop: '-6px',
                    }}
                >
                    <Form.Label
                    style={{
                        color: '#808080',
                        fontSize: '14px',
                        fontWeight: 400,
                    }}
                    >
                    Receiver
                    </Form.Label>
                    <Form.Label
                    style={{
                        color: '#151515',
                        fontSize: '14px',
                        fontWeight: 400,
                    }}
                    >
                    Alex Daberechi
                    </Form.Label>
                </div>
                </>
            )}
            <hr
                style={{
                color: 'gray',
                fontWeight: 600,
                }}
            />
            <div
                style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: '-6px',
                }}
            >
                <Form.Label
                style={{
                    color: '#808080',
                    fontSize: '14px',
                    fontWeight: 400,
                }}
                >
                Delivery price
                </Form.Label>
                <Form.Label
                style={{
                    color: '#151515',
                    fontSize: '14px',
                    fontWeight: 400,
                }}
                >
                ₦ 128.00
                </Form.Label>
            </div>
            {(accept || review || complete) && bids.length > 0 && 
                <div
                style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: '-6px',
                }}
                >
                    <Form.Label
                    style={{
                        color: '#808080',
                        fontSize: '14px',
                        fontWeight: 400,
                    }}
                    >
                    Bid
                    </Form.Label>
                    <Form.Label
                    style={{
                        color: '#151515',
                        fontSize: '14px',
                        fontWeight: 400,
                    }}
                    >
                    ₦ {bids[0]}
                    </Form.Label>
                </div>
            }
            {(accept || review) && 
                <div
                style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: '-6px',
                }}
                >
                    <Form.Label
                    style={{
                        color: '#808080',
                        fontSize: '14px',
                        fontWeight: 400,
                    }}
                    >
                    Total delivery price
                    </Form.Label>
                    <Form.Label
                    style={{
                        color: '#151515',
                        fontSize: '14px',
                        fontWeight: 400,
                    }}
                    >
                    ₦ {128.00 + (bids.length > 0 ? bids[0] : 0)}
                    </Form.Label>
                </div>
            }
            {(accept || review) && 
            <div
                style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                background: (accept ? 'rgba(124, 196, 39, 0.15)' : 'rgba(3, 4, 94, 0.15)'),
                padding: '5px 20px',
                borderRadius: '6px',
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
                    color: '#151515',
                    fontSize: '12px',
                    fontWeight: 400,
                    }}
                >
                    Sender
                </Form.Label>
                <Form.Label
                    style={{
                    color: '#151515',
                    fontSize: '16px',
                    fontWeight: 600,
                    }}
                >
                    Call Adaora
                </Form.Label>
                </div>
                <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                >
                <Image
                    src="/img/drivercall.png"
                    width="20"
                    height="17"
                    alt="union"
                />
                </div>
            </div>
            }

            {timeCount > 0 && 
            <Form.Label
            style={{
                color: 'rgba(21, 21, 21, 0.7)',
                fontSize: '16px',
                fontWeight: 400,
                textAlign: 'center',
            }}
            >
                You can start a bid in {" "}
                <Form.Label
                style={{
                    color: 'rgba(21, 21, 21, 1)',
                    fontSize: '14px',
                    fontWeight: 400,
                }}
                >
                    {" " + timeCount}
                </Form.Label>
            </Form.Label>
            }
            {!accept && !review &&  
            <div style={{
                margin: '15px 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                }}
            >
            {
                bids.map((bid, index) => {
                    return(
                        <div
                            key={index}
                            style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            background: 'rgba(124, 196, 39, 0.15)',
                            padding: '10px 20px',
                            borderRadius: '6px',
                            }}
                        >
                            <div
                            style={{
                                display: 'flex',
                            }}
                            >
                            <Form.Label
                                style={{
                                color: 'rgba(21, 21, 21, 1)',
                                fontSize: '16px',
                                fontWeight: 400,
                                margin: 0,
                                }}
                            >
                                Your request
                            </Form.Label>
                            </div>
                            <div
                            style={{
                                display: 'grid',
                                gridAutoFlow: 'column',
                                gridGap: '4px',
                                alignItems: 'center',
                            }}
                            >
                            <Image
                                src="/img/driverrefresh.png"
                                width="14"
                                height="14"
                                alt="union"
                            />
                            <Form.Label
                                style={{
                                backgroundColor: 'rgba(255, 199, 0, 1)',
                                color: 'rgba(3, 4, 94, 1)',
                                fontSize: '14px',
                                fontWeight: 400,
                                margin: 0,
                                width: '59px',
                                height: '26px',
                                padding: '3px 8px 3px 8px',
                                borderRadius: '6px',
                                gap: '10px',
                                textAlign: 'center',
                                }}
                            >
                                {'₦' + " " + bid}
                            </Form.Label>
                            <Form.Label
                                style={{
                                color: 'rgba(21, 21, 21, 1)',
                                fontSize: '16px',
                                fontWeight: 400,
                                margin: 0,
                                }}
                            >
                                ₦ {bid + 128.00}
                            </Form.Label>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            }
            {!accept && !review &&
            <Button
            disabled={timeCount>0}
            onClick={() => {setAddBid(true)}}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: mobile ? '56px' : '40px',
                borderRadius: '6px',
                border: '1px solid #7CC427',
                background: 'transparent',
                textTransform: mobile ? 'uppercase' : undefined,
                color: 'black',
            }}
            >
                Make another bid
            </Button>
            }

            {isBidPic && 
                <Image
                src={bidPic}
                width={320}
                height={279}
                style={{
                    alignSelf: 'center',
                    margin: '1rem 0'
                }}
                className={styles.bidPicImg}
                alt="union"
                />
            }
            <div
            style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                marginTop: complete ? '30px' : '0',
            }}
            >
            {accept && (
                <Button
                onClick={() => setAccept(false)}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '48%',
                    height: mobile ? '56px' : '40px',
                    borderRadius: '6px',
                    border: '1px solid #7CC427',
                    background: 'transparent',
                    textTransform: mobile ? 'uppercase' : undefined,
                    color: 'black',
                }}
                >
                Reject
                </Button>
            )}
            {!accept && !review && (
                <Button
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: mobile ? '20%' : '10%',
                    height: mobile ? '56px' : '40px',
                    borderRadius: '6px',
                    border: '1px solid #7CC427',
                    background: 'transparent',
                }}
                >
                <Image
                    src="/img/driverarrowdown.png"
                    width="17"
                    height="7"
                    alt="arrowdown"
                />
                </Button>
            )}
            {!review ?
            <Button
                onClick={
                (accept) ? () => {setReviewModal(true)} 
                : 
                complete ? () => {props.setTakePic(true); props.setBid(false); setAccept(false); setComplete(false)} 
                :
                () => setAcceptModal(true)
                }
                style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: !complete ? accept ? '48%' : mobile ? '75%' : '80%' : '48%',
                height: mobile ? '56px' : '40px',
                borderRadius: '6px',
                border: 'none',
                background: 'rgba(0, 144, 47, 1)',
                textTransform: mobile ? 'uppercase' : undefined,
                }}
            >
                {(complete && accept) && "Confirm"}{ accept && 'Review'}{(!accept || review) && `Accept to # ${128.00 + (bids.length >0 ? bids[0] : 0)}` }{complete && " Done"}
            </Button>
            :
            <Button
            onClick={
                !complete ? () => {setTakePic(true)}
                :
                () => {
                    props.setBid(false)
                    setAccept(false); 
                    setAcceptModal(false); 
                    setComplete(false);
                    setReview(false)
                    setReviewModal(false)
                    setTimeCount(2)
                    setBidValue(0)
                    setAddBid(false)
                    setBids([])
                    setCamera(false)
                    setTakePic(false)
                    setIsBidPic(false)
                    setBidPic('')
                }
            }
                style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: !complete ? review ? '100%' : mobile ? '75%' : '80%' : '100%',
                height: mobile ? '56px' : '40px',
                borderRadius: '6px',
                border: !complete ? 'none' : '1px solid rgba(124, 196, 39, 1)',
                background: !complete ? 'rgba(0, 144, 47, 1)' : 'rgba(255, 255, 255, 1)',
                textTransform: mobile ? 'uppercase' : undefined,
                color: !complete ? 'white' : 'rgba(21, 21, 21, 1)',
                }}
            >
                {!complete ? `Accept to # ${128.00 + (bids.length >0 ? bids[0] : 0)}` : 'Close' }
            </Button>
            }
            </div>
            </Modal.Body>
            }
        </GeneralModal>
        }

        {takePic &&
        <TakePicModal 
            takePic={takePic}
            setTakePic={setTakePic}
            setCamera={setCamera}
            setComplete={setComplete}
        />}

        {camera &&
            <Camera 
                camera={camera}
                setCamera={setCamera}
                setTakePic={setTakePic}
                setComplete={setComplete}
                setPic={setBidPic}
                setIsPic={setIsBidPic}
            />
        }
    </>
  );
}



function AddBid(props) {
    const { mobile } = Media();

    return(
        <Modal.Body
        style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            paddingBottom: '30px',
          }}
        >
            <div className={styles.closeBid}>
            <Image
                onClick={() => {
                    props.setAddBid(false)
                }}
                src="/img/closeblack.png"
                width="16"
                height="16"
                alt="points"
            />
            </div>

            <Form.Label
            style={{
                color: 'rgba(21, 21, 21, 1)',
                fontSize: '22px',
                fontWeight: 600,
                textAlign: 'center',
            }}
            >
                Make another bid
            </Form.Label>

            <div className={styles.inputGroup}>
                <Form.Label
                style={{
                    color: 'rgba(166, 166, 166, 1)',
                    fontSize: '12px',
                    fontWeight: 400,
                    textAlign: 'start',
                    display: 'block',
                    margin: 0,
                }}
                >
                    Rise up price
                </Form.Label>
                <input 
                    id='bid'
                    type='text'
                    value={props.bidValue}
                    onChange={(e) => {props.setBidValue(e.target.value)}}
                // className={inputGroup}
                />
            </div>

            <div className={styles.bidOptions}>
                {
                    props.bidSuggestions.map((value, index) => {
                        return(
                            <div key={index} onClick={() => props.incBid(value)} style={{borderColor: props.bidValue == value ? 'rgba(124, 196, 39, 1)' : 'rgba(209, 209, 209, 1)'}} className={styles.bidOption}>
                                <p>+ {value}</p>
                            </div>
                        )
                    })
                }
            </div>

            <Button
                onClick={() => {props.addNewBid(props.bidValue)}}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: mobile ? '56px' : '40px',
                borderRadius: '6px',
                border: 'none',
                background: 'rgba(0, 144, 47, 1)',
                textTransform: mobile ? 'uppercase' : undefined,
              }}
            >
              Apply
            </Button>

        </Modal.Body>
    );
}

function AcceptModal(props) {
    return (
      <>
        <Modal.Body
        style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            padding: '10px 0px',
        }}
        >
        <Form.Label
            style={{
            color: 'rgba(128, 128, 128, 1)',
            fontSize: '14px',
            lineHeight: "21px",
            fontWeight: 400,
            textAlign: 'center',
            cursor: 'pointer',
            }}
        >
            Are you sure you want accept order?
        </Form.Label>
        <hr
            style={{
            color: 'gray',
            fontWeight: 600,
            marginTop: '-10px',
            }}
        />
        <Form.Label
            onClick={() => {
                props.setAccept(true);
                props.setAcceptModal(false);
            }}
            style={{
            color: 'black',
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: "24px",
            textAlign: 'center',
            cursor: 'pointer',
            }}
        >
            Accept
        </Form.Label>
        <hr
            style={{
            color: 'gray',
            fontWeight: 600,
            marginTop: '-10px',
            }}
        />
        <Form.Label
            onClick={() => {
            props.setAcceptModal(false)
            }}
            style={{
            color: 'rgba(0, 144, 47, 1)',
            fontSize: '14px',
            fontWeight: 600,
            textAlign: 'center',
            cursor: 'pointer',
            }}
        >
            Cancel
        </Form.Label>
        </Modal.Body>
      </>
    );
}

function ReviewModal(props) {
    return (
      <>
        <Modal.Body
        style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            padding: '10px 0px',
        }}
        >
        <Form.Label
            onClick={() => {
                props.setReview(true);
                props.setReviewModal(false);
                props.setAccept(false);
            }}
            style={{
            color: 'black',
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: "24px",
            textAlign: 'center',
            cursor: 'pointer',
            }}
        >
            Accept
        </Form.Label>
        <hr
            style={{
            color: 'gray',
            fontWeight: 600,
            marginTop: '-10px',
            }}
        />
        <Form.Label
            style={{
            color: 'black',
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: "24px",
            textAlign: 'center',
            cursor: 'pointer',
            }}
        >
            Support
        </Form.Label>
        <hr
            style={{
            color: 'gray',
            fontWeight: 600,
            marginTop: '-10px',
            }}
        />
        <Form.Label
            onClick={() => {
            props.setReviewModal(false)
            }}
            style={{
            color: 'rgba(0, 144, 47, 1)',
            fontSize: '14px',
            fontWeight: 600,
            textAlign: 'center',
            cursor: 'pointer',
            }}
        >
            Cancel
        </Form.Label>
        </Modal.Body>
      </>
    );
}
  