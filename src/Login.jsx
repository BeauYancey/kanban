import { useState } from "react"

export default function Login({setAuthState}) {

	const [tab, setTab] = useState('login')

	function login() {
		setAuthState(true);
	}

	return (
		<main style={{display: 'flex', justifyContent: 'center'}}>
			<div className='login-form'>
				<div className='tabs'>
					<div className={tab === 'login' ? 'tab selected' : 'tab'} style={{borderRadius: '15px 0 0 0'}} onClick={() => setTab('login')}>
						<h3>log in</h3>
					</div>
					<div className={tab === 'create' ? 'tab selected' : 'tab'} style={{borderRadius: '0 15px 0 0'}} onClick={() => setTab('create')}>
						<h3>create account</h3>
					</div>
				</div>
				{tab === 'login' && 
					<div className='login-form-option'>
						<input
							placeholder="username"
							type='text'
						/>
						<input
							placeholder="password"
							type='password'
						/>
						<button className='btn btn-olive' onClick={login}><h3>log in</h3></button>
					</div>
				}
				{tab === 'create' && 
					<div className='login-form-option'>
						<input
							placeholder="username"
							type='text'
						/>
						<input
							placeholder="password"
							type='password'
						/>
						<input
							placeholder="confirm password"
							type='password'
						/>
						<button className='btn btn-olive' onClick={login}><h3>create account</h3></button>
					</div>
				}
			</div>
		</main>
	)
}