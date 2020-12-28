import React from 'react';
import Text from '../Components/text';

export default {
    title: "Text",
    component: Text
}

export const TextLg = () => (
    <Text value={"Text Large"}
        style={{fontSize:"32px" }} />
)


export const TextMd = () => (
    <Text value={"Text Medium"}
        style={{ fontSize:"22px" }}/>
)

export const TextSM = () => (
    <Text value={"Text Small"}
        style={{ fontSize:"12px"}}
       />
)