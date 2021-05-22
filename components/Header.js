import React from 'react';
import { View, Text } from 'react-native';

const Header = props => {
    return (
        <View>
            <Text>{props.title}</Text>
        </View>
    )

}

const styles = StyleSheet.create({});

export default Header;