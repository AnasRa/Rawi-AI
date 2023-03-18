import { useEffect, useState } from "react";
import Home from "./home";
import LandingPage from "./landingPage";
import MyStory from "./mysrory";
import NewStory from "./newstory";
import StoryInputs from "./sections/StoryInputs";
import UserForm from "./userForm";
import backgroungImage from "./assets/bgNew.svg";
import { Button } from "@mantine/core";
import { chatCompletionAPI, translateAPI } from "./services/ChatGPTService";
import { storyBuilder } from "./utils/storyBuilder";
import GenerateStory from "./sections/GenerateStory";
import CharactersInputs from "./characters-list";
import EndPage from "./endPage";

export default function App() {
  const [toys, setToys] = useState([]);
  const [character, setcharacter] = useState([]);
  const [name, setName] = useState("");
  const [sliderValue, setSliderValue] = useState(5);
  const [gender, setGender] = useState("ولد");
  const [completion, setCompletion] = useState<any>([]);
  const [translatedParagraphs, setTranslatedParagraphs] = useState<string[]>(
    []
  );
  const [showStory, setShowStory] = useState(false);
  const handleCharacters = (character: any) => {
    setcharacter(character);
  };
  const handleToys = (toys: any) => {
    setToys(toys);
  };

  const generate = async () => {
    try {
      const response = await chatCompletionAPI(
        storyBuilder(name, gender, sliderValue + "", toys, character)
      );

      setCompletion(response.content.split("\n\n").filter((i) => i));
    } catch (error) {
      console.error(error);
    }
  };

  const teanslateParagraphs = async (completion: string[]) => {
    let list = [];
    for (const comp of completion) {
      if (comp.length != 0) {
        const translated = await translateAPI(
          `Translate the following paragraph to Arabic,and make absolutely sure to use Arabic diacritics or Harakat:\n${comp}`
        );
        list.push(translated.content);
      }
    }
    return list;
  };

  useEffect(() => {
    const func = async (comp: any) => {
      try {
        const translatedList = await teanslateParagraphs(comp);
        console.log("comp", comp);
        console.log("translated", translatedList);
        setTranslatedParagraphs(translatedList);
      } catch (error) {
        console.error(error);
      }
    };
    if (completion.length > 0) {
      func(completion);
    }
  }, [completion]);

  useEffect(() => {
    console.log("showStory", showStory);
    console.log("completion.length", completion.length);
    console.log("translatedParagraphs.length", translatedParagraphs.length);
    console.log("completion", completion);
    console.log("translatedParagraphs", translatedParagraphs);
    console.log(
      "completion.length === translatedParagraphs.length",
      completion.length === translatedParagraphs.length
    );
    if (
      completion.length != 0 &&
      completion.length === translatedParagraphs.length
    )
      setShowStory(true);
  }, [translatedParagraphs, setTranslatedParagraphs]);

  return (
    // className="snap-y snap-mandatory h-screen w-full mx-auto overflow-scroll absolute"
    <div className="h-screen  snap-y snap-mandatory mx-auto overflow-scroll absolute">
      <div className="flex-auto h-screen snap-start  bg-[#FE9C17]  bg-[url('./assets/bgNew.svg')] bg-cover">
        <LandingPage />
      </div>
      <div
        className="flex-auto h-screen snap-always snap-start bg-[url('./assets/bgNew.svg')] bg-cover"
        id="userForm"
      >
        <UserForm
          name={name}
          setName={setName}
          sliderValue={sliderValue}
          setSliderValue={setSliderValue}
          gender={gender}
          setGender={setGender}
          translatedParagraphs={translatedParagraphs}
        />
      </div>
      <div
        className="flex-auto h-screen snap-always snap-start bg-[url('./assets/bgNew.svg')] bg-cover"
        id="storyInpot"
      >
        <StoryInputs
          onToysUpdated={handleToys}
          translatedParagraphs={translatedParagraphs}
        />
      </div>
      <div className="snap-center snap-always h-full" id="charaForm">
        <CharactersInputs
          ononCharacterUpdated={handleCharacters}
          translatedParagraphs={translatedParagraphs}
        />
      </div>
      <div className="snap-center snap-always h-full" id="generateStory">
        <GenerateStory generate={generate} isReady={showStory} />
      </div>
      <div>
        {showStory
          ? translatedParagraphs.map((para: string, index: number) => {
              const page = "story-" + index;
              console.log("page", page);

              if (!para.toLowerCase().includes("the end"))
                return (
                  <div id={page} className="snap-center snap-always h-full">
                    <MyStory
                      completion={para}
                      toDalle={completion[translatedParagraphs.indexOf(para)]}
                      pageNumber={index}
                      lastPage={index === translatedParagraphs.length - 1}
                    />
                  </div>
                );
            })
          : null}
      </div>
      {showStory ? (
        <div className="snap-center snap-always h-full">
          <EndPage generate={generate} isReady={showStory} />
        </div>
      ) : null}
    </div>
  );
}
