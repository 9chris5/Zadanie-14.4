var Movie = React.createClass({
    propTypes: {
        id: React.propTypes.number,
        title: React.propTypes.string,
        desc: React.propTypes.string,
        pic: React.propTypes.object
    },
    render: function() {
        return React.createElement('li', {},
            React.createElement(MovieId),
            React.createElement(MovieTitle),
            React.createElement(MovieDesc),
            React.createElement(MoviePic)
        );
    }
});
var MoviesList = React.createClass({
    render: function() {
        return React.createElement('li', {}, Movie);
    }
});
var MovieId = React.createClass({
    propTypes:{
        id: React.propTypes.number.isRequired  
    },
    render: function() {
        return React.createElement('h2', {}, this.props.id);
    }
});
var MovieTitle = React.createClass({
    propTypes:{
        title: React.propTypes.string.isRequired  
    },
    render: function() {
        return React.createElement('h2', {}, this.props.title);
    }
});
var MovieDesc = React.createClass({
    propTypes:{
        desc: React.propTypes.string.isRequired  
    },
    render: function() {
        return React.createElement('p', {}, this.props.desc);
    }
});
var MoviePic = React.createClass({
    propTypes:{
        pic: React.propTypes.object.isRequired  
    },
    render: function() {
        return React.createElement('img', {src: this.props.pic});
    }
});
var HarryPotter = React.createElement(Movie, {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodziejach.',
    pic: 'http://www.harrypotterforseekers.com/images/sym_crabbengoyle.jpg'
});
ReactDOM.render(MoviesList, document.getElementById('app'));