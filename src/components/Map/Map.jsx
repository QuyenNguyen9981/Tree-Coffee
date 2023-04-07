import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { memo, useCallback, useMemo, useRef, useState } from "react";
import React from "react";
// import { Spin, message } from "antd";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GoogleMapsApiKey,
    libraries: ["places"],
  });
  const [value, setValue] = useState({
    lat: 10.779660824561368,
    lng: 106.63844603899146,
  });
  console.log("logk ra", value);
  const [map, setMap] = useState(null);
  const searchBox = useRef(null);
  const marker = useMemo(() => {
    if (isLoaded) {
      if (!value) {
        return null;
      }

      if (value.lat && value.lng) {
        return new window.google.maps.LatLng(value);
      }

      return value;
    }
  }, [value, isLoaded]);
  const [center, setCenter] = useState(() => value);
  const [isFindingLocation, setIsFindingLocation] = useState(false);

  const onLoad = useCallback((map) => {
    if (!value) {
      setIsFindingLocation(true);
      if (!navigator.geolocation) {
        setCenter({
          lat: 10.779660824561368,
          lng: 106.63844603899146,
        });
        setIsFindingLocation(false);
      } else {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setCenter({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
            setIsFindingLocation(false);
          },
          () => {
            setCenter({ lat: 10.779660824561368, lng: 106.63844603899146 });
            setIsFindingLocation(false);
          }
        );
      }
    }

    setMap(map);
    // loại bỏ tầm vì nó sẽ được sửa
    // eslint-disable-next-line
  }, []);

  const onUnmount = useCallback((map) => {
    setMap(null);
  }, []);

  const handleClick = (e) => {
    setValue(e.latLng);
  };

  const handleLoad = () => {};

  return (
    <div>
      {isLoaded && (
        <div className=" w-[414px] md:w-[768px] lg:w-[1]  h-[300px] md:h-[500px] xl:h-[600px]   sm:pr-0 translate-x-[-17px] sm:translate-x-0 ">
          <GoogleMap
            mapContainerStyle={{
              width: "100%",
              height: "100%",
            }}
            center={center}
            zoom={17}
            onLoad={onLoad}
            onUnmount={onUnmount}
            onClick={handleClick}
          >
            {marker && <MarkerF position={marker} onLoad={handleLoad} />}
          </GoogleMap>
        </div>
      )}
    </div>
  );
};

export default memo(Map);
