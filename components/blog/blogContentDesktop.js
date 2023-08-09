import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button, Form } from 'react-bootstrap';

export default function BlogContentDestop(props) {
  const router = useRouter();
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          gap: '10px',
        }}
      >
        {props.blogData
          ?.slice(
            parseInt(props.pageNumber) * 2 - 2,
            parseInt(props.pageNumber) * 2
          )
          .map((blog, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                border: '1px solid #E7E7E7',
                padding: '20px',
                flexDirection: 'column',
                gap: '10px',
                width: '48%',
              }}
            >
              <Image
                style={{
                  maxWidth: '100%',
                  width: '566px',
                }}
                src={blog.blogPicture}
                width="566"
                height="376"
                alt="pic"
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <Form.Label
                  style={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontSize: '20px',
                    fontWeight: 600,
                    color: 'black',
                    letterSpacing: '0.02em',
                  }}
                >
                  {blog.title}
                </Form.Label>
                <p
                  style={{
                    fontSize: '12px',
                    textAlign: 'justify',
                  }}
                >
                  {blog.message.slice(0, 200)}
                  {'...'}
                </p>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '20px',
                  }}
                >
                  <Button
                    onClick={() => router.push(`/blog/${blog.id}`)}
                    style={{
                      boxSizing: 'border-box',
                      width: '174px',
                      height: '40px',
                      background: '#00902F',
                      bordeRadius: '6px',
                      flex: 'none',
                      order: '0',
                      flexGrow: '0',
                      border: 'none',
                      fontSize: '14px',
                    }}
                  >
                    Read more
                  </Button>
                  <Form.Label
                    style={{
                      fontFamily: 'Poppins',
                      fontStyle: 'normal',
                      fontSize: '11px',
                      fontWeight: 400,
                      color: 'black',
                      letterSpacing: '0.02em',
                      marginTop: '5px',
                    }}
                  >
                    12:00am | 20:01:23
                  </Form.Label>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          gap: '10px',
          marginTop: '20px',
        }}
      >
        {props.blogData
          ?.slice(
            parseInt(props.pageNumber + 1),
            parseInt(props.pageNumber + 3)
          )
          .map((blog, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                border: '1px solid #E7E7E7',
                padding: '20px',
                flexDirection: 'column',
                gap: '10px',
                width: '48%',
              }}
            >
              <Image
                style={{
                  maxWidth: '100%',
                  width: '566px',
                }}
                src={blog.blogPicture}
                width="566"
                height="376"
                alt="pic"
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <Form.Label
                  style={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontSize: '20px',
                    fontWeight: 600,
                    color: 'black',
                    letterSpacing: '0.02em',
                  }}
                >
                  {blog.title}
                </Form.Label>
                <p
                  style={{
                    fontSize: '12px',
                    textAlign: 'justify',
                  }}
                >
                  {blog.message.slice(0, 200)}
                  {'...'}
                </p>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '20px',
                  }}
                >
                  <Button
                    onClick={() => router.push(`/blog/${blog.id}`)}
                    style={{
                      boxSizing: 'border-box',
                      width: '174px',
                      height: '40px',
                      background: '#00902F',
                      bordeRadius: '6px',
                      flex: 'none',
                      order: '0',
                      flexGrow: '0',
                      border: 'none',
                      fontSize: '14px',
                    }}
                  >
                    Read more
                  </Button>
                  <Form.Label
                    style={{
                      fontFamily: 'Poppins',
                      fontStyle: 'normal',
                      fontSize: '11px',
                      fontWeight: 400,
                      color: 'black',
                      letterSpacing: '0.02em',
                      marginTop: '5px',
                    }}
                  >
                    12:00am | 20:01:23
                  </Form.Label>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          gap: '10px',
          marginTop: '20px',
        }}
      >
        {props.blogData
          ?.slice(
            parseInt(props.pageNumber + 3),
            parseInt(props.pageNumber + 5)
          )
          .map((blog, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                border: '1px solid #E7E7E7',
                padding: '20px',
                flexDirection: 'column',
                gap: '10px',
                width: '48%',
              }}
            >
              <Image
                style={{
                  maxWidth: '100%',
                  width: '566px',
                }}
                src={blog.blogPicture}
                width="566"
                height="376"
                alt="pic"
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <Form.Label
                  style={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontSize: '20px',
                    fontWeight: 600,
                    color: 'black',
                    letterSpacing: '0.02em',
                  }}
                >
                  {blog.title}
                </Form.Label>
                <p
                  style={{
                    fontSize: '12px',
                    textAlign: 'justify',
                  }}
                >
                  {blog.message.slice(0, 200)}
                  {'...'}
                </p>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '20px',
                  }}
                >
                  <Button
                    onClick={() => router.push(`/blog/${blog.id}`)}
                    style={{
                      boxSizing: 'border-box',
                      width: '174px',
                      height: '40px',
                      background: '#00902F',
                      bordeRadius: '6px',
                      flex: 'none',
                      order: '0',
                      flexGrow: '0',
                      border: 'none',
                      fontSize: '14px',
                    }}
                  >
                    Read more
                  </Button>
                  <Form.Label
                    style={{
                      fontFamily: 'Poppins',
                      fontStyle: 'normal',
                      fontSize: '11px',
                      fontWeight: 400,
                      color: 'black',
                      letterSpacing: '0.02em',
                      marginTop: '5px',
                    }}
                  >
                    12:00am | 20:01:23
                  </Form.Label>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
