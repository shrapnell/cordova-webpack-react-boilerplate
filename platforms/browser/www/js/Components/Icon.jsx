import React from "react";

export default class Icon extends React.Component {

    render() {

      var type = (this.props.type) ? this.props.type : "";
      var css = (this.props.css) ? this.props.css : "";

      return (
                  <i className={"fa fa-"+type+" "+css} aria-hidden="true"></i>
          )


    }
}
