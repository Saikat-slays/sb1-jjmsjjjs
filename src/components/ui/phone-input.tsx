import React, { useState, useEffect } from 'react';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  className?: string;
}

export function PhoneInput({ value, onChange, error, className = '' }: PhoneInputProps) {
  const [phoneNumber, setPhoneNumber] = useState(value.replace('+91', ''));

  useEffect(() => {
    // Update local state when prop value changes, stripping +91 if present
    setPhoneNumber(value.replace('+91', ''));
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    // Only allow numbers and limit to 10 digits
    const cleaned = inputValue.replace(/\D/g, '').slice(0, 10);
    setPhoneNumber(cleaned);
    onChange(`+91${cleaned}`);
  };

  return (
    <div className="relative">
      <div className="flex">
        <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
          +91
        </span>
        <input
          type="tel"
          value={phoneNumber}
          onChange={handleChange}
          className={`${className} rounded-l-none`}
          placeholder="Enter 10 digit number"
          pattern="[6-9]\d{9}"
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}