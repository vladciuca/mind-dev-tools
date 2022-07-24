import React from "react";
import { BsFillCircleFill } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import {
  SectionTitle,
  Paragraph,
  Text,
  TextLight,
  TextHighlight,
  Source,
  InfoGraphItem,
  AccentColor,
  PrimaryColor,
  SecondaryColor,
} from "../UI/UI.styles";
import {
  ActionOrder,
  ActionNumber,
  ActionsCircle,
  StoriesCircle,
  IdentityCircle,
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

    <Paragraph>
      <TextLight>
        Most people approach change by taking some actions to change their
        believes/stories and hopefully, if it lasts long enough, they will
        change their identity.
        <ActionOrder>
          <ActionNumber>
            <AccentColor>
              <span>
                <BsFillCircleFill size="1.3rem" />
              </span>
              <Text>3</Text>
            </AccentColor>
            ACTIONS
          </ActionNumber>
          <Text>
            <FiArrowRight />
          </Text>
          <ActionNumber>
            <PrimaryColor>
              <span>
                <BsFillCircleFill size="1.3rem" />
              </span>
              <Text>2</Text>
            </PrimaryColor>
            STORIES
          </ActionNumber>
          <Text>
            <FiArrowRight />
          </Text>
          <ActionNumber>
            <SecondaryColor>
              <span>
                <BsFillCircleFill size="1.3rem" />
              </span>
              <Text>1</Text>
            </SecondaryColor>
            IDENTITY
          </ActionNumber>
        </ActionOrder>
      </TextLight>
    </Paragraph>

    <InfoGraphItem>
      <ActionsCircle>
        <StoriesCircle>
          <IdentityCircle>
            <Text
              style={{
                position: "absolute",
                top: "9px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              1
              <Text
                style={{
                  position: "absolute",
                  top: "40px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                2
                <Text
                  style={{
                    position: "absolute",
                    top: "35px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  3
                </Text>
              </Text>
            </Text>
          </IdentityCircle>
        </StoriesCircle>
      </ActionsCircle>
    </InfoGraphItem>

    <Paragraph>
      <TextLight>
        <TextHighlight>REAL CHANGE</TextHighlight> happens when you rewire
        yourself at the <TextHighlight>IDENTITY</TextHighlight> level, adopting
        the new identity, creating it ahead of time, it surpasses your stories
        and then your actions fall in alignment.{" "}
        <ActionOrder>
          <ActionNumber>
            <SecondaryColor>
              <span>
                <BsFillCircleFill size="1.3rem" />
              </span>
              <Text>1</Text>
            </SecondaryColor>
            IDENTITY
          </ActionNumber>
          <Text>
            <FiArrowRight />
          </Text>
          <ActionNumber>
            <PrimaryColor>
              <span>
                <BsFillCircleFill size="1.3rem" />
              </span>
              <Text>2</Text>
            </PrimaryColor>
            STORIES
          </ActionNumber>
          <Text>
            <FiArrowRight />
          </Text>
          <ActionNumber>
            <AccentColor>
              <span>
                <BsFillCircleFill size="1.3rem" />
              </span>
              <Text>3</Text>
            </AccentColor>
            ACTIONS
          </ActionNumber>
        </ActionOrder>
      </TextLight>
    </Paragraph>

    <Paragraph>
      <Text>
        In this way "your actions become a vote towards the person you want to
        become".
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
