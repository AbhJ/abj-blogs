import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ModernApp from './themes/modern/ModernApp';
import ClassicApp from './themes/classic/ClassicApp';

/**
 * The default experience is the new modern theme at /.
 * The classic theme lives under /classic/* for anyone who prefers it (and is
 * still linked from the modern footer).
 */
const App: React.FC = () => (
	<Routes>
		<Route path="/classic/*" element={<ClassicApp />} />
		<Route path="/*" element={<ModernApp />} />
	</Routes>
);

export default App;
