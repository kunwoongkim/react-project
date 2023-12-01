import React, { FC } from 'react';
import ProductDetail from './ProductDetail';
import { Navigate } from 'react-router-dom';
interface props {
    auth: boolean;
}

const priveteRoute: FC<props> = ({ auth }) => {
    return auth ? <ProductDetail /> : <Navigate to='/login' />;
};

export default priveteRoute;
