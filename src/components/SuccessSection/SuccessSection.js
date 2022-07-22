import React from "react";
import { MdAccessibilityNew, MdDirectionsRun } from "react-icons/md";
import {
  SectionTitle,
  AccentHighlight,
  Paragraph,
  Text,
  TextLight,
  TextHighlight,
  InfoGraphItem,
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
    <SectionTitle>{">"} Never Give Up!</SectionTitle>
    <Paragraph>
      <TextLight>
        Consistency is key! Being consistent in managing and reiterating on this
        smaller actions through personal experience and reason is the approach
        to <TextHighlight>SUCCESS</TextHighlight> in any area you choose to
        pursue.
      </TextLight>
    </Paragraph>

    <FormulaTitle>
      <Text>
        const SUCCESS = {"("}
        <AccentHighlight>X</AccentHighlight>
        {") =>"}
      </Text>
    </FormulaTitle>
    <Formula>
      <InfoGraphItem>
        <Brackets>{"("}</Brackets>
        <Variable>
          <Icon>
            <span className="fall">
              <MdDirectionsRun size="5rem" />
            </span>
          </Icon>
          <Text>fall</Text>
          <Text>
            <AccentHighlight>X</AccentHighlight> times
          </Text>
        </Variable>
        <Brackets>{")"}</Brackets>
      </InfoGraphItem>
      <InfoGraphItem>
        <Text>.then</Text>
      </InfoGraphItem>
      <InfoGraphItem>
        <Brackets>{"("}</Brackets>
        <Variable>
          <Icon>
            <MdAccessibilityNew size="5rem" />
          </Icon>
          <Text>get up</Text>
          <Text>
            <AccentHighlight>X</AccentHighlight>+1 times
          </Text>
        </Variable>
        <Brackets>{")"}</Brackets>
      </InfoGraphItem>
    </Formula>
  </>
);
