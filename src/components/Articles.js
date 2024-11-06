import React from "react";
import { Link } from "react-router-dom";
const Articles = ({ articles }) => {
  return (
    <>
      {articles.map((article, index) => (
        <div key={index} className='p-4 md:w-1/2'>
          <div className='h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60'>
            <Link to={`/article/${article.name}`}>
              <img
                className='object-cover object-center w-full lg:h-48 md:h-36'
                src={article.thumbnail}
                alt='blog'
              /></Link>
            <div className='p-6'>
              <Link key={index} to={`/article/${article.name}`}>
                <h3 className='mb-3 text-lg font-medium text-gray-900'>{article.title}</h3>
              </Link>
              <p className='mb-3 leading-relaxed'>{article.content[0].substring(0, 110)}...</p>
              <div className='flex flex-wrap item-center'>
                <Link className='inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0'
                  to={`/article/${article.name}`}> <i>Learn more</i> </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )};
export default Articles;