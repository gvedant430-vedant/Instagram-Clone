import "../css/profile.css";

function ProfileCard(){
    return(
        <div className="profile-card">

            <div className="profile-header">

                <img 
                src="https://i.pravatar.cc/150?img=10"
                alt="profile"
                className="profile-image"/>

                <div>
                    <h4>vedant</h4>
                    <p>Frontend Developer</p>
                </div>
            </div>

            <div className="profile-stats">
                <div>
                    <h4>5</h4>
                    <span>Posts</span>
                </div>
                <div>
                    <h4>100</h4>
                    <span>Followers</span>
                </div>

                <div>
                    <h4>90</h4>
                    <span>Following</span>
                </div>
            </div>

            <button className="profile-btn">
                View Profile
            </button>
        </div>
    );
}

export default ProfileCard;
