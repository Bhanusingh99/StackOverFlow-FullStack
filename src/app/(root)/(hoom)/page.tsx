import Link from "next/link";
import LocalSearchBar from "../../../../components/shared/search/LocalSearchBar";
import Filter from "../../../../components/Filter";
import { HomePageFilters } from "../../../../constants/filter";
import HomeFilter from "../../../../components/HomeFilter";
import EmptyHomeShimmer from "../../../../components/questionShimmer";
import QuestionCard from "../../../../components/QuestionCard/QuestionCard";
import { getQuestions } from "../../../../lib/actions/questions.action";


export default async function Home() {
  const result = await getQuestions({})
  console.log(result.question)
  return (
    <>
      <div
        className="flex w-full flex-col-reverse
        justify-between gap-4 sm:flex-row sm:items-center"
      >
        <h1 className="h1-bold text-white">All Questions</h1>
        <Link
          href="/ask-question"
          className="
          flex justify-end max-sm:w-full"
        >
          <button
            className="min-h-[42px] text-[18px]
            purple_btn max-sm:full "
          >
            Ask Question
          </button>
        </Link>
      </div>

      <div className="mt-8 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          routes="/"
          iconsPosition="left"
          iconSrc="/assets/icons/search.svg"
          additionalCss="flex-1"
          placeholder="Search Question"
        />
        <Filter
          filter={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilter />

      <div className="flex flex-col gap-6 mt-10 w-full">
          {result.question.length > 0 ? result.question.map((question) => (
            <QuestionCard 
            key={question._id}
            _id={question._id}
            title={question.title}
            tags={question.tags}
            author={question.author}
            answer={question.answer}
            createdAt={question.createdAt}
            views={question.views}
            upVotes={question.upVotes}
            />
          )) :<EmptyHomeShimmer/>}
      </div>
    </>
  );
}
