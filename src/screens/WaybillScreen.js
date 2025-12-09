import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WaybillScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="close" size={24} color={colors.white} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Waybill</Text>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.paper}>
                    <Text style={styles.title}>CONTRATO</Text>
                    <Text style={styles.legalText}>
                        En aquellos casos en los que la copia acreditativa del contrato contenga los mismos datos exigibles para la hoja de ruta, no será necesario cumplimentar ésta (Art. 24 ORDEN FOM 36/2008)
                    </Text>

                    <View style={styles.table}>
                        <View style={styles.tableHeader}>
                            <Text style={styles.tableTitleText}>Proveedor del servicio de transporte:</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.label}>Nombre:</Text>
                            <Text style={styles.value}>KIPLAN NEGOCIOS S,L</Text>
                        </View>
                        <View style={styles.separator} />
                        <View style={styles.row}>
                            <Text style={styles.label}>NIF:</Text>
                            <Text style={styles.value}>ESB67106112</Text>
                        </View>
                        <View style={styles.separator} />
                        <View style={styles.row}>
                            <Text style={styles.label}>Matrícula:</Text>
                            <Text style={styles.value}>1726-LVD</Text>
                        </View>
                    </View>

                    <View style={[styles.table, { borderTopWidth: 0 }]}>
                        <View style={styles.tableHeader}>
                            <Text style={styles.tableTitleText}>Cliente:</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.label}>Nombre:</Text>
                            <Text style={styles.value}>Marina Kartashova</Text>
                        </View>
                        <View style={styles.separator} />
                        <View style={styles.row}>
                            <Text style={styles.label}>ID:</Text>
                            <Text style={styles.value}>Pedir al pasajero</Text>
                        </View>
                    </View>

                    <Text style={styles.dateText}>
                        Fecha / lugar del contrato y servicio: BARCELONA, 1 del 12 de 2025 19:14
                    </Text>

                    <View style={styles.grid}>
                        <View style={styles.gridHeader}>
                            <Text style={[styles.gridHeaderText, { flex: 2 }]}>Lugar / Dirección</Text>
                            <Text style={[styles.gridHeaderText, { flex: 1, textAlign: 'right' }]}>Hora</Text>
                        </View>
                        <View style={styles.separator} />
                        <View style={styles.gridRow}>
                            <Text style={[styles.gridLabel, { flex: 0.5 }]}>Origen</Text>
                            <Text style={[styles.gridValue, { flex: 1.5 }]}>Carrer Rovira i Virgili 08195 Sant Cugat del Vallès, ES</Text>
                            <Text style={[styles.gridTime, { flex: 0.5 }]}>17:54</Text>
                        </View>
                        <View style={styles.separator} />
                        <View style={styles.gridRow}>
                            <Text style={[styles.gridLabel, { flex: 0.5 }]}>Destino</Text>
                            <Text style={[styles.gridValue, { flex: 1.5 }]}>Terminal 2, Aeropuerto Josep Tarradellas Barcelona-El Prat (BCN) 08820 Barcelona, ES</Text>
                            <Text style={[styles.gridTime, { flex: 0.5 }]}>18:21</Text>
                        </View>
                    </View>

                    <Text style={styles.footerText}>
                        Condiciones de la contratación del servicio y su normativa en la página web de acceso a la solicitud, conforme a Ley 34/2002 de Servicios de la Sociedad de la Información y de Comercio Electrónico, habiéndo sido aceptadas con la petición a través de la app. Si el recorrido cambia, el precio se ajustará en base a las tarifas establecidas.
                    </Text>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333', // Dark background for the screen outside paper
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#222', // Slightly lighter header
        alignItems: 'center',
    },
    headerTitle: {
        color: colors.white,
        fontSize: 18,
        fontWeight: '500',
    },
    content: {
        paddingHorizontal: 0,
        flexGrow: 1,
        backgroundColor: colors.white, // Paper is white
    },
    paper: {
        backgroundColor: colors.white,
        padding: 20,
        minHeight: '100%',
    },
    title: {
        color: colors.black,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'left',
    },
    legalText: {
        color: colors.black,
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'justify',
    },
    table: {
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: -1, // Collapse borders
    },
    tableHeader: {
        backgroundColor: '#f9f9f9',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    tableTitleText: {
        fontWeight: 'bold',
        fontSize: 13,
    },
    row: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    label: {
        fontWeight: 'bold',
        width: 80,
        fontSize: 13,
    },
    value: {
        flex: 1,
        fontSize: 13,
    },
    separator: {
        height: 1,
        backgroundColor: '#ccc',
    },
    dateText: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 13,
        color: colors.black,
    },
    grid: {
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 20,
    },
    gridHeader: {
        flexDirection: 'row',
        padding: 10,
    },
    gridHeaderText: {
        fontWeight: 'bold',
        fontSize: 13,
    },
    gridRow: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'flex-start', // Align top for multi-line address
    },
    gridLabel: {
        fontWeight: 'bold',
        fontSize: 13,
    },
    gridValue: {
        fontSize: 13,
        paddingHorizontal: 5,
    },
    gridTime: {
        fontSize: 13,
        textAlign: 'right',
    },
    footerText: {
        fontSize: 11,
        color: '#333',
        textAlign: 'justify',
        lineHeight: 16,
    },
});
