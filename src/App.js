import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					{routes.map(({ path, Component }, i) => {
						return <Route path={path} element={<Component />} key={i} />;
					})}
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
