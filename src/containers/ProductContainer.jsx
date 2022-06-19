import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ReactLoading from 'react-loading';
import useGetProducts from '@hooks/useGetProducts';
import ProductItem from '@components/ProductItem';
import '@styles/product-container.scss';
import colors from '@constants/colors';

const API = 'https://api.escuelajs.co/api/v1';

const ProductContainer = () => {
  const { category } = useParams();
  const products = useGetProducts(`${API}${category ? `/categories/${category}/products?Limit=100&offset=100` : '/products'}`);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setLoading(loading => !loading);
    }
    loadData();
  }, []);

  if (loading) {
    return <ReactLoading className='react-loader' type="spin" color={colors.main} height={50} width={50} />
  } else {
    return (
      <div className='product-container'>
        <div className='product-wrapper'>
          {products.map((product) => (
            <ProductItem key={product.id} product={product}/>
          ))}
        </div>
      </div>
    )
  }
}

export default ProductContainer;