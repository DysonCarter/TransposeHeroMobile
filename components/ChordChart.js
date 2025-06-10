import {View, Text} from 'react-native';

function ChordChart({shapeValue, keyValue}) {
    return(
        <View>
            <Text>{shapeValue}, {keyValue}</Text>
        </View>
    )
}

export default ChordChart;