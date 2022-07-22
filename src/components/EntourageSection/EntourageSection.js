import React from "react";
import { FaUsers, FaUser } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import {
  SectionTitle,
  Paragraph,
  Text,
  TextLight,
  TextHighlight,
  AccentHighlight,
  InfoGraphItem,
  PrimaryHighlight,
  SecondaryHighlight,
} from "../UI/UI.styles";
import {
  InfoGraphArea,
  EnlargeText,
  IconContainer,
  IconBack,
  IconFront,
  TextContainer,
} from "./EntourageSection.styles";

export const EntourageSection = () => (
  <>
    <SectionTitle>
      {">"} Surround yourself with great people that inspire and bring out the
      best in you!{" "}
      <TextLight>
        We are much more affected by the environment than we would like to
        believe.
      </TextLight>
    </SectionTitle>

    <InfoGraphItem>
      <Text>
        You are the average of the <EnlargeText>5</EnlargeText> people you spend
        most time with!
      </Text>
    </InfoGraphItem>

    <InfoGraphArea>
      <InfoGraphItem>
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
      </InfoGraphItem>
    </InfoGraphArea>

    <InfoGraphItem>
      <Text>
        <EnlargeText>
          <AccentHighlight>80</AccentHighlight>%
        </EnlargeText>
        ENTOURAGE +{" "}
        <EnlargeText>
          <PrimaryHighlight>20</PrimaryHighlight>%
        </EnlargeText>
        SELF = <EnlargeText>100%</EnlargeText>
        <SecondaryHighlight>YOU</SecondaryHighlight>
      </Text>
    </InfoGraphItem>

    {/* <IconContainer>
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
    </IconContainer> */}

    {/* <Text>
      <EnlargeText>
        <AccentHighlight>80</AccentHighlight>%
      </EnlargeText>
      ENTOURAGE +{" "}
      <EnlargeText>
        <PrimaryColor>20</PrimaryColor>%
      </EnlargeText>
      SELF = <EnlargeText>100%</EnlargeText>
      <SuccessColor>YOU</SuccessColor>
    </Text> */}

    <Paragraph>
      <TextLight>
        Find Mentors! This also applies to the people you spend time with in{" "}
        <TextHighlight>LEARNING</TextHighlight>. If you listen to audio tapes or
        read books from great teachers on a daily basis you are effectively
        spending time with them and they are influencing your life.
      </TextLight>
    </Paragraph>
  </>
);
