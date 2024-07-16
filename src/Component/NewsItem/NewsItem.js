import React, { Component } from 'react'
import './NewsItem.css'

export class NewsItem extends Component {
  render() {
    let {title,description, imgUrl,url, author, date}=this.props;

    return (
      <div>
        <div className="card container-card">
            <img src={imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {author?author:"Anonymous"} on {new Date(date).toGMTString()}</small></p>
                <a rel={"noreferrer"} href={url} target='_blank' className="btn btn-dark">Read more</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem