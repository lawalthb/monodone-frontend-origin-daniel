import Media from '@/utils/media';
import BlogContentMobile from './blogContentMobile';
import BlogContentDestop from './blogContentDesktop';

export default function BlogContent(props) {
  const { mobile, tabletAndDesktop } = Media();
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          padding: mobile ? '20px' : '10px 50px',
        }}
      >
        {mobile && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: '10px',
            }}
          >
            <BlogContentMobile
              blogData={props.blogData}
              allData={props.blogData}
              setPageNumbers={props.setPageNumbers}
              pageNumbers={props.pageNumbers}
              activePagenumber={props.activePagenumber}
              setActivePagenumber={props.setActivePagenumber}
              setPageNumber={props.setPageNumber}
              pageNumber={props.pageNumber}
            />
          </div>
        )}
        {tabletAndDesktop && (
          <BlogContentDestop
            blogData={props.blogData}
            allData={props.blogData}
            setPageNumbers={props.setPageNumbers}
            pageNumbers={props.pageNumbers}
            activePagenumber={props.activePagenumber}
            setActivePagenumber={props.setActivePagenumber}
            setPageNumber={props.setPageNumber}
            pageNumber={props.pageNumber}
          />
        )}
      </div>
    </>
  );
}
