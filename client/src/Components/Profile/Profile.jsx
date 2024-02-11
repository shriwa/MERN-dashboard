import React from "react";
import profile_img from "../../Assets/profile.jpg";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-info">
        <img src={profile_img} alt="" />
        <h1>Carl Holst-Rones</h1>
      </div>
      <div className="profile-details">
        <div className="profil-details-sub">
          <label htmlFor="">Membership No</label>
          <input type="text" />
        </div>
        <div className="profil-details-sub">
          <label htmlFor="">Ranking Points</label>
          <input type="number" />
        </div>
        <div className="profile-stats">
          <h1>MATCHES PLAYED</h1>
          <table>
            <tr>
              <th>Date</th>
              <th>Opponent</th>
              <th>Win/loose</th>
              <th>Score</th>
            </tr>
            <tr>
              <td>05 Nov 23</td>
              <td>Alica Bulovska</td>
              <td>3 Lost</td>
              <td>1-4 3-4</td>
            </tr>
            <tr>
              <td>05 Nov 23</td>
              <td>Alica Bulovska</td>
              <td>3 Lost</td>
              <td>1-4 3-4</td>
            </tr>
            <tr>
              <td>05 Nov 23</td>
              <td>Alica Bulovska</td>
              <td>3 Lost</td>
              <td>1-4 3-4</td>
            </tr>
            <tr>
              <td>05 Nov 23</td>
              <td>Alica Bulovska</td>
              <td>3 Lost</td>
              <td>1-4 3-4</td>
            </tr>
            <tr>
              <td>05 Nov 23</td>
              <td>Alica Bulovska</td>
              <td>3 Lost</td>
              <td>1-4 3-4</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
