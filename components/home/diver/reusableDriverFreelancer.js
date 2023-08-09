import { useState, useRef } from 'react';

export default function ReusableDriverFreelancer(props) {
  const hiddenProfileInput = useRef(null);
  const hiddenVehicleInput = useRef(null);
  const hiddenProofOfLicenseInput = useRef(null);
  const hiddenGuaranteeOnePhotoInput = useRef(null);
  const hiddenGuaranteeTwoPhotoInput = useRef(null);
  const [profile, setProfile] = useState({
    name: '',
    imgSrc: '',
  });
  const [vehicleImg, setVehicleImg] = useState({
    name: '',
    imgSrc: '',
  });
  const [proofOfLicense, setProofOfLicense] = useState({
    name: '',
    imgSrc: '',
  });

  const [guaranteeOnePhoto, setGuaranteeOnePhoto] = useState({
    name: '',
    imgSrc: '',
  });

  const [guaranteeTwoPhoto, setGuaranteeTwoPhoto] = useState({
    name: '',
    imgSrc: '',
  });

  const handleProfileClick = () => {
    hiddenProfileInput.current.click();
  };

  const handleVehicleClick = () => {
    hiddenVehicleInput.current.click();
  };

  const handleProofOfLicenseClick = () => {
    hiddenProofOfLicenseInput.current.click();
  };

  const handleGuaranteeOnePhotoClick = () => {
    hiddenGuaranteeOnePhotoInput.current.click();
  };

  const handleGuaranteeTwoPhotoClick = () => {
    hiddenGuaranteeOnePhotoInput.current.click();
  };

  const handleProfileChange = (event) => {
    setProfile({
      name: event.target.files[0].name,
      imgSrc: window.URL.createObjectURL(event.target.files[0]),
    });
  };
  const handleVehicleChange = (event) => {
    setVehicleImg({
      name: event.target.files[0].name,
      imgSrc: window.URL.createObjectURL(event.target.files[0]),
    });
  };
  const handleProofOfLicenseChange = (event) => {
    setProofOfLicense({
      name: event.target.files[0].name,
      imgSrc: window.URL.createObjectURL(event.target.files[0]),
    });
  };

  const handleGuaranteeOnePhotoChange = (event) => {
    setGuaranteeOnePhoto({
      name: event.target.files[0].name,
      imgSrc: window.URL.createObjectURL(event.target.files[0]),
    });
  };

  const handleGuaranteeTwoPhotoChange = (event) => {
    setGuaranteeTwoPhoto({
      name: event.target.files[0].name,
      imgSrc: window.URL.createObjectURL(event.target.files[0]),
    });
  };

  return {
    hiddenProfileInput,
    hiddenVehicleInput,
    hiddenProofOfLicenseInput,
    profile,
    vehicleImg,
    proofOfLicense,
    handleProfileClick,
    handleVehicleClick,
    handleProofOfLicenseClick,
    handleProfileChange,
    handleVehicleChange,
    handleProofOfLicenseChange,
    hiddenGuaranteeOnePhotoInput,
    guaranteeOnePhoto,
    handleGuaranteeOnePhotoClick,
    handleGuaranteeOnePhotoChange,
    hiddenGuaranteeTwoPhotoInput,
    guaranteeTwoPhoto,
    handleGuaranteeTwoPhotoClick,
    handleGuaranteeTwoPhotoChange,
  };
}
