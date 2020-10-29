import styled from 'styled-components'

export let ButtonContainer = styled.button `
    text-transform: capitalize;
    background: transparent;
    border: 0.15rem solid var(--clr-primary-5);
    border-color: ${props => props.cart ? "var(--clr-gold)" : "var(--clr-primary-5)"};
    font-size: 1.4rem;
    color:${props => props.cart ? "var(--clr-gold)" : "var(--clr-primary-5)"};
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem;
    transition: 0.5s ease-in-out;

        &:hover{
            background: ${props => props.cart ? "var(--clr-gold)" : "var(--clr-grey-1)"};
            color: ${props => props.cart ? "var(--clr-grey-1)" : "var(--primary-5)"}
        }
        &:focus{
            outline: none;
        }
`