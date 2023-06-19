import React from 'react';
import { Card } from 'react-bootstrap';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const NewsDetailsCard = ({ news }) => {
    const { image_url, details, title, category_id } = news;
    return (
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
    );
};

export default NewsDetailsCard;