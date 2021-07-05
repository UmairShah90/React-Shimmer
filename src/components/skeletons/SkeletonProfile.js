import Shimmer from "./Shimmer";
import SkeletonsElement from "./SkeletonsElement";
// import "./skeletons.css";

const SkeletonProfile = ({theme}) => {
    const themeClass = theme || 'light'; 
  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-profile">
        <div>
          <SkeletonsElement type="avatar" />
        </div>

        <div>
          <SkeletonsElement type="title" />
          <SkeletonsElement type="text" />
          <SkeletonsElement type="text" />
        </div>
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonProfile;
