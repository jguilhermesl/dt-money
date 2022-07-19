import incomeImg from '../../../public/img/income.svg'
import outcomeImg from '../../../public/img/outcome.svg'
import totalImg from '../../../public/img/total.svg'

import { Container } from "./styles";

export function Summary() {
	return (
		<Container>
			<div>
				<header>
					<p>Entradas</p>
					<img src={incomeImg} alt="Entradas" />
				</header>
				<strong>R$ 1000,00</strong> 
			</div>
			<div>
				<header>
					<p>Saídas</p>
					<img src={outcomeImg} alt="Entradas" />
				</header>
				<strong>R$ 230,00</strong> 
			</div>
			<div className="highlightBg">
				<header>
					<p>Total</p>
					<img src={totalImg} alt="Entradas" />
				</header>
				<strong>R$ 770,00</strong> 
			</div>
		</Container>
	)
}