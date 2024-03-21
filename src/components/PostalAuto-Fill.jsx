import { useEffect, useState } from "react";

export const PostalAutoFill = () => {
  const [postalCode, setPostalCode] = useState("1520012");
  const [address, setAddress] = useState({});

  useEffect(() => {
    const url = `https://postcode.teraren.com/postcodes/${postalCode}.json`;
    postalCode.length === 7 ? fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAddress(data);
      }) : setAddress({});
  }, [postalCode]); 
  const handlePostalCodeChange = (e) => {
    setPostalCode(e.target.value);
  };

  return (
    <div>
      <h2>郵便番号自動入力</h2>
      <input
        type="text"
        value={postalCode}
        onChange={handlePostalCodeChange}
        placeholder="郵便番号"
      />
      <ul>
        <li>都道府県: {address.prefecture}</li>
        <li>市区町村: {address.city}</li>
        <li>町域: {address.suburb}</li>
      </ul>
    </div>
  );
};
