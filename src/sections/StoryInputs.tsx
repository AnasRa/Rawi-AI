import { useState } from "react";
import { ImageCheckboxes } from "../components/CheckboxWithImage";

import bg from "../assets/bg2.svg";
import desertImg from "../assets/toys/desert.png";
import mntnImg from "../assets/toys/mountain.png";
import camel from "../assets/toys/camel.png";
import woodsImg from "../assets/toys/the_woods.png";
import countrysideImg from "../assets/toys/countryside.png";
import citiesImg from "../assets/toys/cities.png";
import islamicImg from "../assets/toys/islamic_age.png";
import romeImg from "../assets/toys/ancient_rome.png";
import funnyImg from "../assets/toys/funny.png";
import scifiImg from "../assets/toys/scifi.png";
import schoolImg from "../assets/toys/school.png";
import hospital from "../assets/toys/hospital.png";
import science from "../assets/toys/science.png";
import scaryImg from "../assets/toys/scary.png";
import castleImg from "../assets/toys/castle.png";
import playgroundImg from "../assets/toys/playground.png";
import parkImg from "../assets/toys/amusement_park.png";
import dragonImg from "../assets/toys/dragon.png";
import superpowerImg from "../assets/toys/superpower.png";
import supercarsImg from "../assets/toys/supercars.png";
import { Button } from "@mantine/core";
import { Flex } from "@chakra-ui/react";

const buttons = [
  {
    title: "صحراء",
    image: `url(${desertImg})`,
  },
  {
    title: "جبال",
    image: `url(${mntnImg})`,
  },
  {
    title: "جمل",
    image: `url(${camel})`,
  },
  {
    title: "الغابة",
    image: `url(${woodsImg})`,
  },
  {
    title: "ضاحية المدينة",
    image: `url(${countrysideImg})`,
  },
  {
    title: "مدن",
    image: `url(${citiesImg})`,
  },
  {
    title: "مضحك",
    image: `url(${funnyImg})`,
  },
  {
    title: "خيال علمي",
    image: `url(${scifiImg})`,
  },
  {
    title: "مدرسة",
    image: `url(${schoolImg})`,
  },
  {
    title: "علوم",
    image: `url(${science})`,
  },
  {
    title: "مخيف",
    image: `url(${scaryImg})`,
  },
  {
    title: "قلعة",
    image: `url(${castleImg})`,
  },
  {
    title: "ساحة لعب",
    image: `url(${playgroundImg})`,
  },
  {
    title: "ملاهي",
    image: `url(${parkImg})`,
  },
  {
    title: "قوى خارقة",
    image: `url(${superpowerImg})`,
  },
  {
    title: "سيارات خارقة",
    image: `url(${supercarsImg})`,
  },
];
export default function StoryInputs(props: any, { onToysUpdated }: any) {
  const [toys, setToys] = useState([]);

  const handleChange = (selections: any) => {
    setToys(selections);
    onToysUpdated(toys);
  };

  return (
    <div className="flex flex-col items-center justify-center pt-8 h-screen">
      <div className="flex flex-row-reverse  justify-around  h-12 w-96 relative border-2 rounded-3xl border-[#FB4E0F]">
        <div className="bg-white flex-grow text-center rounded-3xl">
          <h1
            className="text-xl pt-2 cursor-pointer"
            onClick={() => {
              document
                .getElementById("userForm")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            أسمي
          </h1>
        </div>
        <div className="bg-[#FB4E0F] flex-grow text-center rounded-xl">
          <h1 className="text-white text-xl pt-2 cursor-pointer">اهتماماتي</h1>
        </div>
        <div className="bg-white flex-grow text-center  rounded-xl">
          <h1
            className="text-xl pt-2 cursor-pointer"
            onClick={() => {
              document
                .getElementById("charaForm")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            شخصياتي
          </h1>
        </div>
        <div className="bg-white flex-grow text-center rounded-3xl">
          <h1
            className="text-xl pt-2 cursor-pointer"
            onClick={() => {
              document
                .getElementById("genstory")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            !قصتي
          </h1>
        </div>
      </div>
      <Flex
        p="1"
        h="60%"
        w="40%"
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
        className="flex flex-col justify-center  bg-white drop-shadow-2xl rounded-2xl mt-8 mb-8"
        style={{ height: "100%" }}
      >
        <div className="text-center">
          <h1 className="text-3xl mt-5">اختر اهتماماتك</h1>
        </div>
        <div className="flex-grow flex flex-row-reverse flex-wrap justify-around  h-96  pt-6 overflow-auto ">
          <div>
            <ImageCheckboxes
              onChange={(a: any) => handleChange(a)}
              data={buttons}
            />
          </div>
        </div>
      </Flex>
      <Flex
        className="self-center"
        color={"#fff"}
        borderRadius="20px"
        h="42px"
        w="90px"
        fontSize="22px"
        justifyContent="center"
        alignItems="center"
        bg="#1ABF00"
        mb={5}
        cursor="pointer"
        onClick={() => {
          document
            .getElementById("charaForm")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        التالي
      </Flex>
      {/* <div className="flex flex-col flex-wrap justify-center items-center pt-6 pr-12 pl-12 pb-12 sm:pr-0 sm:pl-0">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl ">
          Pick your toys!
        </h1>
        <h2 className="text-gray-700 text-4xl sm:text-xl pb-5">
          Choose your favorite things to put in your story
        </h2>
        <div className="flex flex-row">
          <ImageCheckboxes
            onChange={(a: any) => handleChange(a)}
            data={buttons}
          />
        </div>
      </div> */}
    </div>
  );
}
