import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  //So many hooks, init? Don't be scared, read through the code is quite comprehensive!
  const [charcount, setCharcount] = useState(0);
  const [wordcount, setWordcount] = useState(0);
  const [sentencecount, setSentencecount] = useState(0);
  const [questioncount, setQuestioncount] = useState(0);
  const [exclamationcount, setexclamationcount] = useState(0);
  const [paragraphcount, setParagraphcount] = useState(0);
  const [val, setVal] = useState("");
  const [textColor, setTextColor] = useState("black");

  //setting the data to local storage
  useEffect(() => {
    if (val === "") 
    {
      setWordcount(0)
      setSentencecount(0)
      setQuestioncount(0)
      setexclamationcount(0)
      setParagraphcount(0)
      setVal("")
    }
    if (val !== "") localStorage.setItem("val", JSON.stringify(val));
  }, [val]);

  //getting the data from the local storage
  useEffect(() => {
    const val = JSON.parse(localStorage.getItem("val"));
    setVal(val);
  }, []);

  return (
    <div class="mt-10 mx-8 font-bold text-black">
      <h1 class="text-blue-700 text-2xl">minima</h1>
      <p class="font-light font-sans text-gray-400 text-xs">VERSION 1.0</p>
      <marquee direction="right-to-left" class="text-red-600">
        Let's play! Click on one of the 3 dots to change the color of your text!
      </marquee>

      <div class="h-100vh w-100vh mt-5">
        {/* the color changing buttons */}
        <div class="z-10 -mb-8 pt-2 relative mr-40 float-right sm:float-right lg:float-right">
          <span>
            <button
              onClick={() => setTextColor("black")}
              class="bg-black h-4 w-4 rounded-3xl active:bg-gray-500"
            ></button>
          </span>
          <span>
            <button
              onClick={() => setTextColor("blue")}
              class="bg-blue-700 ml-1 h-4 w-4 rounded-3xl active:bg-gray-500"
            ></button>
          </span>
          <span>
            <button
              onClick={() => setTextColor("red")}
              class="bg-red-600 ml-1 h-4 w-4 rounded-3xl active:bg-gray-500"
            ></button>
          </span>
        </div>
        {/* the text area, or let's just say, it is the message box */}
        <textarea
          style={{ color: textColor }}
          class="z-0 relative rounded-xl p-8 -mt-1 bg-gray-100 h-100vh w-11/12 border-black-500"
          placeholder="Start with Something Nice..."
          onChange={(e) => {
            setVal(e.target.value);
            setCharcount(e.target.value.length);
            setWordcount(e.target.value.split(" ").length);
            setSentencecount(e.target.value.split(".").length);
            setQuestioncount(e.target.value.split("?").length);
            setexclamationcount(e.target.value.split("!").length);
            setParagraphcount(e.target.value.split(/\r?\n|\r/).length);
          }}
          value={val}
        />
      </div>
      {/* the characters, words, sentences, questions, exclamations & paragraphs counters */}
      <div class="mt-5 -ml-8 bg-blue-700 px-4 py-3 sm:flex flex-wrap text-center">
        <span class="block bg-gray-200  bg-opacity-20 text-white font-normal rounded-2xl py-1 px-2.5">
          {charcount} characters
        </span>
        <span class="block bg-gray-200 ml-1.5 mt-2 bg-opacity-20 text-white font-normal rounded-2xl py-1 px-2.5">
          {wordcount} words
        </span>
        <span class="block bg-gray-200 ml-1.5 mt-2 bg-opacity-20 text-white font-normal rounded-2xl py-1 px-2.5">
          {sentencecount} sentences
        </span>
        <span class="block bg-gray-200 ml-1.5 mt-2 bg-opacity-20 text-white font-normal rounded-2xl py-1 px-2.5">
          {questioncount} questions
        </span>
        <span class="block bg-gray-200 ml-1.5 mt-2 bg-opacity-20 text-white font-normal rounded-2xl py-1 px-2.5">
          {exclamationcount} exclamations
        </span>
        <span class="block bg-gray-200 ml-1.5 mt-2 bg-opacity-20 text-white font-normal rounded-2xl py-1 px-2.5">
          {paragraphcount} paragraphs
        </span>
        {/* this button resets all the counters to 0  */}
        <span
          onClick={(e) =>
            setVal(() => "") +
            setCharcount(() => "0") +
            setWordcount(() => "0") +
            setSentencecount(() => "0") +
            setQuestioncount(() => "0") +
            setexclamationcount(() => "0") +
            setParagraphcount(() => "0")
          }
          class="cursor-pointer block bg-red-600 ml-1.5 mt-2 text-white font-normal rounded-2xl py-1 px-2.5"
        >
          Reset all
        </span>
      </div>
    </div>
  );
}
