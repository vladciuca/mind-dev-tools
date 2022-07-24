import React from "react";
import { BiExpand } from "react-icons/bi";
import { GiPlainCircle } from "react-icons/gi";
import { ImArrowUpLeft } from "react-icons/im";
import {
  Paragraph,
  SectionTitle,
  Text,
  TextLight,
  TextHighlight,
  Source,
  InfoGraphItem,
  InfoGraphIcon,
  AccentColor,
  SecondaryColor,
} from "../UI/UI.styles";
import {
  InfoGraphText,
  InfoGraphContainer,
  InfoGraphSplit,
} from "./OneThingSection.styles";

export const OneThingSection = () => (
  <>
    <SectionTitle>
      {">"} Focus on One Thing!{" "}
      <TextLight>End multi-tasking, it doesn't exist!</TextLight>
    </SectionTitle>

    <Paragraph>
      <TextLight>
        When our brain is multi-tasking its like flipping ON/OFF switch. We can
        switch so fast from task A to task B that it might feel like we can do
        two things at once when in reality we actually can't.
      </TextLight>
    </Paragraph>

    <InfoGraphContainer>
      <InfoGraphSplit>
        <InfoGraphItem>
          <div style={{ position: "relative", zIndex: 1 }}>
            <InfoGraphIcon>
              <GiPlainCircle size="2rem" />
            </InfoGraphIcon>
            <div
              style={{
                position: "absolute",
                top: "-15px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: -1,
              }}
            >
              <AccentColor>
                <BiExpand size="4rem" />
              </AccentColor>
            </div>
          </div>
        </InfoGraphItem>
        <InfoGraphText>
          Most people focus on between <strong>4-8</strong> things at once.
        </InfoGraphText>
      </InfoGraphSplit>
      <InfoGraphSplit>
        <InfoGraphItem>
          <div style={{ position: "relative", zIndex: 1 }}>
            <InfoGraphIcon>
              <GiPlainCircle size="2rem" />
            </InfoGraphIcon>
            <div
              style={{
                position: "absolute",
                top: "-15px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: -1,
              }}
            >
              <SecondaryColor>
                <ImArrowUpLeft
                  style={{ transform: "rotate(45deg)" }}
                  size="1.5rem"
                />
              </SecondaryColor>
            </div>
          </div>
        </InfoGraphItem>
        <InfoGraphText>
          Focusing on <strong>1 task</strong> increases productivity!
        </InfoGraphText>
      </InfoGraphSplit>
    </InfoGraphContainer>

    <Paragraph>
      <TextLight>
        Multi-tasking undermines our efficiency and inhibits productivity.
      </TextLight>
      <Text>
        {" "}
        "Productivity is about FOCUS and FOCUS is the absence of distractions."
      </Text>
      <TextLight>
        {"("}source:{" "}
        <Text>
          <TextHighlight>
            <Source>The ONE Thing</Source>
          </TextHighlight>{" "}
          by <Source>Gray Keller</Source> & <Source>Jay Papasan</Source>
        </Text>
        {")"}
      </TextLight>
    </Paragraph>
  </>
);
