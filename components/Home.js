import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { searchRecipes } from '../services/EdmamApi'
import FullScreen from './FullScreen'
import Search from './Search'
import Recipes from './Recipes';
import SnackBar from 'react-native-snackbar-component';

const ERROR_VISIBLE_TIMEOUT_MS = 2500;

export default class Home extends React.Component {
    state = {
        search: '',
        showLoader: false,
        recipes: [],
        showError: false
    }

    searchSubmitted(search) {
        this.setState({ search: search, showLoader: true });
        this.loadRecipes(search)
    }

    clearSearch() {
        this.setState({
            search: '',
            recipes: [],
            showLoader: false
        })
    }

    loadRecipes(query) {
        searchRecipes(query)
            .then((responseJson) => this.handleSuccess(responseJson))
            .catch((errorStatus) => this.handleError(errorStatus));
    }

    handleSuccess(response) {
        var hits = response.hits
        var mappedHits = hits.map(this.recipeFromResponse)
        this.setState({
            recipes: mappedHits,
            showLoader: false,
            showError: false
        })
        console.log(hits.length + " results!");
    }

    handleError(errorMessage) {
        console.log(errorMessage);
        this.clearSearch();
        this.setState({
            showError: true,
            errorMessage: errorMessage
        })
    }

    recipeFromResponse(item, index) {
        let recipe = {
            "key": index,
            "name": item.recipe.label,
            "image": item.recipe.image,
            "source": item.recipe.source,
            "url": item.recipe.url
        };
        return recipe;
    }

    loadingSpinner() {
        return <View style={styles.loading} >
            <ActivityIndicator animating={true} size="large" color="green" />
        </View>
    }

    recipeList() {
        return <Recipes recipes={this.state.recipes} loading={this.state.showLoader} onSelected={(url) => this.onItemSelected(url)} />
    }

    onItemSelected(url) {
        const { navigate } = this.props.navigation;
        navigate('Details', { url })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.showError) {
            setTimeout(() => {
                this.setState(() => ({ showError: false }))
            }, ERROR_VISIBLE_TIMEOUT_MS);
        }
    }

    render() {
        return (
            <FullScreen style={styles.container}>
                <Search searchSubmit={search => this.searchSubmitted(search)} />
                {this.state.showLoader ? this.loadingSpinner() : this.recipeList()}
                <SnackBar visible={this.state.showError} textMessage={this.state.errorMessage} />
            </FullScreen>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        flexDirection: 'column'
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BBC4CD'
    }
});
