import { useEffect, useState } from "react";
import { Riple } from "react-loading-indicators";
import { Link, useRouteError } from "react-router-dom";

export default function Error() {
  const [isCat, setIsCat] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const error = useRouteError();
  useEffect(() => {
    function getCat() {
      setIsLoading(true);
      fetch("https://api.thecatapi.com/v1/images/search")
        .then((res) => res.json())
        .then((data) => {
          setIsCat(data[0].url);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Oops... Error fetching cat image:", err);
          setIsLoading(false);
        });
    }
    getCat();
  }, []);

  return (
    <div className="error-div">
      {isLoading && <Riple color="#000000" size="large" />}
      {!isLoading && (
        <>
          <p className="error-p text-uppercase">
            {error?.status || "Unknown Error"}
          </p>
          <p className="error-p text-uppercase">
            {error?.statusText || "No status text available"}
          </p>
          <Link className="error-p error-a" to={"/"}>Return</Link>
          {isCat && <img className="error-banner" src={isCat} alt="Cat" loading="eager" decoding="sync"/>}
        </>
      )}
    </div>
  );
}
