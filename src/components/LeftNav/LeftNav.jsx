import React, { useEffect, useState } from 'react';
import LeftNavNews from '../LeftNavNews/LeftNavNews';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://dragon-news-server-zrakib-dev.vercel.app/categories")
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error));
    }, [])
    
    return (
        <div>
            <h5>All Category</h5>
            <div className='my-3 mb-5 ps-3'>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`} className='text-decoration-none text-dark'>{category.name}</Link>
                    </p>)
                }
            </div>
            <LeftNavNews/>
        </div>
    );
};

export default LeftNav;