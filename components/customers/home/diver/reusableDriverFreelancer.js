import { useState, useRef } from 'react';

export default function ReusableDriverFreelancer(props) {
  const hiddenProfileInput = useRef(null);
  const hiddenFrontStoreInput = useRef(null);
  const hiddenFrontOfficeInput = useRef(null);
  const hiddenVehicleInput = useRef(null);
  const hiddenInsideOfficeInput = useRef(null);
  const hiddenInsideTruckInput = useRef(null);
  const hiddenOutsideTruckInput = useRef(null);
  const hiddenInsideOfficeTwoInput = useRef(null);
  const hiddenInsideStoreInput = useRef(null);
  const hiddenCacCertInput = useRef(null);
  const hiddenTruckOwnerInput = useRef(null);
  const hiddenTruckDocumentInput = useRef(null);
  const hiddenCacCertTruckInput = useRef(null);
  const hiddenCacCertTruckTwoInput = useRef(null);
  const hiddenProofOfLicenseInput = useRef(null);
  const hiddenRegistrationDocumentsInput = useRef(null);
  const hiddenGuaranteeOnePhotoInput = useRef(null);
  const hiddenGuaranteeTwoPhotoInput = useRef(null);
  const [profile, setProfile] = useState({
    name: '',
    imgSrc: '',
  });
  const [frontStore, setFrontStore] = useState({
    name: '',
    imgSrc: '',
  });
  const [frontOffice, setFrontOffice] = useState({
    name: '',
    imgSrc: '',
  });
  const [vehicleImg, setVehicleImg] = useState({
    name: '',
    imgSrc: '',
  });
  const [insideStore, setInsideStore] = useState({
    name: '',
    imgSrc: '',
  });
  const [insideTruck, setInsideTruck] = useState({
    name: '',
    imgSrc: '',
  });
  const [outsideTruck, setOutsideTruck] = useState({
    name: '',
    imgSrc: '',
  });
  const [insideOffice, setInsideOffice] = useState({
    name: '',
    imgSrc: '',
  });
  const [insideOfficeTwo, setInsideOfficeTwo] = useState({
    name: '',
    imgSrc: '',
  });
  const [cacCert, setCacCert] = useState({
    name: '',
    imgSrc: '',
  });
  const [cacCertTruck, setCacCertTruck] = useState({
    name: '',
    imgSrc: '',
  });
  const [cacCertTruckTwo, setCacCertTruckTwo] = useState({
    name: '',
    imgSrc: '',
  });
  const [truckOwner, setTruckOwner] = useState({
    name: '',
    imgSrc: '',
  });
  const [truckDocument, setTruckDocument] = useState({
    name: '',
    imgSrc: '',
  });
  const [proofOfLicense, setProofOfLicense] = useState({
    name: '',
    imgSrc: '',
  });
  const [registrationDocuments, setRegistrationDocuments] = useState({
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

  const handleFrontStoreClick = () => {
    hiddenFrontStoreInput.current.click();
  };

  const handleFrontOfficeClick = () => {
    hiddenFrontOfficeInput.current.click();
  };

  const handleVehicleClick = () => {
    hiddenVehicleInput.current.click();
  };

  const handleInsideOfficeClick = () => {
    hiddenInsideOfficeInput.current.click();
  };

  const handleInsideTruckClick = () => {
    hiddenInsideTruckInput.current.click();
  };

  const handleOutsideTruckClick = () => {
    hiddenOutsideTruckInput.current.click();
  };

  const handleInsideOfficeTwoClick = () => {
    hiddenInsideOfficeTwoInput.current.click();
  };

  const handleInsideStoreClick = () => {
    hiddenInsideStoreInput.current.click();
  };

  const handleProofOfLicenseClick = () => {
    hiddenProofOfLicenseInput.current.click();
  };

  const handleCacCertClick = () => {
    hiddenCacCertInput.current.click();
  };

  const handleCacCertTruckClick = () => {
    hiddenCacCertTruckInput.current.click();
  };

  const handleTruckDocumentClick = () => {
    hiddenTruckDocumentInput.current.click();
  };

  const handleCacCertTruckTwoClick = () => {
    hiddenCacCertTruckTwoInput.current.click();
  };

  const handleTruckOwnerClick = () => {
    hiddenTruckOwnerInput.current.click();
  };

  const handleRegistrationDocumentsClick = () => {
    hiddenRegistrationDocumentsInput.current.click();
  };

  const handleGuaranteeOnePhotoClick = () => {
    hiddenGuaranteeOnePhotoInput.current.click();
  };

  const handleGuaranteeTwoPhotoClick = () => {
    hiddenGuaranteeOnePhotoInput.current.click();
  };

  const handleFrontStoreChange = (event) => {
    setFrontStore({
      name: event.target.files[0].name,
      imgSrc: window.URL.createObjectURL(event.target.files[0]),
    });
  };
  const handleFrontOfficeChange = (event) => {
    setFrontOffice({
      name: event.target.files[0].name,
      imgSrc: window.URL.createObjectURL(event.target.files[0]),
    });
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
  const handleInsideStoreChange = (event) => {
    setInsideStore({
      name: event.target.files[0].name,
      imgSrc: window.URL.createObjectURL(event.target.files[0]),
    });
  };
  const handleInsideOfficeChange = (event) => {
    setInsideOffice({
      name: event.target.files[0].name,
      imgSrc: window.URL.createObjectURL(event.target.files[0]),
    });
  };
  const handleInsideTruckChange = (event) => {
    setInsideTruck({
      name: event.target.files[0].name,
      imgSrc: window.URL.createObjectURL(event.target.files[0]),
    });
  };
  const handleOutsideTruckChange = (event) => {
    setOutsideTruck({
      name: event.target.files[0].name,
      imgSrc: window.URL.createObjectURL(event.target.files[0]),
    });
  };
  const handleInsideOfficeTwoChange = (event) => {
    setInsideOfficeTwo({
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
  const handleCacCertChange = (event) => {
    setCacCert({
      name: event.target.files[0].name,
      imgSrc: window.URL.createObjectURL(event.target.files[0]),
    });
  };
  const handleCacCertTruckChange = (event) => {
    setCacCertTruck({
      name: event.target.files[0].name,
      imgSrc: window.URL.createObjectURL(event.target.files[0]),
    });
  };
  const handleTruckDocumentChange = (event) => {
    setTruckDocument({
      name: event.target.files[0].name,
      imgSrc: window.URL.createObjectURL(event.target.files[0]),
    });
  };
  const handleCacCertTruckTwoChange = (event) => {
    setCacCertTruckTwo({
      name: event.target.files[0].name,
      imgSrc: window.URL.createObjectURL(event.target.files[0]),
    });
  };
  const handleTruckOwnerChange = (event) => {
    setTruckOwner({
      name: event.target.files[0].name,
      imgSrc: window.URL.createObjectURL(event.target.files[0]),
    });
  };
  const handleRegistrationDocumentsChange = (event) => {
    setRegistrationDocuments({
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
    hiddenFrontStoreInput,
    hiddenInsideStoreInput,
    hiddenRegistrationDocumentsInput,
    hiddenFrontOfficeInput,
    hiddenInsideOfficeInput,
    hiddenInsideOfficeTwoInput,
    hiddenCacCertInput,
    hiddenInsideTruckInput,
    hiddenOutsideTruckInput,
    hiddenCacCertTruckInput,
    hiddenTruckDocumentInput,
    hiddenTruckOwnerInput,
    hiddenCacCertTruckTwoInput,
    profile,
    vehicleImg,
    proofOfLicense,
    frontStore,
    insideStore,
    registrationDocuments,
    frontOffice,
    insideOffice,
    insideOfficeTwo,
    cacCert,
    insideTruck,
    outsideTruck,
    cacCertTruck,
    truckDocument,
    truckOwner,
    cacCertTruckTwo,
    handleProfileClick,
    handleVehicleClick,
    handleProofOfLicenseClick,
    handleFrontStoreClick,
    handleInsideStoreClick,
    handleRegistrationDocumentsClick,
    handleFrontOfficeClick,
    handleInsideOfficeClick,
    handleInsideOfficeTwoClick,
    handleCacCertClick,
    handleInsideTruckClick,
    handleOutsideTruckClick,
    handleCacCertTruckClick,
    handleTruckDocumentClick,
    handleTruckOwnerClick,
    handleCacCertTruckTwoClick,
    handleProfileChange,
    handleVehicleChange,
    handleProofOfLicenseChange,
    handleFrontStoreChange,
    handleInsideStoreChange,
    handleRegistrationDocumentsChange,
    handleFrontOfficeChange,
    handleInsideOfficeChange,
    handleInsideOfficeTwoChange,
    handleCacCertChange,
    handleInsideTruckChange,
    handleOutsideTruckChange,
    handleCacCertTruckChange,
    handleTruckDocumentChange,
    handleTruckOwnerChange,
    handleCacCertTruckTwoChange,
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
