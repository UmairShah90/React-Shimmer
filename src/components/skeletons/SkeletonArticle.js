import React from 'react'
import Shimmer from './Shimmer';
import SkeletonsElement from './SkeletonsElement'

const SkeletonArticle = ({theme}) => {
    const themeClass = theme || 'light'; 
    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-article">
             <SkeletonsElement type="title"/>
             <SkeletonsElement type="text"/>
             <SkeletonsElement type="text"/>
             <SkeletonsElement type="text"/>
            </div>
            <Shimmer />
        </div>
    )
}

export default SkeletonArticle
