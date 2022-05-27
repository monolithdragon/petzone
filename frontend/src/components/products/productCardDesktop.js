import React, { useState } from 'react';
import { Stack } from '@mui/material';
import { Product, ProductActionButton, ProductActionsWrapper, ProductFavButton, ProductImage, ProductAddToCart } from '../../styles/products';
import ProductMeta from './productMeta';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';

const ProductCardDesktop = ({ product, matches }) => {
    const [showOptions, setshowOptions] = useState(false);

    const handleMouseEnter = () => {
        setshowOptions(true);
    };

    const handleMouseLeave = () => {
        setshowOptions(false);
    };

    return (
        <>
            <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <ProductImage src={product.image} />
                {
                    showOptions && <ProductAddToCart show={showOptions} variant='contained'>Add To Cart</ProductAddToCart>
                }
                <ProductActionsWrapper show={showOptions}>
                    <Stack direction={'column'}>
                        <ProductFavButton isFav={0}>
                            <FavoriteIcon />
                        </ProductFavButton>
                        <ProductActionButton>
                            <ShareIcon />
                        </ProductActionButton>
                        <ProductActionButton>
                            <FitScreenIcon />
                        </ProductActionButton>
                    </Stack>
                </ProductActionsWrapper>
            </Product>
            <ProductMeta product={product} matches={matches} />

        </>
    );
};

export default ProductCardDesktop;