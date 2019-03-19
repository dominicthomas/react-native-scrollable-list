import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';

/**
 * For iOS clear text problems.. see:
 * https://github.com/react-native-training/react-native-elements/issues/234
 * https://github.com/facebook/react-native/issues/13251
 */
export default class Search extends React.Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        return (
            <SearchBar style={styles.search}
                placeholder="Search recipes..."
                onChangeText={this.updateSearch}
                returnKeyType='search'
                autoFocus={true}
                value={this.state.search}
                onSubmitEditing={(event) => this.props.searchSubmit(event.nativeEvent.text)} />
        );
    }
}

const styles = StyleSheet.create({
    search: {
        flex: 1
    },
});
