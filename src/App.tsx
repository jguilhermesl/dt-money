import { useState } from "react";
import Modal from "react-modal"
import { GlobalStyle } from "./styles/global"

import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { NewTransactionModal } from "./components/NewTransactionModal";

import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root')

function App() {
	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false);

	function handleOpenNewTransactionModal() {
		setIsNewTransactionModalOpen(true)
	}

	function handleCloseNewTransactionModal() {
		setIsNewTransactionModalOpen(false)
	}

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
			<Dashboard />
			<NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
			<GlobalStyle />
    </TransactionsProvider>
  )
}

export default App
