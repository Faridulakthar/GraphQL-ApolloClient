import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import GetUser from "./Components/GetUser";
import Form from "./Components/Form";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:6969/graphql'
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        {/* <GetUser /> */}
        <Form />
      </div>
    </ApolloProvider>
  );
}

export default App;
