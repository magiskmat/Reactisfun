import React from "react"
import { render } from "react-dom"

let bookList = [
    {"title": "hej hej", "author": "Johanna", "pages": 260},
    {"title": "hej hej", "author": "Johanna", "pages": 260},
    {"title": "hej hej", "author": "Johanna", "pages": 260}
]

const Book = ({title, author, pages}) => {
    return (
        <section>
<h2>{title}</h2>
<p>by: {author}</p>
<p>Pages: {pages} page</p>
        </section>
    )
}

class Library extends React.Component {
    state = { open: false}
   
    toggleOpenClosed = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }
    render() {
       const books = this.props.books
        return (
        <div>
            <h1>The library is {this.state.open ? "open" : "close"}</h1>
            <button onClick={this.toggleOpenClosed}>Change</button>
            {books.map(
                (book, i) =>  
                <Book 
                key={i}
                title={book.title}
                author={book.author}
                pages={book.pages}/>
            )}

        </div>
        )
 }
}



render(
	<Library books={bookList}/>, 
	document.getElementById('root')
)