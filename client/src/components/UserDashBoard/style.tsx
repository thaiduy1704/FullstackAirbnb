import styled from 'styled-components';
import { Button } from '../../components';

const StyledContainer = styled.section`
	padding: 5rem;
	position: relative;
	background-color: #fafbfb;
	height: 100%;
`;

const StyledSearchButton = styled(Button)``;

const StyledRefreshButton = styled.button<{ isSpin?: boolean }>`
	font-size: 3rem;
	animation: ${(props) => (props.isSpin ? 'spin-animation 3s 0.5s' : 'none')};
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	svg {
		font-size: 3rem;
		color: var(--clr-success);
	}
`;

const StyledHeadButtonContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledSearchContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 20rem;
	gap: 1rem;
	margin: 2rem auto;
	width: 100%;
`;

const StyledSearch = styled.input`
	font-size: 2.5rem;
	padding-left: 1rem;
`;

const StyledTableContainer = styled.div`
	position: relative;
	overflow-x: scroll;
	margin-inline: auto;
	min-height: 40rem;
	width: 100%;
`;

const StyledTable = styled.table`
	border: 1px solid black;
	border-collapse: collapse;
	margin-inline: auto;
	table-layout: fixed;
`;

const StyledTableHead = styled.thead``;
const StyledTableBody = styled.tbody``;

const StyledTitle = styled.th`
	font-size: 2.5rem;
	padding: 0.5rem;
	border: 1px solid black;
	border-collapse: collapse;
`;

const StyledItem = styled.td`
	border: 1px solid black;
	border-collapse: collapse;
	font-size: 2rem;
	padding: 0.5rem;
	overflow: hidden;
	white-space: nowrap;
`;

const StyledRow = styled.tr``;

const StyledButtonContainer = styled.div`
	display: flex;
	gap: 1rem;
	border: none !important;
	margin: auto 0;
	align-items: center;
`;

const StyledPaginateContainer = styled.div`
	margin-inline: auto;
	width: 50%;
	height: 10rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledPrevButton = styled.button`
	font-size: 2.5rem;
	font-weight: bold;
`;
const StyledNextButton = styled.button`
	font-size: 2.5rem;
	font-weight: bold;
`;

const StyledPageButton = styled.button<{ active?: boolean }>`
	width: 5rem;
	background-color: ${(props) => (props.active ? '#9d0832' : '#e41d57')};
	font-weight: bold;
	transition: var(--transition);
	font-size: 2rem;
	border-radius: var(--radius);
	padding: 0.5rem;
	color: ${(props) => (props.active ? 'black' : 'white')};
`;

export {
	StyledContainer,
	StyledSearchButton,
	StyledSearchContainer,
	StyledHeadButtonContainer,
	StyledSearch,
	StyledTableContainer,
	StyledTable,
	StyledTableHead,
	StyledTableBody,
	StyledTitle,
	StyledItem,
	StyledRow,
	StyledButtonContainer,
	StyledPaginateContainer,
	StyledPrevButton,
	StyledNextButton,
	StyledPageButton,
	StyledRefreshButton,
};
