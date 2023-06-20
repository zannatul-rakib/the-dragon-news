import React from 'react';
import { Card } from 'react-bootstrap';
import { BsArrowLeft } from 'react-icons/bs';
import { Link, useLoaderData } from 'react-router-dom';
import EditorInsights from '../EditorsInsights/EditorInsights';

const NewsDetailsCard = () => {
    const news = useLoaderData();
    console.log(news);
    const { image_url, details, title, category_id } = news;
    return (
        <div>
            <h4 className='mb-3'>News  Details</h4>
            <Card className='p-3'>
        <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>
                    {title}
                </Card.Title>
          <Card.Text className='mb-5'>
           {details}
                </Card.Text>
                <Link to={`/category/${category_id}`} className='btn btn-danger'><BsArrowLeft/> All news in this category</Link>
            </Card.Body>
           
            </Card>
            <div className='mt-5'>
                            <h4>Editors Insight</h4>
                            <EditorInsights/>
                        </div>
        </div>
    );
};

export default NewsDetailsCard;