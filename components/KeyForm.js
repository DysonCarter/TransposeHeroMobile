import { View, Text, Picker } from 'react-native';
import { useState } from 'react';

function KeyForm() {
    const [selectedValue, setSelectedValue] = useState(1);

    return (
    <View>
        <Text>Using the shapes of:</Text>
        <Picker 
        id="transposed"
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}>
            <Picker.Item label="A" value={1}/>
        </Picker>
    </View>
    );
}

export default KeyForm;