import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addPreferredLocation } from "../../store/location/actions";

const SearchbarContainer = styled.div`
	position: relative;

	.search-input {
		display: flex;
		align-items: center;
		border: 1px solid #888;
		padding: 0 10px;
		border-radius: 8px;

		input {
			all: unset;
			flex: 1;
			padding: 12px 16px;
		}

		.clear-btn {
			cursor: ${(props) => (props.empty ? "default" : "pointer")};
			color: ${(props) => (props.empty ? "#888" : "black")};
		}
	}

	section {
		border-left: 1px solid #888;
		border-radius: 0 8px 8px 0;
		position: absolute;
		width: calc(100vw - 84px);
		max-width: 500px;
		background-color: white;
		padding: 0.5rem 1rem;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
			rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

		article {
			padding: 0.25rem 0;
			display: flex;
			align-items: center;
			justify-content: space-between;

			div {
				flex: 1;
				min-width: 0px;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			button {
				all: unset;
				color: white;
				background-color: #4050d2;
				padding: 0.5rem 1rem;
				border-radius: 4px;
				cursor: pointer;
				transition: filter 150ms ease;

				&:hover {
					filter: brightness(1.05);
				}
				&:active {
					filter: brightness(0.95);
				}
			}
		}
	}
`;

const Searchbar = () => {
	const [searchKeyword, setSearchKeyword] = useState("");
	const [suggestions, setSuggestions] = useState([]);

	const timeout = useRef(null);

	const dispatch = useDispatch();

	useEffect(() => {
		const fetchSuggestions = () => {
			if (searchKeyword.length >= 3) {
				axios
					.get(
						`https://api.openweathermap.org/geo/1.0/direct?q=${searchKeyword}&limit=5&appid=${process.env.REACT_APP_OPENWEATHER_API}`
					)
					.then((res) => {
						setSuggestions(res.data);
					});
			} else {
				setSuggestions([]);
			}
		};
		clearTimeout(timeout.current);
		timeout.current = setTimeout(fetchSuggestions, 500);
	}, [searchKeyword]);

	const handleInputChange = (e) => {
		setSearchKeyword(e.target.value);
	};

	const handleAddButton = (suggestion) => {
		// clear input
		setSearchKeyword("");
		// reset suggestion
		setSuggestions([]);
		// store res in redux
		dispatch(addPreferredLocation(`${suggestion.name}, ${suggestion.country}`));
	};

	const handleClearButton = (e) => {
		e.stopPropagation();
		setSuggestions([]);
		setSearchKeyword("");
	};

	return (
		<SearchbarContainer empty={searchKeyword === ""}>
			<div className="search-input">
				<svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M17.5 17.5L13.7617 13.755L17.5 17.5ZM15.8334 8.74999C15.8334 10.6286 15.0871 12.4303 13.7587 13.7587C12.4303 15.087 10.6286 15.8333 8.75002 15.8333C6.8714 15.8333 5.06973 15.087 3.74135 13.7587C2.41296 12.4303 1.66669 10.6286 1.66669 8.74999C1.66669 6.87137 2.41296 5.0697 3.74135 3.74132C5.06973 2.41293 6.8714 1.66666 8.75002 1.66666C10.6286 1.66666 12.4303 2.41293 13.7587 3.74132C15.0871 5.0697 15.8334 6.87137 15.8334 8.74999V8.74999Z"
						stroke="black"
						strokeWidth="1.91667"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
				<input
					type="text"
					placeholder="Search for places..."
					onChange={handleInputChange}
					value={searchKeyword}
				/>
				<svg
					className="clear-btn"
					onClick={handleClearButton}
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10 1.25C5.16797 1.25 1.25 5.16797 1.25 10C1.25 14.832 5.16797 18.75 10 18.75C14.832 18.75 18.75 14.832 18.75 10C18.75 5.16797 14.832 1.25 10 1.25ZM13.2305 13.3242L11.9414 13.3184L10 11.0039L8.06055 13.3164L6.76953 13.3223C6.68359 13.3223 6.61328 13.2539 6.61328 13.166C6.61328 13.1289 6.62695 13.0938 6.65039 13.0645L9.19141 10.0371L6.65039 7.01172C6.62679 6.98309 6.61369 6.94725 6.61328 6.91016C6.61328 6.82422 6.68359 6.75391 6.76953 6.75391L8.06055 6.75977L10 9.07422L11.9395 6.76172L13.2285 6.75586C13.3145 6.75586 13.3848 6.82422 13.3848 6.91211C13.3848 6.94922 13.3711 6.98438 13.3477 7.01367L10.8105 10.0391L13.3496 13.0664C13.373 13.0957 13.3867 13.1309 13.3867 13.168C13.3867 13.2539 13.3164 13.3242 13.2305 13.3242Z"
						fill="currentcolor"
					/>
				</svg>
			</div>
			{suggestions.length > 0 && (
				<section>
					{suggestions.map((suggestion) => {
						return (
							<article key={suggestion.name + suggestion.country}>
								<div>
									{suggestion.name}, {suggestion.country}
								</div>
								<button
									onClick={() => {
										handleAddButton(suggestion);
									}}
								>
									Add
								</button>
							</article>
						);
					})}
				</section>
			)}
		</SearchbarContainer>
	);
};

export default Searchbar;
