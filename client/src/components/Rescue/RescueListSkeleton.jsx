import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const RescueListSkeleton = () => {
  return (
    <>
      <div className="container mt-2 mb-2 rescue-posts_list">
        <SkeletonTheme baseColor="var(--bs-gray)">
          <ul className="py-3 list-wrapper">
            <li className="d-flex align-items-center justify-content-between px-4 py-3 list-item-loading mb-4">
              <div className="d-flex content">
                <Skeleton width={130} height={100} />
                <div className="mx-2 info">
                  <h3>
                    <Skeleton width={150} />
                  </h3>
                  <Skeleton width={300} />
                  <p>
                    <Skeleton width={350} />
                  </p>
                </div>
              </div>
              <Skeleton width={100} />
            </li>
            <li className="d-flex align-items-center justify-content-between px-4 py-3 list-item-loading mb-4">
              <div className="d-flex content">
                <Skeleton width={130} height={100} />
                <div className="mx-2 info">
                  <h3>
                    <Skeleton width={150} />
                  </h3>
                  <Skeleton width={300} />
                  <p>
                    <Skeleton width={350} />
                  </p>
                </div>
              </div>
              <Skeleton width={100} />
            </li>
            <li className="d-flex align-items-center justify-content-between px-4 py-3 list-item-loading mb-4">
              <div className="d-flex content">
                <Skeleton width={130} height={100} />
                <div className="mx-2 info">
                  <h3>
                    <Skeleton width={150} />
                  </h3>
                  <Skeleton width={300} />
                  <p>
                    <Skeleton width={350} />
                  </p>
                </div>
              </div>
              <Skeleton width={100} />
            </li>
          </ul>
        </SkeletonTheme>
      </div>
    </>
  );
};

export default RescueListSkeleton;
