import React from "react";
import { BsFillCircleFill } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import { TbArrowsSort } from "react-icons/tb";
import {
  SectionTitle,
  Paragraph,
  Text,
  TextLight,
  TextHighlight,
  Source,
  InfoGraph,
  PositiveColor,
  NeutralColor,
  NegativeColor,
} from "../UI/UI.styles";
import {
  ActionOrder,
  ActionNumber,
  ActionsCircle,
  StoriesCircle,
  IdentityCircle,
  InfoGraphLegendContainer,
  InfoGraphLegend,
} from "./ChangeSection.styles";

export const ChangeSection = () => (
  <>
    <SectionTitle>
      {">"} Get to the root to make Changes stick!{" "}
      <TextLight>
        Focus on defining your new Identity, not on the actions to reach that
        Identity.
      </TextLight>
    </SectionTitle>

    <InfoGraph style={{ padding: "2rem 0" }}>
      <ActionsCircle>
        <StoriesCircle>
          <IdentityCircle>
            <Text
              style={{
                position: "absolute",
                top: "0px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <TbArrowsSort />
            </Text>
            <Text
              style={{
                position: "absolute",
                top: "-28px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <TbArrowsSort />
            </Text>
            <Text
              style={{
                position: "absolute",
                top: "-56px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <TbArrowsSort />
            </Text>
          </IdentityCircle>
        </StoriesCircle>
      </ActionsCircle>
      <InfoGraphLegendContainer>
        <InfoGraphLegend>
          <NegativeColor>
            <BsFillCircleFill size="1rem" />
          </NegativeColor>
          <Text>ACTIONS</Text>
        </InfoGraphLegend>
        <InfoGraphLegend>
          <NeutralColor>
            <BsFillCircleFill size="1rem" />
          </NeutralColor>
          <Text>STORIES</Text>
        </InfoGraphLegend>
        <InfoGraphLegend>
          <PositiveColor>
            <BsFillCircleFill size="1rem" />
          </PositiveColor>
          <Text>IDENTITY</Text>
        </InfoGraphLegend>
      </InfoGraphLegendContainer>
    </InfoGraph>

    <Paragraph>
      <TextLight>
        Most people approach change by taking some actions to change their
        believes / stories and hopefully, if it lasts long enough, they will
        change their identity.
        <ActionOrder>
          <ActionNumber>
            <NegativeColor>
              <span>
                <BsFillCircleFill size="1.3rem" />
              </span>
              <Text>3</Text>
            </NegativeColor>
            ACTIONS
          </ActionNumber>
          <Text>
            <FiArrowRight />
          </Text>
          <ActionNumber>
            <NeutralColor>
              <span>
                <BsFillCircleFill size="1.3rem" />
              </span>
              <Text>2</Text>
            </NeutralColor>
            STORIES
          </ActionNumber>
          <Text>
            <FiArrowRight />
          </Text>
          <ActionNumber>
            <PositiveColor>
              <span>
                <BsFillCircleFill size="1.3rem" />
              </span>
              <Text>1</Text>
            </PositiveColor>
            IDENTITY
          </ActionNumber>
        </ActionOrder>
      </TextLight>
    </Paragraph>

    <Paragraph>
      <TextLight>
        <TextHighlight>REAL CHANGE</TextHighlight> happens when you rewire
        yourself at the <TextHighlight>IDENTITY</TextHighlight> level, adopting
        the new identity, creating it ahead of time, it surpasses your stories
        and then your actions fall in alignment.{" "}
        <ActionOrder>
          <ActionNumber>
            <PositiveColor>
              <span>
                <BsFillCircleFill size="1.3rem" />
              </span>
              <Text>1</Text>
            </PositiveColor>
            IDENTITY
          </ActionNumber>
          <Text>
            <FiArrowRight />
          </Text>
          <ActionNumber>
            <NeutralColor>
              <span>
                <BsFillCircleFill size="1.3rem" />
              </span>
              <Text>2</Text>
            </NeutralColor>
            STORIES
          </ActionNumber>
          <Text>
            <FiArrowRight />
          </Text>
          <ActionNumber>
            <NegativeColor>
              <span>
                <BsFillCircleFill size="1.3rem" />
              </span>
              <Text>3</Text>
            </NegativeColor>
            ACTIONS
          </ActionNumber>
        </ActionOrder>
      </TextLight>
    </Paragraph>

    <Paragraph>
      <Text>
        In this way "your actions become a vote towards the person you want to
        become".{" "}
      </Text>
      <TextLight>
        {"("}source:{" "}
        <Text>
          <TextHighlight>
            <Source>Atomic Habits</Source>
          </TextHighlight>{" "}
          by <Source>James Clear</Source>
        </Text>
        {")"}
      </TextLight>
    </Paragraph>
    <Paragraph>
      <TextLight>
        This is the <TextHighlight>secret to CHANGE</TextHighlight>! Viewing
        change in this way you <Source>positively reinforce</Source> the
        identity you create and want to adopt instead of feeling{" "}
        <Source>guilty and negative</Source> when you take actions and don't
        meet the expectations you demand of yourself.
      </TextLight>
    </Paragraph>
  </>
);
