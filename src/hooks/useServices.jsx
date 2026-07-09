import { useEffect, useState } from "react";
import { axiosSecure } from "./useAxiosSecure";

const useServices = (asc) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axiosSecure
      .get(`/services?sort=${asc ? "desc" : "asc"}`)
      .then((res) => setServices(res.data))
      .catch((err) => console.log(err));
  }, [asc]);

  return services;
};

export default useServices;