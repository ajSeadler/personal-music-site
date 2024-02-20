import React from "react";
import { Typography, styled } from "@mui/material";
import { motion } from "framer-motion";

const fadeIn = `
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  backgroundImage: "url(/waves.svg)",
  backgroundSize: "cover",
  backgroundPosition: "center bottom",
});

const ContentWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "75vw",
  margin: "auto",
  marginTop:'3%',
  flex: 1,
  padding: "20px",
});

const Main = styled("main")({
  flex: 1,
  display: "flex",
  // marginTop:'auto',
  flexDirection: "column",
  gap: "20px",
});

const SideBar = styled("aside")({
  width: "200px",
  margin: "3%",
  height:'60vh',
  backgroundColor:'#334',
  color:'#fff',
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
  animation: fadeIn + " 1s ease-in-out",
});

const Card = styled(motion.div)({
  backgroundColor: "#334",
  color:'#fff',
  borderRadius: "20px",
  padding: "30px",
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
  position: "relative",
});

const GearList = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
});

const GearCategory = styled("li")({
  marginBottom: "10px",
  fontWeight: "bold",
  textDecoration: "underline",
});

const GearItem = styled("li")({
  marginBottom: "10px",
  cursor: "pointer",
  transition: "transform 0.3s, color 0.3s",
  "&:hover": {
    transform: "scale(1.1)",
    color: "salmon",
  },
});

const Image = styled("img")({
  width: "20vw",
  borderRadius: "20px",
  marginRight:'20px'
});

const AboutMe = () => {
  return (
    <>
      <div className="about">
        <Container>
          <ContentWrapper>
            <SideBar>
              <Typography
                variant="h5"
                style={{ margin: "12px", fontWeight: "bold" }}
              >
                GO-TO GEAR
              </Typography>
              <GearList>
                <GearCategory>Amps</GearCategory>
                <GearItem>Fender Blues Deluxe</GearItem>
                <GearItem>HX Stomp Amp Modeler</GearItem>

                <GearCategory>Guitars</GearCategory>
                <GearItem>PRS SE Hollowbody</GearItem>
                <GearItem>Fender Stratocaster</GearItem>
                <GearItem>Fender Telecaster</GearItem>
                <GearItem>D'Angelico Hollowbody</GearItem>

                <GearCategory>Pedals</GearCategory>
                <GearItem>Tube Screamer Overdrive</GearItem>
                <GearItem>Foxcatcher Overdrive</GearItem>
                <GearItem>Line 6 HX Stomp</GearItem>
                <GearItem>Electro-Harmonix Micro Synth</GearItem>
              </GearList>
            </SideBar>
            <Main>
              <Card
                animate={{ scale: [0.5, 1, 1.2, 1], rotate: [0, 360, 0] }}
                transition={{ duration: 1.5, ease: "easeInOut" }} style={{display: "flex"}}
              >
                <Image src="/crit1.JPG" alt="Profile" />
                {/* <Typography variant="h5">About Me</Typography> */}
                <Typography variant="body1">
                  I'm a guitarist based in Oklahoma City, specializing in Blues,
                  Jazz, and Rock. Offering personalized guitar lessons and
                  session guitarist services, I'm here to help you bring your
                  musical vision to life.
                </Typography>
              </Card>
              <Card
                animate={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <Typography variant="h5">Lessons/Session Work</Typography>
                <Typography variant="body1">
                  With a passion for music and years of experience in the
                  industry, I offer a unique blend of genres to learn with.
                  Whether you're a beginner eager to learn or a seasoned
                  musician in need of professional guitar tracks, I've gotcha
                  covered!
                </Typography>
              </Card>
              <Card
                animate={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <Typography variant="h5">Collaborate</Typography>
                <Typography variant="body1">
                  Feel free to connect with me to explore how we can collaborate
                  and create something cool.
                </Typography>
              </Card>
            </Main>
            <SideBar>
              <Typography
                variant="h5"
                style={{ margin: "12px", fontWeight: "bold" }}
              >
                INFLUENCES
              </Typography>
              <GearList>
                <GearItem>Stevie Ray Vaughan</GearItem>
                <GearItem>Jimi Hendrix</GearItem>

                <GearItem>Jerry Garcia</GearItem>
                <GearItem>The Grateful Dead</GearItem>
                <GearItem>Phish</GearItem>
                <GearItem>Goose</GearItem>

                <GearItem>Duane Allman</GearItem>
                <GearItem>Billy Strings</GearItem>
                <GearItem>Joe Pass</GearItem>
                <GearItem>Miles Davis</GearItem>
                <GearItem>Allan Holdsworth</GearItem>
                <GearItem>David Gilmour</GearItem>
                <GearItem>Jeff Beck</GearItem>
                <GearItem>Ritchie Blackmore</GearItem>
              </GearList>
            </SideBar>
          </ContentWrapper>
        </Container>
      </div>
    </>
  );
};

export default AboutMe;
