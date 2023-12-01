import React, { FC, useEffect, useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { product } from './../interface/productInterface';
import { useParams, useSearchParams } from 'react-router-dom';

const ProductAll = () => {
    const [data, setData] = useState<product[]>([]);
    const [query, setQuery] = useSearchParams();

    const getProduct = async () => {
        let search = query.get('q') || '';
        let url = `https://my-json-server.typicode.com/kunwoongkim/react-project/products?q=${search}`;
        let response = await fetch(url);
        let data = await response.json();
        setData(data);
    };
    useEffect(() => {
        getProduct();
    }, [query]);
    return (
        <div>
            <Container>
                <Row>
                    {data.map((item: product) => (
                        <Col lg={3}>
                            <ProductCard {...item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ProductAll;
