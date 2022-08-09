import React, { useEffect, useState } from "react";
import { AreaChart } from "./AreaChart";
import { LetGoSlider } from "../LetGoSlider/LetGoSlider";
import { theme } from "../../theme";
import {
  SectionTitle,
  Paragraph,
  Text,
  TextLight,
  TextHighlight,
  Source,
  InfoGraphText,
} from "../UI/UI.styles";
import { ActionButton, ChartContainer } from "./LetGoSection.styles";

export const Data = [
  { id: "start", value: 0 },
  { id: "start-top", value: 1 },
  { id: "top", value: 7 },
  { id: "top-mid", value: 1 },
  { id: "mid", value: 0 },
  { id: "mid-bottom", value: -1 },
  { id: "bottom", value: -7 },
  { id: "bottom-end", value: -1 },
  { id: "end", value: 0 },
];

export const LetGoSection = () => {
  const [range, setRange] = useState("");
  const [data, setData] = useState(Data);

  useEffect(() => {
    setRange(7);
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
          below: theme.negative,
          above: theme.positive,
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

  const handleIncrease = () => {
    const newData = data.map((obj) => {
      if (obj.id === "top" && obj.value < 10) {
        return { ...obj, value: ++obj.value };
      }
      if (obj.id === "bottom" && obj.value > -10) {
        return { ...obj, value: --obj.value };
      }
      return obj;
    });

    const actionRange = newData.find((obj) => obj.id === "top");

    setData(newData);
    setRange(actionRange.value);
  };

  const handleDecrease = () => {
    const newData = data.map((obj) => {
      if (obj.id === "top" && obj.value > 4) {
        return { ...obj, value: --obj.value };
      }
      if (obj.id === "bottom" && obj.value < -4) {
        return { ...obj, value: ++obj.value };
      }
      return obj;
    });

    const actionRange = newData.find((obj) => obj.id === "top");

    setData(newData);
    setRange(actionRange.value);
  };

  return (
    <>
      <SectionTitle>{">"} Let Go!</SectionTitle>

      <Paragraph>
        <TextLight>
          No matter how much positive action you take towards achieving your
          goals, you will always find ways to "self-sabotage" if you are not{" "}
          <TextHighlight>LETTING GO</TextHighlight> of the negative aspects that
          are holding you back first!
        </TextLight>
      </Paragraph>

      <InfoGraphText>
        <Text>For every action there is an equal and opposite reaction.</Text>
      </InfoGraphText>

      <ChartContainer>
        <AreaChart chartData={chartData} />
      </ChartContainer>
      <LetGoSlider
        range={range}
        handleChange={handleChange}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
      />

      <Paragraph>
        <Text>
          We are not the highest version of ourselves that we can imagine, we
          are the lowest version of ourselves that we can accept.
        </Text>{" "}
        <TextLight>
          Or as they say in the <Source>Navy Seals</Source>, "you don't rise to
          the level of the occasion, you fall to the level of your habits".
        </TextLight>
      </Paragraph>

      <Paragraph>
        <TextLight>
          Addressing the negative aspects by identifying and working on the
          subconscious programs / habits that keep dragging you down, your
          self-development actions{" "}
          <TextHighlight>persist over time</TextHighlight>.
        </TextLight>
      </Paragraph>
      {/* <ActionButton></ActionButton> */}
    </>
  );
};
