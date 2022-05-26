import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import "./Activities.css";
import "../../utilities.css";
import ActivityCard from "../modules/ActivityCard";
import mpc from "../../images/mpc.png";
import csop from "../../../dist/videos/csop.mp4";
import weblab from "../../images/weblab.png";

const mpc_image = <img src={mpc} className="fitImage" />;

const mpc_content = (
  <div>
    <p>
      MIT Poker Club provides a fun, spirited learning environment for poker enthusiasts and novices
      alike, with an emphasis on understanding decision making processes and enhancing analytical
      and mathematical skills used in poker strategies. We offer opportunities for MIT students to
      not only become better problem solvers and critical decision makers, but also a community for
      people to come together to share their passion about poker.
    </p>
    <p>
      As co-president I help organize and lead club events, including tournaments, corporate sponsor
      events, study breaks, educational workshops, collaborations with other student groups, and
      general body meetings for hundreds of MIT students. My vision is to bring poker to all corners
      of MIT, and provide a safe environment for anyone of any background to learn and play poker.
      In order to execute this vision, I lead initiatives focused on education and outreach to
      expand our club's presence and impact.
    </p>

    <p>
      Be sure to check out our{" "}
      <a href={"http://poker.mit.edu"} className="undoLink" target="_blank">
        website
      </a>{" "}
      to learn more!
    </p>
  </div>
);

const csop_vid = (
  <video
    controls
    src="https://s3.amazonaws.com/allenqding.com/personal_website/client/dist/videos/csop.mp4"
    // src={csop}
    type="video/mp4"
    autoPlay
    muted
    loop
    width="100%"
    className="fitImage"
  ></video>
);

const csop_content = (
  <div>
    <p>
      The Collegiate Series of Poker, or CSOP, is the first publicly accessible collegiate poker
      tournament, founded by college students for college students. Our goal is to create a
      national-level collegiate poker scene, and to foster an intercollegiate poker community for
      cultivating interest in poker. All US college students are allowed to participate in the
      tournament and be a part of the CSOP community for free, regardless of poker background!
    </p>

    <p>
      The 2022 CSOP tournament was held in-person at the Omni-Parker hotel in Boston, featuring a
      $15,000 prize pool, 70 of the nation's best collegiate poker players, and poker personalities
      such as Greg Goes All In and Nemo Zhou. Over the past year, we have reached thousands of
      students across the nation, and aim to continue expanding CSOP's influence to all colleges
      throughout the US.
    </p>
    <p>
      On the CSOP team, I am responsible for campus outreach, marketing, and social media, and have
      led initiatives such as ambassador programs and social media campaigns.
    </p>
    <p>
      Be sure to check out the{" "}
      <a href="http://pokercsop.com" className="undoLink" target="_blank">
        CSOP website
      </a>{" "}
      to learn more!
    </p>
  </div>
);

const weblab_image = <img src={weblab} className="fitImage" />;

const weblab_content = (
  <div>
    <p>
      Web Lab is a course at MIT run entirely by a team of students that teaches the fundamentals of
      modern web development to around 400 students annually. Through a series of lectures and
      workshops, the course covers topics such as HTML, CSS, Javascript, node, React, database
      systems such as MongoDB, and deployment through Heroku. Students will build their own website
      throughout the course, and may also participate in a competition to win a $20,000+ prize pool,
      sponsor recognition, and glory.
    </p>

    <p>
      As a Web Lab staff member, I developed presentations and workshops, gave lectures, and hosted
      office hours to help students debug and clarify concepts, and received an instructor rating of
      6.7/7.0 in 2022.
    </p>

    <p>
      Check out the{" "}
      <a href="http://weblab.mit.edu" className="undoLink" target="_blank">
        Web Lab website
      </a>{" "}
      to learn more about the course (and to learn how to build websites like this one!)
    </p>
  </div>
);
const Activities = () => {
  return (
    <div className="backgroundActivities">
      <div className="superContainerAct">
        <div className="contentContainerAct">
          <div className="animate-act-appear">
            <ActivityCard
              title="MIT Poker Club"
              position="Co-President"
              img={mpc_image}
              content={mpc_content}
              times="March 2021 — Present"
            />{" "}
          </div>
          <div className="animate-act-appear">
            <ActivityCard
              title="Collegiate Series of Poker"
              position="Co-Founder"
              img={csop_vid}
              content={csop_content}
              times="March 2021 — Present"
            />
          </div>
          <div className="animate-act-appear">
            <ActivityCard
              title="MIT Web Lab"
              position="Staff + Teaching Assistant"
              img={weblab_image}
              content={weblab_content}
              times="January 2022"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
