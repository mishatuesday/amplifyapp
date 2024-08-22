
import './App.css';
import Component from './Component'
import Wheel from './Wheel'

function App() {
  return (
    <div className="main content pt-5">
      <div className="text-sm">
        <div className="xs:block sm:hidden">
          extra small
        </div>
        <div className="xs:hidden sm:block md:hidden">
          small
        </div>
        <div className="xs:hidden md:block lg:hidden">
          medium
        </div>
        <div className="xs:hidden lg:block xl:hidden">
          large
        </div>
        <div className="xs:hidden xl:block">
          extra large
        </div>
      </div>
      <Component />
      <Wheel />
    </div>
  );
}

export default App;
