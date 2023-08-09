import { useState, useEffect } from 'react';

export default function DriverAndAgentReusables(props) {
  const [home, setHome] = useState(false);
  const [broadcast, setBroadcast] = useState(false);
  const [orders, setOrders] = useState(false);
  const [wallet, setWallet] = useState(false);
  const [settings, setSettings] = useState(false);
  const [mobileSidebar, setMobileSidebar] = useState(false);

  const handleHome = () => {
    setHome(true);
    setOrders(false);
    setWallet(false);
    setSettings(false);
    setMobileSidebar(false);
  };

  const handleBroadcast = () => {
    setBroadcast(true);
    setOrders(false);
    setWallet(false);
    setSettings(false);
  };

  const handleOrders = () => {
    setOrders(true);
    setHome(false);
    setWallet(false);
    setSettings(false);
    setMobileSidebar(false);
    setBroadcast(false);
  };
  const handleWallet = () => {
    setWallet(true);
    setHome(false);
    setOrders(false);
    setSettings(false);
    setMobileSidebar(false);
    setBroadcast(false);
  };
  const handleSettings = () => {
    setSettings(true);
    setHome(false);
    setOrders(false);
    setWallet(false);
    setMobileSidebar(false);
    setBroadcast(false);
  };

  useEffect(() => {
    if (orders) {
      setBroadcast(false);
      setWallet(false);
      setSettings(false);
    } else if (wallet) {
      setBroadcast(false);
      setOrders(false);
      setSettings(false);
    } else if (settings) {
      setBroadcast(false);
      setOrders(false);
      setWallet(false);
    } else {
      setBroadcast(true);
    }
  }, [orders, settings, wallet]);

  useEffect(() => {
    if (orders) {
      setHome(false);
      setWallet(false);
      setSettings(false);
    } else if (wallet) {
      setHome(false);
      setOrders(false);
      setSettings(false);
    } else if (settings) {
      setHome(false);
      setOrders(false);
      setWallet(false);
    } else {
      setHome(true);
    }
  }, [orders, settings, wallet]);

  return {
    home,
    setHome,
    orders,
    setOrders,
    wallet,
    setWallet,
    settings,
    setSettings,
    mobileSidebar,
    setMobileSidebar,
    handleHome,
    handleOrders,
    handleWallet,
    handleSettings,
    broadcast,
    setBroadcast,
    handleBroadcast,
  };
}
