import React  from 'react'
const Newsitem=(props)=> {
    let {title,description,imageUrl,newsUrl,author,date}=props;
    return (
      <div>
        <div className="card" >
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...21`z</p>
    <p className="card-text"><small className='text-muted'>By {author?author:"Uknown"} on {date}</small></p>
    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read more</a> 
    {/*target=_blank is required to show the data  */}
  </div>
</div>
      </div>
    )
  }
export default Newsitem
