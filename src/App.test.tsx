import {render, screen, fireEvent} from '@testing-library/react'
import App from './App'

const sum = (x:number, y:number) => {
    return x + y
}

describe ('Nome do componente', () => {
	it('should sum corretly', () => {
        expect(sum(2, 4)).toBeGreaterThan(5)
    })

    it('should render App with Hello Message', () => {
        render(<App />) // estamos renderizando o componente 
        
        screen.getByText('Hello world!') // buscamos o texto Hello world! dentro do componente
    })
    
    it('should change message on button click', () => {
        render(<App />) // estamos renderizando o componente 

        screen.getByText("Let's learn more about testing in React") // para ver se a mensagem inicial esta na tela
    
        const button = screen.getByText(/change message/i) // estmaos 'guardando esse button

        fireEvent.click(button) // aqui estamos clicando no button

        screen.getByText("new message") // para ver se a mensagem mudou na tela
   
        const oldMesage = screen.queryByText("Let's learn more about testing in React") // para ver se a mensagem inicial esta na tela
        // a query quando não acha, ela não falha o teste, diferente do getByText que falha o teste, então a gente pode ver se tem essa mensagem ainda ou não

        expect(oldMesage).not.toBeInTheDocument() // a gente ta garantindo se nao esta na tela, mas sem falhar o teste, pois a funcao dele é ver se realemnte nao esta na tela

    })
})

export default {}