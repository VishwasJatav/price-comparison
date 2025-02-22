import React from 'react';
import { useParams } from 'react-router-dom';
import {FaStar, FaAmazon } from 'react-icons/fa';
import {SiFlipkart} from 'react-icons/si';
import {mockData} from '../mockData';

function ProductDetails() {
    const {productId} = useParams();
    const product = mockData.find((p) => p.id === parseInt(productId));
    
}