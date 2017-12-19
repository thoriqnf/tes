import React, { Component } from 'react';
import { ListView, Text, View } from 'react-native';
import Listt from './components/Listt';

export default class MyList extends Component {
	MyList = ['List1', 'List2', 'List3'];
	constructor() {
		super();
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });
		this.state = {
			dataSource: ds.cloneWithRows(this.MyList)
		};
	}
	render() {
		return (
			<View>
				<Text>With DataSource:</Text>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={rowData => <Listt MyList={rowData} />}
				/>
				<Text>With maps :</Text>
				{this.MyList.map((MyList, key) => <Text key={key}>{MyList}</Text>)}
			</View>
		);
	}
}
