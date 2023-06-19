import React, { useEffect, useState } from 'react';
import LeftNavNews from '../LeftNavNews/LeftNavNews';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/zrakib-dev/dragon-news-server/main/data/categories.json")
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
                        <Link to={`/categories/${category.id}`} className='text-decoration-none text-dark'>{category.name}</Link>
                    </p>)
                }
            </div>
            <LeftNavNews/>
        </div>
    );
};

export default LeftNav;