import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ProfilepageSkeletons = () => {
  return (
    <section className="py-4 px-3 mt-5 mb-3 mx-4" id="user-profile">
      <SkeletonTheme baseColor="var(--bs-gray)">
        <div className="col-12 mt-5 pt-6 column container">
          <div className="row">
            <div className="col-md-4 d-flex justify-content-center">
              <Skeleton className="profile-img" circle width={250}  />
            </div>
            <div className="col-md-8">
              <div className="profile-head">
                <h5 className="fw-bold fs-1">
                  <Skeleton width={400} />
                </h5>
                <h6>
                  <Skeleton width={200} />
                </h6>
                <p className="proile-rating">
                  <Skeleton width={100} />
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <p>
                  <Skeleton width={100} height={20} />
                </p>
                <Skeleton width={300} height={15} count={3} />
                <br />
                <p>
                  <Skeleton width={100} height={20} />
                </p>
                <Skeleton width={300} height={15} count={3} />
                <br />
              </div>
            </div>
            <div className="col-md-8">
              <div className="tab-content profile-tab">
                <div className="px-4 mx-3">
                  <div className="d-flex justify-content-between">
                    <Skeleton width={200} height={17} />
                    <Skeleton width={300} height={17} />
                  </div>
                  <div className="d-flex justify-content-between">
                    <Skeleton width={200} height={17} />
                    <Skeleton width={300} height={17} />
                  </div>
                  <div className="d-flex justify-content-between">
                    <Skeleton width={200} height={17} />
                    <Skeleton width={300} height={17} />
                  </div>
                  <div className="d-flex justify-content-between">
                    <Skeleton width={200} height={17} />
                    <Skeleton width={300} height={17} />
                  </div>
                  <div className="d-flex justify-content-between">
                    <Skeleton width={200} height={17} />
                    <Skeleton width={300} height={17} />
                  </div>
                  <div className="d-flex justify-content-between">
                    <Skeleton width={200} height={17} />
                    <Skeleton width={300} height={17} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SkeletonTheme>
    </section>
  );
};

export default ProfilepageSkeletons;
