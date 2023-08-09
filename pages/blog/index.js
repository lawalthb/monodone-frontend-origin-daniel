import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../../components/services/service.module.css';
import Media from '@/utils/media';
import GeneralNav from '@/components/navigation/generalNav/generalNav';
import BlogHeading from '@/components/blog/blogHeading';
import Image from 'next/image';
import { Button, Form } from 'react-bootstrap';
import FilterAndPostComp from '@/components/blog/filterAndPostComp';
import BlogUpload from '@/components/blog/blogUpload';
import SuccessModal from '@/components/success/successModal';
import FailureModal from '@/components/failure/failureModal';
import BlogContent from '@/components/blog/blogContent';
import ServicesFooter from '@/components/services/servicesFooter';
import CustomPagination from '@/utils/pagination/customPagination';
import Login from '@/components/login/login';
import Signup from '@/components/signup/signup';

export default function Blog(props) {
  const router = useRouter();
  const [blogUpload, setBlogUpload] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [falureModal, setFailureModal] = useState(false);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [activePagenumber, setActivePagenumber] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const { mobile, tabletAndDesktop } = Media();
  return (
    <>
      <Head>
        <title>Mondome - Blog</title>
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
            <input
              style={{
                fontSize: '12px',
                color: '#A6A6A6',
                padding: '7px 30px',
                border: 'none',
                borderRadius: '6px',
                width: '85%',
                marginTop: '5px',
              }}
              type="text"
              placeholder="Search with key words"
            />
            <Image
              style={{
                marginTop: '-28px',
                marginRight: 'auto',
                marginLeft: '9%',
                zIndex: 100,
              }}
              src="/img/searchtrack.png"
              width="16"
              height="16"
              alt="search"
            />
            <Button
              style={{
                color: 'white',
                background: '#00902F',
                border: 'none',
                width: '104px',
                marginLeft: 'auto',
                marginRight: '10%',
                height: '30px',
                fontSize: '12px',
                fontWeight: 600,
                marginTop: '-23px',
              }}
            >
              Search
            </Button>
          </div>
          <FilterAndPostComp
            blogUpload={blogUpload}
            setBlogUpload={setBlogUpload}
          />
          <BlogContent
            blogData={props.blogData}
            allData={props.blogData}
            setPageNumbers={setPageNumbers}
            pageNumbers={pageNumbers}
            activePagenumber={activePagenumber}
            setActivePagenumber={setActivePagenumber}
            setPageNumber={setPageNumber}
            pageNumber={pageNumber}
          />
          <CustomPagination
            allData={props.blogData}
            setPageNumbers={setPageNumbers}
            pageNumbers={pageNumbers}
            activePagenumber={activePagenumber}
            setActivePagenumber={setActivePagenumber}
            setPageNumber={setPageNumber}
          />
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
          <BlogUpload
            blogUpload={blogUpload}
            setBlogUpload={setBlogUpload}
            setSuccessModal={setSuccessModal}
            setFailureModal={setFailureModal}
          />
          <SuccessModal
            successModal={successModal}
            setSuccessModal={setSuccessModal}
            caption="Successful!"
            msg="Your blog has been submitted for review."
            ok="Ok"
            handleClick={() => router.push('/blog')}
          />
          <FailureModal
            falureModal={falureModal}
            setFailureModal={setFailureModal}
            caption="Submission Failed"
            msg="Sorry, your blog post was not submitted due to some error. Try again later."
            ok="Try again"
          />
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
              <input
                style={{
                  fontSize: '12px',
                  color: '#A6A6A6',
                  padding: '7px 30px',
                  border: 'none',
                  borderRadius: '6px',
                  width: '60%',
                }}
                type="text"
                placeholder="Search with key words"
              />
              <Image
                style={{
                  marginTop: '-28px',
                  marginLeft: '8px',
                }}
                src="/img/searchtrack.png"
                width="16"
                height="16"
                alt="search"
              />
              <Button
                style={{
                  color: 'white',
                  background: '#00902F',
                  border: 'none',
                  width: '104px',
                  marginLeft: 'auto',
                  marginRight: '41%',
                  height: '30px',
                  fontSize: '12px',
                  fontWeight: 600,
                  marginTop: '-23px',
                }}
              >
                Search
              </Button>
            </div>
          </div>
          <FilterAndPostComp
            blogUpload={blogUpload}
            setBlogUpload={setBlogUpload}
          />
          <BlogContent
            blogData={props.blogData}
            allData={props.blogData}
            setPageNumbers={setPageNumbers}
            pageNumbers={pageNumbers}
            activePagenumber={activePagenumber}
            setActivePagenumber={setActivePagenumber}
            setPageNumber={setPageNumber}
            pageNumber={pageNumber}
          />
          <CustomPagination
            allData={props.blogData}
            setPageNumbers={setPageNumbers}
            pageNumbers={pageNumbers}
            activePagenumber={activePagenumber}
            setActivePagenumber={setActivePagenumber}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
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
          <BlogUpload
            blogUpload={blogUpload}
            setBlogUpload={setBlogUpload}
            setSuccessModal={setSuccessModal}
            setFailureModal={setFailureModal}
          />
          <SuccessModal
            successModal={successModal}
            setSuccessModal={setSuccessModal}
            caption="Successful!"
            msg="Your blog has been submitted for review."
            ok="Ok"
            handleClick={() => {
              router.push('/blog');
              setSuccessModal(false);
            }}
          />
          <FailureModal
            falureModal={falureModal}
            setFailureModal={setFailureModal}
            caption="Submission Failed"
            msg="Sorry, your blog post was not submitted due to some error. Try again later."
            ok="Try again"
          />
          <Login login={login} setLogin={setLogin} setSignup={setSignup} />
          <Signup signup={signup} setSignup={setSignup} setLogin={setLogin} />
        </>
      )}
    </>
  );
}

export async function getStaticProps() {
  const { blogInformation } = await import('../../data.json');

  return {
    props: {
      blogData: blogInformation,
    },
  };
  // const connectionString =
  //     process.env.MONGODB_ATLAS + 'blogs?retryWrites=true&w=majority';
  // const client = await MongoClient.connect(connectionString);
  // const db = client.db();
  // const blogsCollection = db.collection('blogs');
  // const blogData = await blogsCollection.find().toArray();
  // client.close();
  // return {
  //     props: {
  //         blogData: blogData.map((blog) => ({
  //             id: blog._id.toString(),
  //             title: blog.title,
  //             message: blog.message,
  //             blogPicture: blog.blogPicture,
  //             blogPictureName: blog.blogPictureName,
  //         })),
  //     },
  //     revalidate: 60,
  // };
}
