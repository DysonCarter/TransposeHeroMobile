import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

function ChordChart({ shapeValue, keyValue }) {
    const keyDict = {
        1: 'A', 2: 'B♭', 3: 'B', 4: 'C', 5: 'D♭', 6: 'D',
        7: 'E♭', 8: 'E', 9: 'F', 10: 'G♭', 11: 'G', 12: 'A♭'
    };

    const getChord = (root, interval, suffix = '') => {
        const index = ((root + interval - 1) % 12) + 1;
        return keyDict[index] + suffix;
    };

    const getCapo = (start, end) => {
        if (start === end) return 0;
        const capo = (start - end + 12) % 12;
        return capo === 0 ? 12 : capo;
    };

    const [chordTableData, setChordTableData] = useState([]);

    useEffect(() => {
        const intervals = [
            { suffix: '', interval: 0 },
            { suffix: 'm', interval: 2 },
            { suffix: 'm', interval: 4 },
            { suffix: '', interval: 5 },
            { suffix: '', interval: 7 },
            { suffix: 'm', interval: 9 },
            { suffix: 'dim', interval: 11 }
        ];

        const youPlay = ['You Play:', ...intervals.map(i => getChord(shapeValue, i.interval, i.suffix))];
        const degrees = ['#:', 'I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii°'];
        const youHear = ["You're actually playing:", ...intervals.map(i => getChord(keyValue, i.interval, i.suffix))];

        setChordTableData([youPlay, degrees, youHear]);
    }, [shapeValue, keyValue]);

    const capoPosition = getCapo(keyValue, shapeValue);

    return (
        <View style={styles.container}>
            <View style={styles.capoContainer}>
                <Text style={styles.capoLabel}>Capo Position:</Text>
                <Text style={styles.capoValue}>{capoPosition}</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={true}>
                <View style={styles.tableContainer}>
                    <Table borderStyle={styles.tableBorder}>
                        <Rows 
                            data={chordTableData} 
                            textStyle={styles.tableText}
                            style={styles.tableRow}
                            widthArr={[120, 60, 60, 60, 60, 60, 60, 60]}
                        />
                    </Table>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    capoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        backgroundColor: '#e3f2fd',
        padding: 10,
        borderRadius: 8,
    },
    capoLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1976d2',
        marginRight: 8,
    },
    capoValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1976d2',
    },
    tableContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    tableBorder: {
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    tableRow: {
        height: 60,
        backgroundColor: '#f5f5f5',
    },
    tableText: {
        textAlign: 'center',
        fontSize: 14,
        color: '#2c3e50',
        padding: 8,
        flexWrap: 'wrap',
    },
});

export default ChordChart;
