import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { toggleUnit } from "../../store/config/actions";

const HeaderContainer = styled.header`
	display: flex;
	justify-content: flex-end;

	button {
		all: unset;
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 16px;
		font-size: 14pt;

		div {
			line-height: 100%;
			padding: 0.5rem 1rem;
			border-radius: 20px;
			display: grid;
			place-items: center;

			&.active {
				background-color: #4050d2;
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
	const unitState = useSelector((state) => state.config.unit);
	const dispatch = useDispatch();

	const handleToggleUnit = (e) => {
		dispatch(toggleUnit());
	};

	return (
		<HeaderContainer>
			<button onClick={handleToggleUnit} className="unit-toggle">
				<div className={unitState === "metric" ? "active" : ""}>°C, m/s</div>
				<div className={unitState === "imperial" ? "active" : ""}>°F, mph</div>
			</button>
		</HeaderContainer>
	);
};

export default Header;
