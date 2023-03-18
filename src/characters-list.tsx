import { useState } from "react";
import { ImageCheckboxes } from "./components/CheckboxWithImage";

import bg from "./assets/bgNew.svg";
import desertImg from "./assets/toys/desert.png";
import mntnImg from "./assets/toys/mountain.png";
import camel from "./assets/toys/camel.png";
import woodsImg from "./assets/toys/the_woods.png";
import countrysideImg from "./assets/toys/countryside.png";
import citiesImg from "./assets/toys/cities.png";
import islamicImg from "./assets/toys/islamic_age.png";
import romeImg from "./assets/toys/ancient_rome.png";
import funnyImg from "./assets/toys/funny.png";
import scifiImg from "./assets/toys/science.png";
import schoolImg from "./assets/toys/school.png";
import hospital from "./assets/toys/hospital.png";
import science from "./assets/toys/science.png";
import scaryImg from "./assets/toys/scary.png";
import castleImg from "./assets/toys/castle.png";
import playgroundImg from "./assets/toys/playground.png";
import parkImg from "./assets/toys/amusement_park.png";
import dragonImg from "./assets/toys/dragon.png";
import superpowerImg from "./assets/toys/superpower.png";
import supercarsImg from "./assets/toys/supercars.png";
import { Button } from "@mantine/core";
import { ImageCheckboxesCharacters } from "./components/CheckboxWithImageCharacters";
import { Flex } from "@chakra-ui/react";

const buttons = [
  {
    title: "أبوي",
    image: `url('https://cdn-icons-png.flaticon.com/512/1662/1662954.png')`,
  },
  {
    title: "أمي",
    image: `url('https://cdn-icons-png.flaticon.com/512/4603/4603161.png')`,
  },
  {
    title: "أخوي الكبير",
    image: `url('https://cdn-icons-png.flaticon.com/512/5125/5125346.png')`,
  },
  {
    title: "أخوي الصغير",
    image: `url('https://cdn-icons-png.flaticon.com/512/2945/2945506.png')`,
  },
  {
    title: "أختي الكبيرة",
    image: `url('https://cdn-icons-png.flaticon.com/512/6813/6813472.png')`,
  },
  {
    title: "أختي الصغيرة",
    image: `url('https://cdn-icons-png.flaticon.com/512/3900/3900431.png')`,
  },
  {
    title: "صديق",
    image: `url('https://cdn-icons-png.flaticon.com/512/4547/4547134.png')`,
  },
  {
    title: "حيواني الأليف",
    image: `url('https://cdn-icons-png.flaticon.com/512/3460/3460473.png')`,
  },
];
export default function CharactersInputs(
  props: any,
  { onCharacterUpdated }: any
) {
  const [character, setcharacter] = useState([]);

  const handleChange = (selections: any) => {
    setcharacter(selections);
    onCharacterUpdated(character);
  };

  return (
    <div className="flex flex-col items-center justify-center pt-8 h-screen bg-[url('./assets/bgNew.svg')]">
      <div className="flex flex-row-reverse  justify-around  h-12 w-96 relative border-2 rounded-3xl bg-white border-[#FB4E0F]">
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
        <div className="bg-white flex-grow text-center rounded-xl">
          <h1
            className="text-xl pt-2 cursor-pointer"
            onClick={() => {
              document
                .getElementById("storyInpot")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            ألعابي
          </h1>
        </div>
        <div className="bg-[#FB4E0F] flex-grow text-center  rounded-xl">
          <h1
            className="text-white pt-2 cursor-pointer"
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
        h="100%"
        w="50%"
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
        className="flex flex-col justify-center  bg-white drop-shadow-2xl rounded-2xl mt-8 mb-8"
      >
        <div className="text-center">
          <h1 className="text-3xl mt-5">اختر أبطال قصتك</h1>
        </div>
        <div className="flex-grow flex flex-row-reverse flex-wrap justify-around  h-96  pt-6 overflow-auto ">
          <div>
            <ImageCheckboxesCharacters
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
            .getElementById("genstory")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        التالي
      </Flex>
    </div>
  );
}
