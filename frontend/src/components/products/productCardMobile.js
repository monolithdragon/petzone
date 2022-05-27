import React from 'react';
import { Stack } from '@mui/material';
import { Product, ProductActionButton, ProductActionsWrapper, ProductFavButton, ProductImage, ProductAddToCart } from '../../styles/products';
import ProductMeta from './productMeta';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';

const ProductCardMobile = ({ product, matches }) => {
    return (
        <>
            <Product>
                <ProductImage src={product.image} />
                <ProductMeta product={product} matches={matches} />
                <ProductActionsWrapper>
                    <Stack direction={'row'}>
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
            <ProductAddToCart variant='outlined'>Add To Cart</ProductAddToCart>
        </>
    );
};
export default ProductCardMobile;