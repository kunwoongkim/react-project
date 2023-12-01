import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { product } from '../interface/productInterface';
import { Col, Container, Dropdown, Row } from 'react-bootstrap';

const ProductDetail = () => {
    let { id } = useParams();
    const [data, setData] = useState<product>();
    const getProductDetail = async () => {
        const url = `https://my-json-server.typicode.com/kunwoongkim/react-project/products/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
    };

    useEffect(() => {
        getProductDetail();
    }, []);

    return (
        <Container>
            <Row>
                <Col className='product-img'>
                    <img src={data?.img} />
                </Col>
                <Col>
                    <div>{data?.title}</div>
                    <div>{data?.price}</div>
                    <Dropdown>
                        <Dropdown.Toggle variant='success' id='dropdown-basic'>
                            사이즈 선택
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {data?.size.map((item) => (
                                <Dropdown.Item href='#/action-1'>
                                    {item}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;
