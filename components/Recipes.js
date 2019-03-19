import React from 'react';
import { StyleSheet, View, ScrollView, FlatList, Text } from 'react-native';
import Recipe from './Recipe'

const emptyMessage = "No results..."

class Recipes extends React.Component {

    keyExtractor = (item, index) => index.toString();

    renderRecipe = ({ item: recipe }) => {
        return <Recipe
            title={recipe.name}
            image_url={recipe.image}
            source={recipe.source}
            onSelected={(url) => this.props.onSelected(url)}
            url={recipe.url} />
    }

    checkShowEmpty() {
        const recipes = this.props.recipes
        if (recipes === undefined || recipes.length === 0) {
            return <Text style={styles.empty}>{emptyMessage}</Text>
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.checkShowEmpty()}
                <ScrollView>
                    <FlatList
                        data={this.props.recipes}
                        renderItem={item => this.renderRecipe(item)}
                        keyExtractor={this.keyExtractor}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BBC4CD',
        flexDirection: "column",
        justifyContent: "center"
    },
    empty: {
        fontSize: 24,
        alignSelf: "center",
        textAlign: 'center',
        flex: 1,
        position: 'absolute',
        color: "#555"
    }
});

export default Recipes;