import React from "react";
import { MdEmojiPeople } from "react-icons/md";
import { GiFalling } from "react-icons/gi";
import {
  Container,
  Text,
  InfoText,
  SectionTitle,
  AccentHighlight,
  SuccessHighlight,
} from "../UI/UI.styles";
import {
  FormulaTitle,
  Formula,
  Brackets,
  Variable,
  Icon,
} from "./SuccessSection.styles";

export const SuccessSection = () => (
  <>
    <Container>
      <InfoText>
        Programmers take complex problems and break them down into small
        indivisible parts in order to reach understanding and find solutions.
        This is called <u>first principle thinking</u>.
      </InfoText>
      <InfoText>
        The same thinking can be applied to any life goal. These may seem
        overwhelming at first and sticking to them is hard, but once you break
        down and organize them into small achievable actions they become
        manageable.
      </InfoText>
      <SectionTitle>Never Give Up!</SectionTitle>
      <InfoText>
        Consistency is key! Being consistent in managing this smaller actions
        through personal experience and reason is the approach to <u>SUCCESS</u>{" "}
        in any area you choose to pursue.
      </InfoText>
      <FormulaTitle>
        const <SuccessHighlight>SUCCESS</SuccessHighlight> = {"("}
        <AccentHighlight>X</AccentHighlight>
        {") =>"}
      </FormulaTitle>
      <Formula>
        <Brackets>{"("}</Brackets>
        <Variable>
          <Icon>
            <GiFalling size="4rem" />
          </Icon>
          <Text>fall</Text>
          <Text>
            <AccentHighlight>X</AccentHighlight> times
          </Text>
        </Variable>
        <Brackets>{")"}</Brackets>
        <SectionTitle>.then</SectionTitle>
        <Brackets>{"("}</Brackets>
        <Variable>
          <Icon>
            <MdEmojiPeople size="5rem" />
          </Icon>
          <Text>get up</Text>
          <Text>
            <AccentHighlight>X</AccentHighlight>+1 times
          </Text>
        </Variable>
        <Brackets>{")"}</Brackets>
      </Formula>
    </Container>
  </>
);
