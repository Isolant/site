// Globals
import React, { useState, useEffect } from "react";

// Components
import MainHead from "./MainHead";
import Header from "./Header";
import Footer from "./Footer";

export default function Base({
  pageTitle,
  activePage,
  footerTheme,
  footerDecorations,
  children,
  // provinces,
  // locales,
  productLines,
}) {
  // const [storedLocation, setStoredLocation] = useState();
  const [userType, setUserType] = useState();

  // We check if the geolocation functionality is supported by the browser
  // const getLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  //   } else {
  //     console.warn("Geolocation is not supported by this browser.");
  //   }
  // }

  // Function to get the coordinates for the user
  // const geoSuccess = (position) => {
  //   const lat = position.coords.latitude;
  //   const lng = position.coords.longitude;
    
  //   setStoredLocation({
  //     lat,
  //     lng
  //   });

  //   codeLatLng(lat, lng);
  // }

  // Error handling
  // const geoError = () => {
  //   setStoredLocation('denied');
  // }

  // Initialize geocoder and get the location
  // let geocoder;
  // const initialize = () => {
  //   geocoder = new google.maps.Geocoder();
  //   getLocation();
  // }

  // Transform the lat and lng into a comprehensive city
  // const codeLatLng = (lat, lng) => {
  //   const latlng = new google.maps.LatLng(lat, lng);

  //   geocoder.geocode({ 'latLng': latlng }, function (results, status) {
  //     if (status == google.maps.GeocoderStatus.OK) {
  //       if (results[1]) {
  //         // Get the location
  //         const location = results[0].address_components;
          
  //         setStoredLocation((prevState) => ({
  //           ...prevState,
  //           address: location,
  //         }));

  //         // And run the compare function
  //         checkProvince(location);
  //       }
  //     } else {
  //       console.error("Geocoder failed due to: " + status);
  //     }
  //   });
  // }

  // Function to check the province
  // const checkProvince = (locationData) => {
  //   // Loop through the location and check if the province is valid
  //   const isProvinceValid = locationData.filter(addressComponent => provinces.find(province => (addressComponent.long_name === province.name)));

  //   setStoredLocation((prevState) => ({
  //     ...prevState,
  //     province: isProvinceValid,
  //     isProvinceValid: isProvinceValid.length ? true : false
  //   }));

  //   // If the province is valid, we check the city. If not, we exit the function
  //   if (isProvinceValid.length) {
  //     checkCity(locationData)
  //   } else {
  //     return;
  //   }
  // }

  // Function to check the city
  // const checkCity = (locationData) => {
  //   // Loop through the location and check if the city is valid
  //   const isCityValid = locationData.filter(addressComponent => locales.find(city => (addressComponent.long_name === city.name)));

  //   storeLocation(isCityValid);
  // }

  // const storeLocation = (cityData) => {
  //   setStoredLocation((prevState) => ({
  //     ...prevState,
  //     city: cityData,
  //     isCityValid: cityData.length ? true : false
  //   }));
  // }
  
  useEffect(() => {
    {/* Botmaker chat */}
    <script dangerouslySetInnerHTML={{ __html: `(function () {let js = document.createElement('script');js.type = 'text/javascript';js.async = 1;js.src = 'https://go.botmaker.com/rest/webchat/p/FQSYZ8V806/init.js';document.body.appendChild(js);})();`}} />
    // To get the user's location
    // if(!storedLocation) {
    //   if(localStorage.getItem('location') === null || localStorage.getItem('location') === 'undefined') {
    //     initialize();
    //   }
    //   else {
    //     setStoredLocation(JSON.parse(localStorage.getItem('location')));
    //   }
    // } else {
    //   localStorage.setItem('location', JSON.stringify(storedLocation));
    // }

    // To set the user type
    if(localStorage.getItem('userType') === null || localStorage.getItem('userType' === 'undefined')) {
      localStorage.setItem('userType', activePage);
      setUserType(activePage);
    } else {
      setUserType(localStorage.getItem('userType'));
    }
  }, [activePage, userType]);

  return (
    <>
      <MainHead
        pageTitle={pageTitle}
      />
      <Header
        activeHeader={userType}
        // location={storedLocation}
        productLines={productLines}
      />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TJS2ZPZ"
          height="0"
          width="0"
          style={{ visibility: 'hidden', display: 'none'}}
        />
      </noscript>
      <main>{children}</main>
      <Footer
        activeFooter={userType}
        footerTheme={footerTheme}
        footerDecorations={footerDecorations}
      />
    </>
  );
}
