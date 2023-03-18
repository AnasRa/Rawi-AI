import axios from "axios";
import { MODEL, API_KEY } from "../constents";
import { ChatCompletion, Message } from "../interfaces";

export const chatCompletionAPI = async (content: string) => {
  const options = {
    url: "https://experimental.willow.vectara.io/v1/chat/completions",
    // url: "https://api.openai.com/v1/chat/completions",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "customer-id": "2571666440",
      "x-api-key": API_KEY,
    },
    data: {
      model: MODEL,
      messages: [
        {
          role: "user",
          content,
        },
      ],
    },
  };

  return axios
    .request(options)
    .then(function ({ data }: { data: ChatCompletion }) {
      const responseMessage: Message = data.choices[0].message;
      return responseMessage;
    })
    .catch(function (error: any) {
      throw error;
    });
};

export const translateAPI = async (content: string) => {
  const options = {
    url: "https://experimental.willow.vectara.io/v1/chat/completions",
    // url: "https://api.openai.com/v1/chat/completions",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "customer-id": "2571666440",
      "x-api-key": API_KEY,
    },
    data: {
      model: MODEL,
      messages: [
        {
          role: "system",
          content:
            "You are a professional translator that translates English stories to Arabic and uses Arabic diacritics in every letter as much as possible",
        },
        {
          role: "user",
          content,
        },
      ],
    },
  };

  return axios
    .request(options)
    .then(function ({ data }: { data: ChatCompletion }) {
      const responseMessage: Message = data.choices[0].message;
      return responseMessage;
    })
    .catch(function (error: any) {
      throw error;
    });
};

export const callDaleAPI = async (content: string) => {
  return await axios.post(
    "https://api.openai.com/v1/images/generations",
    {
      prompt: `${content}, Draw them in the style of Dr. Suess`,
      n: 1,
      size: "1024x1024",
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "{YOUR-API-KEY}",
      },
    }
  );
};
