import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { faSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search() {

    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        console.log(search)
    }, [search]);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("hey!");
        navigate('/searched/' + search)
    }
  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
            <input onChange={event => setSearch(event.target.value)} />
        </div>
    </FormStyle>
  )
}


const FormStyle = styled.form`
    margin: 0 20rem;
    width: 100%;
    margin: 0 auto;

    div {
        width: 100%;
        position: relative;
    }
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`
export default Search



// PROBLEM
/*
1. Create a search bar
2. Collect the value of search bar
3. Input search bar value into fetch url when a letter is added/ enter is pressed

*/

