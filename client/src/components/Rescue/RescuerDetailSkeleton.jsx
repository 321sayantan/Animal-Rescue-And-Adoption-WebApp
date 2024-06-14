import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const RescuerDetailSkeleton = () => {
  return (
    <div className="row align-items-start">
      <SkeletonTheme baseColor="var(--bs-gray)">
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
          <blockquote style={{ background: "rgba(0, 0, 0, 0.15)" }}>
            <p>
              <br /><br />
              <Skeleton width={450} height={20} count={4} />
            </p>
          </blockquote>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default RescuerDetailSkeleton;
