import Media from '@/utils/media';
import LoadboardListCustomTab from './loadboardListCustomTab';
import LoadboardListCustomDesktop from './loadboardListCustomDesktop';

export default function LoadboardList(props) {
  const { customTab, customDesktop } = Media();
  return (
    <>
      {customTab && (
        <LoadboardListCustomTab
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
      {customDesktop && (
        <LoadboardListCustomDesktop
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
    </>
  );
}
