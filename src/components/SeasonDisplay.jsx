import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
	summer: {
		text: `let's hit the beach`,
		iconName: 'sun',
	},
	winter: {
		text: `brrr it's cold`,
		iconName: 'snowflake',
	},
};

const getSeason = (lat, mon) => {
	console.log(lat, mon);

	if (lat > 0) {
		if (mon > 2 && mon < 9) {
			return 'summer';
		} else {
			return 'winter';
		}
	} else {
		if (mon > 2 && mon < 9) {
			return 'winter';
		} else {
			return 'summer';
		}
	}
};

const SeasonDisplay = props => {
	const date = new Date().getMonth();

	const season = getSeason(props.lat, date);


	const { text, iconName } = seasonConfig[season];

	return (
		<div className={`season-display ${season}`}>
			<i className={`${iconName} massive icon icon-left`}></i>
			<div className='text-center'>{text}</div>
			<i className={`${iconName} massive icon icon-right`}></i>
		</div>
	);
};

export default SeasonDisplay;
