import Media from '@/utils/media';
import LoadboardGridMobile from './loadboardGridMobile';
import LoadboardGridDesktop from './loadboardGridDesktop';

export default function LoadboardGrid(props) {
  const { mobile, tabletAndDesktop } = Media();
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: mobile ? '20px' : '20px 40px',
          width: '100%',
        }}
      >
        {mobile && (
          <LoadboardGridMobile
            loadboardData={props.loadboardData}
            setPageNumbers={props.setPageNumbers}
            pageNumbers={props.pageNumbers}
            activePagenumber={props.activePagenumber}
            setActivePagenumber={props.setActivePagenumber}
            pageNumber={props.pageNumber}
            setPageNumber={props.setPageNumber}
          />
        )}
        {tabletAndDesktop && (
          <LoadboardGridDesktop
            loadboardData={props.loadboardData}
            setPageNumbers={props.setPageNumbers}
            pageNumbers={props.pageNumbers}
            activePagenumber={props.activePagenumber}
            setActivePagenumber={props.setActivePagenumber}
            pageNumber={props.pageNumber}
            setPageNumber={props.setPageNumber}
            showDetail={props.showDetail}
            specificData={props.specificData}
          />
        )}
      </div>
    </>
  );
}
