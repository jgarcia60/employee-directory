import './App.css';
import Title from './components/Title/index';
import Filter from '../src/components/Filter/index'; 
import Wrapper from '../src/components/Wrapper/index';
import Head from '../src/components/Head/index';
import Row from '../src/components/Row/index';


function App() {
  return (
    <Wrapper>
        <Title>Employee Directory
          <Filter inputChanged={this.handleInputChange} />
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
          />
        ))}
      </Wrapper>
  );
}

export default App;
