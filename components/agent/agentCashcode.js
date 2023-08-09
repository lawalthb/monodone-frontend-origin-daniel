import Image from 'next/image';
import { useState } from 'react';

export default function AgentCashCode() {
  const [searchCashcodeNumber, setSearchCashcodeNumber] = useState('');

  const handleChange = (e) => {
    setSearchCashcodeNumber(e.target.value);
  };

  return (
    <div style={{ display: 'flex', marginLeft: '16px' }}>
      <div
        style={{
          position: 'absolute',
          zIndex: '1',
          paddingLeft: '16px',
          paddingTop: '8px',
        }}
      >
        <Image src="/img/barcode.png" width="12" height="15" alt="phone_icon" />{' '}
      </div>
      <input
        style={{
          backgroundColor: '#F9F9F9',
          boxSizing: 'border-box',
          width: '98%',
          height: '40px',
          border: '1px solid #D2D2D2',
          borderColor: '#D2D2D2',
          borderRadius: '8px',
          color: '#151515',
          fontSize: '15px',
          fontWeight: '400',
          paddingLeft: '45px',
          outline: 'none',
        }}
        type="text"
        placeholder="Number barcode"
        value={searchCashcodeNumber}
        onChange={handleChange}
      />
    </div>
  );
}
