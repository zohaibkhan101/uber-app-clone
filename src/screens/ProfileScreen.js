import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../styles/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen({ navigation }) {
    const user = {
        name: 'MUDASSAR\nSHAHZAD',
        rating: '4.94',
        cancellation: '4%',
        acceptance: '98%',
        trips: '801',
        tenure: '1 yr 11 mo',
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="close" size={28} color={colors.white} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Profile</Text>
                <View style={{ width: 28 }} />
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                {/* Main Profile Card */}
                <View style={styles.mainCard}>
                    <View style={styles.profileHeader}>
                        <View style={styles.avatarContainer}>
                            <Image
                                source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
                                style={styles.avatar}
                            />
                            {/* Blue Status Pill */}
                            <View style={styles.statusPill}>
                                <Ionicons name="diamond" size={10} color="#276EF1" />
                                {/* Using simple diamond icon for visual anchor, screenshot has custom gem */}
                                <Text style={styles.statusText}>Blue</Text>
                            </View>
                            {/* Ring */}
                            <View style={styles.avatarRing} />
                        </View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.nameText}>{user.name}</Text>
                            <TouchableOpacity style={styles.viewProfileBtn}>
                                <Text style={styles.viewProfileText}>View public profile</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Rides Section Header */}
                <View style={styles.sectionHeaderRow}>
                    <Text style={styles.sectionTitle}>Rides</Text>
                    <TouchableOpacity style={styles.arrowButton}>
                        <Ionicons name="arrow-forward" size={16} color={colors.white} />
                    </TouchableOpacity>
                </View>

                {/* Stats Grid */}
                <View style={styles.statsGrid}>
                    <View style={styles.statCardShort}>
                        <View style={styles.statValueRow}>
                            <Text style={styles.statValueLarge}>{user.rating}</Text>
                            <FontAwesome5 name="star" size={18} color={colors.white} solid />
                        </View>
                        <Text style={styles.statLabel}>Star rating</Text>
                    </View>

                    <View style={styles.statCardShort}>
                        <Text style={styles.statValueLarge}>{user.cancellation}</Text>
                        <Text style={styles.statLabel}>Cancellation rate</Text>
                    </View>

                    <View style={styles.statCardShort}>
                        <Text style={styles.statValueLarge}>{user.acceptance}</Text>
                        <Text style={styles.statLabel}>Acceptance rate</Text>
                    </View>
                </View>

                {/* Lifetime Highlights */}
                <Text style={styles.sectionTitle}>Lifetime highlights</Text>

                <View style={styles.highlightsRow}>
                    {/* Trips Card */}
                    <View style={styles.highlightCard}>
                        <View style={styles.highlightImageContainer}>
                            {/* Placeholder visual for graphical map background */}
                            <View style={[styles.highlightImage, { backgroundColor: '#2AC069' }]} />
                        </View>
                        <View style={styles.highlightContent}>
                            <Text style={styles.highlightValue}>{user.trips}</Text>
                            <Text style={styles.highlightLabel}>Total trips</Text>
                        </View>
                    </View>

                    {/* Tenure Card */}
                    <View style={styles.highlightCard}>
                        <View style={styles.highlightImageContainer}>
                            {/* Placeholder visual for graphical walking background */}
                            <View style={[styles.highlightImage, { backgroundColor: '#276EF1' }]} />
                        </View>
                        <View style={styles.highlightContent}>
                            <Text style={styles.highlightValue}>{user.tenure}</Text>
                            <Text style={styles.highlightLabel}>Journey with Uber</Text>
                        </View>
                    </View>
                </View>

                {/* Badges */}
                <Text style={styles.sectionTitle}>Badges</Text>
                <View style={styles.badgesRow}>
                    <View style={styles.badgeItem}>
                        {/* Crown Icon Placeholder */}
                        <View style={styles.badgeCircle}>
                            <FontAwesome5 name="crown" size={24} color="#FFD700" />
                        </View>
                    </View>
                    <View style={styles.badgeItem}>
                        {/* Cake Icon Placeholder */}
                        <View style={styles.badgeCircle}>
                            <FontAwesome5 name="birthday-cake" size={24} color="#FF69B4" />
                        </View>
                    </View>
                </View>

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
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    headerTitle: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    content: {
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    mainCard: {
        backgroundColor: '#1E1E1E', // Dark card background
        borderRadius: 12,
        padding: 20,
        marginTop: 10,
        marginBottom: 25,
    },
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarContainer: {
        position: 'relative',
        marginRight: 20,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    avatarRing: {
        position: 'absolute',
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2.5,
        borderColor: '#276EF1',
        top: 0,
        left: 0,
    },
    statusPill: {
        position: 'absolute',
        bottom: -5,
        backgroundColor: '#333',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 2,
    },
    statusText: {
        color: '#A6A6A6',
        fontSize: 10,
        marginLeft: 2,
        fontWeight: 'bold',
    },
    nameContainer: {
        flex: 1,
    },
    nameText: {
        color: colors.white,
        fontSize: 22,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        lineHeight: 28,
        marginBottom: 8,
    },
    viewProfileBtn: {
        backgroundColor: '#333',
        alignSelf: 'flex-start',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
    },
    viewProfileText: {
        color: colors.white,
        fontSize: 12,
        fontWeight: 'bold',
    },
    sectionHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    sectionTitle: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 15,
    },
    arrowButton: {
        backgroundColor: '#333',
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    statsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    statCardShort: {
        width: '48%', // Approx half
        backgroundColor: '#1E1E1E',
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        height: 100,
        justifyContent: 'center',
    },
    statValueRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    statValueLarge: {
        color: colors.white,
        fontSize: 28,
        fontWeight: 'bold',
        marginRight: 5,
    },
    statLabel: {
        color: '#A6A6A6',
        fontSize: 14,
    },
    highlightsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    highlightCard: {
        width: '48%',
        backgroundColor: '#1E1E1E',
        borderRadius: 12,
        overflow: 'hidden',
    },
    highlightImageContainer: {
        height: 70,
        backgroundColor: '#333',
    },
    highlightImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    highlightContent: {
        padding: 15,
    },
    highlightValue: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    highlightLabel: {
        color: '#A6A6A6',
        fontSize: 12,
    },
    badgesRow: {
        flexDirection: 'row',
    },
    badgeItem: {
        marginRight: 15,
    },
    badgeCircle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#2c224a', // Dark purple circle background from screenshot
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#444',
    }
});
