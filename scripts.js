React.createClass('Movie', function() {
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, MoviesList)
    )
});
var Movie = React.createClass({
    propTypes: {
        id: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        desc: React.PropTypes.string.isRequired,
        pic: React.PropTypes.string.isRequired
    },
    render: React.createElement();
});
var MovieId = React.createClass({
    propTypes: {
        id: React.PropTypes.number.isRequired
    },
    render: function() {
        return React.createElement('h2', {}, this.props.id);
    }
});
var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    render: function() {
        return React.createElement('h2', {}, this.props.title);
    }
});
var MovieDesc = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired
    },
    render: function() {
        return React.createElement('h4', {}, this.props.desc);
    }
});
var MoviePic = React.createClass({
    propTypes: {
        pic: React.PropTypes.string.isRequired
    },
    render: function() {
        return React.createElement('img', {}, this.props.pic);
    }
});
var MoviesList = React.createClass({
    render: function() {
        React.createElement('li', {}, Movie);
    }
});
var HarryPotter = React.createElement(Movie, {
    id: React.createElement(MovieId, {id: 1}),
    title: React.createElement(MovieTitle, {title: 'Harry Potter'}),
    desc: React.createElement(MovieDesc, {desc: 'cos tam cos tam...'}),
    pic: React.createElement(MoviePic, {pic: 'http://www.harrypotterforseekers.com/images/sym_crabbengoyle.jpg'}),
});
ReactDOM.render(element, document.getElementById('app'));