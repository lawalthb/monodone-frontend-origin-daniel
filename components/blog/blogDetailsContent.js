import Media from '@/utils/media';
import BlogDetailsMobile from './blogDetailsMobile';
import BlogDetailsDestop from './blogDetailsDestop';

export default function BlogDetailsContent(props) {
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
            <BlogDetailsMobile blog={props.blog} allData={props.allData} />
          </div>
        )}
        {tabletAndDesktop && (
          <BlogDetailsDestop blog={props.blog} allData={props.allData} />
        )}
      </div>
    </>
  );
}
