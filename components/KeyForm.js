import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

function KeyForm() {
    const [selectedValue, setSelectedValue] = useState(1);

    return (
    <View>
        <Text>Using the shapes of:</Text>
        <Picker 
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}>
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
    </View>
    );
}

export default KeyForm;