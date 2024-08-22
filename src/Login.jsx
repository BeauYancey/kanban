import { useState } from 'react'

export default function Login({setAuthState}) {

	const [tab, setTab] = useState('login')
	const [error, setError] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [confirm, setConfirm] = useState('')

	function switchTab(tab) {
		setTab(tab)
		setError('')
	}

	async function postData(endpoint) {
		const res = await fetch(endpoint, {
			method: 'POST',
			body: JSON.stringify({username: username, password: password}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8'
			}
		})
		if (res?.ok) {
			setError('')
			setAuthState(true)
			return true
		}
		else {
			try {
				const data = await res.json()
				setError(data.msg)
			}
			catch (e) {
				console.log(e)
				setError('server error')
			}
			setAuthState(false)
			return false
		}
	}

	async function login() {
		if (await postData('/api/session')) {
			window.location = '/'
		}
	}

	async function create() {
		if (password === confirm) {
			if (await postData('/api/user')) {
				window.location = '/'
			}
		}
		else {
			setError('passwords must match')
			setAuthState(false)
		}
	}

	return (
		<main style={{display: 'flex', justifyContent: 'center'}}>
			<div className='login-form'>
				<div className='tabs'>
					<div className={tab === 'login' ? 'tab selected' : 'tab'} style={{borderRadius: '15px 0 0 0'}} onClick={() => switchTab('login')}>
						<h3>log in</h3>
					</div>
					<div className={tab === 'create' ? 'tab selected' : 'tab'} style={{borderRadius: '0 15px 0 0'}} onClick={() => switchTab('create')}>
						<h3>create account</h3>
					</div>
				</div>
				{tab === 'login' && 
					<div className='login-form-option'>
						<input placeholder='username' type='text' onChange={(e) => setUsername(e.target.value)} />
						<input placeholder='password' type='password' onChange={(e) => setPassword(e.target.value)} />
						{error &&
							<div className='error'>{error}</div>
						}
						<button className='btn btn-olive' onClick={login}><h3>log in</h3></button>
					</div>
				}
				{tab === 'create' && 
					<div className='login-form-option'>
						<input placeholder='username' type='text' onChange={(e) => setUsername(e.target.value)} />
						<input placeholder='password' type='password' onChange={(e) => setPassword(e.target.value)} />
						<input placeholder='confirm password' type='password' onChange={(e) => setConfirm(e.target.value)} />
						{error &&
							<div className='error'>{error}</div>
						}
						<button className='btn btn-olive' onClick={create}><h3>create account</h3></button>
					</div>
				}
			</div>
		</main>
	)
}