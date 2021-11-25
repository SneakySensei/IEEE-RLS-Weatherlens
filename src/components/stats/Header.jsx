import styled from "styled-components";

const HeaderContainer = styled.header`
	display: flex;
	justify-content: flex-end;

	button {
		all: unset;
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 16px;
		font-size: 16pt;

		div {
			width: 40px;
			height: 40px;
			border-radius: 20px;
			display: grid;
			place-items: center;

			&.active {
				background-color: black;
				color: white;
			}

			&:not(.active) {
				background-color: white;
				color: black;
			}
		}
	}
`;

const Header = () => {
	return (
		<HeaderContainer>
			<button className="unit-toggle">
				<div className="active">°C</div>
				<div>°F</div>
			</button>
		</HeaderContainer>
	);
};

export default Header;
