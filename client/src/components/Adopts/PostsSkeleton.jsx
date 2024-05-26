import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PostsSkeleton = () => {
  return (
    <div className="row d-flex text-center">
      <SkeletonTheme
        baseColor="var(--bg-grey)"
        highlightColor="rgba(225,225,225,0.35)"
      >
        <div className="py-4 col-md-4 col-6 post-cards text-center">
          <Skeleton
            className="posts-grids text-center"
            height={300}
            width={250}
          />
          <Skeleton className="btn btn-style details-btn" width={230} />
        </div>
        <div className="py-4 col-md-4 col-6 post-cards text-center">
          <Skeleton
            className="posts-grids text-center"
            height={300}
            width={250}
          />
          <Skeleton className="btn btn-style details-btn" width={230} />
        </div>
        <div className="py-4 col-md-4 col-6 post-cards text-center">
          <Skeleton
            className="posts-grids text-center"
            height={300}
            width={250}
          />
          <Skeleton className="btn btn-style details-btn" width={230} />
        </div>
        <div className="py-4 col-md-4 col-6 post-cards text-center">
          <Skeleton
            className="posts-grids text-center"
            height={300}
            width={250}
          />
          <Skeleton className="btn btn-style details-btn" width={230} />
        </div>
        <div className="py-4 col-md-4 col-6 post-cards text-center">
          <Skeleton
            className="posts-grids text-center"
            height={300}
            width={250}
          />
          <Skeleton className="btn btn-style details-btn" width={230} />
        </div>
        <div className="py-4 col-md-4 col-6 post-cards text-center">
          <Skeleton
            className="posts-grids text-center"
            height={300}
            width={250}
          />
          <Skeleton className="btn btn-style details-btn" width={230} />
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default PostsSkeleton;
