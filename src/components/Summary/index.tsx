import { useContext, useState } from 'react';
import incomeImg from '../../../public/img/income.svg'
import outcomeImg from '../../../public/img/outcome.svg'
import totalImg from '../../../public/img/total.svg'
import { Container } from "./styles";

import { useTransactions } from '../../hooks/useTransactions';


export function Summary() {
	const { transactions } = useTransactions();
	
	const summary = transactions.reduce( (acc, transaction) => {
		if(transaction.type === 'deposit') {
			acc.deposits += transaction.amount
			acc.total += transaction.amount
		} else {
			acc.withdraws += transaction.amount
			acc.total -= transaction.amount
		}

		return acc;
	}, {
		deposits: 0,
		withdraws: 0,
		total: 0
	})

	return (
		<Container>
			<div>
				<header>
					<p>Entradas</p>
					<img src={incomeImg} alt="Entradas" />
				</header>
				<strong>
					{new Intl.NumberFormat('pt-BR', {
						style: 'currency',
						currency: 'BRL'
						}).format(summary.deposits)}
				</strong> 
			</div>
			<div>
				<header>
					<p>Saídas</p>
					<img src={outcomeImg} alt="Entradas" />
				</header>
				<strong>-
					{new Intl.NumberFormat('pt-BR', {
						style: 'currency',
						currency: 'BRL'
						}).format(summary.withdraws)}
				</strong> 
			</div>
			<div className="highlightBg">
				<header>
					<p>Total</p>
					<img src={totalImg} alt="Entradas" />
				</header>
				<strong>
					{new Intl.NumberFormat('pt-BR', {
						style: 'currency',
						currency: 'BRL'
					}).format(summary.total)}</strong> 
			</div>
		</Container>
	)
}