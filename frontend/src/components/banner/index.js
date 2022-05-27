import React from 'react';
import { Typography } from '@mui/material';
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from '../../styles/banner';

const Banner = () => {
    return (
        <BannerContainer>
            <BannerImage src='/images/banner/banner.png'/>
            <BannerContent>
                <Typography variant='h6'>
                    Huge Collection
                </Typography>
                <BannerTitle variant='h2'>
                    PETZONE
                </BannerTitle>
                <BannerDescription variant='subtitle'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Qui tempora perferendis necessitatibus dolor in ducimus a, 
                    ab cupiditate nihil architecto delectus, 
                    tempore veniam hic dicta mollitia minus doloribus odit sed voluptates eos omnis deleniti. 
                    Sed laboriosam ad nostrum veritatis fugit repellat illo in dolorem maxime amet, 
                    atque officia doloremque et, ab nemo quod incidunt dolorum facere labore debitis velit blanditiis?
                </BannerDescription>
                <BannerShopButton color='primary'>
                    Show Now
                </BannerShopButton>
            </BannerContent>
        </BannerContainer>
    );
};

export default Banner;