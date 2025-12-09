import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EarningsActivityScreen({ navigation }) {
    // Mock Data for trips
    const trips = [
        {
            id: 1,
            price: '€33.13',
            tag: 'Increased',
            type: 'UberX',
            duration: '26 min 20 sec',
            distance: '30.33 km',
            time: '5:20 PM',
            mapImg: 'https://via.placeholder.com/300x100/333/fff?text=Map+Route', // Placeholder
            pickup: 'Carrer Rovira i Virgili 08195 Sant Cugat del Vallès, ES',
            dropoff: 'Terminal 2, Aeropuerto Josep Tarradellas Barcelona-El Prat (BCN) 08820 Barcelona, ES'
        },
        {
            id: 2,
            price: '€12.16',
            tag: null,
            type: 'UberX',
            duration: '11 min 21 sec',
            distance: '6.67 km',
            time: '12:36 PM',
            mapImg: 'https://via.placeholder.com/300x100/333/fff?text=Map+Route+2',
            pickup: 'Av. de Francesc Macià 08208 Sabadell, ES',
            dropoff: '08205 Sabadell, ES'
        },
        {
            id: 3,
            price: '€13.70',
            tag: null,
            type: 'UberX',
            duration: '14 min 59 sec',
            distance: '15.83 km',
            time: '12:08 PM',
            mapImg: 'https://via.placeholder.com/300x100/333/fff?text=Map+Route+3',
            pickup: 'Sabadell',
            dropoff: 'Mollet del Vallès'
        }
    ];

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color={colors.white} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Earnings activity</Text>
                <View style={styles.filterIcon}>
                    <Ionicons name="filter" size={20} color={colors.white} />
                </View>
            </View>

            {/* Filters */}
            <View style={styles.filtersContainer}>
                <TouchableOpacity style={styles.filterChip}>
                    <Text style={styles.filterText}>Type</Text>
                    <Ionicons name="chevron-down" size={12} color={colors.white} style={{ marginLeft: 4 }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterChip}>
                    <Text style={styles.filterText}>Feature</Text>
                    <Ionicons name="chevron-down" size={12} color={colors.white} style={{ marginLeft: 4 }} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.filterChip, styles.activeFilter]}>
                    <Ionicons name="calendar" size={12} color={colors.black} style={{ marginRight: 4 }} />
                    <Text style={styles.activeFilterText}>8/12 - 9/12</Text>
                    <Ionicons name="chevron-down" size={12} color={colors.black} style={{ marginLeft: 4 }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.clearButton}>
                    <Text style={styles.clearText}>Clear all</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.dateHeader}>Mon, Dec 8</Text>

                {trips.map((trip) => (
                    <TouchableOpacity key={trip.id} style={styles.tripCard} onPress={() => navigation.navigate('TripDetails', { tripId: trip.id })}>
                        <View style={styles.tripHeader}>
                            <View style={styles.tripInfoLeft}>
                                <View style={styles.userIconPlaceholder}>
                                    <Ionicons name="person" size={16} color="#ccc" />
                                </View>
                                <View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={styles.tripPrice}>{trip.price}</Text>
                                        {trip.tag && (
                                            <View style={styles.tagBadge}>
                                                <Ionicons name="arrow-up" size={10} color="#1f442b" />
                                                <Text style={styles.tagText}>{trip.tag}</Text>
                                            </View>
                                        )}
                                    </View>
                                    <Text style={styles.tripSubtext}>{trip.type} · {trip.duration} · {trip.distance}</Text>
                                </View>
                            </View>
                            <Text style={styles.tripTime}>{trip.time}</Text>
                        </View>

                        {/* Map Snippet */}
                        <View style={styles.mapContainer}>
                            {/* In a real app we'd use <MapView> with liteMode, but screenshot shows a static looking map snippet. */}
                            <Image
                                source={{ uri: trip.mapImg }}
                                style={styles.mapImage}
                            />
                            {/* Decoration over image to mimic the line and dots */}
                            {/* Skipping complex SVG overlay for now, using image placeholder */}
                        </View>

                        {/* Addresses */}
                        <View style={styles.addressContainer}>
                            <View style={styles.timeline}>
                                <View style={styles.dot} />
                                <View style={styles.line} />
                                <View style={styles.square} />
                            </View>
                            <View style={styles.addressTextContainer}>
                                <Text style={styles.addressText} numberOfLines={1}>{trip.pickup}</Text>
                                <View style={{ height: 15 }} />
                                <Text style={styles.addressText} numberOfLines={2}>{trip.dropoff}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
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
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        justifyContent: 'space-between',
    },
    headerTitle: {
        color: colors.white,
        fontSize: 18,
        fontWeight: '500',
    },
    filterIcon: {
        backgroundColor: '#333',
        padding: 8,
        borderRadius: 20,
    },
    filtersContainer: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingBottom: 10,
        alignItems: 'center',
    },
    filterChip: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#333',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        marginRight: 8,
    },
    filterText: {
        color: colors.white,
        fontSize: 14,
    },
    activeFilter: {
        backgroundColor: colors.white,
    },
    activeFilterText: {
        color: colors.black,
        fontSize: 14,
        fontWeight: '500',
    },
    clearButton: {
        marginLeft: 'auto',
    },
    clearText: {
        color: colors.white,
        fontSize: 14,
    },
    content: {
        paddingBottom: 20,
    },
    dateHeader: {
        color: '#A6A6A6',
        fontSize: 14,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    tripCard: {
        backgroundColor: colors.black,
        borderBottomWidth: 1,
        borderBottomColor: '#222',
        paddingVertical: 15,
    },
    tripHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    tripInfoLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userIconPlaceholder: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    tripPrice: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 8,
    },
    tagBadge: {
        backgroundColor: '#b9f6ca', // light green like screenshot
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 4,
        paddingVertical: 1,
        borderRadius: 4,
    },
    tagText: {
        color: '#1f442b',
        fontSize: 10,
        fontWeight: 'bold',
    },
    tripSubtext: {
        color: '#A6A6A6',
        fontSize: 12,
    },
    tripTime: {
        color: '#A6A6A6',
        fontSize: 14,
    },
    mapContainer: {
        height: 100,
        marginHorizontal: 15,
        borderRadius: 8, // Screenshot looks like rounded card? Wait, screenshot trip list map is full width of card content?
        // Actually screenshot 3 shows map in list. It spans nicely.
        overflow: 'hidden',
        marginBottom: 10,
    },
    mapImage: {
        width: '100%',
        height: '100%',
        opacity: 0.8,
    },
    addressContainer: {
        flexDirection: 'row',
        paddingHorizontal: 15,
    },
    timeline: {
        alignItems: 'center',
        marginRight: 10,
        paddingTop: 4,
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#A6A6A6',
    },
    line: {
        width: 1,
        height: 25,
        backgroundColor: '#A6A6A6',
        marginVertical: 2,
    },
    square: {
        width: 6,
        height: 6,
        borderWidth: 1,
        borderColor: '#A6A6A6',
    },
    addressTextContainer: {
        flex: 1,
    },
    addressText: {
        color: '#A6A6A6',
        fontSize: 13,
    },
});
