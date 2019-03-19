import React from 'react';
import { SafeAreaView, StyleSheet, Platform, NativeModules } from "react-native";
import { ThemeProvider } from 'react-native-elements';

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0;
const THEME = {
    SearchBar: {
        lightTheme: true
    },
};

export default class FullScreen extends React.Component {

    render() {
        return (
            <ThemeProvider theme={THEME}>
                <SafeAreaView style={styles.safeArea}>
                    {this.props.children}
                </SafeAreaView>
            </ThemeProvider>
        );
    }
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: STATUSBAR_HEIGHT
    }
});