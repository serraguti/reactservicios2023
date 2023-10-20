import React, { Component } from 'react'
import image404 from './../../assets/images/error404.webp';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <img src={image404} style={{width: "450px", height: "450px"}}/>
      </div>
    )
  }
}
