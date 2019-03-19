import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Recipe = ({ title, image_url, source, onSelected, url }) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => onSelected(url)}>
            <View style={styles.content}>
                <Image source={{ uri: image_url }} resizeMode="cover" style={styles.image} />
                <View style={styles.text_container}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </View>
            <Text style={styles.source} >{source}</Text>
        </TouchableOpacity>
    </View >
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2
    },
    content: {
        flex: 1,
        flexDirection: 'row'
    },
    title: {
        fontSize: 22,
        color: '#777',
    },
    text_container: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    source: {
        flex: 1,
        flexDirection: 'row',
        height: 20,
        marginTop: 16,
        textAlign: 'right',
        alignSelf: 'stretch'
    },
    image: {
        height: 120,
        width: 120,
    },
});

export default Recipe;