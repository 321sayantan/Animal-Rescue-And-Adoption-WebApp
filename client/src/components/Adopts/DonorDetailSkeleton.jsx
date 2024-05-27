import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const DonorDetailSkeleton = () => {
  return (
    <div className="row align-items-start">
      <SkeletonTheme
        baseColor="var(--bg-grey)"
        highlightColor="rgba(225,225,225,0.35)"
      >
        <div className="col-lg-6 px-4 mt-5" data-aos="fade-right">
          <div className="row">
            <div className="mb-4 owner-detail-item">
              <div className="owner-info align-items-center">
                <Skeleton width={170} height={20} />
                <Skeleton width={250} height={30} />
              </div>
            </div>
            <div className="mb-4 owner-detail-item">
              <div className="owner-info align-items-center">
                <Skeleton width={170} height={20} />
                <Skeleton width={250} height={30} />
              </div>
            </div>
            <div className="mb-4 owner-detail-item">
              <div className="owner-info align-items-center">
                <Skeleton width={170} height={20} />
                <Skeleton width={250} height={30} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-5 owner-quotes" data-aos="fade-left">
          <p>
            <br />
            <Skeleton width={450} height={20} count={4} />
          </p>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default DonorDetailSkeleton;
