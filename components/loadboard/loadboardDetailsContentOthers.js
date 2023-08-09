import Media from '@/utils/media';
import Image from 'next/image';
import { Button, Form } from 'react-bootstrap';
import LoadboardContentDetailsAction from './loadboardContentDetailsAction';

export default function LoadboardDetailsContentOthers(props) {
  const { mobile, tabletAndDesktop } = Media();
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          padding: mobile ? '20px' : '30px',
        }}
      >
        <Form.Label
          style={{
            fontSize: '16px',
            color: 'black',
            fontWeight: 500,
          }}
        >
          Red 2020 Gwagon
        </Form.Label>
        <p
          style={{
            fontSize: '12px',
            textAlign: 'justify',
          }}
        >
          {`Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil 
impedit quo minus id quod maxime placeat facere possimus, omnis voluptas 
assumenda est, omnis dolor repellendus. Nam libero tempore, cum soluta nobis 
est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere 
possimus, omnis voluptas assumenda est, omnis dolor repellendus. repellendus. 
Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus
 id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor 
 repellendus.`}
        </p>
        {mobile ? (
          <>
            <div
              style={{
                display: 'flex',
                gap: '20px',
              }}
            >
              <Form.Label
                style={{
                  fontSize: '12px',
                  fontWeight: '500',
                  color: 'black',
                  marginTop: '5px',
                }}
              >
                Posted by:
              </Form.Label>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Image
                  style={{
                    marginTop: '5px',
                  }}
                  src={props.specificLoadboardData?.postedBy}
                  width="123"
                  height="15"
                  alt="package"
                />
                <div
                  style={{
                    display: 'flex',
                    marginTop: '10px',
                    gap: '10px',
                  }}
                >
                  <Image
                    style={{
                      marginTop: '5px',
                    }}
                    src="/img/loadboardrating.png"
                    width="20"
                    height="20"
                    alt="rating"
                  />
                  <Image
                    style={{
                      marginTop: '5px',
                    }}
                    src="/img/loadboardrating.png"
                    width="20"
                    height="20"
                    alt="rating"
                  />
                  <Image
                    style={{
                      marginTop: '5px',
                    }}
                    src="/img/loadboardrating.png"
                    width="20"
                    height="20"
                    alt="rating"
                  />
                  <Image
                    style={{
                      marginTop: '5px',
                    }}
                    src="/img/loadboardrating.png"
                    width="20"
                    height="20"
                    alt="rating"
                  />
                  <Image
                    style={{
                      marginTop: '5px',
                    }}
                    src="/img/loadboardrating.png"
                    width="20"
                    height="20"
                    alt="rating"
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                gap: '20px',
                marginTop: '20px',
              }}
            >
              <Form.Label
                style={{
                  fontSize: '12px',
                  fontWeight: '500',
                  color: 'black',
                  marginTop: '5px',
                }}
              >
                {`${props.specificLoadboardData?.weight}lbs * ${props.specificLoadboardData?.length}mm`}
              </Form.Label>
              <Image
                style={{
                  maxWidth: '100%',
                  width: '21px',
                }}
                src="/img/loadboardfigurinecup.png"
                width="18"
                height="20"
                alt="cup"
              />
              <Form.Label
                style={{
                  fontSize: '12px',
                  fontWeight: '500',
                  color: 'black',
                  marginTop: '5px',
                }}
              >
                {props.specificLoadboardData?.packageType}
              </Form.Label>
            </div>
            <div
              style={{
                display: 'flex',
                gap: '20px',
                marginTop: '20px',
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '40px',
                  borderRadius: '5px',
                  background: 'rgba(208, 255, 152, 0.15)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#00902F',
                  fontSize: '13px',
                  fontWeight: 500,
                }}
              >
                {props.specificLoadboardData?.amount}
              </div>
              <Button
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '7px',
                  width: '138px',
                  height: '40px',
                  background: 'transparent',
                  border: '1px solid #7CC427',
                  color: 'black',
                  gap: '10px',
                }}
              >
                <Form.Label
                  style={{
                    fontSize: '13px',
                    fontWeight: 500,
                    color: '#151515',
                    textAlign: 'center',
                    marginTop: '9px',
                  }}
                >
                  Build a route
                </Form.Label>
                <Image
                  style={{
                    maxWidth: '100%',
                    width: '6px',
                  }}
                  src="/img/buildroutearrow.png"
                  width="6"
                  height="10"
                  alt="arrow"
                />
              </Button>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                marginTop: '20px',
              }}
            >
              <Image
                style={{
                  width: '327',
                  maxWidth: '100%',
                }}
                src="/img/loadboardmap.png"
                width="327"
                height="154"
                alt="map"
              />
            </div>
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                marginTop: '20px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: '20px',
                }}
              >
                <Image
                  style={{
                    maxWidth: '100%',
                    width: '14px',
                  }}
                  src="/img/loadboardmarkerlg.png"
                  width="14"
                  height="187"
                  alt="arrow"
                />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Form.Label
                    style={{
                      fontSize: '12px',
                      color: '#4E4C4C',
                      fontWeight: 400,
                    }}
                  >
                    DELIVER FROM
                  </Form.Label>
                  <Form.Label
                    style={{
                      fontSize: '15px',
                      color: '#4E4C4C',
                      fontWeight: 600,
                    }}
                  >
                    {props.specificLoadboardData?.deliveryLocationGrid}
                  </Form.Label>
                  <Form.Label
                    style={{
                      fontSize: '12px',
                      color: '#4E4C4C',
                      fontWeight: 400,
                    }}
                  >
                    {props.specificLoadboardData?.takeoffDate}
                  </Form.Label>
                  <div
                    style={{
                      display: 'flex',
                      gap: '14px',
                      marginTop: '20px',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '7px',
                        width: '40px',
                        height: '40px',
                        background: 'rgba(124, 196, 39, 0.15)',
                        borderRadius: '3px',
                      }}
                    >
                      <Image
                        style={{
                          maxWidth: '100%',
                          width: '21px',
                        }}
                        src="/img/loadboardmsg.png"
                        width="21"
                        height="19"
                        alt="arrow"
                      />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '7px',
                        width: '40px',
                        height: '40px',
                        background: 'rgba(124, 196, 39, 0.15)',
                        borderRadius: '3px',
                      }}
                    >
                      <Image
                        style={{
                          maxWidth: '100%',
                          width: '21px',
                        }}
                        src="/img/loadboardphone.png"
                        width="21"
                        height="19"
                        alt="arrow"
                      />
                    </div>
                  </div>
                  <Form.Label
                    style={{
                      fontSize: '12px',
                      color: '#4E4C4C',
                      fontWeight: 400,
                      marginTop: '65px',
                    }}
                  >
                    DELIVER TO
                  </Form.Label>
                  <Form.Label
                    style={{
                      fontSize: '15px',
                      color: '#4E4C4C',
                      fontWeight: 600,
                    }}
                  >
                    {props.specificLoadboardData?.cityTownGrid}
                  </Form.Label>
                  <Form.Label
                    style={{
                      fontSize: '12px',
                      color: '#4E4C4C',
                      fontWeight: 400,
                    }}
                  >
                    {props.specificLoadboardData?.pickupDate}
                  </Form.Label>
                  <div
                    style={{
                      display: 'flex',
                      gap: '14px',
                      marginTop: '20px',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '7px',
                        width: '40px',
                        height: '40px',
                        background: 'rgba(124, 196, 39, 0.15)',
                        borderRadius: '3px',
                      }}
                    >
                      <Image
                        style={{
                          maxWidth: '100%',
                          width: '21px',
                        }}
                        src="/img/loadboardmsg.png"
                        width="21"
                        height="19"
                        alt="arrow"
                      />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '7px',
                        width: '40px',
                        height: '40px',
                        background: 'rgba(124, 196, 39, 0.15)',
                        borderRadius: '3px',
                      }}
                    >
                      <Image
                        style={{
                          maxWidth: '100%',
                          width: '21px',
                        }}
                        src="/img/loadboardphone.png"
                        width="21"
                        height="19"
                        alt="arrow"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: '20px',
                }}
              >
                <LoadboardContentDetailsAction />
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: '10px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: '20px',
                  }}
                >
                  <Form.Label
                    style={{
                      fontSize: '12px',
                      fontWeight: '500',
                      color: 'black',
                      marginTop: '5px',
                    }}
                  >
                    Posted by:
                  </Form.Label>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Image
                      style={{
                        marginTop: '5px',
                      }}
                      src={props.specificLoadboardData?.postedBy}
                      width="123"
                      height="15"
                      alt="package"
                    />
                    <div
                      style={{
                        display: 'flex',
                        marginTop: '10px',
                        gap: '10px',
                      }}
                    >
                      <Image
                        style={{
                          marginTop: '5px',
                        }}
                        src="/img/loadboardrating.png"
                        width="20"
                        height="20"
                        alt="rating"
                      />
                      <Image
                        style={{
                          marginTop: '5px',
                        }}
                        src="/img/loadboardrating.png"
                        width="20"
                        height="20"
                        alt="rating"
                      />
                      <Image
                        style={{
                          marginTop: '5px',
                        }}
                        src="/img/loadboardrating.png"
                        width="20"
                        height="20"
                        alt="rating"
                      />
                      <Image
                        style={{
                          marginTop: '5px',
                        }}
                        src="/img/loadboardrating.png"
                        width="20"
                        height="20"
                        alt="rating"
                      />
                      <Image
                        style={{
                          marginTop: '5px',
                        }}
                        src="/img/loadboardrating.png"
                        width="20"
                        height="20"
                        alt="rating"
                      />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        gap: '14px',
                        marginTop: '20px',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: '7px',
                          width: '40px',
                          height: '40px',
                          background: 'rgba(124, 196, 39, 0.15)',
                          borderRadius: '3px',
                        }}
                      >
                        <Image
                          style={{
                            maxWidth: '100%',
                            width: '21px',
                          }}
                          src="/img/loadboardmsg.png"
                          width="21"
                          height="19"
                          alt="arrow"
                        />
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: '7px',
                          width: '40px',
                          height: '40px',
                          background: 'rgba(124, 196, 39, 0.15)',
                          borderRadius: '3px',
                        }}
                      >
                        <Image
                          style={{
                            maxWidth: '100%',
                            width: '21px',
                          }}
                          src="/img/loadboardphone.png"
                          width="21"
                          height="19"
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '20px',
                }}
              >
                <Form.Label
                  style={{
                    fontSize: '12px',
                    fontWeight: '500',
                    color: 'black',
                    marginTop: '5px',
                  }}
                >
                  {`${props.specificLoadboardData?.weight}lbs * ${props.specificLoadboardData?.length}mm`}
                </Form.Label>
                <Image
                  style={{
                    maxWidth: '100%',
                    width: '21px',
                  }}
                  src="/img/loadboardfigurinecup.png"
                  width="18"
                  height="20"
                  alt="cup"
                />
                <Form.Label
                  style={{
                    fontSize: '12px',
                    fontWeight: '500',
                    color: 'black',
                    marginTop: '5px',
                  }}
                >
                  {props.specificLoadboardData?.packageType}
                </Form.Label>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '20px',
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '40px',
                    borderRadius: '5px',
                    background: 'rgba(208, 255, 152, 0.15)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#00902F',
                    fontSize: '13px',
                    fontWeight: 500,
                  }}
                >
                  {props.specificLoadboardData?.amount}
                </div>
                <Button
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '7px',
                    width: '138px',
                    height: '40px',
                    background: 'transparent',
                    border: '1px solid #7CC427',
                    color: 'black',
                    gap: '10px',
                  }}
                >
                  <Form.Label
                    style={{
                      fontSize: '13px',
                      fontWeight: 500,
                      color: '#151515',
                      textAlign: 'center',
                      marginTop: '9px',
                    }}
                  >
                    Build a route
                  </Form.Label>
                  <Image
                    style={{
                      maxWidth: '100%',
                      width: '6px',
                    }}
                    src="/img/buildroutearrow.png"
                    width="6"
                    height="10"
                    alt="arrow"
                  />
                </Button>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: '30px',
              }}
            >
              <div
                style={{
                  width: '35%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: '20px',
                  }}
                >
                  <Image
                    style={{
                      maxWidth: '100%',
                      width: '14px',
                    }}
                    src="/img/loadboardmarkerlg.png"
                    width="14"
                    height="187"
                    alt="arrow"
                  />
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Form.Label
                      style={{
                        fontSize: '12px',
                        color: '#4E4C4C',
                        fontWeight: 400,
                      }}
                    >
                      DELIVER FROM
                    </Form.Label>
                    <Form.Label
                      style={{
                        fontSize: '15px',
                        color: '#4E4C4C',
                        fontWeight: 600,
                      }}
                    >
                      {props.specificLoadboardData?.deliveryLocationGrid}
                    </Form.Label>
                    <Form.Label
                      style={{
                        fontSize: '12px',
                        color: '#4E4C4C',
                        fontWeight: 400,
                      }}
                    >
                      {props.specificLoadboardData?.takeoffDate}
                    </Form.Label>
                    <div
                      style={{
                        display: 'flex',
                        gap: '14px',
                        marginTop: '20px',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: '7px',
                          width: '40px',
                          height: '40px',
                          background: 'rgba(124, 196, 39, 0.15)',
                          borderRadius: '3px',
                        }}
                      >
                        <Image
                          style={{
                            maxWidth: '100%',
                            width: '21px',
                          }}
                          src="/img/loadboardmsg.png"
                          width="21"
                          height="19"
                          alt="arrow"
                        />
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: '7px',
                          width: '40px',
                          height: '40px',
                          background: 'rgba(124, 196, 39, 0.15)',
                          borderRadius: '3px',
                        }}
                      >
                        <Image
                          style={{
                            maxWidth: '100%',
                            width: '21px',
                          }}
                          src="/img/loadboardphone.png"
                          width="21"
                          height="19"
                          alt="arrow"
                        />
                      </div>
                    </div>
                    <Form.Label
                      style={{
                        fontSize: '12px',
                        color: '#4E4C4C',
                        fontWeight: 400,
                        marginTop: '65px',
                      }}
                    >
                      DELIVER TO
                    </Form.Label>
                    <Form.Label
                      style={{
                        fontSize: '15px',
                        color: '#4E4C4C',
                        fontWeight: 600,
                      }}
                    >
                      {props.specificLoadboardData?.cityTownGrid}
                    </Form.Label>
                    <Form.Label
                      style={{
                        fontSize: '12px',
                        color: '#4E4C4C',
                        fontWeight: 400,
                      }}
                    >
                      {props.specificLoadboardData?.pickupDate}
                    </Form.Label>
                    <div
                      style={{
                        display: 'flex',
                        gap: '14px',
                        marginTop: '20px',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: '7px',
                          width: '40px',
                          height: '40px',
                          background: 'rgba(124, 196, 39, 0.15)',
                          borderRadius: '3px',
                        }}
                      >
                        <Image
                          style={{
                            maxWidth: '100%',
                            width: '21px',
                          }}
                          src="/img/loadboardmsg.png"
                          width="21"
                          height="19"
                          alt="arrow"
                        />
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: '7px',
                          width: '40px',
                          height: '40px',
                          background: 'rgba(124, 196, 39, 0.15)',
                          borderRadius: '3px',
                        }}
                      >
                        <Image
                          style={{
                            maxWidth: '100%',
                            width: '21px',
                          }}
                          src="/img/loadboardphone.png"
                          width="21"
                          height="19"
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    marginTop: '20px',
                  }}
                >
                  <LoadboardContentDetailsAction />
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '58%',
                  gap: '20px',
                }}
              >
                <Image
                  style={{
                    width: '722',
                    maxWidth: '100%',
                  }}
                  src="/img/loadboardmap.png"
                  width="722"
                  height="438"
                  alt="map"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
