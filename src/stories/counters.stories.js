import React from 'react';
import Counter from '../Components/Counter';


export default {
    title: 'Counter',
    component: Counter
}

export const defaultCounter = () => (
    <Counter />
)

export const CounerStartWith10 = () => (
    <Counter initialValue={10} />
)