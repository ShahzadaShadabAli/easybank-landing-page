import React from 'react'

const ArticleCard = ({author, title, desc, img}) => {
  return (
    <div className="px-4 max-lg:px-2 mt-4 max-md:mt-16">
          <img src={`/images/${img}.jpg`} className="w-full" alt="" />
          <div className="p-[1.8rem] flex flex-col gap-3 bg-white">
            <h6 className="text-sm text-gray-400">By {author}</h6>
              <h1 className="text-[1.3rem] sans-semibold leading-7">
                {title}
            </h1>
            <p className="text-gray-400 sans-semibold text-[16px] leading-6">
              {desc}
            </p>
          </div>
        </div>
  )
}

export default ArticleCard
