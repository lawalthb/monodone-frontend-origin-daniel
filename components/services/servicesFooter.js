import Media from '@/utils/media';
import ServiceFooterDesktop from './serviceFooterDesktop';
import ServiceFooterMobile from './serviceFooterMobile';

export default function ServicesFooter(props) {
  const { mobile, tabletAndDesktop } = Media();
  return (
    <>
      {mobile && (
        <>
          <ServiceFooterMobile />
        </>
      )}
      {tabletAndDesktop && (
        <>
          <ServiceFooterDesktop />
        </>
      )}
    </>
  );
}
