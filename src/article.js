import React from 'react';
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* eslint-disable */
function Article(props){
    return(
        <div id = {props.data.id} key = {props.data.id} className = "article">
            <p className = "article-title">
                {props.data.title}
            </p> 
            <FontAwesomeIcon className = {"delete"} onClick = {() => props.deleteArticle(props.data.id)} icon={faTimesCircle} />
            <p className = "article-author">
                {props.data.author}
            </p>
            <p className = "article-content ">
                {props.data.content}
            </p>
        </div>
    )
};
export default Article