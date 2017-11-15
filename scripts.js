var Films = [
    HarryPotter = {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodziejach.',
        pic: 'http://www.harrypotterforseekers.com/images/sym_crabbengoyle.jpg'},
    HarryPotter2 = {
        id: 2,
        title: 'Harry Potter 2',
        desc: 'Film o czarodziejach. 2',
        pic: 'http://www.harrypotterforseekers.com/images/sym_crabbengoyle.jpg'},
    HarryPotter3= {
        id: 3,
        title: 'Harry Potter 3',
        desc: 'Film o czarodziejach. 3',
        pic: 'http://www.harrypotterforseekers.com/images/sym_crabbengoyle.jpg'}
];
var Movie = React.createClass({
    propTypes: {
        id: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        desc: React.PropTypes.string.isRequired,
        pic: React.PropTypes.string.isRequired
    },
    render: function() {
        return React.createElement('li', {},
            React.createElement(MovieId, {id: this.props.id}),
            React.createElement(MovieTitle, {title: this.props.title}),
            React.createElement(MovieDesc, {desc: this.props.desc}),
            React.createElement(MoviePic, {pic: this.props.pic})
        );
    }
});
var MoviesList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired
    },
    render: function() {
        var moviesElem = this.props.movies.map(function(movie) {
            return React.createElement(Movie, {
                key: movie.id,
                id: movie.id,
                title: movie.title,
                desc: movie.desc,
                pic: movie.pic
            });
        });
        return React.createElement('ul', {}, moviesElem);
    }
});
var MovieId = React.createClass({
    propTypes:{
        id: React.PropTypes.number.isRequired  
    },
    render: function() {
        return React.createElement('h2', {}, this.props.id);
    }
});
var MovieTitle = React.createClass({
    propTypes:{
        title: React.PropTypes.string.isRequired  
    },
    render: function() {
        return React.createElement('h2', {}, this.props.title);
    }
});
var MovieDesc = React.createClass({
    propTypes:{
        desc: React.PropTypes.string.isRequired  
    },
    render: function() {
        return React.createElement('p', {}, this.props.desc);
    }
});
var MoviePic = React.createClass({
    propTypes:{
        pic: React.PropTypes.string.isRequired  
    },
    render: function() {
        return React.createElement('img', {src: this.props.pic});
    }
});
var element = React.createElement(MoviesList, {movies: Films},)
ReactDOM.render(element, document.getElementById('app'));