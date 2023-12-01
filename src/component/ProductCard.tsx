import React, { FC } from 'react';
import { product } from '../interface/productInterface';
import { useNavigate } from 'react-router-dom';

const ProductCard: FC<product> = ({
    id,
    img,
    choice,
    title,
    price,
    newItem,
}) => {
    const navigate = useNavigate();
    const showDetail = () => {
        navigate(`/product/${id}`);
    };

    return (
        <div className='card' onClick={showDetail}>
            <img src={img} />
            <div>{choice && 'Conscious choice'}</div>
            <div>{title}</div>
            <div>{price}</div>
            <div>{newItem && '신제품'}</div>
        </div>
    );
};

export default ProductCard;
