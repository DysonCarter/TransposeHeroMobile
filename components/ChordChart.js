import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
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
        <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>
                Capo on fret: {capoPosition}
            </Text>
            <Table borderStyle={{ borderWidth: 1, borderColor: '#000' }}>
                <Rows data={chordTableData} />
            </Table>
        </View>
    );
}

export default ChordChart;
