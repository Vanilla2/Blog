import React from 'react';
/* eslint-disable */
class AddArticle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            author: "",
            content: ""
        }
    }
    handleChange(event, n){
        if (n == 1){
            this.setState({
                title: event.target.value
            })
            return;
        }
        if (n == 2){
            this.setState({
                author: event.target.value
            })
            return;
        }
        this.setState({
            content: event.target.value,
        })
    }
    render(){
        return(
            <div id = {"add"} key = {"add"} className = "article-t">
                <textarea onChange = {() => this.handleChange(event, 1)} value = {this.state.title} className = "article-title" placeholder = "Title"/>
                <textarea onChange = {() => this.handleChange(event, 2)} value = {this.state.author} className = "article-author article-author-t" placeholder = "Author Name"/>
                <textarea onChange = {() => this.handleChange(event, 3)} value = {this.state.content} className = "article-content article-conetent-t" placeholder = "Content"/>
                <button id = "addButton" onClick = {() => this.props.addArticle(this.state)}>Add article</button>
            </div>
        )
    }
}
export default AddArticle;