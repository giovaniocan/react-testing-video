import { ReactNode } from "react";

// verificar se certa função esta sendo chamada

 function Button({
    disabled, 
    children,
    onClick,
 }: {
    disabled: boolean; 
    children:ReactNode;
    onClick: (number: number) => void; 
}){
    return (
        <button
            style={{
                backgroundColor: disabled ? 'red' : 'blue',
            }}
            onClick={() => onClick(10)}
        >
            {children}
        </button>
    )
}

export default Button