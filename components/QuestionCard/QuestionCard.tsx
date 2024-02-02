import Link from 'next/link';
import React from 'react'
import RenderTag from '../RenderTag';
import Matric from '../shared/Matric';

interface Props {
    title: string;
    _id: number;
    author: {
        _id:String,
        name:String,
        picture:String
    };
    tags: {
      id: String;
      tagName: string;
    }[];
    upVotes: number;
    views: number;
    answer: Array<object>;
    createdAt: Date;
  }
const QuestionCard = ({_id,title,tags,author,answer,createdAt,views,upVotes}:Props) => {
  return (
    <div className='background_dark300 rounded-[10px] p-9 sm:px-11'>
      <div className='flex flex-col-reverse items-start justify-between gap-5 sm:flex-row'>
          <div>
            <span className='text-white line-clamp-1 sm:hidden'>
              {String(createdAt)}
            </span>
            <Link href={`/question/${_id}`} className='h3-bold text-white line-clamp-1 flex-1'>
              {title}
            </Link>
          </div>
      </div>
      <div className='mt-3.5 flex flex-wrap gap-3'>
          {
            tags.map((tag) =>(
              <RenderTag 
                name={tag.tagName}
                id={tag.id}
                key={tag.tagName}
              />
            ))
          }
      </div>
      <div className='flex-between mt-6 w-full flex-wrap gap-3'> 
           <Matric
            imageUrl="/assets/icons/avatar.svg"
            alt="user"
            value={author.name}
            href={`/profile/${author._id}`}
            isAuthor
            title="-asked 1 hour ago"
            textStyle=""
            />

            
            <Matric
            imageUrl="/assets/icons/like.svg"
            alt="Search"
            value={upVotes}
            title="Like"
            textStyle=""
            />
            <Matric
            imageUrl="/assets/icons/message.svg"
            alt="answers"
            value={answer.length}
            title="answer"
            textStyle=""
            />
            <Matric
            imageUrl="/assets/icons/eye.svg"
            alt="views"
            value={views}
            title="views"
            textStyle=""
            />
      </div>
    </div>
  )
}

export default QuestionCard