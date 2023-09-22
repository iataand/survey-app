import React from "react";

async function getSurveyQuestions() {}

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex justify-between h-8 px-2 text-2xl bg-gray-100">
        <div></div>
        <div>Mock test</div>
        <div>Time Left</div>
      </div>
      {children}
      <footer className="fixed bottom-0 left-0 flex w-full gap-4 px-36">
        <button className="px-6 py-1 text-white bg-orange-500 rounded-2xl">
          Mark for review
        </button>

        <div>
          <button className="px-6 py-1 text-white bg-blue-800 rounded-tl-2xl rounded-bl-2xl min-w-[120px]">
            Previous
          </button>
          <button className="px-6 py-1 ml-2 text-white bg-blue-800 rounded-br-2xl rounded-tr-2xl min-w-[120px]">
            Next
          </button>
        </div>

        <button className="px-6 py-1 text-white bg-green-700 rounded-2xl">
          Submit Test
        </button>
      </footer>
    </div>
  );
}
