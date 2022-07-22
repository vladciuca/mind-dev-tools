import React from "react";
import { MdApps } from "react-icons/md";
import { FaSquareFull } from "react-icons/fa";
import { BsBoxArrowRight } from "react-icons/bs";
import {
  SectionTitle,
  Paragraph,
  TextLight,
  TextHighlight,
  InfoGraph,
  InfoGraphItem,
  InfoGraphIcon,
} from "../UI/UI.styles";
import {
  BreakDownInfoGraphItem,
  SelectedSquare,
} from "./BreakDownSection.styles";

export const BreakDownSection = () => (
  <>
    <SectionTitle>{">"} Break It Down!</SectionTitle>
    <Paragraph>
      <TextLight>
        Programmers take complex problems and break them down into small
        indivisible parts in order to reach understanding and find solutions.
        This is called <TextHighlight>first principle thinking</TextHighlight>.
      </TextLight>
    </Paragraph>

    <InfoGraph>
      <InfoGraphItem>
        <InfoGraphIcon>
          <FaSquareFull size="4.5rem" />
        </InfoGraphIcon>
      </InfoGraphItem>
      <BreakDownInfoGraphItem>
        <span>
          <BsBoxArrowRight size="2.5rem" />
        </span>
      </BreakDownInfoGraphItem>
      <InfoGraphItem>
        <div style={{ position: "relative" }}>
          <InfoGraphIcon>
            <MdApps size="6.7rem" />
          </InfoGraphIcon>
          <div
            style={{
              position: "absolute",
              transform: "translateX(-50%)",
              top: "71px",
              left: "27.5px",
            }}
          >
            <InfoGraphIcon>
              <SelectedSquare>
                <FaSquareFull size="1.15rem" />
              </SelectedSquare>
            </InfoGraphIcon>
          </div>
        </div>
      </InfoGraphItem>
    </InfoGraph>

    <Paragraph>
      <TextLight>
        The same thinking can be applied to any life goal. These may seem
        overwhelming at first and sticking to them is hard, but once you break
        down and organize them into small achievable actions they become
        manageable.
      </TextLight>
    </Paragraph>
  </>
);
