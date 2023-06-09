import { green } from '@mui/material/colors';
import {createGlobalStyle} from 'styled-components';

export const GlobalStyles=createGlobalStyle`

*{
    box-sizing:border-box;
}
body{
    background:black;
    color:white;
    margin:0;
    padding:0;
    transition:all 0.25s linear;
}
.canvas{
    display:grid;
    min-height:100vh;
    grid-auto-flow:row;
    grid-template-row:auto 1fr auto;
    gap:0.5rem;
    padding:2rem;
    width:100vw;
    align-items:center;
    text-align:center;
}
.type-box{
    display:block;
    max-width:100vw;
    height:150px;
    margin-left:auto;
    margin-right:auto;
    overflow:hidden;

}
.words{
    font-size:32px;
    display:flex;
    flex-wrap:wrap;
}
.word{
    margin:5px;
    padding-right:2px;
}
.correct{
    color:green;
}
.upper-menu{
    display:flex;
    width:1000px;
    margin-left:auto;
    margin-right:auto;
    font-size:1.35rem;
    justify-content:space-between;
    padding:0.5rem;
}
.modes{
    display:flex;
    gap:0.4rem;
}
.time-mode:hover{
    color:green;
    cursor:pointer;
}
`