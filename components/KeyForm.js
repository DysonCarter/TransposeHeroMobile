import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import ChordChart from './ChordChart';

function KeyForm() {
    const [selectedShapeValue, setSelectedShapeValue] = useState(11);
    const [selectedKeyValue, setSelectedKeyValue] = useState(1);

    return (
    <View>
        <Text>Using the shapes of:</Text>
        <Picker 
        selectedValue={selectedShapeValue}
        onValueChange={(itemValue) => setSelectedShapeValue(itemValue)}>
            <Picker.Item label="A" value={1}/>
            <Picker.Item label="B♭" value={2}/>
            <Picker.Item label="B" value={3}/>
            <Picker.Item label="C" value={4}/>
            <Picker.Item label="D♭" value={5}/>
            <Picker.Item label="D" value={6}/>
            <Picker.Item label="E♭" value={7}/>
            <Picker.Item label="E" value={8}/>
            <Picker.Item label="F" value={9}/>
            <Picker.Item label="G♭" value={10}/>
            <Picker.Item label="G" value={11}/>
            <Picker.Item label="A♭" value={12}/>
        </Picker>

        <Text>I want to play in the key of:</Text>
        <Picker 
        selectedValue={selectedKeyValue}
        onValueChange={(itemValue) => setSelectedKeyValue(itemValue)}>
            <Picker.Item label="A" value={1}/>
            <Picker.Item label="B♭" value={2}/>
            <Picker.Item label="B" value={3}/>
            <Picker.Item label="C" value={4}/>
            <Picker.Item label="D♭" value={5}/>
            <Picker.Item label="D" value={6}/>
            <Picker.Item label="E♭" value={7}/>
            <Picker.Item label="E" value={8}/>
            <Picker.Item label="F" value={9}/>
            <Picker.Item label="G♭" value={10}/>
            <Picker.Item label="G" value={11}/>
            <Picker.Item label="A♭" value={12}/>
        </Picker>

        <ChordChart shapeValue={selectedShapeValue} keyValue={selectedKeyValue}/>
    </View>
    );
}

export default KeyForm;