const MapPreLoader = ({ msg }) => {
  return (
    <>
      <div className="container flex-column preloader">
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="fallback-text mt-2 py-5">
          <h3>{msg}</h3>
        </div>
      </div>
    </>
  );
};

export default MapPreLoader;
