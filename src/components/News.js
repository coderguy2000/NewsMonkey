import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner.js";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 20,
    };
  }
  fetchMoreData = async () => {
    let data = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.page+1}&apiKey=bc1bb03e033a4996b3170f3fec35df7c&pageSize=${this.props.pageSize}`
      );
      let parseData = await data.json();
      this.setState({
            articles : this.state.articles.concat(parseData.articles),
            totalResults: parseData.totalResults,
            loading: false,
            page:this.state.page+1,
      });
      console.log(parseData.totalResults)
  };
  async componentDidMount() {
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&apiKey=bc1bb03e033a4996b3170f3fec35df7c&pageSize=${this.props.pageSize}`
    );
    let parseData = await data.json();

    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  render() {
    return (
      <>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >

        <div className="container">
        <div className="row">
          {this.state.articles.map((obj, index) => {
            return (
              <div className="col-md-4" key={index}>
                <NewsItem
                  title={obj.title}
                  description={obj.description}
                  imageUrl={obj.urlToImage}
                  newsUrl={obj.url}
                />
              </div>
            );
          })}
        </div>
        </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
