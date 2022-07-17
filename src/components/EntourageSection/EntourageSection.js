import React from "react";
import { FaUsers, FaUser } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import {
  Container,
  SectionTitle,
  Text,
  InfoText,
  AccentHighlight,
} from "../UI/UI.styles";
import {
  SuccessColor,
  PrimaryColor,
  EnlargeText,
  IconContainer,
  IconBack,
  IconFront,
  TextContainer,
} from "./EntourageSection.styles";

export const EntourageSection = () => (
  <Container>
    <Text>
      <ul>
        <li>
          Get in alignment with <u>SUCCESS</u> by surrounding yourself with
          great people that inspire and bring out the best in you!
        </li>
      </ul>
    </Text>
    <InfoText>
      We are much more affected by the environment than we would like to
      believe.
    </InfoText>
    <TextContainer>
      You are the average of the <AccentHighlight>5</AccentHighlight> people you
      spend most time with!
    </TextContainer>

    <IconContainer>
      <div style={{ position: "relative" }}>
        <IconBack>
          <FaUsers size="5rem" />
        </IconBack>

        <div
          style={{
            position: "absolute",
            top: "11px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <IconFront>
            <FaUser size="3.62rem" />
          </IconFront>
        </div>
        <div
          style={{
            position: "absolute",
            top: "-10px",
            right: "-25px",
          }}
        >
          <BiTimeFive size="2rem" />
        </div>
      </div>
    </IconContainer>

    <Text>
      <EnlargeText>
        <AccentHighlight>80</AccentHighlight>%
      </EnlargeText>
      ENTOURAGE +{" "}
      <EnlargeText>
        <PrimaryColor>20</PrimaryColor>%
      </EnlargeText>
      SELF = <EnlargeText>100%</EnlargeText>
      <SuccessColor>YOU</SuccessColor>
    </Text>
    <InfoText>
      Many aim to be the smartest person in the room, but if you are the
      smartest person in the room you wont grow.
    </InfoText>
    <InfoText>
      Find Mentors! This also applies to the people you spend time with in{" "}
      <u>LEARNING</u>. If you listen to audio tapes or read books from great
      teachers on a daily basis you are effectively spending time with them and
      they are influencing your life.
    </InfoText>
  </Container>
);
