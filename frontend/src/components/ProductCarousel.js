import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import Message from './Message';
import { listTopProducts } from '../actions/productActions';

const ProductCarousel = () => {
    const dispatch = useDispatch();

    const { loading, error, products } = useSelector(state => state.productTopRated);
    useEffect(() => {
        dispatch(listTopProducts());
    }, [dispatch]);

    if (loading) {
        return <Loader />;
    }
    if (error) {
        return <Message variant='danger'>{error}</Message>;
    }

    return<Carousel pause='hover' className='bg-dark'>
        {products.map(product => (
            <Carousel.Item key={product._id}>
                <Link to={`/product/${product._id}`}>
                    <Image src={product.image} alt={product.name} fluid />
                    <Carousel.Caption className='carousel-caption'>
                        <h2>{product.name} (Rs {product.price})</h2>
                    </Carousel.Caption>
                </Link>
            </Carousel.Item>
        ))}
    </Carousel>;
};

export default ProductCarousel;
