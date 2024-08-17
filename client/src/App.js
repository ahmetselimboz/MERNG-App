import Header from "./components/header.tsx"
import Queries from "./components/queries.tsx"
import Mutations from "./components/mutations.tsx"

function App() {
  return (
    <main className="w-full h-full bg-gray-100 py-8">
      <Header/>
      <Queries/>
      <Mutations/>
    </main>
  );
}

export default App;
