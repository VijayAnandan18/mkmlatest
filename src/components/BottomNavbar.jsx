import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import { AiFillGolden } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { TbMessageUser } from "react-icons/tb";

export default function CustomBottomNavigation() {
  const [value, setValue] = React.useState('home');
  const navigate = useNavigate(); // React Router's hook for navigation

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNavigation = (path) => {
    navigate(path, { replace: true }); // Use replace to avoid pushing to the history stack
    window.scrollTo(0, 0); // Scroll to the top of the page after navigating
  };

  return (
    <BottomNavigation
      sx={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        display: 'flex',
        justifyContent: 'space-around', // Align icons evenly
        backgroundColor: 'white', // Optional: Set background color for better contrast
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        value="home"
        icon={<HomeIcon sx={{ color: '#c67e00', fontSize: 30 }} />}
        showLabel={false} // Hide the label
        onClick={() => handleNavigation('/')} // Navigate to home
      />
      <BottomNavigationAction
        value="gold"
        icon={<AiFillGolden style={{ color: '#c67e00', fontSize: 30 }} />} // Use style for consistent styling
        showLabel={false} // Hide the label
        onClick={() => handleNavigation('/gold-jewellery')} // Navigate to gold jewellery
      />
      <BottomNavigationAction
        value="digi-gold"
        icon={<GiReceiveMoney style={{ color: '#c67e00', fontSize: 30 }} />} // Use style for consistent styling
        showLabel={false} // Hide the label
        onClick={() => handleNavigation('/pocketgold')} // Navigate to digi gold
      />
      <BottomNavigationAction
        value="contact"
        icon={<TbMessageUser style={{ color: '#c67e00', fontSize: 30 }} />}
        showLabel={false} // Hide the label
        onClick={() => handleNavigation('/contact')} // Navigate to contact page
      />
    </BottomNavigation>
  );
}
