import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../../public/img/close.svg'
import incomeImg from '../../../public/img/income.svg'
import outcomeImg from '../../../public/img/outcome.svg'
import { useTransactions } from '../../hooks/useTransactions';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalProps) {
	const { createTransaction } = useTransactions();

	const [title, setTitle] = useState("")
	const [value, setValue] = useState<number>(0)
	const [category, setCategory] = useState("")
	const [typeTransaction, setTypeTransaction] = useState('deposit')

	async function handleCreateNewTransaction(e: FormEvent) {
		e.preventDefault();

		await createTransaction({
			title, 
			amount: value,
			type: typeTransaction,
			category
		});

		onRequestClose();
		setTitle("");
		setValue(0);
		setCategory("");
		setTypeTransaction("deposit");
	}

	return (
		<Modal 
		isOpen={isOpen} 
		onRequestClose={onRequestClose} 
		overlayClassName="react-modal-overlay"
		className="react-modal-content"
		>

				<button type="button" onClick={onRequestClose} className="react-modal-close">
					<img src={closeImg} />
				</button>
				<Container onSubmit={handleCreateNewTransaction}>
					<h2>Cadastrar transação</h2>
					<input placeholder='Título' value={title} onChange={(e) => setTitle(e.target.value)} />
					<input placeholder='Valor' type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} />
					<TransactionTypeContainer>
						<RadioBox 
							type="button"
							isActive={typeTransaction === 'deposit'}
							activeColor={'green'}
							onClick={() => setTypeTransaction('deposit')}
						>
							<img src={incomeImg} alt="entrada" /> 
							<span>Entrada</span>
						</RadioBox>
						<RadioBox 
							type="button"
							activeColor={'red'}
							isActive={typeTransaction === 'withdraw'}
							onClick={() => setTypeTransaction('withdraw')}
						>
							<img src={outcomeImg} alt="saida" /> 
							<span>Saída</span>
						</RadioBox>
					</TransactionTypeContainer>
					<input placeholder='Categoria' value={category} onChange={(e) => setCategory(e.target.value)} />
					<button type="submit">Cadastrar</button>
				</Container>
		</Modal>
	)	
}