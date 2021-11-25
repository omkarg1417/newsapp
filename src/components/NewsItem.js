import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {
    render() {
        let defaultImgUrl = 'https://images.news18.com/ibnlive/uploads/2021/11/asteroid-163729559716x9.png';
        let {title, description, imgUrl, newsUrl, author, date, source} = this.props;
        return (
            <div className="card" >

                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex:1}}>
                    {source}
                    <span className="visually-hidden">unread messages</span>
                </span>
                
                <img src={imgUrl ?? defaultImgUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"> <small className="text-muted"> By {author??"unknown"} on {new Date(date).toGMTString()} </small> </p>
                    <a href={newsUrl} target="_blank" className="btn btn-primary">Read more</a>
                </div>
            </div>
        )
    }
}

export default NewsItem
