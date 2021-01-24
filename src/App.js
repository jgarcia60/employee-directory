import React, {Component} from 'react';
import './App.css';
import Title from './components/Title/index';
import Filter from '../src/components/Filter/index'; 
import Wrapper from '../src/components/Wrapper/index';
import Head from '../src/components/Head/index';
import Row from '../src/components/Row/index';
import API from './Utils/API';


class App extends Component {

  state = {
    users: [],
    searchUsers: [],
    search: "",
    sorted: "ascending"
  };

  componentDidMount() {
    this.generateRandomUsers();
  };

  generateRandomUsers = () => {
    API.getRandomUsers()
      .then((res) => {
      console.log(res)
        this.setState({
          users: res.data.results,
          searchUsers: res.data.results,
        })
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (e) => {
    const employeeName = e.target.value;

    if(this.state.search === ""){
      this.setState({
        users: this.state.users,
      })
    }
  
    const searchUsers = this.state.users.filter((employees) => {
    const { first: firstName, last: lastName } = employees.name;
    const searchedEmployeesName = `${firstName} ${lastName}`;
    return searchedEmployeesName
      .toLowerCase()
      .includes(employeeName.toLowerCase().trim());
      //check to match employee names with user input
  });
  this.setState({
    searchUsers: searchUsers,
    search: employeeName,
  });
};

  handleSortByName = () => {
    const sortEl = this.state.searchUsers;
    //sorts list of names based on ascending or descending
    if (this.state.sorted === "ascending") {
      const sorted = sortEl.sort((a, b) =>
        a.name.first > b.name.first ? 1 : -1
      );
      this.setState({
        searchUsers: sorted,
        sorted: "descending",
      });
    } else {
      const sorted = sortEl.sort((a, b) =>
        a.name.first > b.name.first ? -1 : 1
      );
      this.setState({
        searchUsers: sorted,
        sorted: "ascending",
      });
    }
  }
render() {
  return (
    <Wrapper>
        <Title>Employee Directory
          <Filter handleInputChange={this.handleInputChange} />
        </Title>
        <Head sortByName={this.handleSortByName} />
        {this.state.searchUsers.map((user) => (
          <Row
            firstName={user.name.first}
            lastName={user.name.last}
            email={user.email}
            age={user.dob.age}
            phone={user.phone}
            src={user.picture.large}
            key={user.login.username} //react asked for a key so i just gave it a username
          />
        ))}
      </Wrapper>
  );
  }
}

export default App;
