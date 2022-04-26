import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">

        <div className="card">
          <div style={{
            display:'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right:'0',}
          }>
        <span className="badge rounded-pill bg-danger">
                {source}
            </span>
            </div>
          <img
            className="card-img-top"
            src={
              !imageUrl
                ? "https://images.macrumors.com/t/Na1KT6ZUZ402z20lx-3rQR8aoh0=/1600x/article-new/2022/01/Apple-Watch-Series-7-Rainbow-Cropped-Blue-Discount.jpg"
                : imageUrl
            }
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
