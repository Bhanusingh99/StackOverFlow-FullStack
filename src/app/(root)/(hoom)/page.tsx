import Link from "next/link";
import LocalSearchBar from "../../../../components/shared/search/LocalSearchBar";
import Filter from "../../../../components/Filter";
import { HomePageFilters } from "../../../../constants/filter";
import HomeFilter from "../../../../components/HomeFilter";
import EmptyHomeShimmer from "../../../../components/questionShimmer";
import QuestionCard from "../../../../components/QuestionCard/QuestionCard";

const Questions = [
  {
    title: "How to build a responsive website using CSS",
    _id: 1,
    author: {
      _id: "author1",
      name: "Jane Smith",
      picture: "jane-smith-avatar.jpg",
    },
    tags: [
      { id: "1", tagName: "CSS" },
      { id: "2", tagName: "Web Development" },
    ],
    upVotes: 85,
    views: 45000,
    answer: Array.from({ length: 12 }, (_, index) => ({ id: index + 1, content: `Answer ${index + 1}` })),
    createdAt: new Date('2022-01-20T10:15:00.000Z'),
  },
  {
    title: "Introduction to Mobile App Development with React Native",
    _id: 2,
    author: {
      _id: "author2",
      name: "Michael Johnson",
      picture: "michael-johnson-avatar.jpg",
    },
    tags: [
      { id: "3", tagName: "React Native" },
      { id: "4", tagName: "Mobile Development" },
    ],
    upVotes: 120,
    views: 60000,
    answer: Array.from({ length: 8 }, (_, index) => ({ id: index + 1, content: `Answer ${index + 1}` })),
    createdAt: new Date('2022-02-05T15:30:00.000Z'),
  },
  {
    title: "Creating a RESTful API with Node.js and Express",
    _id: 3,
    author: {
      _id: "author3",
      name: "Alex Thompson",
      picture: "alex-thompson-avatar.jpg",
    },
    tags: [
      { id: "5", tagName: "Node.js" },
      { id: "6", tagName: "Express" },
    ],
    upVotes: 95,
    views: 55000,
    answer: Array.from({ length: 10 }, (_, index) => ({ id: index + 1, content: `Answer ${index + 1}` })),
    createdAt: new Date('2022-03-10T18:45:00.000Z'),
  },
  {
    title: "Best Practices for Responsive Design",
    _id: 4,
    author: {
      _id: "author4",
      name: "Chris Williams",
      picture: "chris-williams-avatar.jpg",
    },
    tags: [
      { id: "7", tagName: "Web Design" },
      { id: "8", tagName: "Responsive Design" },
    ],
    upVotes: 150,
    views: 80000,
    answer: Array.from({ length: 15 }, (_, index) => ({ id: index + 1, content: `Answer ${index + 1}` })),
    createdAt: new Date('2022-04-25T12:00:00.000Z'),
  },
  {
    title: "Getting Started with TypeScript in a React Project ",
    _id: 5,
    author: {
      _id: "author5",
      name: "Emily Davis",
      picture: "emily-davis-avatar.jpg",
    },
    tags: [
      { id: "9", tagName: "TypeScript" },
      { id: "10", tagName: "React" },
    ],
    upVotes: 110,
    views: 70000,
    answer: Array.from({ length: 18 }, (_, index) => ({ id: index + 1, content: `Answer ${index + 1}` })),
    createdAt: new Date('2022-05-15T09:15:00.000Z'),
  }
];


export default function Home() {
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
          {Questions.length > 0 ? Questions.map((question) => (
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
