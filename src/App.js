import React from 'react';
import {Roller} from 'react-spinners-css';
import "./style.css";
import Article from './article'
import AddArticle from './addArticle'


class App extends React.Component{
    constructor(){
        super()
        let mem = this.getCacheData();
        this.state = {
            loaded:false,
            items: mem
        }
        console.log(this.state.empty)
        setTimeout(() =>{
            this.setState({
                loaded: true
            })
        }, 700);
        this.addArticle = this.addArticle.bind(this)
        this.deleteArticle = this.deleteArticle.bind(this)
    }
    getCacheData(){
      let data = localStorage.getItem("items");
      let mem = JSON.parse(data);
      if (mem.length == 0){
        console.log("Created Dummy Articles");
        let item = {
          title: "How To Attract Women",
          author: "Vanilla",
          content: "There’s a lot of advice on attracting women out there. And what most of it misses is that attraction, seduction, intimacy, sex, whatever you want to call it — is an emotional process, not a physical or social one. You can say the “wrong” things and still attract a woman. You can say all of the “right” things and repel her. What matters is the intention, the motivation, the authenticity. To improve your dating life, you must improve your emotional life — how you feel about yourself and others, how you express yourself to others, etc."
        }
        mem = [];
        mem.push(item);
        item = {
          title: "What is Lorem Ipsum",
          author: "Vanilla",
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        mem.push(item);
      }
      return mem;
  }
    isEmpty(item){
        if (item.title == ""){
            return true;
        }
        if (item.content == ""){
            return true;
        }
        if (item.author == ""){
            return true;
        }
        return false;
    }
    addArticle(item){
        console.log(item); 
        item.title = item.title.trim();
        item.author = item.author.trim();
        item.content = item.content.trim();
        if (this.isEmpty(item)){
            return;
        } 
        console.log("called add");
        item.id = Date.now();
        let newItems = this.state.items;
        newItems.push(item)
        this.setState({
            items: newItems,
        })
        localStorage.setItem("items", JSON.stringify(this.state.items));
    }
    deleteArticle(id){
        console.log(id);
        // console.log("called delete");
        let newItems = this.state.items;
        for (let i = 0; i < newItems.length; i++){
            if (newItems[i].id == id){
                newItems.splice(i,1);
                console.log("spliced", i, "-th item");
                console.log(newItems);
                break;
            }
        }
        this.setState({items: newItems});
        localStorage.setItem("items", JSON.stringify(this.state.items));
    }
    createItems(){
        let toShow = this.state.items.map(x => {
            return(
                <Article data = {x} deleteArticle = {this.deleteArticle}/>
            )
        })
        return toShow;
    }
    render(){
        if (!this.state.loaded){
            return(
                <div id = "body">
                    <div className = "title-box">
                        <h1 id = "title">Vanilla's Blog</h1>
                    </div>
                    <div id = "loading-box">
                        <Roller color = "green" size = "300"/>
                    </div>
                </div>
            )
        }
        let toShow = this.createItems();
        return(
            <div id = "body">
                <div className = "title-box">
                    <h1 id = "title">Vanilla's Blog</h1>
                </div>
                <span id = "article-box">
                    {toShow}
                    <AddArticle addArticle = {this.addArticle}/>
                </span>
            </div>
        )
    }
}
export default App;