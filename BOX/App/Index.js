import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import List from './List';

export default class App extends Component<{}> {
	render() {
		return (
			<View style={styles.container}>
				<List />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	header: {
		flex: 0.2,
		backgroundColor: 'green'
	},
	footer: {
		flex: 3,
		backgroundColor: 'blue',
		justifyContent: 'center'
	},
	footerText: {
		alignSelf: 'center',
		color: '#fff'
	}
});
