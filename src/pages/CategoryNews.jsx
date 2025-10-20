import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {

    const {id} = useParams();
    const data = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([]);

    useEffect(() => {

        if(id == '0') {
            setCategoryNews(data);
            return;
        }else if (id == '1') {
            const filteredNews = data.filter(news => news.others.is_today_pick == true);
            setCategoryNews(filteredNews);
        }else {
            const filteredNews = data.filter(news => news.category_id == id);

            setCategoryNews(filteredNews);
        }

    }, [id, data]);

    return (
        <div className='grid grid-cols-1 gap-5'>
            {
                categoryNews.map((news, index) => (
                    <NewsCard key={index} news={news}></NewsCard>
                ))
            }
        </div>
    );
};

export default CategoryNews;