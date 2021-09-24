import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl}=this.props
        return (
            <div className="card">
            <img src={!imageUrl?`https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/money_heist_costume_decoded_heres_why_the_group_of_8_robbers_wear_salvador_dali_masks_and_red_jumpsuits.jpg`:imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl} target="_blank"  rel="noreferrer" className="btn btn-primary">Read More</a>
            </div>
            </div>
        )
    }
}

export default NewsItem
