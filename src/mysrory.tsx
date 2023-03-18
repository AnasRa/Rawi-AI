import { useState } from "react";
import { callDaleAPI } from "./services/ChatGPTService";
import { useEffect } from "react";
import bg from "./assets/bgNew.svg";
import { Flex } from "@chakra-ui/react";

export default function MyStory({
  completion,
  title,
  genre,
  toDalle,
  pageNumber,
  lastPage,
}: any) {
  const [imagecompletion, setImageCompletion] = useState("");

  useEffect(() => {
    callDALE();
  }, [toDalle]);

  const callDALE = async () => {
    try {
      const response = await callDaleAPI(toDalle);
      setImageCompletion(response.data.data[0].url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div
            className="place-content-center flex-col pt-11"
            style={{
              display: "flex",
              justifyContent: "center",
              height: "100vh",
            }}
          >
            <p
              className="mt-6 text-5xl text-gray-700 "
              style={{ direction: "rtl" }}
            >
              {completion}
            </p>
            <div
              style={{
                display: "flex",
                alignSelf: "end",
                paddingTop: 10,
                justifySelf: "end",
              }}
            >
              {pageNumber - 1 >= 0 ? (
                <Flex
                  color={"#fff"}
                  borderRadius="50%"
                  h="100px"
                  w="100px"
                  fontSize="32px"
                  lineHeight={"7"}
                  justifyContent="center"
                  alignItems="center"
                  bg="#57cbf4"
                  cursor="pointer"
                  marginEnd={2}
                  onClick={() => {
                    document
                      .getElementById("story-" + (pageNumber - 1))
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  السابق
                </Flex>
              ) : null}
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
                  lastPage
                    ? document
                        .getElementById("end")
                        ?.scrollIntoView({ behavior: "smooth" })
                    : document
                        .getElementById("story-" + (pageNumber + 1))
                        ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                التالي
              </Flex>
            </div>
          </div>
        </div>
        <div className="pr-16 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <img
            className=" w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={
              imagecompletion !== null
                ? imagecompletion
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHN8VZBh3H-DJG7Cp3kfbRDnd7UF932qrhJMVqjA7uJw&s"
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
