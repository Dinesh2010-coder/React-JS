import React from 'react'

const NewsItem = (props) => {
    let {title, description, imgUrl, newsUrl, author, date, source} = props;
    return (
      <div className='my-3'>
        <div className="card">
        <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
        <span className="badge rounded-pill bg-primary" >{source}</span>
        </div>
          <img src={imgUrl?imgUrl:"https://bdc2020.o0bc.com/wp-content/uploads/2025/01/bird-flu-679ac08a72f54-768x432.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...  </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author? "Unknown" : author} on {new Date(date).toUTCString()}</small></p>
            <a rel="noreferrer" href={newsUrl} className="btn btn-primary" target='_blank'>Read More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem;