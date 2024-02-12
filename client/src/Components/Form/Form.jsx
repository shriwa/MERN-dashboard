import React, { useEffect, useState } from "react";
import "./Form.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { GoPencil } from "react-icons/go";
import { MdSportsHandball } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

// Define validation schema using yup
const schema = yup.object().shape({
  fullname: yup.string().required("Name is mandatory"),
  gender: yup.string().required("Gender is mandatory"),
  address: yup.string().required("Address is mandatory"),
  coaching: yup.string().required("Select a Coaching"),
  phone: yup
    .string()
    .matches(/^\d+$/, "Must contain only digits")
    .required("Phone number is mandatory"),
  how_long: yup.string().required("How long is mandatory"),
  email: yup.string().email("Enter valid email").required("Email is mandatory"),
  competition: yup.string().required("Competition is mandatory"),
  club: yup.string().required("Club is mandatory"),
  nationality: yup.string().required("Nationality is mandatory"),
  age: yup.string().required("Age is mandatory"),
  coach: yup.string().required("Selecting a Coach is mandatory"),
  slam: yup.string().required("Mandatory"),
  fitness: yup.string().required("Fitness level is mandatory"),
  wtn: yup.string().required("WTN is mandatory"),
  hand: yup.string().required("Select which hand you are"),
  play_activity: yup.string().required("Play activity is mandatory"),
  skill_level: yup.string().required("Skill level is mandatory"),
  other_sports: yup.string().required("Select an option"),
  club_rank: yup.number().required("Club rank is mandatory"),
  single_rank: yup.number().required("Single rank is mandatory"),
  doubles_rank: yup.number().required("Doubles rank is mandatory"),
  mixed_doubles_rank: yup.number().required("Mixed doubles rank is mandatory"),
});

const Form = () => {
  // Initialize useForm hook with validation schema
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  console.log(errors);

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log(data);
  };

  // State to store fetched details
  const [details, setDetails] = useState([]);

  // Fetch details from server
  useEffect(() => {
    fetch("http://localhost:2000/getdetails/2")
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="form-container">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="form">
          <div className="field-group">
            {/* Name Field */}
            <div className="field name">
              <label htmlFor="">Name</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Fullname"
                {...register("fullname")}
              />
              <GoPencil
                color="#8b5aa4"
                size={25}
                style={{ marginLeft: "14px" }}
              />
              <FaStar
                color="#8b5aa4"
                size={20}
                style={{ marginLeft: "10px" }}
              />
              <p className="error-message">{errors?.fullname?.message}</p>
            </div>
            {/* Gender Field */}
            <div className="field">
              <label htmlFor="">Gender</label>
              <select name="gender" id="gender" {...register("gender")}>
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <p className="error-message">{errors?.gender?.message}</p>
            </div>
          </div>
          {/* Address and Coaching Fields */}
          <div className="field-group">
            <div className="field address">
              <label htmlFor="">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                {...register("address")}
              />
              <p className="error-message">{errors?.address?.message}</p>
            </div>
            <div className="field">
              <label htmlFor="">Coaching</label>
              <select name="coaching" id="coaching" {...register("coaching")}>
                <option value="">Coaching</option>
                <option value="option_1">
                  {details.coaching && details.coaching.option_1}
                </option>
                <option value="option_2">
                  {details.coaching && details.coaching.option_2}
                </option>
                <option value="option_3">
                  {details.coaching && details.coaching.option_3}
                </option>
              </select>
              <p className="error-message">{errors?.coaching?.message}</p>
            </div>
          </div>
          {/* Phone and How Long Fields */}
          <div className="field-group">
            <div className="field phone">
              <label htmlFor="">Phone</label>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Phone"
                {...register("phone")}
              />
              <IoLogoWhatsapp
                color="green"
                size={25}
                style={{ marginLeft: "14px" }}
              />
              <p className="error-message">{errors?.phone?.message}</p>
            </div>
            <div className="field">
              <label htmlFor="">How Long</label>
              <select name="how_long" id="how_long" {...register("how_long")}>
                <option value="">select</option>
                <option value="less-1">
                  {details.how_long && details.how_long.option_1}
                </option>
                <option value="more-1">
                  {details.how_long && details.how_long.option_2}
                </option>
                <option value="more-2">
                  {details.how_long && details.how_long.option_3}
                </option>
              </select>
              <p className="error-message">{errors?.how_long?.message}</p>
            </div>
          </div>
          {/* Email and Competition Fields */}
          <div className="field-group">
            <div className="field">
              <label htmlFor="">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                {...register("email")}
              />
              <p className="error-message">{errors?.email?.message}</p>
            </div>
            <div className="field">
              <label htmlFor="">Competition</label>
              <select
                name="competition"
                id="competition"
                {...register("competition")}
              >
                <option value="">select</option>
                <option value="club_1">
                  {details.competition && details.competition.option_1}
                </option>
                <option value="club_2">
                  {details.competition && details.competition.option_2}
                </option>
                <option value="club_3">
                  {details.competition && details.competition.option_3}
                </option>
              </select>
              <p className="error-message">{errors?.competition?.message}</p>
            </div>
          </div>
          {/* Club and Nationality Fields */}
          <div className="field-group">
            <div className="field">
              <label htmlFor="">Club</label>
              <select name="club" id="club" {...register("club")}>
                <option value="">select</option>
                <option value="option_1">
                  {details.club && details.club.option_3}
                </option>
                <option value="option_2">
                  {details.club && details.club.option_3}
                </option>
                <option value="option_3">
                  {details.club && details.club.option_3}
                </option>
              </select>
              <p className="error-message">{errors?.club?.message}</p>
            </div>
            <div className="field">
              <label htmlFor="">Nationality</label>
              <select
                name="nationality"
                id="nationality"
                {...register("nationality")}
              >
                <option value="">select</option>
                <option value="srilanka">
                  {details.nationality && details.nationality.option_1}
                </option>
                <option value="india">
                  {details.nationality && details.nationality.option_2}
                </option>
                <option value="pakistan">
                  {details.nationality && details.nationality.option_3}
                </option>
              </select>
              <p className="error-message">{errors?.nationality?.message}</p>
            </div>
          </div>
          {/* Age and Coach Fields */}
          <div className="field-group">
            <div className="field">
              <label htmlFor="">Age Range</label>
              <select name="age" id="age" {...register("age")}>
                <option value="">select</option>
                <option value="less-18">
                  {details.age && details.age.option_1}
                </option>
                <option value="over-18">
                  {details.age && details.age.option_2}
                </option>
                <option value="over-50">
                  {details.age && details.age.option_3}
                </option>
              </select>
              <p className="error-message">{errors?.age?.message}</p>
            </div>
            <div className="field coach">
              <label htmlFor="">Coach</label>
              <div className="coach-choice">
                <div className="coach-yes">
                  <label>
                    <input
                      type="radio"
                      name="coach"
                      value="yes"
                      {...register("coach")}
                    />
                    Yes
                  </label>
                </div>
                <div className="coach-yes">
                  <label>
                    <input
                      type="radio"
                      name="coach"
                      value="no"
                      {...register("coach")}
                    />
                    No
                  </label>
                </div>
              </div>
              <p className="error-message">{errors?.coach?.message}</p>
              <div className="coach-slam">
                <label htmlFor="">Slam</label>
                <input
                  type="number"
                  id="slam"
                  name="slam"
                  placeholder="Slam"
                  {...register("slam")}
                />
                <p className="error-message">{errors?.slam?.message}</p>
              </div>
            </div>
          </div>
          {/* Fitness and WTN Fields */}
          <div className="field-group">
            <div className="field fitness">
              <label htmlFor="">Fitness Level</label>
              <select name="fitness" id="fitness" {...register("fitness")}>
                <option value="">select</option>
                <option value="good">
                  {details.fitness && details.fitness.option_1}
                </option>
                <option value="average">
                  {details.fitness && details.fitness.option_2}
                </option>
                <option value="bad">
                  {details.fitness && details.fitness.option_3}
                </option>
              </select>
              <p className="error-message">{errors?.fitness?.message}</p>
            </div>
            <div className="field wtn">
              <div className="wtn-main">
                <label htmlFor="">WTN</label>
                <input
                  type="number"
                  id="wtn"
                  name="wtn"
                  placeholder="WTN"
                  {...register("wtn")}
                />
                <p className="error-message">{errors?.wtn?.message}</p>
              </div>
              {/* Hand Field */}
              <div className="wtn-hand">
                <label htmlFor="">Hand</label>
                <select name="hand" id="hand" {...register("hand")}>
                  <option value="">select</option>
                  <option value="right">Right</option>
                  <option value="left">Left</option>
                </select>
                <p className="error-message">{errors?.hand?.message}</p>
              </div>
            </div>
          </div>
          {/* Play Activity and Skill Level Fields */}
          <div className="field-group">
            <div className="field">
              <label htmlFor="">Play Activity</label>
              <select
                name="play_activity"
                id="play_activity"
                {...register("play_activity")}
              >
                <option value="">select</option>
                <option value="less-4">
                  {details.play_activity && details.play_activity.option_1}
                </option>
                <option value="more-4">
                  {details.play_activity && details.play_activity.option_2}
                </option>
                <option value="more-8">
                  {details.play_activity && details.play_activity.option_3}
                </option>
              </select>
              <p className="error-message">{errors?.play_activity?.message}</p>
            </div>
            <div className="field skill">
              <label htmlFor="">Skill Level</label>
              <select
                name="skill_level"
                id="skill_level"
                {...register("skill_level")}
              >
                <option value="">select</option>
                <option value="2-advanced">
                  {details.skill_level && details.skill_level.option_1}
                </option>
                <option value="3-advanced">
                  {details.skill_level && details.skill_level.option_2}
                </option>
                <option value="4-advanced">
                  {details.skill_level && details.skill_level.option_3}
                </option>
              </select>
              <p className="error-message">{errors?.skill_level?.message}</p>
            </div>
          </div>
          {/* Other Sports and Ranking Fields */}
          <div className="field-group">
            <div className="field">
              <label htmlFor="">Other Sports</label>
              <select
                name="other_sports"
                id="other_sports"
                {...register("sports")}
              >
                <option value="">select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <p className="error-message">{errors?.other_sports?.message}</p>
            </div>
            <div className="field ranking">
              <div className="ranking-option">
                <MdSportsHandball size={30} />
                <p>Club</p>
                <p>Single</p>
                <p>Doubles</p>
                <p>Mixed Doubles</p>
              </div>
              <div className="ranking-input">
                <label htmlFor="">Ranking</label>
                <input
                  type="number"
                  id="club_rank"
                  name="club_rank"
                  {...register("club_rank")}
                />
                <input
                  type="number"
                  id="single_rank"
                  name="single_rank"
                  {...register("single_rank")}
                />
                <input
                  type="number"
                  id="doubles_rank"
                  name="doubles_rank"
                  {...register("doubles_rank")}
                />
                <input
                  type="number"
                  id="mixed_doubles_rank"
                  name="mixed_doubles_rank"
                  {...register("mixed_doubles_rank")}
                />
              </div>
            </div>
          </div>
          {/* Submit Button */}
          <div className="submit-btn">
            <input className="btn" type="submit" id="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
