import React, { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.post(
          "/",
          {},
          {
            withCredentials: true,
          },
        );

        if (data.status) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          window.location.href = "/login";
        }
      } catch (error) {
        console.log("Authentication Error:", error);
        setIsAuthenticated(false);
        window.location.href = "/login";
      }
    };

    verifyUser();
  }, []);

  if (isAuthenticated === null) {
    return <div>Checking authentication...</div>;
  }

  if (!isAuthenticated) {
    return null;
  }

  return children;
};

export default ProtectedRoute;
