import React from "react";


class Collapse extends React.Component {
    
  state = { showContent: false }

  //this.showMore = this.showMore.bind(this)
  //showMore() {
  //this.setState({showContent: true})}

 showMore = () => {
  this.setState({showContent: !this.state.showContent})
 }

/*  componentDidMount() {
  console.log('Component yaratıldı');
 }

 componentDidUpdate() {
  console.log('Component güncellendi');
 } */

  render() {

      return (
        <div>
        <button className="btn btn-primary w-100" onClick={this.showMore}>
          {/* {this.props.children.props.cardTitle} */}
          {React.Children.map(this.props.children, children => children.props.cardTitle)}
          

        </button>


        {
          this.state.showContent ? (
            <div className="collapse show">
            {this.props.children}
            </div>  
          ) : null
        }
           
        </div>  
      )
    }
}
  
export default Collapse;

