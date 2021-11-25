import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component'; 

export class News extends Component {
    static defaultProps = {
        country:'in',
        pageSize:9,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    constructor(props) {
        super(props);
        console.log("News constructor call");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults:0,
        }
        document.title= `${this.capitalizeFirstLetter(this.props.category)} - NewsApp`
    }

    
    async updateNews() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.props.setProgress(10);
        this.setState({loading: true});
        let data = await fetch(url).then(res => res.json());
        
        this.setState({
            loading:false,
            articles: this.state.articles.concat(data.articles),
            totalResults:data.totalResults,
        })
        this.props.setProgress(100);
        
    }
    
    
    async componentDidMount() {
        // let url = 'https://dog.ceo/api/breeds/image/random';
        this.updateNews();    
    }

    handlePrevClick = async () => {
        this.setState({
            page: this.state.page-1
        })
        this.updateNews();
    }
    
    handleNextClick = async () => {
        this.setState({
            page: this.state.page+1
        })
        this.updateNews();
    }

    fetchMore = async ()=> {
        this.setState({
            page: this.state.page + 1,
        })
        this.updateNews();
    }

    render() { 
        return (
            <>
                <h2 className="text-center" style={{margin: '1rem', 'margin-top':'2rem'}}>NewsApp - Top headlines</h2>
                <h4 className="text-center my-2"> --- {this.capitalizeFirstLetter(this.props.category)} --- </h4>
                {this.state.loading && <Spinner/>}

                <InfiniteScroll 
                    dataLength = {this.state.articles.length}
                    next = {this.fetchMore}
                    hasMore = {this.state.articles.length !== this.state.totalResults}
                    loader = {<Spinner/>}
                    
                 >
                <div className="container py-3">
                <div className="row">
                    {this.state.articles.map((element)=> {
                        return <div className="col-md-4" key = {element.url}>    
                            <NewsItem title = {element.title?element.title:''} description = {element.description?element.description:''} imgUrl = {element.urlToImage} newsUrl = {element.url} author = {element.author} date = {element.publishedAt} source = {element.source.name}/>
                        </div>
                    })}
                </div>
                </div>
                </InfiniteScroll>
                
                
            
            </>
        )
    }
}

export default News
