import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button, Form } from 'react-bootstrap';

export default function BlogContentMobile(props) {
  const router = useRouter();
  return (
    <>
      {props.blogData
        ?.slice(
          parseInt(props.pageNumber * 6) - 6,
          parseInt(props.pageNumber * 6)
        )
        .map((blog, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <Image
              style={{
                maxWidth: '100%',
                width: '303px',
              }}
              src={blog.blogPicture}
              width="303"
              height="184"
              alt="pic"
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                padding: '20px',
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
                    width: '150px',
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
    </>
  );
}
