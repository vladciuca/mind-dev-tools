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
  PositiveColor,
  NegativeColor,
} from "../UI/UI.styles";
import {
  InfoGraphSubText,
  InfoGraphContainer,
  InfoGraphSplit,
} from "./OneThingSection.styles";

export const OneThingSection = () => (
  <>
    <SectionTitle>
      {">"} Focus on One Thing!{" "}
      <TextLight>Stop multi-tasking! It doesn't exist.</TextLight>
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
              <GiPlainCircle size="2.5rem" />
            </InfoGraphIcon>
            <div
              style={{
                position: "absolute",
                top: "-19px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: -1,
              }}
            >
              <NegativeColor>
                <BiExpand size="5rem" />
              </NegativeColor>
            </div>
          </div>
        </InfoGraphItem>
        <InfoGraphSubText>
          Most people focus on between <strong>4-8</strong> things at once.
        </InfoGraphSubText>
      </InfoGraphSplit>
      <InfoGraphSplit>
        <InfoGraphItem>
          <div style={{ position: "relative", zIndex: 1 }}>
            <InfoGraphIcon>
              <GiPlainCircle size="2.5rem" />
            </InfoGraphIcon>
            <div
              style={{
                position: "absolute",
                top: "-19px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: -1,
              }}
            >
              <PositiveColor>
                <ImArrowUpLeft
                  style={{ transform: "rotate(45deg)" }}
                  size="1.8rem"
                />
              </PositiveColor>
            </div>
          </div>
        </InfoGraphItem>
        <InfoGraphSubText>
          Focusing on <strong>1 task</strong> increases productivity!
        </InfoGraphSubText>
      </InfoGraphSplit>
    </InfoGraphContainer>

    <Paragraph>
      <TextLight>
        Multi-tasking undermines our efficiency and inhibits productivity.
      </TextLight>
      <Text>
        {" "}
        "Productivity is about FOCUS and FOCUS is the absence of distractions."
      </Text>{" "}
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
