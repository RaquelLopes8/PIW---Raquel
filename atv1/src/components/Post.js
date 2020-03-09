import React from 'react';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.mensseger = props.mensseger;
    }
    render() { 
        return (
            <div className="post1">
                <div>{this.name}</div>
                <div>{this.mensseger}</div>
            </div>
        );  
    }
}
 
export default Post;
