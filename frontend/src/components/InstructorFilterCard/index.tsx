import React, { FC } from 'react';
import './index.scss';
import { useHistory, Link } from 'react-router-dom';
import { Button } from '..';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { StarIcon } from '@chakra-ui/icons';

interface IDefaultProps{
    image: string,
    rate: number,
    name: string,
    job: string,
    slug: string,
    price: number,
    totalLesson: number,
    comment: number,
    status: number
}

const Index : FC<IDefaultProps> = (props : IDefaultProps) => {
    const { image, name, job, slug, rate, price, totalLesson, comment, status } = props;
    const history = useHistory();

    return (
        <div className='teacher-filter-card' onClick={()=>history.push(slug)}>
            <div className='image-container'>
                <img src={image} alt='teacher'/>
                <div className='rate text-center'>
                    <small>
                        {Array(5)
                            .fill('')
                            .map((_, i) => (
                            <StarIcon
                                key={i}
                                color={i+1 <= rate ? 'yellow.400' : 'gray.300'}
                            />
                            ))}
                    </small>
                </div>
                <span className={`status status-${status}`}></span>
            </div>
            <div className='info-container'>
                <div className='text-container'>
                    <p className='filter-card-name'>{name}</p>
                    <small className='filter-card-job text-muted'>{job}</small>
                </div>
                <div className='numeric-container'>
                    <div className='item'>
                        <p className='item-number'>{totalLesson}</p>
                        <p className='item-text'>Ders</p>
                    </div>
                    <div className='item'>
                        <p className='item-number'>{comment}</p>
                        <p className='item-text'>Yorum</p>
                    </div>
                    <div className='item'>
                        <p className='item-number'>{price} TL</p>
                        <p className='item-text'>Ücret</p>
                    </div>
                </div>
                <Button as={Link} to={`/teacher/${name}`} text='Profil' size='sm' rightIcon={<AiOutlineArrowRight />} className='detail-button d-lg-block d-none text-right' />
            </div>
        </div>
    );
};

export default Index;