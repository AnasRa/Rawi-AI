import { useEffect } from "react";
import { useState } from "react";
import { chatCompletionAPI } from "./services/ChatGPTService";
import { PROMPTS } from "./storyConstents";

export default function NewStory({ callback }: any) {
  const [completion, setCompletion] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [toys, setToys] = useState("");

  useEffect(() => {
    callback(completion.split("\n\n"));
  }, [completion]);
  const callGPT = async (
    age: string,
    gender: string,
    name: string,
    toys: string
  ) => {
    try {
      const response = await chatCompletionAPI(
        PROMPTS.STORY.replace("{{age}}", age)
          .replace("{{gender}}", gender)
          .replace("{{name}}", name)
          .replace("{{toys}}", toys)
      );
      setCompletion(response.content);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnSub = async (event: any) => {
    event.preventDefault();
    await callGPT(age, gender, name, toys);
  };

  return (
    <>
      <div id="newStory">
        <div className="mt-16 p-16">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={handleOnSub}>
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-4 gap-6"></div>
                  <div>
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Character Name
                    </label>
                    <input
                      onChange={(event) => setName(event.target.value)}
                      type="text"
                      name="name"
                      id="name"
                      className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder=" Your Character name"
                    />
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Character's Age
                    </label>
                    <input
                      onChange={(event) => setAge(event.target.value)}
                      type="text"
                      name="age"
                      id="age"
                      className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder=" Your Age: e.g. 7"
                    />
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Character's Gender
                    </label>
                    <input
                      onChange={(event) => setGender(event.target.value)}
                      type="text"
                      name="gender"
                      id="gender"
                      className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder=" Male or Female"
                    />
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Create Your Toy Box
                    </label>
                    <input
                      onChange={(event) => setToys(event.target.value)}
                      type="text"
                      name="toys"
                      id="toys"
                      className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder=" e.g. cars, trucks, rocketship"
                    />
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
