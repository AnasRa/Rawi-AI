import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Input,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
  Tooltip,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import backgroungImage from "./assets/Rings_5.svg";

export default function UserForm(props: any) {
  const { name, setName, gender, setGender } = props;

  const [showTooltip, setShowTooltip] = useState(false);

  const onChangeName = (e: any) => {
    setName(e.target.value);
  };

  const options = ["ولد", "بنت"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    // name: "gender",
    defaultValue: "ولد",
    onChange: setGender,
  });

  const group = getRootProps();

  return (
    <Flex
      flexDir="column"
      gap="20"
      h="100vh"
      w="100vw"
      // bgImg={backgroungImage}
      // bgRepeat="repeat"
      // bgSize="100%"
      justifyContent="center"
      alignItems="center"
    >
      <div className="flex flex-row-reverse  justify-around  h-12 w-96 relative border-2 rounded-3xl border-[#FB4E0F]">
        <div className="bg-[#FB4E0F] flex-grow text-center rounded-3xl">
          <h1
            className="text-white text-xl pt-2 cursor-pointer"
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
            اهتماماتي
          </h1>
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
        // className="h-64 w-96 flex-col justify-center border rounded-lg"
        flexDir="column"
        justifyContent="center"
        // alignItems="center"
        h="30%"
        w="25%"
        borderRadius="20px"
        bg="#fff"
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
        px="10"
        gridGap={2}
      >
        {/* <Heading>Title</Heading> */}
        {/* name input */}
        <Flex flexDir="column" gridGap={2}>
          <Text className="text-center text-xl" as="b">
            وش أسمك؟
          </Text>
          <Input
            className="text-right"
            placeholder="الأسم"
            _active={{
              border: "1px solid #b83280",
              boxShadow: "none",
              outline: "none",
            }}
            _focus={{
              border: "1px solid #FB4E0F",
              boxShadow: "none",
              outline: "none",
            }}
            onChange={(e) => onChangeName(e)}
            value={name}
          />
        </Flex>

        {/* radio */}
        <Flex className="items-center justify-center" gridGap={2}>
          {/* <Text pl="1" as="b">
            Gender
          </Text> */}
          <HStack {...group}>
            {options.map((value) => {
              const radio = getRadioProps({ value });
              return (
                <RadioCard key={value} {...radio} gender={gender}>
                  {value}
                </RadioCard>
              );
            })}
          </HStack>
        </Flex>

        {/* slider */}
        {/* <Flex flexDir="column" gridGap={2}>
          <Text pl="1" as="b">
            Age
          </Text>
          <Slider
            id="slider"
            defaultValue={5}
            min={0}
            max={26}
            colorScheme="pink"
            onChange={(v) => setSliderValue(v)}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <SliderMark value={0} mt="1" mr="-2.5" fontSize="sm">
              0
            </SliderMark>
            <SliderMark value={5} mt="1" mr="-2.5" fontSize="sm">
              5
            </SliderMark>
            <SliderMark value={10} mt="1" mr="-2.5" fontSize="sm">
              10
            </SliderMark>
            <SliderMark value={15} mt="1" mr="-2.5" fontSize="sm">
              15
            </SliderMark>
            <SliderMark value={20} mt="1" mr="-2.5" fontSize="sm">
              20
            </SliderMark>
            <SliderMark value={25} mt="1" fontSize="sm">
              25
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <Tooltip
              hasArrow
              bg="pink.500"
              color="white"
              placement="top"
              isOpen={showTooltip}
              label={`${sliderValue} years old`}
            >
              <SliderThumb />
            </Tooltip>
          </Slider>
        </Flex> */}

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
          mt="4"
          cursor="pointer"
          onClick={() => {
            document
              .getElementById("storyInpot")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          التالي
        </Flex>
      </Flex>
    </Flex>
  );
}

function RadioCard(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const { gender } = props;

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box className="pt-3" as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: gender == "ولد" ? "#02909B" : "#F41703",
          color: "white",
          //   borderColor: "#F41703",
        }}
        _focus={{
          boxShadow: "none",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}
