import React from "react"
import { Route,Routes } from "react-router-dom"
import { LoginScreem, RegisterScreem } from "./Screens"

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<LoginScreem />}/>
				<Route path="/register" element={<RegisterScreem />}/>
				<Route path="/login" element={<LoginScreem />}/>
			</Routes>
		</div>
	)
}

export default App
