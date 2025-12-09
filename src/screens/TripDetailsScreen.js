import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../styles/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TripDetailsScreen({ route, navigation }) {
    // In a real app, use route.params.tripId to fetch data
    // Mock data based on screenshot
    const trip = {
        date: 'UberX · 8 Dec 2025 · 17:20',
        price: '€33.13',
        upfront: 'Upfront price: €32.65',
        bannerText: 'You earned more for this trip because you got a wait-time fee.',
        duration: '26 min(s) 20 sec(s)',
        distance: '30.33 km',
        points: 3,
        mapImg: 'https://via.placeholder.com/400x200/333/fff?text=Detailed+Trip+Map',
        pickup: 'Carrer Rovira i Virgili 08195 Sant Cugat del Vallès, ES',
        dropoff: 'Terminal 2, Aeropuerto Josep Tarradellas Barcelona-El Prat (BCN) 08820 Barcelona, ES'
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color={colors.white} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Trip details</Text>
                <TouchableOpacity>
                    <Ionicons name="help-circle-outline" size={24} color={colors.white} />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.subHeader}>{trip.date}</Text>
                <Text style={styles.price}>{trip.price}</Text>
                <Text style={styles.upfront}>{trip.upfront}</Text>

                <View style={styles.banner}>
                    <Ionicons name="arrow-up" size={20} color={colors.white} style={{ marginRight: 10 }} />
                    <Text style={styles.bannerText}>{trip.bannerText}</Text>
                </View>

                {/* Map */}
                <View style={styles.mapContainer}>
                    <Image source={{ uri: trip.mapImg }} style={styles.mapImage} />
                    {/* Overlay mock markers */}
                    <View style={[styles.marker, { top: 50, left: 150, backgroundColor: colors.uberGreen }]}>
                        <Ionicons name="car" size={14} color={colors.white} />
                    </View>
                    <View style={[styles.marker, { bottom: 50, right: 150, backgroundColor: colors.errorRed }]}>
                        <Ionicons name="car" size={14} color={colors.white} />
                    </View>
                </View>

                {/* Stats Row */}
                <View style={styles.statsRow}>
                    <View>
                        <Text style={styles.statLabel}>Duration</Text>
                        <Text style={styles.statValue}>{trip.duration}</Text>
                    </View>
                    <View>
                        <Text style={styles.statLabel}>Distance</Text>
                        <Text style={styles.statValue}>{trip.distance}</Text>
                    </View>
                </View>

                <View style={styles.divider} />

                {/* Address Timeline */}
                <View style={styles.addressContainer}>
                    <View style={styles.timeline}>
                        <View style={styles.dot} />
                        <View style={styles.line} />
                        <View style={styles.square} />
                    </View>
                    <View style={styles.addressTextContainer}>
                        <Text style={styles.addressText}>{trip.pickup}</Text>
                        <View style={{ height: 40 }} />
                        <Text style={styles.addressText}>{trip.dropoff}</Text>
                    </View>
                </View>

                <View style={styles.divider} />

                <View style={styles.pointsRow}>
                    <MaterialCommunityIcons name="rhombus-medium" size={18} color={colors.white} />
                    <Text style={styles.pointsText}>{trip.points} points earned</Text>
                </View>

                <View style={styles.divider} />

                <Text style={styles.sectionHeader}>Your earnings</Text>
                {/* Could add breakdown here if needed */}

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: 'center',
    },
    headerTitle: {
        color: colors.white,
        fontSize: 18,
        fontWeight: '500',
    },
    content: {
        paddingBottom: 30,
    },
    subHeader: {
        color: '#A6A6A6',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10,
    },
    price: {
        color: colors.white,
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
    },
    upfront: {
        color: '#A6A6A6',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 20,
    },
    banner: {
        backgroundColor: '#1f442b', // Dark green background
        marginHorizontal: 20,
        padding: 15,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    bannerText: {
        color: '#e2f5ea', // Light green text
        fontSize: 14,
        flex: 1,
    },
    mapContainer: {
        height: 200,
        width: '100%',
        marginBottom: 20,
        position: 'relative',
    },
    mapImage: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
    },
    marker: {
        position: 'absolute',
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around', // Changed to space-around for better match
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    statLabel: {
        color: '#999',
        fontSize: 14,
        marginBottom: 5,
    },
    statValue: {
        color: colors.white,
        fontSize: 18,
    },
    divider: {
        height: 1,
        backgroundColor: '#333',
        marginHorizontal: 20,
        marginVertical: 20,
    },
    addressContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    timeline: {
        alignItems: 'center',
        marginRight: 15,
        paddingTop: 6,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: colors.white, // White dot in detail view
    },
    line: {
        width: 2,
        height: 50,
        backgroundColor: colors.white,
        marginVertical: 4,
    },
    square: {
        width: 8,
        height: 8,
        backgroundColor: colors.white, // Solid square
    },
    addressTextContainer: {
        flex: 1,
    },
    addressText: {
        color: colors.white, // White text in detail view
        fontSize: 16,
        lineHeight: 22,
    },
    pointsRow: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    pointsText: {
        color: colors.white,
        marginLeft: 10,
        fontSize: 16,
    },
    sectionHeader: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 20,
    },
});
