import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function WavyHeader({ customStyles }) {
		return (
			<View style={customStyles}>
				<View style={{ backgroundColor: '#4CAF50', height: 260}}>
					<Svg
						height="60%"
						width="100%"
						viewBox="0 0 1440 320"
						style={{ position: 'absolute', top: 210}}
					>
						<Path
						 fill="#4caf50" fill-opacity="1" d="M0,320L1440,224L1440,0L0,0Z"
						/>
					</Svg>
				</View>
			</View>
		);
	}
