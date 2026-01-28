// ProfileInfo.jsx
import StatusBtn from "../../components/buttons/StatusBtn.jsx";
import { PROFILE } from "../../data/profile.js";

function ProfileInfo() {
  return (
    <div className="profileInfo">
      <div className="profilePhoto">
        <img src={PROFILE.photo} alt="profile" />
      </div>
      <p className="name">{PROFILE.name}</p>
      <p className="title">
        {PROFILE.title} &nbsp;
        <a href={PROFILE.cvUrl} target="_blank" rel="noreferrer">
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </p>
      <StatusBtn status={PROFILE.status.label} type={PROFILE.status.type} />
      <p className="location">
        <i className="fa-sharp fa-solid fa-location-dot"></i>{" "}
        {PROFILE.location}
      </p>
    </div>
  );
}

export default ProfileInfo;
