import React from "react";
import { ActionButton } from "../ActionButton/ActionButton";
import {
  GridContainer,
  ActionColumn,
  Title,
  Subtitle,
  Action,
  ActionButtonContainer,
  SvgColumn,
  SvgContainer,
  Circle,
  OuterAnimation,
  User,
  UserGear,
  HeroContainer,
} from "./HeroSection.styles";

export const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <GridContainer>
          <ActionColumn>
            <Title>
              You don't need to be a programmer to start reprogramming your
              mind.
            </Title>
            <Action>Take Instant Action</Action>
            <Subtitle>
              on proven self-development formulas with our tools!
            </Subtitle>
            <ActionButtonContainer>
              <ActionButton />
            </ActionButtonContainer>
          </ActionColumn>
          <SvgColumn>
            <SvgContainer>
              <OuterAnimation />
              <Circle />
              <User />
              <UserGear />
            </SvgContainer>
          </SvgColumn>
        </GridContainer>
      </HeroContainer>
    </>
  );
};
