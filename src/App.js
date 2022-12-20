import './App.css';
import { useGetCoinsQuery } from './app/services/cryptoApi';

function App() {
	const { data, isLoading, error } = useGetCoinsQuery();
	console.log(data);
	return (
		<div>
			<h1>Hello</h1>
		</div>
	);
}

export default App;
