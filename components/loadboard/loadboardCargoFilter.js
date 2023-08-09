import Media from '@/utils/media';
import LoadboardCargoFilterMobile from './loadboardCargoFilterMobile';
import LoadboardCargoFilterDesktop from './loadboardCargoFilterDesktop';

export default function LoadboardCargoFilter(props) {
  const { mobile, tabletAndDesktop } = Media();
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          padding: mobile ? '20px' : '30px 40px',
        }}
      >
        {mobile && (
          <>
            <LoadboardCargoFilterMobile />
          </>
        )}
        {tabletAndDesktop && (
          <>
            <LoadboardCargoFilterDesktop />
          </>
        )}
      </div>
    </>
  );
}
