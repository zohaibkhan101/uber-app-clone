import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../styles/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EarningsScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Ionicons name="menu" size={28} color={colors.white} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Earnings</Text>
                    <TouchableOpacity style={styles.helpButton}>
                        <Ionicons name="help-circle" size={20} color={colors.white} />
                        <Text style={styles.helpText}>Help</Text>
                    </TouchableOpacity>
                </View>

                {/* Earnings Summary */}
                <View style={styles.chartSection}>
                    <View style={styles.earningsInfo}>
                        <Text style={styles.dateRange}>Dec 8 - Dec 15</Text>
                        <Text style={styles.amount}>€58.99</Text>
                    </View>
                    <View style={styles.chartContainer}>
                        {/* Mock Bar Chart - just one bar 'M' for Monday */}
                        <View style={styles.barGroup}>
                            <View style={[styles.bar, { height: 60 }]} />
                            <Text style={styles.barLabel}>M</Text>
                        </View>
                        {['T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                            <View key={index} style={styles.barGroup}>
                                <View style={[styles.bar, { height: 0, backgroundColor: 'transparent' }]} />
                                <Text style={styles.barLabel}>{day}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Trips Count */}
                <View style={styles.tripsRow}>
                    <Text style={styles.tripsLabel}>Trips</Text>
                    <Text style={styles.tripsCount}>3</Text>
                </View>

                {/* See Details Button */}
                <TouchableOpacity style={styles.detailsButton} onPress={() => navigation.navigate('EarningsActivity')}>
                    <Text style={styles.detailsButtonText}>See details</Text>
                </TouchableOpacity>

                {/* Quest Section */}
                <View style={styles.sectionItem}>
                    <View style={styles.iconContainer}>
                        <FontAwesome5 name="flag" size={18} color={colors.white} solid />
                    </View>
                    <View style={styles.sectionTextContainer}>
                        <Text style={styles.sectionTitle}>Quest</Text>
                        <Text style={styles.sectionSubtitle}>See what's available</Text>
                    </View>
                </View>

                <View style={styles.divider} />

                {/* Uber Pro Section */}
                <View style={styles.sectionItemVertical}>
                    <Text style={styles.sectionTitle}>Uber Pro Blue</Text>
                    <Text style={styles.sectionSubtitle}>Points reset Jan 31</Text>

                    <Text style={styles.proProgressText}>Earn 860 more points to achieve Gold</Text>
                    <View style={styles.progressBarBg}>
                        <View style={[styles.progressBarFill, { width: '10%' }]} />
                    </View>
                </View>

                <View style={styles.divider} />

                {/* More Ways to Earn */}
                <Text style={styles.sectionHeader}>More ways to earn</Text>

                <TouchableOpacity style={styles.listItem}>
                    <View style={styles.iconContainer}>
                        <MaterialIcon name="brightness-5" size={24} />
                    </View>
                    <View style={styles.listContent}>
                        <Text style={styles.listTitle}>Upcoming promotions</Text>
                        <Text style={styles.listSubtitle}>See what's available</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="#666" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.listItem}>
                    <View style={styles.iconContainer}>
                        <FontAwesome5 name="gift" size={20} color={colors.white} />
                    </View>
                    <View style={styles.listContent}>
                        <Text style={styles.listTitle}>Refer friends and earn</Text>
                        <Text style={styles.listSubtitle}>Make money when you invite friends to earn with Uber. Click to check the available offers.</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="#666" />
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
}

// Helper for missing icon imports
function MaterialIcon({ name, size }) {
    // Just a placeholder if MaterialIcons isn't imported, but utilizing Ionicons mostly.
    // 'brightness-5' is MaterialIcons usually.
    return <Ionicons name="star" size={size} color={colors.white} />; // Fallback
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    content: {
        paddingBottom: 40,
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
        fontSize: 18,
        fontWeight: '500',
    },
    helpButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#333',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
    },
    helpText: {
        color: colors.white,
        marginLeft: 5,
        fontSize: 14,
        fontWeight: 'bold',
    },
    chartSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    earningsInfo: {
        justifyContent: 'flex-start',
    },
    dateRange: {
        color: colors.white,
        fontSize: 16,
        marginBottom: 5,
    },
    amount: {
        color: colors.white,
        fontSize: 32,
        fontWeight: 'bold',
    },
    chartContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        height: 100,
    },
    barGroup: {
        alignItems: 'center',
        marginLeft: 10,
    },
    bar: {
        width: 12,
        backgroundColor: colors.primaryBlue,
        marginBottom: 5,
        borderRadius: 2,
    },
    barLabel: {
        color: '#666',
        fontSize: 10,
    },
    tripsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 10,
    },
    tripsLabel: {
        color: colors.white,
        fontSize: 16,
    },
    tripsCount: {
        color: colors.white,
        fontSize: 16,
    },
    detailsButton: {
        backgroundColor: '#333',
        marginHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    detailsButtonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    sectionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    iconContainer: {
        width: 30,
        alignItems: 'center',
        marginRight: 10,
    },
    sectionTextContainer: {
        flex: 1,
    },
    sectionTitle: {
        color: colors.white,
        fontSize: 16,
        marginBottom: 2,
    },
    sectionSubtitle: {
        color: '#A6A6A6',
        fontSize: 14,
    },
    divider: {
        height: 1,
        backgroundColor: '#333',
        marginHorizontal: 20,
    },
    sectionItemVertical: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    proProgressText: {
        color: '#A6A6A6',
        fontSize: 14,
        marginTop: 10,
        marginBottom: 5,
    },
    progressBarBg: {
        height: 8,
        backgroundColor: '#333',
        borderRadius: 4,
        width: '100%',
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: colors.primaryBlue,
        borderRadius: 4,
    },
    sectionHeader: {
        color: colors.white,
        fontSize: 22,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 10,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 0, // No separators in the screenshot between these
    },
    listContent: {
        flex: 1,
        marginRight: 10,
    },
    listTitle: {
        color: colors.white,
        fontSize: 16,
        marginBottom: 4,
    },
    listSubtitle: {
        color: '#A6A6A6',
        fontSize: 14,
        lineHeight: 20,
    },
});
