function ProfileInfo({ user }) {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <label>Name</label>
        </div>
        <div className="col-md-6">
          <p>{user.name}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label>Email</label>
        </div>
        <div className="col-md-6">
          <p>{user.email} </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label>Phone</label>
        </div>
        <div className="col-md-6">
          <p>123 456 7890</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label>Address</label>
        </div>
        <div className="col-md-6">
          <p>{user.address}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label>Postal Code</label>
        </div>
        <div className="col-md-6">
          <p>{user.zip_code}</p>
        </div>
      </div>
    </>
  );
}

export default ProfileInfo;
