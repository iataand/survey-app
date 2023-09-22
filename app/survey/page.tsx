import { getSurveyByName } from "@/api/pocketbase";

export default async function SurveyPage() {
  const surveyQuestions = await getSurveyByName("test");

  return <div>SurveyPage</div>;
}
