// import React, { Component } from "react";


// class Planners extends Component {
//   state = {
//     planners: [],
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     title: "",
//     bio: "",
//     image:"",
//     priceRange: ""
//   };

//   componentDidMount() {
//     this.loadPlanners();
//   }

//   loadPlanners = () => {
//     API.getBooks()
//       .then(res =>
//         this.setState({
//           books: res.data,
//           title: "",
//           author: "",
//           description: "",
//           image: "",
//           link:""
//         })
//       )
//       .catch(err => console.log(err));
//   };

//   viewBook = url => {
//     window.location = url;
//   }

//   deleteBook = id => {
//     API.deleteBook(id)
//       .then(res => this.loadBooks())
//       .catch(err => console.log(err));
//   };

//   render() {
//     return (
//       <Container fluid>
//         <Row>
//           <Jumbotron>
//             <h1>(React) Google Book Search</h1>
//           </Jumbotron>
//         </Row>
//         <Row>
//           <Container>
//             <h2>Saved Books</h2>
//             {this.state.books.length ? (
//               <List>
//                 {this.state.books.map(book => (
//                   <ListItem key={book._id}>
//                     <img className="float-left mb-1 mr-4" src={book.image} alt={book.title} />
//                     <Row>
//                       <Col lPadding="0" size="8">
//                       <strong>{book.title}</strong>
//                       </Col>
//                       <Col size="4">
//                         <DeleteBtn onClick={() => this.deleteBook(book._id)} />
//                         <ViewBtn onClick={() => this.viewBook(book.link)} />
//                       </Col>
//                     </Row>
//                     <p>Written by {book.author}</p>
//                     <p className="text-justify">{book.description}</p>
//                   </ListItem>
//                 ))}
//               </List>
//             ) : (
//               <h3>No Results to Display</h3>
//             )}
//           </Container>
//         </Row>
//       </Container>
//     );
//   }
// }

// export default Planners;
