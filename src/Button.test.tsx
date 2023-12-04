import { fireEvent, render, screen } from "@testing-library/react"
import Button  from "./components/button"

// esse teste é para mostrar como testar estilos, e não devemos ficar fazendo isso, a não ser quando a funcionalidade de um botão se altere atravez do estilo
// ex: se o botão for desabilitado, o background deve ser vermelho

describe('Button Component', () => {
    it('should render red background if disabled', () => {
        render(<Button onClick={() => {}} disabled >Ckick me</Button>)

        // esse get ByRole pega o elemento, e como segundo parametro (opcional) a gente pode fazer umas apurações maiores
        const button = screen.getByRole('button', {name: 'Ckick me'})
    
        expect(button).toHaveStyle({
            backgroundColor: "red"
        })
    })

    it('should call onClick prop on click', () => { // a gente seleciona o botão, clica nele, e ve se a função foi chamada
        const onClick = jest.fn() // esse jest.fn é uma função que é monitrorada, e a gente consegue ver se ela foi chamada
        
        render(<Button onClick={onClick} disabled >Ckick me</Button>)
        
        const button =  screen.getByText(/ckick me/i) //peguei o botão

        fireEvent.click(button) // clickei no botão

        // agora temos que ver se a função foi chamada

        expect(onClick).toHaveBeenCalledWith(10) // verifico se a função foi chamada

    })
})