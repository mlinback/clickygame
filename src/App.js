import React from "react";
// import CardContainer from "./components/CardContainer";
import Tile from "./components/Tile";
import cardList from "./cardList.json";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
// import Score from "./components/Score";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      id: 0,
      isClicked: false
    };
  }

  handleClick = event => {
    let isClicked = this.state.clickedArray;
    let score = this.state.score;
    if (isClicked) {
      this.setState({
        isClicked: false,
        score: 0
      });
    } else {
      this.setState(
        state => {
          return {
            isClicked: true,
            id: 0,
            score: ++score
          };
        },
        () => {
          if (this.state.score === 12) {
            this.setState({
              isClicked: false,
              score: 0
            });
          }
        }
      );
    }
  };
  render() {
    return (
      <div>
        <Header score={this.state.score} />
        <Container className="pt-2 pb-2">
          <Row className="margin">
            <Col>
              {cardList
                .sort((a, b) => 0.5 - Math.random())
                .map(randomTile => (
                  <Tile
                    key={randomTile.id}
                    id={randomTile.id}
                    img={randomTile.img}
                    name={randomTile.name}
                    isClicked={this.state.isClicked}
                    handleClick={this.handleClick}
                  />
                ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;