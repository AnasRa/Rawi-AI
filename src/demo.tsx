import { useState } from "react";
import { Text } from "@mantine/core";
import { SegmentedControl } from "@mantine/core";

import { chatCompletionAPI } from "./services/ChatGPTService";

export default function Demo() {
  const [completion, setCompletion] = useState("");

  const callGPT = async (subject: string) => {
    try {
      const response = await chatCompletionAPI(
        `Give me a fact about ${subject}`
      );
      setCompletion(response.content);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Text>
        <h2>A fact about your framework of choice from ChatGPT!</h2>
      </Text>
      <Text>
        <h3>ChatGPT: {completion}</h3>
      </Text>
      <SegmentedControl
        data={[
          { label: "React", value: "React" },
          { label: "Angular", value: "Angular" },
          { label: "Vue", value: "Vue" },
          { label: "Svelte", value: "Svelte" },
        ]}
        onChange={callGPT}
      />
    </div>
  );
}
