import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Form = styled.form`
	margin-top: 20px;
	margin-left: auto;
	margin-right: auto;
	height: 30px;
	width: 80%;
`;

const Input = styled.input`
	all: unset;
	background-color: white;
	width: 90%;
	height: 100%;
	text-align: center;
	border-radius: 15px;
	color: black;
	font-size: 16px;
	width: 100%;
`;

function InputBox({ onSearch }) {
	const inputValue = useSelector((state) => state.store?.searchData?.payload?.inputValue);
	const [value, setValue] = useState(inputValue || '');
	const ref = useRef();

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		ref.current.blur();
		onSearch(value);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Input ref={ref} value={value} onChange={handleChange} placeholder='키워드 입력' />
		</Form>
	);
}

export default InputBox;
