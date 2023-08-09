import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Media from '@/utils/media';
import styles from '../../components/services/service.module.css';
import GeneralNav from '@/components/navigation/generalNav/generalNav';
import BlogHeading from '@/components/blog/blogHeading';
import { Form } from 'react-bootstrap';
import BlogDetailsContent from '@/components/blog/blogDetailsContent';
import AboutReusables from '@/components/about/aboutReusables';
import ServicesFooter from '@/components/services/servicesFooter';
import Login from '@/components/login/login';
import Signup from '@/components/signup/signup';

export default function BlogDetails(props) {
  const router = useRouter();
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const { mobile, tabletAndDesktop, desktop2, tabletAndDesktop2 } = Media();
  const { testimonialContent, arrowLeft, arrowRight } = AboutReusables();
  return (
    <>
      <Head>
        <title>{props.specificBlogData?.title} - Blog</title>
        <meta name="description" content="Monodome" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {mobile && (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'column',
              width: '100%',
            }}
          >
            <GeneralNav
              handleAboutUsClick={() => router.push('/about')}
              handleServicesClick={() => router.push('/services')}
              handleFeaturesClick={() => router.push('/features')}
              handleContactClick={() => router.push('/contact')}
              setLogin={setLogin}
              setSignup={setSignup}
            />
          </div>
          <div
            className={styles.monodomeServicesBgAdjusted}
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              width: '100%',
              height: '220px',
            }}
          >
            <BlogHeading />
          </div>
          <BlogDetailsContent
            blog={props.specificBlogData}
            allData={props.allData}
          />
          <div
            style={{
              padding: '20px',
              marginTop: '-10px',
              display: 'flex',
              flexDirection: 'column',
              fontWeight: 600,
            }}
          >
            People’s Comments
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding: '0px 20px 40px 20px',
              gap: '20px',
            }}
          >
            {testimonialContent}
            {testimonialContent}
            {testimonialContent}
            {testimonialContent}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              margin: 0,
              padding: '20px',
              height: '570px',
              background: '#151515',
            }}
          >
            <ServicesFooter />
          </div>
        </>
      )}
      {tabletAndDesktop && (
        <>
          <div
            className={styles.monodomeServicesBgAdjusted}
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              height: '280px',
            }}
          >
            <GeneralNav
              imgSrc="/img/monologservicelogo.png"
              handleAboutUsClick={() => router.push('/about')}
              handleServicesClick={() => router.push('/services')}
              handleFeaturesClick={() => router.push('/features')}
              handleContactClick={() => router.push('/contact')}
              setLogin={setLogin}
              setSignup={setSignup}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: '70px',
                marginLeft: '30%',
              }}
            >
              <Form.Label
                style={{
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '22px',
                  textAlign: 'center',
                  marginLeft: '-40%',
                }}
              >
                Blog
              </Form.Label>
            </div>
          </div>
          <BlogDetailsContent
            blog={props.specificBlogData}
            allData={props.allData}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              padding: '5px 80px 30px 80px',
              background: '#F9F9F9',
            }}
          >
            <Form.Label
              style={{
                fontWeight: 600,
                color: 'black',
                margintop: '20px',
              }}
            >
              People’s Comments
            </Form.Label>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '20px',
                width: '100%',
              }}
            >
              {desktop2 && (
                <>
                  {arrowLeft}
                  {testimonialContent}
                  {testimonialContent}
                  {testimonialContent}
                  {testimonialContent}
                  {arrowRight}
                </>
              )}
            </div>
            {tabletAndDesktop2 && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '20px',
                }}
              >
                <div>
                  {testimonialContent}
                  {testimonialContent}
                </div>
                <div>
                  {testimonialContent}
                  {testimonialContent}
                </div>
              </div>
            )}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              margin: 0,
              padding: '20px 80px',
              height: '350px',
              background: '#151515',
            }}
          >
            <ServicesFooter />
          </div>
          <Login login={login} setLogin={setLogin} setSignup={setSignup} />
          <Signup signup={signup} setSignup={setSignup} setLogin={setLogin} />
        </>
      )}
    </>
  );
}

export async function getStaticPaths() {
  const { blogInformation } = await import('../../data.json');
  const pathsWithParams = blogInformation.map((blog) => ({
    params: {
      blogid: blog.id,
    },
  }));
  return {
    paths: pathsWithParams,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const blogID = context.params?.blogid;
  const { blogInformation } = await import('../../data.json');
  const foundBlog = blogInformation.find((blog) => blogID === blog.id);

  if (!foundBlog) {
    return {
      props: { hasError: true },
    };
  }
  return {
    props: {
      specificBlogData: foundBlog,
      allData: blogInformation,
    },
  };
}

// export async function getStaticProps(context) {
//     const blogId = context.params.blogId
//     const connectionString = process.env.MONGODB_ATLAS + "blogs?retryWrites=true&w=majority";
//     const client = await MongoClient.connect(connectionString)
//     const db = client.db()
//     const blogsCollection = db.collection("blogs")
//     const blogData = await blogsCollection.find().toArray();

//     const selectedBlog = await blogsCollection.findOne({
//         _id: new ObjectId(blogId)
//     })
//     client.close()
//     return {
//         props: {
//             blogDataDetail: {
//                 id: selectedBlog?._id.toString(),
//                 title: selectedBlog.title,
//                 message: selectedBlog.message,
//                 blogPicture: selectedBlog.blogPicture,
//                 blogPictureName: selectedBlog.blogPictureName
//             },
//             blogData: blogData.map((blog) => ({
//                 id: blog._id.toString(),
//                 title: blog.title,
//                 message: blog.message,
//                 blogPicture: blog.blogPicture,
//                 blogPictureName: blog.blogPictureName,
//             })),
//         },
//         revalidate: 3600
//     }
// }

// export async function getStaticPaths() {
//     const connectionString = process.env.MONGODB_ATLAS + "blogs?retryWrites=true&w=majority";
//     const client = await MongoClient.connect(connectionString)
//     const db = client.db()
//     const blogsCollection = db.collection("blogs")
//     const blogs = await blogsCollection.find({}, { _id: 1 }).toArray(); // only fetching ids
//     client.close()
//     return {
//         paths: blogs.map((blog) => ({
//             params: {
//                 blogid: blog._id.toString()
//             }
//         })),
//         fallback: "blocking"
//     }
// }
