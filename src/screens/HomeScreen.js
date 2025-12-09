import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { colors } from '../styles/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
    const [isOnline, setIsOnline] = useState(false);
    const [activeCardIndex, setActiveCardIndex] = useState(0); // 0: None/Map, 1: Today, 2: Last Trip, 3: Recommended

    // Toggle Go
    const handleGoPress = () => {
        setIsOnline(!isOnline);
    };

    return (
        <View style={styles.container}>
            {/* Map Background (Placeholder Image) */}
            {/* Using a color view to avoid network errors for now, or use a reliable asset if available */}
            <View style={[styles.mapBackground, { backgroundColor: '#2f3136' }]} />

            {/* Map Grid Pattern Overlay (Optional CSS trick to make it look map-like) */}
            <View style={styles.mapOverlay} pointerEvents="none" />

            {/* Top Bar Area */}
            <SafeAreaView style={styles.safeArea} edges={['top']}>
                <View style={styles.topBar}>
                    {/* Menu Button */}
                    <TouchableOpacity style={styles.roundButton} onPress={() => navigation.openDrawer()}>
                        <Ionicons name="menu" size={28} color={colors.white} />
                        {/* Notification Badge */}
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>9</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Earnings Pill (Center) */}
                    <TouchableOpacity
                        style={styles.earningsPill}
                        onPress={() => navigation.navigate('EarningsHome')}
                    >
                        <Text style={styles.earningsText}>€0.00</Text>
                    </TouchableOpacity>

                    {/* Search Button */}
                    <TouchableOpacity style={styles.roundButton} onPress={() => navigation.navigate('Search')}>
                        <Ionicons name="search" size={24} color={colors.white} />
                    </TouchableOpacity>
                </View>

                {/* Top Cards Carousel (Swipeable) */}
                <View style={styles.carouselContainer}>
                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        style={styles.carouselScrollView}
                        contentContainerStyle={styles.carouselContent}
                    >
                        {/* Card 1: Invisible/Empty (Just view map) */}
                        <View style={styles.cardWrapper}>
                            <View style={styles.emptyCard} />
                        </View>

                        {/* Card 2: Today Stats (Screenshot 3) */}
                        <View style={styles.cardWrapper}>
                            <TouchableOpacity style={styles.blackCard} onPress={() => navigation.navigate('EarningsHome')}>
                                <View style={styles.cardHeader}>
                                    <Ionicons name="eye-outline" size={20} color={colors.white} />
                                    <View style={styles.pillSmall}>
                                        <Text style={styles.pillText}>€0.00</Text>
                                    </View>
                                    <View style={{ width: 20 }} />
                                </View>
                                <Text style={styles.cardTitle}>TODAY</Text>
                                <View style={styles.cardStats}>
                                    <Text style={styles.statLine}>0 trips completed</Text>
                                    <View style={styles.pointsRow}>
                                        <Ionicons name="diamond" size={14} color={colors.primaryBlue} />
                                        <Text style={styles.statLine}> 0 points</Text>
                                    </View>
                                </View>
                                <View style={styles.cardFooter}>
                                    <Text style={styles.cardAction}>VIEW WEEKLY SUMMARY</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        {/* Card 3: Last Trip (Screenshot 4) */}
                        <View style={styles.cardWrapper}>
                            <TouchableOpacity style={styles.blackCard} onPress={() => navigation.navigate('EarningsActivity')}>
                                <View style={styles.cardHeader}>
                                    <Ionicons name="eye-outline" size={20} color={colors.white} />
                                    <View style={styles.pillSmall}>
                                        <Text style={styles.pillText}>€33.13</Text>
                                    </View>
                                    <Ionicons name="help-circle-outline" size={20} color={colors.white} />
                                </View>
                                <Text style={styles.cardTitle}>LAST TRIP</Text>
                                <View style={styles.cardStats}>
                                    <Text style={[styles.statLine, { fontSize: 16, fontWeight: 'bold' }]}>Dec 8 at 5:20 PM</Text>
                                    <View style={styles.pointsRow}>
                                        <Text style={styles.statLine}>UberX </Text>
                                        <Ionicons name="diamond" size={12} color={colors.primaryBlue} />
                                        <Text style={styles.statLine}> 3 points</Text>
                                    </View>
                                </View>
                                <View style={styles.cardFooter}>
                                    <Text style={styles.cardAction}>SEE EARNINGS ACTIVITY</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        {/* Card 4: Recommended (Screenshot 2) */}
                        <View style={styles.cardWrapper}>
                            <View style={styles.blackCard}>
                                <View style={[styles.cardHeader, { justifyContent: 'space-between' }]}>
                                    <Ionicons name="chevron-down" size={24} color={colors.white} />
                                    <Text style={[styles.cardTitle, { marginTop: 0 }]}>Recommended for you</Text>
                                    <Ionicons name="list" size={24} color={colors.white} />
                                </View>

                                <TouchableOpacity style={styles.recommendItem}>
                                    <Ionicons name="speedometer-outline" size={24} color={colors.white} style={{ marginRight: 15 }} />
                                    <Text style={styles.recommendText}>See driving time</Text>
                                </TouchableOpacity>
                                <View style={styles.divider} />
                                <TouchableOpacity style={styles.recommendItem} onPress={() => navigation.navigate('Waybill')}>
                                    <Ionicons name="document-text-outline" size={24} color={colors.white} style={{ marginRight: 15 }} />
                                    <Text style={styles.recommendText}>Waybill</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </SafeAreaView>

            {/* Bottom Controls */}
            <View style={styles.bottomArea}>
                {/* Left Shield */}
                <TouchableOpacity style={styles.bottomIconSmall}>
                    <Ionicons name="shield-checkmark" size={24} color="#4A90E2" />
                </TouchableOpacity>

                {/* GO Button */}
                <TouchableOpacity style={styles.goButton} onPress={handleGoPress}>
                    <View style={styles.goButtonInner}>
                        <Text style={styles.goText}>{isOnline ? 'Stop' : 'Go'}</Text>
                    </View>
                </TouchableOpacity>

                {/* Right Alert */}
                <TouchableOpacity style={styles.bottomIconSmall}>
                    <View style={styles.alertIconBg}>
                        <MaterialIcons name="add-alert" size={24} color="#FF5722" />
                    </View>
                </TouchableOpacity>
            </View>

            {/* Offline Bar */}
            {!isOnline && (
                <View style={styles.offlineBar}>
                    <Text style={styles.offlineText}>You're offline</Text>
                    <View style={styles.offlineIcons}>
                        <TouchableOpacity style={{ marginRight: 20 }}>
                            <Ionicons name="options" size={24} color={colors.white} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                            <Ionicons name="search" size={24} color={colors.white} />
                        </TouchableOpacity>
                    </View>
                </View>
            )}

            {/* Online Bottom Bar (Generic) */}
            {isOnline && (
                <View style={styles.offlineBar}>
                    <Text style={styles.offlineText}>Finding trips...</Text>
                </View>
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c2c2c',
    },
    mapBackground: {
        position: 'absolute',
        width: width,
        height: height,
        resizeMode: 'cover',
        backgroundColor: '#2f3136', // Fallback color
    },
    mapOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    safeArea: {
        flex: 1,
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        paddingTop: 10,
        zIndex: 10,
    },
    roundButton: {
        width: 45,
        height: 45,
        borderRadius: 25,
        backgroundColor: colors.black,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    badge: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: colors.primaryBlue,
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: colors.black,
    },
    badgeText: {
        color: colors.white,
        fontSize: 10,
        fontWeight: 'bold',
    },
    earningsPill: {
        backgroundColor: colors.black,
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 30,
        alignItems: 'center',
        elevation: 5,
    },
    earningsText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
    carouselContainer: {
        marginTop: 10,
        height: 220, // Enough for the cards
    },
    carouselScrollView: {
        overflow: 'visible', // Allow seeing next cards? No, full width paging usually.
    },
    carouselContent: {
        paddingHorizontal: 0,
    },
    cardWrapper: {
        width: width,
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'flex-start',
    },
    emptyCard: {
        width: '100%',
        height: 50,
    },
    blackCard: {
        backgroundColor: colors.black,
        width: '100%',
        padding: 20,
        borderRadius: 12,
        elevation: 5,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    pillSmall: {
        backgroundColor: '#333',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 15,
    },
    pillText: {
        color: colors.white,
        fontWeight: 'bold',
    },
    cardTitle: {
        color: '#A6A6A6',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing: 1,
        marginTop: 5,
    },
    cardStats: {
        alignItems: 'center',
        marginVertical: 15,
    },
    statLine: {
        color: colors.white,
        fontSize: 20,
        marginBottom: 5,
    },
    pointsRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardFooter: {
        borderTopWidth: 1,
        borderTopColor: '#333',
        paddingTop: 15,
        alignItems: 'center',
    },
    cardAction: {
        color: colors.white,
        fontSize: 14,
        fontWeight: 'bold',
    },
    recommendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
    },
    recommendText: {
        color: colors.white,
        fontSize: 16,
    },
    divider: {
        height: 1,
        backgroundColor: '#333',
        marginLeft: 40,
    },

    // Bottom Area
    bottomArea: {
        position: 'absolute',
        bottom: 80, // Above offline bar
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    bottomIconSmall: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: colors.black,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    goButton: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: colors.primaryBlue, // Blue ring
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        borderWidth: 5,
        borderColor: 'rgba(39, 110, 241, 0.3)',
    },
    goButtonInner: {
        width: 76,
        height: 76,
        borderRadius: 38,
        backgroundColor: colors.primaryBlue,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: colors.white,
    },
    goText: {
        color: colors.white,
        fontSize: 24,
        fontWeight: 'bold',
    },
    alertIconBg: {
        // Warning icon specific style
    },
    offlineBar: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#202020',
        paddingVertical: 20,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    offlineText: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
    },
    offlineIcons: {
        flexDirection: 'row',
    }
});
