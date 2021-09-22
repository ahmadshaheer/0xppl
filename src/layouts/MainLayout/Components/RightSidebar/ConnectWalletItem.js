import React from 'react'
import styled from 'styled-components'

const ConnectWalletItem = ({icon_png, text, color}) => {
    return (
        <Wrapper color={color}>
            <div className="text">{text}</div>
            <div className="icon">
                <img src={icon_png} alt="" />
            </div>
            
        </Wrapper>
    )
}
const Wrapper = styled.button`
    ${({color}) => color && `background: ${color}`};
    &:hover {
        filter: brightness(110%);
    }
    cursor: pointer;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    border-radius: 0.25rem;
    padding: 1.188rem 1.561rem 1.25rem 1.561rem;
    margin-bottom: .5rem;
    width: 15rem;
    height: 4rem;


    .text {
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.125rem;

    }
    .icon {
        width: 1.689rem;
        height: 1.563rem;
        img {
            width: 100%;
            height: auto;
        }
    }

`
export default ConnectWalletItem
