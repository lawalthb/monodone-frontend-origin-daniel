import Image from 'next/image';
import { useRouter } from 'next/router';
import { Form } from 'react-bootstrap';
import BlogComment from './blogComment';

export default function BlogDetailsDestop(props) {
  const router = useRouter();
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          // alignItems:'center',
          width: '100%',
          gap: '60px',
          padding: '30px 50px',
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
              border: '1px solid #E7E7E7',
              padding: '20px',
              flexDirection: 'column',
              gap: '10px',
              height: '700px',
            }}
          >
            <Image
              style={{
                maxWidth: '100%',
                width: '857px',
              }}
              src={props.blog.blogPicture}
              width="857"
              height="476"
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
                {props.blog.title}
              </Form.Label>
              <p
                style={{
                  fontSize: '12px',
                  textAlign: 'justify',
                }}
              >
                {props.blog.message}
              </p>
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
          <BlogComment />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <Form.Label
            style={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontSize: '18px',
              fontWeight: 600,
              color: 'black',
              letterSpacing: '0.02em',
              marginTop: '5px',
              textAlign: 'center',
            }}
          >
            Related Posts
          </Form.Label>
          {props.allData?.slice(0, 3).map((data, idx) => (
            <div
              onClick={() => router.push(`/blog/${data.id}`)}
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid #E7E7E7',
                padding: '20px',
                width: '309px',
                cursor: 'pointer',
              }}
            >
              <Image
                style={{
                  maxWidth: '100%',
                  width: '309px',
                }}
                src={data.blogPicture}
                width="309"
                height="168"
                alt="pic"
              />
              <Form.Label
                style={{
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: 'black',
                  letterSpacing: '0.02em',
                  marginTop: '10px',
                }}
              >
                {data.title}
              </Form.Label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
