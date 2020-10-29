import styled from 'styled-components'
import defaultImg from '../images/LUP03920.jpg'


export let StyledHero = styled.header`
    min-height: 60vh;
    background: url(${ props => ( props.img ? props.img : defaultImg )}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`

export let StyledRoom = styled.header `
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
`