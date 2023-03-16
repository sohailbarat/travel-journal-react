import Header from './components/Header';
import Main from './components/Main';
import data from './data'

function App() {

  const locationElements = data.map( location => {
    return (
      <Main {...location} />
    )
  })

  return (
    <>
    <Header />
    {locationElements}
    </>
  );
}

export default App;
