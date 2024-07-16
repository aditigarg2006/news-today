import React, { Component } from 'react'
import NewsItem from './NewsItem/NewsItem'
import './News.css'
import Loading from './Loading';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
      loading: false,
      page:1,
      totalResults:0
    };
   }
   async update(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=17a0fa6d733e49b2afba9ef9bdce9226&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading: true})
    let data= await fetch(url)
    let parseData= await data.json()
    this.setState({
      article: parseData.articles, 
      totalResults: parseData.totalResults,
      loading: false,
    })
   }
   async componentDidMount(){
    this.update()
   }
   handleNextClick=async ()=>{
    this.setState({
      page: this.state.page +1
    }, ()=>{
      this.update()
    })
   }
   handlePrevClick=async ()=>{
    this.setState({
      page: this.state.page -1
    }, ()=>{
    this.update()
    })
  }
   
  render() {
    return (
      <div className='container my-3'>
        <div className='heading'><h3>Daily Feed- Todays News</h3></div>
        {this.state.loading && <Loading/>}
        <div className='row'>
          {!this.state.loading && this.state.article.map((element)=>{
          return <div className='col-md-4' key={element.url}>
            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imgUrl={element.urlToImage?element.urlToImage:""} url={element.url?element.url:""} 
            author={element.author} date={element.publishedAt}/>
          </div>
          })}
        </div>
        <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/15)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>

      </div>
    )
  }
}

export default News