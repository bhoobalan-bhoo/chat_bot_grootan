import "./App.css";
// importing components from react-router-dom package
import {
BrowserRouter as Router,
Routes,
Route,
} from "react-router-dom";

import Home from "./Home";
import Chat from "./Chat";

function App() {
return (
	<>
	{/* This is the alias of BrowserRouter i.e. Router */}
	<Router>
		<Routes>
    {/* <Route element={<Chat />}> */}
		<Route path="/home" element={<Home />} />
		<Route path="/chat" element={<Chat />} />
		
		</Routes >
	</Router>
	</>
);
}

export default App;
