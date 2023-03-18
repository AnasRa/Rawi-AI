import { PROMPTS } from "../storyConstents";

export const storyBuilder = (
  name: string,
  gender: string,
  age: string,
  toys: any,
  character: any
) => {
  return PROMPTS.STORY.replace("{{age}}", age)
    .replace("{{gender}}", gender)
    .replace("{{name}}", name)
    .replace("{{toys}}", toys)
    .replace("{{character}}", character)
    ;
};
