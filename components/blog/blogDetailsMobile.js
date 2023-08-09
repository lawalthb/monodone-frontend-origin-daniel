import Image from 'next/image';
import { Form } from 'react-bootstrap';
import BlogComment from './blogComment';

export default function BlogDetailsMobile(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <Image
          style={{
            maxWidth: '100%',
            width: '303px',
          }}
          src={props.blog.blogPicture}
          width="303"
          height="184"
          alt="pic"
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
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
          {props.blog.title}
        </Form.Label>
        <p
          style={{
            fontSize: '12px',
            textAlign: 'justify',
          }}
        >
          {props.blog.message.slice(0, 200)}
          {'...'}
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
        <BlogComment />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            marginTop: '20px',
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
          {props.allData?.slice(0, 6).map((data, idx) => (
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
