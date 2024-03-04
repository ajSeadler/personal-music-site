import React from "react";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

const Wrapper = styled("div")`
  min-height: 100vh;
  background: #333 url('/waves.svg') center bottom no-repeat fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20vh; /* Add padding to keep space for the fixed background */
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 10px;
  margin-top: 2vh;
  max-width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Image = styled("img")`
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const AboutMe = () => {
  return (
    <div className="about">
      <Wrapper>
        <Card
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src='/crit1.JPG' alt="Your Image" />
          <Typography variant="body1" style={{ color: 'antiquewhite' }}>
            I am a blues/rock musician based out of Oklahoma City, Oklahoma. Offering personalized guitar lessons and session guitarist
            services, I'm here to help you bring your musical vision to life!
          </Typography>
        </Card>
        <Card
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="body1" style={{ color: 'antiquewhite' }}>
            I have been playing guitar since the age of twelve. In 2020 I moved to Oklahoma City and joined a band called Don't Tell Dena. A year down the road, I joined a second band called Disco Stranger. <br /><br /> With countless live performances under my belt, I can confidently say that my services will not be a disappointment!
          </Typography>
        </Card>
      </Wrapper>
    </div>
  );
};

export default AboutMe;
