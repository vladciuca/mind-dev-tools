import React from "react";
import { FaUsers, FaUser } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import {
  SectionTitle,
  Paragraph,
  Text,
  TextLight,
  TextHighlight,
  InfoGraphItem,
  NeutralHighlight,
  PositiveHighlight,
  NegativeHighlight,
  Source,
  InfoGraphText,
} from "../UI/UI.styles";
import {
  InfoGraphArea,
  EnlargeText,
  IconBack,
  IconFront,
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

    <InfoGraphText>
      <Text>
        "You are the average of the <EnlargeText>5</EnlargeText> people you
        spend most time with!"
      </Text>
    </InfoGraphText>

    <InfoGraphText>
      <TextLight>
        {"("}source:{" "}
        <TextHighlight>
          <Source>
            <Text>Jim Rohn</Text>
          </Source>
        </TextHighlight>
        {")"}
      </TextLight>
    </InfoGraphText>

    <InfoGraphArea>
      <InfoGraphItem>
        <div style={{ position: "relative" }}>
          <IconBack>
            <FaUsers size="4.8rem" />
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
              <FaUser size="3.5rem" />
            </IconFront>
          </div>
          <div
            style={{
              position: "absolute",
              top: "-15px",
              right: "-25px",
            }}
          >
            <BiTimeFive size="1.5rem" />
          </div>
        </div>
      </InfoGraphItem>
    </InfoGraphArea>

    <InfoGraphText>
      <Text>
        <EnlargeText>
          <NegativeHighlight>80</NegativeHighlight>%
        </EnlargeText>
        ENTOURAGE +{" "}
        <EnlargeText>
          <NeutralHighlight>20</NeutralHighlight>%
        </EnlargeText>
        SELF = <EnlargeText>100%</EnlargeText>
        <PositiveHighlight>YOU</PositiveHighlight>
      </Text>
    </InfoGraphText>

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
