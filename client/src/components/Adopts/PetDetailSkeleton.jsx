import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const PetDetailSkeleton = () => {
  return (
    <div className="row align-items-start">
      <SkeletonTheme
        baseColor="var(--bg-grey)"
        highlightColor="rgba(225,225,225,0.35)"
      >
        <div className="col-lg-5 py-md-4 py-2" data-aos="fade-right">
          <Skeleton className="position-relative pet-pic" />
        </div>
        <div className="col-lg-7 px-4 mt-5 ms-8" data-aos="fade-left">
          <div className="row">
            <div className="col-6 mb-4 pet-specs">
              <div className="specs-container align-items-center">
                <Skeleton width={170} height={20} />
                <Skeleton width={250} height={30} />
              </div>
            </div>
            <div className="col-6 mb-4 pet-specs">
              <div className="specs-container align-items-center">
                <Skeleton width={170} height={20} />
                <Skeleton width={250} height={30} />
              </div>
            </div>
            <div className="col-6 mb-4 pet-specs">
              <div className="specs-container align-items-center">
                <Skeleton width={170} height={20} />
                <Skeleton width={250} height={30} />
              </div>
            </div>
            <div className="col-6 mb-4 pet-specs">
              <div className="specs-container align-items-center">
                <Skeleton width={170} height={20} />
                <Skeleton width={250} height={30} />
              </div>
            </div>
            <div className="col-6 mb-4 pet-specs">
              <div className="specs-container align-items-center">
                <Skeleton width={170} height={20} />
                <Skeleton width={250} height={30} />
              </div>
            </div>
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default PetDetailSkeleton;
