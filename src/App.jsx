import Header from "./components/Header";
import { Profile } from "./components/Profile";
import { Tags } from "./components/Tags";


function App() {

  return (
    <div className="bg-blue-50 p-6 rounded-xl shadow-lg max-w-4xl mx-auto">
      <Header />
      <Profile />
      <Tags />
      <App />
      
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="font-bold mb-2">EXP de esta semana</h3>
        <div className="w-full h-32 bg-gray-100 rounded-lg">
          {/* Placeholder for the chart */}
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="font-bold mb-2">Logros</h3>
        <div className="flex space-x-2">
          <div className="w-16 h-16 bg-red-200 rounded-lg"></div>
          <div className="w-16 h-16 bg-yellow-200 rounded-lg"></div>
          <div className="w-16 h-16 bg-orange-200 rounded-lg"></div>
          <div className="w-16 h-16 bg-green-200 rounded-lg"></div>
        </div>
        <div className="text-right mt-2">
          <a href="#" className="text-blue-500">VER TODOS</a>
        </div>
      </div>
    </div>
  );
}

export default App
