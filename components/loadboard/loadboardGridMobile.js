import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button, Form } from 'react-bootstrap';

export default function LoadboardGridMobile(props) {
  const router = useRouter();
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        {props.loadboardData
          ?.slice(
            parseInt(props.pageNumber * 6) - 6,
            parseInt(props.pageNumber * 6)
          )
          .map((data, idx) =>
            data.cargoTypeGrid === 'Car Clearing' ? (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  marginBottom: '20px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    style={{
                      maxWidth: '100%',
                      width: '400px',
                    }}
                    src={data.cargotypeImgGrid}
                    width="400"
                    height="200"
                    alt="sofa"
                  />
                </div>
                <Form.Label
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#303133',
                  }}
                >
                  {data.cargoTypeGrid}
                </Form.Label>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Form.Label
                    style={{
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#808080',
                    }}
                  >
                    Location:
                  </Form.Label>
                  <Form.Label
                    style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#151515',
                    }}
                  >
                    {data.deliveryLocationGrid}
                  </Form.Label>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Form.Label
                    style={{
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#808080',
                      width: '50px',
                    }}
                  >
                    Date:
                  </Form.Label>
                  <Form.Label
                    style={{
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#808080',
                      marginLeft: '13px',
                    }}
                  >
                    {data.pickupDate}
                  </Form.Label>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Form.Label
                    style={{
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#808080',
                    }}
                  >
                    Posted by :
                  </Form.Label>
                  <Image
                    style={{
                      maxWidth: '100%',
                      width: '72px',
                      marginTop: '4px',
                    }}
                    src={data.postedBy}
                    width="72"
                    height="12"
                    alt="marker"
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
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
                      fontSize: '11px',
                      fontWeight: 500,
                    }}
                  >
                    {data.amount}
                  </div>
                  <Form.Label
                    style={{
                      fontSize: '11px',
                      fontWeight: 500,
                      color: '#151515',
                      marginTop: '2px',
                      textAlign: 'center',
                      marginTop: '13px',
                    }}
                  >
                    {data.weight}lbs * {data.length}mm
                  </Form.Label>
                </div>
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
                        fontSize: '11px',
                        fontWeight: 500,
                        color: '#151515',
                        marginTop: '16px',
                      }}
                    >
                      {data.packageType}
                    </Form.Label>
                    <Button
                      onClick={() => router.push(`/loadboard/${data.id}`)}
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '12px',
                        height: '40px',
                        width: '137px',
                        background: '#7CC427',
                        border: 'none',
                        marginTop: '5px',
                      }}
                    >
                      <Form.Label
                        style={{
                          fontSize: '12px',
                          fontWeight: 400,
                          color: 'white',
                          marginTop: '7px',
                        }}
                      >
                        View details
                      </Form.Label>
                      <Image
                        style={{}}
                        src="/img/cargoarrowforward.png"
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
                      gap: '20px',
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
            ) : (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  gap: '20px',
                  marginBottom: '20px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    style={{
                      maxWidth: '100%',
                      width: '400px',
                    }}
                    src={data.cargotypeImgGrid}
                    width="400"
                    height="200"
                    alt="sofa"
                  />
                </div>
                <Form.Label
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#303133',
                  }}
                >
                  {data.cargoTypeGrid}
                </Form.Label>
                <div
                  style={{
                    display: 'flex',
                    gap: '13px',
                    marginTop: '-10px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Image
                      style={{
                        marginTop: '-22px',
                      }}
                      src="/img/loadboardfromto.png"
                      width="14"
                      height="69"
                      alt="marker"
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Form.Label
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#303133',
                      }}
                    >
                      {data.cityTownGrid}
                    </Form.Label>
                    <Form.Label
                      style={{
                        fontSize: '11px',
                        fontWeight: 400,
                        color: '#808080',
                        marginTop: '-6px',
                      }}
                    >
                      {data.takeoffDate}
                    </Form.Label>
                    <Form.Label
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#303133',
                      }}
                    >
                      {data.deliveryLocationGrid}
                    </Form.Label>
                    <Form.Label
                      style={{
                        fontSize: '11px',
                        fontWeight: 400,
                        color: '#808080',
                        marginTop: '-6px',
                      }}
                    >
                      {data.pickupDate}
                    </Form.Label>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    gap: '13px',
                  }}
                >
                  <Form.Label
                    style={{
                      fontSize: '13px',
                      fontWeight: 400,
                      color: '#808080',
                    }}
                  >
                    Posted by :
                  </Form.Label>
                  <Image
                    style={{
                      maxWidth: '100%',
                      width: '72px',
                    }}
                    src={data.postedBy}
                    width="72"
                    height="12"
                    alt="marker"
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      gap: '10px',
                      marginTop: '-20px',
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
                        fontSize: '11px',
                        fontWeight: 500,
                      }}
                    >
                      {data.amount}
                    </div>
                    <Form.Label
                      style={{
                        fontSize: '11px',
                        fontWeight: 500,
                        color: '#151515',
                        marginTop: '2px',
                        textAlign: 'center',
                        marginTop: '10px',
                      }}
                    >
                      {data.weight}lbs * {data.length}mm
                    </Form.Label>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      gap: '10px',
                      marginTop: '-20px',
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
                <div
                  style={{
                    display: 'flex',
                    gap: '10px',
                  }}
                >
                  <Form.Label
                    style={{
                      fontSize: '11px',
                      fontWeight: 500,
                      color: '#151515',
                      marginTop: '16px',
                    }}
                  >
                    {data.packageType}
                  </Form.Label>
                  <Button
                    onClick={() => router.push(`/loadboard/${data.id}`)}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '12px',
                      height: '40px',
                      width: '137px',
                      background: '#7CC427',
                      border: 'none',
                      marginTop: '5px',
                    }}
                  >
                    <Form.Label
                      style={{
                        fontSize: '12px',
                        fontWeight: 400,
                        color: 'white',
                        marginTop: '7px',
                      }}
                    >
                      View details
                    </Form.Label>
                    <Image
                      style={{}}
                      src="/img/cargoarrowforward.png"
                      width="6"
                      height="10"
                      alt="arrow"
                    />
                  </Button>
                </div>
              </div>
            )
          )}
      </div>
    </>
  );
}
