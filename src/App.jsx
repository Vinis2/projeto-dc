import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import brasil from "./assets/brasil.png"
import perfil from "./assets/perfil.png"
import logo from "./assets/logo.avif"

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<div className='card'>
				<div className='topo-card'>
					<div>
						<img className='Pais' src={brasil} alt="" />
					</div>
					<div className='text'>
						<h2>
							REPUBLICA FEDERATIVA DO BRASIL
						</h2>
						<h4>
							GOVERNO FEDERAL
						</h4>
						<p>
							Unidade da Federação
						</p>
						<p>
							Secretaria de Segurança da Unidade da Federação
						</p>
					</div>
					<div>
						<img className='Brasil' src={logo} alt="" />
					</div>
				</div>
				<div>
					<div className='Perfil'>
						<div>
							<img className='perfil' src={perfil} />
						</div>
					</div>
				</div>
				<div className='nome'>
					<p>
						Nome / Name
					</p>
					<p>
						Nome Social / Social Name
					</p>
					<p>
						Registro Geral-CPF
					</p>
					<p>
						Data de Nascimento
					</p>
					<p>
						Naturalidade
					</p>
				</div>
			</div>
		</>
	)
}

export default App
