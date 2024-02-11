import React, { useEffect, useState } from "react";
import profile_img from "../../Assets/profile.jpg";
import "./Profile.css";

const Profile = () => {
  const [match_details, setMatch_details] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2000/getmatch/all")
      .then((res) => res.json())
      .then((data) => {
        setMatch_details(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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
            <thead>
              <tr>
                <th>Date</th>
                <th>Opponent</th>
                <th>Win/lose</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(match_details) &&
                match_details.map((match) => (
                  <tr key={match._id}>
                    <td>{match.date}</td>
                    <td>{match.opponent}</td>
                    <td>{match.result}</td>
                    <td>{match.score}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
