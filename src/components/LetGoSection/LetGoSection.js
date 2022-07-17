import React, { useEffect, useState } from "react";
import { AreaChart } from "./AreaChart";
import { darkTheme } from "../../theme";
import { Container, InfoText, Text, SectionTitle } from "../UI/UI.styles";
import { ChartContainer, TextContainer } from "./LetGoSection.styles";

export const Data = [
  { id: "start", value: 0 },
  { id: "start-top", value: 1 },
  { id: "top", value: 4 },
  { id: "top-mid", value: 1 },
  { id: "mid", value: 0 },
  { id: "mid-bottom", value: -1 },
  { id: "bottom", value: -4 },
  { id: "bottom-end", value: -1 },
  { id: "end", value: 0 },
];

export const LetGoSection = () => {
  const [range, setRange] = useState("");
  const [data, setData] = useState(Data);

  useEffect(() => {
    setRange(4);
  }, []);

  const chartData = {
    labels: data.map((data) => data.id),
    datasets: [
      {
        label: "scale data",
        data: data.map((data) => data.value),
        tension: 0.4,
        borderWidth: 0,
        pointRadius: 0,
        fill: {
          target: {
            value: 0,
          },
          below: darkTheme.danger,
          above: darkTheme.success,
        },
      },
    ],
  };

  const handleChange = (e) => {
    const actionRange = e.target.value;

    const newData = data.map((obj) => {
      if (obj.id === "top") {
        return { ...obj, value: actionRange };
      }
      if (obj.id === "bottom") {
        return { ...obj, value: -Math.abs(actionRange) };
      }

      return obj;
    });

    setData(newData);
    setRange(actionRange);
  };

  return (
    <Container>
      <SectionTitle>Let Go!</SectionTitle>
      <InfoText>
        No matter how much positive action you take towards achieving your
        goals, you will always find a way to "self-sabotage" if you don't{" "}
        <u>LET GO</u> of the negative aspects that are holding you back first!
      </InfoText>

      <InfoText>
        For every action there is an equal and opposite reaction.
      </InfoText>
      <ChartContainer>
        <AreaChart chartData={chartData} />
      </ChartContainer>
      <input
        type="range"
        min={4}
        max={10}
        value={range}
        onChange={handleChange}
      />
      <TextContainer>
        <Text>
          We are not the highest version of ourselves that we can imagine, we
          are the lowest version of ourselves that we can accept.
        </Text>
        {/* <Text>
          You don't rise to the level of the occasion, you fall to the level of
          your habits. - Navy Seals
        </Text> */}
      </TextContainer>

      <InfoText>
        Addressing the negative aspects by identifying and working on the
        subconscious programs/habits that keep dragging you down, your
        self-development actions persist over time.
      </InfoText>
      <button>Start Here</button>
    </Container>
  );
};
