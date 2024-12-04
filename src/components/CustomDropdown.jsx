import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CustomDropdown.css";

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("Search"); // Default placeholder

  const navigate = useNavigate(); // Hook for navigation

  const options = [
    { value: "/gold-jewellery#rings", label: "Gold Rings" },
    { value: "/gold-jewellery#bangles", label: "Gold Bangles" },
    { value: "/gold-jewellery#necklaces", label: "Gold Necklaces" },
    { value: "/gold-jewellery#chains", label: "Gold Chains" },
    { value: "/gold-jewellery#earrings", label: "Gold Earrings" },
    { value: "/diamond-jewellery#rings", label: "Diamond Rings" },
    { value: "/diamond-jewellery#bangles", label: "Diamond Bangles" },
    { value: "/diamond-jewellery#necklaces", label: "Diamond necklaces" },
    { value: "/silver-collection#articles", label: "Silver Articles" },
    { value: "/silver-collection#idols", label: "Silver idols" },
    { value: "/silver-collection#bangles", label: "Silver bangles" },
    { value: "/contact", label: "Contact us" },
    { value: "/about", label: "About us" },
    { value: "/digigold", label: "Schemes (PocketGold)" },
    
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
    navigate(option.value); // Navigate to the selected option's route
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".custom-dropdown")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchValue)
  );

  return (
    <div className="custom-dropdown-container">
      <div className={`custom-dropdown ${isOpen ? "open" : ""}`} onClick={toggleDropdown}>
        <span className="custom-dropdown-current">{selectedOption}</span>
        {isOpen && (
          <div className="custom-dropdown-list">
            <input
              type="text"
              className="custom-dropdown-searchbox"
              placeholder="Search"
              value={searchValue}
              onChange={handleSearch}
              onClick={(e) => e.stopPropagation()} // Prevent click from closing the dropdown
            />
            <ul className="custom-dropdown-options">
              {filteredOptions.map((option) => (
                <li
                  key={option.value}
                  className="custom-dropdown-option"
                  onClick={() => handleOptionClick(option)}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomDropdown;
