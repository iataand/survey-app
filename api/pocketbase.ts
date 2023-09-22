import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

export const getSurveyByName = async (name: string) => {
  const survey = await pb
    .collection("surveys")
    .getFirstListItem(`name="${name}"`, { fields: "questions" });

  console.log(survey, "asd=================================");
  return survey;
};
