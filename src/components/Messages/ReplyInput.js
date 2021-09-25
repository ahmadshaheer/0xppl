import React from 'react'
import styled from 'styled-components'

const ReplyInput = () => {
    return (
        <Form>
            <input placeholder="Reply to flippen.eth" />
        </Form>
    )
}
const Form = styled.form`
        margin: 1rem 1.25rem;
    input {
        /* padding: 1rem .5; */
        background: #EAECEE;
        border: none;
        width: 38.75rem;
        height: 1.25rem;
        padding: 0.938rem 1.25rem;
        display: block;
        margin: 0 auto;
        font-weight: 600;
        line-height: 1.173rem;
        /* color: #B6BDC4; */
    }
    

`
export default ReplyInput
