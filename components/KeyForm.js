import { View, Text, StyleSheet, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import ChordChart from './ChordChart';

function KeyForm() {
    const [selectedShapeValue, setSelectedShapeValue] = useState(11);
    const [selectedKeyValue, setSelectedKeyValue] = useState(1);

    return (
    <View style={styles.container}>
        <View style={styles.pickerContainer}>
            <Text style={styles.label}>Using the shapes of:</Text>
            <View style={styles.pickerWrapper}>
                <Picker 
                    selectedValue={selectedShapeValue}
                    onValueChange={(itemValue) => setSelectedShapeValue(itemValue)}
                    style={styles.picker}
                    dropdownIconColor="#2c3e50"
                    mode="dropdown"
                    itemStyle={styles.pickerItem}>
                    <Picker.Item label="A" value={1} color="#2c3e50"/>
                    <Picker.Item label="B♭" value={2} color="#2c3e50"/>
                    <Picker.Item label="B" value={3} color="#2c3e50"/>
                    <Picker.Item label="C" value={4} color="#2c3e50"/>
                    <Picker.Item label="D♭" value={5} color="#2c3e50"/>
                    <Picker.Item label="D" value={6} color="#2c3e50"/>
                    <Picker.Item label="E♭" value={7} color="#2c3e50"/>
                    <Picker.Item label="E" value={8} color="#2c3e50"/>
                    <Picker.Item label="F" value={9} color="#2c3e50"/>
                    <Picker.Item label="G♭" value={10} color="#2c3e50"/>
                    <Picker.Item label="G" value={11} color="#2c3e50"/>
                    <Picker.Item label="A♭" value={12} color="#2c3e50"/>
                </Picker>
            </View>
        </View>

        <View style={styles.pickerContainer}>
            <Text style={styles.label}>I want to play in the key of:</Text>
            <View style={styles.pickerWrapper}>
                <Picker 
                    selectedValue={selectedKeyValue}
                    onValueChange={(itemValue) => setSelectedKeyValue(itemValue)}
                    style={styles.picker}
                    dropdownIconColor="#2c3e50"
                    mode="dropdown"
                    itemStyle={styles.pickerItem}>
                    <Picker.Item label="A" value={1} color="#2c3e50"/>
                    <Picker.Item label="B♭" value={2} color="#2c3e50"/>
                    <Picker.Item label="B" value={3} color="#2c3e50"/>
                    <Picker.Item label="C" value={4} color="#2c3e50"/>
                    <Picker.Item label="D♭" value={5} color="#2c3e50"/>
                    <Picker.Item label="D" value={6} color="#2c3e50"/>
                    <Picker.Item label="E♭" value={7} color="#2c3e50"/>
                    <Picker.Item label="E" value={8} color="#2c3e50"/>
                    <Picker.Item label="F" value={9} color="#2c3e50"/>
                    <Picker.Item label="G♭" value={10} color="#2c3e50"/>
                    <Picker.Item label="G" value={11} color="#2c3e50"/>
                    <Picker.Item label="A♭" value={12} color="#2c3e50"/>
                </Picker>
            </View>
        </View>

        <ChordChart shapeValue={selectedShapeValue} keyValue={selectedKeyValue}/>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    pickerContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#2c3e50',
        marginBottom: 8,
    },
    pickerWrapper: {
        backgroundColor: '#f8f9fa',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e9ecef',
        overflow: 'hidden',
    },
    picker: {
        height: 50,
        width: '100%',
        color: '#2c3e50',
        backgroundColor: '#ffffff',
    },
    pickerItem:{
        height: 50,
        fontSize: 16,
    }
});

export default KeyForm;