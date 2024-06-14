import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const RescVetDetSkeleton = () => {
  return (
    <div className="row d-flex justify-content-center">
      <SkeletonTheme baseColor="var(--bs-gray)">
        <div className="col-12 py-md-4 py-2">
          <div
            className="position-relative d-flex justify-content-center align-items-center container"
            style={{ height: "25rem", width: "100%" }}
          >
            <Skeleton width={600} height={350} />
          </div>
        </div>
        <div className="row align-items-start mt-5">
          <div className="col-lg-7 px-4">
            <div className="column border-right-warning hide-border">
              <div className="col-6 mb-4 pet-specs">
                <div className="specs-container align-items-center">
                  <Skeleton width={170} height={20} />
                  <Skeleton width={250} height={30} />
                </div>
              </div>
              <div className="col-6 mb-4 pet-specs" id="rescued-vet-specs">
                <div className="specs-container align-items-center">
                  <Skeleton width={170} height={20} />
                  <Skeleton width={250} height={30} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 px-md-4 mt-md-4">
            <Skeleton className="health-status_header" width={200} />
            <ul className="py-3 px-4 mt-3" style={{ marginLeft: "-1.5rem" }}>
              <Skeleton
                className="status-list"
                count={3}
                height={15}
                style={{ marginBottom: "0.6rem" }}
              />
            </ul>
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default RescVetDetSkeleton;
