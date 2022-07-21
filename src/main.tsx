import React from 'react'
import ReactDOM from 'react-dom/client'
import { createServer, Model } from 'miragejs'
import App from './App'

createServer({
	models: {
		transaction: Model
	},

	seeds(server) {
		server.db.loadData({
			transactions: [
				{
					id: 1, 
					title: 'Freelance de website', 
					type: 'deposit', 
					category: 'Dev',
					amount: 6000,
					createdAt: new Date()
				},
				{
					id: 2, 
					title: 'Aluguel', 
					type: 'withdraw', 
					category: 'Casa',
					amount: 2000,
					createdAt: new Date()
				}
			]
		})
	},

	routes() {
		this.namespace = 'api';

		this.get('/transactions', (schema) => {
			return this.schema.all('transaction')
		})

		this.post('/transactions', (schema, request) => {
			const data = JSON.parse(request.requestBody)

			return schema.create('transaction', data)
		})
	}
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
