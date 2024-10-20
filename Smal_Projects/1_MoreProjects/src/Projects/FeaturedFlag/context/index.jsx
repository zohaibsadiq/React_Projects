import React, { useEffect } from 'react';
import featuredFlagDataServiceCall from '../data';
export const FeaturedFlagContext = React.createContext(null);

export default function FeaturedFlagGlobalState({ children }) {
  const [loading, setLoading] = React.useState(true);
  const [enableFlag, setEnableFlag] = React.useState({});

  const fetchFeaturedFlagData = async () => {
    try {
      const response = await featuredFlagDataServiceCall();
      setEnableFlag(response);
      setLoading(false);
      console.log(response)

    } catch (error) {
      console.error('Error fetching featured flag data', error);
    }
  };

  useEffect(() => {
    fetchFeaturedFlagData();
  }, []);

  return (
    <FeaturedFlagContext.Provider value={{loading,enableFlag}}>
      {children}
    </FeaturedFlagContext.Provider>
  );
}
