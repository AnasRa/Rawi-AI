import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import bg from "./assets/bgNew.svg";
import Lottie from "react-lottie";
import endAnimation from "./assets/animation/xx.json";
import Dots from "./components/Dots";

export default function EndPage({ generate, isReady }: any) {
  const [rated, setRated] = useState(false);

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: endAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      id={"end"}
      style={{
        height: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        textAlign: "center",
      }}
    >
      <Flex
      mt={10}
        flexDir="column"
        gap="10"
        h="100vh"
        w="auto"
        // bgImg={backgroungImage}
        // bgSize="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Lottie
          options={animationOptions}
          height={150}
          width={400}
          style={{ borderRadius: "50%" }}
        />
        <h2 className="text-gray-700 text-4xl" style={{ direction: "rtl" }}>
          النهاية
        </h2>

        <Flex flexDir={"column"} gridGap="3" pt="3">
          <h2 className="text-gray-700 text-4xl" style={{ direction: "rtl" }}>
            اعجبتك القصة ؟
          </h2>
          <Flex gridGap={5}>
            <Flex
              color={"#fff"}
              borderRadius="50%"
              h="100px"
              w="100px"
              fontSize="25px"
              lineHeight={"7"}
              justifyContent="center"
              alignItems="center"
              bg="#f41703"
              cursor="pointer"
              onClick={() => {
                setRated(true);
              }}
            >
              ما أعجبتني
            </Flex>
            <Flex
              color={"#fff"}
              borderRadius="50%"
              h="100px"
              w="100px"
              fontSize="25px"
              lineHeight={"7"}
              justifyContent="center"
              alignItems="center"
              bg="#1ABF00"
              cursor="pointer"
              onClick={() => {
                setRated(true);
              }}
            >
              أعجبتني
            </Flex>
          </Flex>
        </Flex>
        {rated ? (
          <>
            <h2 className="text-gray-700 text-4xl" style={{ direction: "rtl" }}>
              شكرا!{" "}
            </h2>
            <Flex
              color={"#fff"}
              borderRadius="50%"
              h="80px"
              w="80px"
              fontSize="15px"
              lineHeight={"7"}
              justifyContent="center"
              alignItems="center"
              bg="#57cbf4"
              cursor="pointer"
              onClick={() => {
                document
                  .getElementById("land")
                  ?.scrollIntoView({ behavior: "smooth" });
                window.location.reload();
              }}
            >
              قصة جديدة
            </Flex>
          </>
        ) : null}
      </Flex>
    </div>
  );
}
