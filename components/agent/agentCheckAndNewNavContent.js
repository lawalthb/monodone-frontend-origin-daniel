export default function AgentCheckAndNewNavContent({
  id,
  activeTab,
  children,
}) {
  return <div>{activeTab === id ? <div> {children} </div> : ''}</div>;
}
