import './App.css';
// import { useGetCoinsQuery } from './app/services/cryptoApi';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Crypto from './page/Crypto/Crypto';
import Home from './page/Home/Home';

function App() {
	// const { data, isLoading, error } = useGetCoinsQuery();
	// console.log(data);
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/coins/:id' element={<Crypto />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
