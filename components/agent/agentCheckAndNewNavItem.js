import Media from '@/utils/media';
import styles from './agentHome.module.css';

export default function AgentCheckAndNewNavItem({
  id,
  activeTab,
  title,
  setActiveTab,
}) {
  const { mobile, tabletAndDesktop } = Media();
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <div style={{ width: '32%', border: '6px' }}>
      <div
        onClick={handleClick}
        className={`  ${
          activeTab === id
            ? `${styles.activeNavItem}`
            : `${styles.notActiveNavItem}`
        }  `}
      >
        {title}
      </div>
    </div>
  );
}
