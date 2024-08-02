import { Component } from "react";
import './styles.css'

export class Button extends Component {

  render(){
    return (
      <div className="btn-container">
        <button disabled={this.props.disabled} className="btn" onClick={this.props.action}>Load more posts</button>
      </div>
    )
  }
}