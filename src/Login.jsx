import { useState } from 'react'

export default function Login({setAuthState}) {

	const [tab, setTab] = useState('login')
	const [error, setError] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [confirm, setConfirm] = useState('')

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
		}
		else {
			try {
				data = await res.json()
				setError(data.msg)
			}
			catch (e) {
				setError('server error')
			}
			setAuthState(false)
		}
	}

	async function login() {
		await postData('/api/session')
	}

	async function create() {
		if (password === confirm) {
			await postData('/api/user')
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
					<div className={tab === 'login' ? 'tab selected' : 'tab'} style={{borderRadius: '15px 0 0 0'}} onClick={() => setTab('login')}>
						<h3>log in</h3>
					</div>
					<div className={tab === 'create' ? 'tab selected' : 'tab'} style={{borderRadius: '0 15px 0 0'}} onClick={() => setTab('create')}>
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