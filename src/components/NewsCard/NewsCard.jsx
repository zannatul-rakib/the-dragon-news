import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsBookmark,BsFillShareFill } from "react-icons/bs";
import moment from 'moment';
import { AiFillEye, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Rating from 'react-rating';

const NewsCard = ({ news }) => {
    const { title, image_url, details, author, rating, total_view , _id} = news;
    
    return (
    
            <Card className="my-4">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className="author d-flex">
                    <Image className='img-fluid me-3' style={{ height: "40px" }} src={author.img} roundedCircle />
                    <div>
                        <p>{author.name}</p>
                        <p><small>{moment(author?.published_date).format("DD-MMM-yyyy")}</small></p>
                    </div>
                </div>
                <div className="d-flex">
                    <BsBookmark className='me-2' />
                    <BsFillShareFill/>
                </div>
      </Card.Header>
      <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img className='mb-3' variant="top" src={image_url} />
        <Card.Text>
                    {details.length < 200 ? <>{details}</> : <>{ details.slice(0, 200)}... <Link className='text-warning text-decoration-none' to={`/news-details/${_id}`}>Read More</Link></>}
        </Card.Text>
       
      </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1'>
                    <Rating
                        placeholderRating={rating.number}
                        readonly
                        emptySymbol={<AiOutlineStar className='text-warning'/>}
                        placeholderSymbol={<AiFillStar className='text-warning'/>}
                        fullSymbol={<AiFillStar/>}
                    >    
                    </Rating>
                </div>
                <div>
                    <span><AiFillEye/> { total_view}</span>
                </div>
      </Card.Footer>
    </Card>
        
    );
};

export default NewsCard;