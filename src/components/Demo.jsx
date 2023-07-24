import React from 'react'
import { useState,useEffect } from 'react'
import { useLazyGetSummaryQuery } from '../services/article';
// import {copy, linkIcon,loader,tick} from '../'
const Demo = () => {
    const [article, setArticle] = useState
    ({url:'',
    summary:''});

    const [allArticles, setAllArticles]=useState([]);
    const handleSubmit  =async(e)=>{
        e.preventDefault();
    const {data}=await getSummary({articleUrl: article.url});
    if(data?.summary){
        const newArticle={...article, summary: data.summary};
        const update=[newArticle,...allArticles];
        setArticle(newArticle);
    setAllArticles(update);
    localStorage.setItem('articles', JSON.stringify(update));
        console.log(newArticle);
    }
      };
const [getSummary, {error, isFetching}]=useLazyGetSummaryQuery();
useEffect(()=>{
    const articleslocal= JSON.parse(localStorage.getItem('articles')
    )
    if(articleslocal){
        setAllArticles(articleslocal)
    }
},[]);
 
  return (
    <section className="mt-16 w-full max-w-xl">
        <div className="flex flex-col w-full gap-2">
            <form className='relative flex justify-center item-center' action=""
            onSubmit={handleSubmit}
            >
                <img src="icons8-link-48.png" alt="linkicon" className='absolute left-0 my-2 ml-3 w-5' />
                <input type="url" 
                placeholder='Enter a url'
                value={article.url}
                onChange={(e)=>setArticle({ ...article, url: e.target.value })}
                required
                className='url_input peer'
                />
                <button type='submit' className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700' 
                
                >→</button>
            </form>
            {/* show the history to the user of the urls they have seen */}

            <div className="flex flex-col gap-0.4 max-h-60 overflow-y-auto">
                {allArticles.map((Item,index)=>(

                    <div key={`link-${index}`}
                    onClick={()=>setArticle(Item)}
                    className='link_card'
                    >
 <div className="copy_btn">
    <img src="copy.svg"
     alt="copy_icon"className='w-[40%] h-[40%] object-contain' />
 </div>
 <p className="flex-1 font-satoshi text-beige-700 font-medium text-sm truncate">
    {Item.url}
 </p>
                    </div>
                   
                ))}
            </div>
        </div>
        {/* display results */}
        <div className="my-10 max-w-full flex justify-center items-center">
            {isFetching?(
                <img src="loader.svg" alt="loader" className='w-20 h-20 object-contain' />
            ): error?(
                <p className='font-inter font-bold text-white text-center '>
                    Well that wasn't supposed to happen...
                    <br />
<span className='font-satoshi font-normal text-gray-700'>
    {error?.data?.error}
    </span>                
</p>
            ):
            (
                article.summary &&(
                    <div className='flex flex-col gap-3 '>
                        <h2 className=' text-white font-satoshi font-bold text-white-600 text-xl '>WebPage <span className='blue_gradient'>Summary</span></h2>
                        <div className="summary_box"><p>{article.summary}</p></div>
                    </div>
                )
            ) 
            }
        </div>
    </section>
  )
}

export default Demo
