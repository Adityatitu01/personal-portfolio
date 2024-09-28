import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = "Aditya Portfolio"; // Set the desired title
  }, []); // Empty dependency array means it runs once when the component mounts

  return (
    <div>
    </div>
  );
};

export default Home;
