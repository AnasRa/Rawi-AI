import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import bg from "../assets/bgNew.svg";
import Lottie from "react-lottie";
import loadingAnimation from "../assets/animation/loading.json";
import Dots from "../components/Dots";

export default function GenerateStory({ generate, isReady }: any) {
  const [started, setStarted] = useState(false);

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      id={"genstory"}
      style={{
        height: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        textAlign: "center",
      }}
    >
      <Flex
        flexDir="column"
        gap="20"
        h="100vh"
        w="auto"
        // bgImg={backgroungImage}
        // bgSize="100%"
        justifyContent="center"
        alignItems="center"
      >
        {isReady ? (
          <>
            <h2
              className="text-gray-700 text-8xl pt-4"
              style={{ direction: "rtl" }}
            >
              قصتك جاهزة!
            </h2>
            <Flex
              color={"#fff"}
              borderRadius="50%"
              h="100px"
              w="100px"
              fontSize="32px"
              lineHeight={"7"}
              justifyContent="center"
              alignItems="center"
              bg="#1ABF00"
              cursor="pointer"
              onClick={() => {
                document
                  .getElementById("story-0")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              ابدأ القصة
            </Flex>
          </>
        ) : (
          <>
            {started ? (
              <>
                <Lottie
                  options={animationOptions}
                  height={400}
                  width={400}
                  style={{ borderRadius: "50%" }}
                />
                <h2
                  className="text-gray-700 text-4xl"
                  style={{ direction: "rtl" }}
                >
                  <Dots>قاعدين نكتب قصتك</Dots>
                </h2>
              </>
            ) : (
              <>
                <Flex
                  color={"#fff"}
                  borderRadius="50%"
                  h="100px"
                  w="100px"
                  fontSize="32px"
                  lineHeight={"7"}
                  justifyContent="center"
                  alignItems="center"
                  bg="#1ABF00"
                  cursor="pointer"
                  onClick={() => {
                    generate();
                    setStarted(true);
                  }}
                >
                  أكتب القصة
                </Flex>
              </>
            )}
          </>
        )}
      </Flex>
    </div>
  );
}
