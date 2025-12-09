import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, TextInput } from 'react-native';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../styles/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SearchScreen({ navigation }) {
    const [isDestinationMode, setIsDestinationMode] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={28} color={colors.white} />
                </TouchableOpacity>
                <View style={styles.searchBar}>
                    <Ionicons name="search" size={20} color={colors.white} style={styles.searchIcon} />
                    <TextInput
                        placeholder="Search for places"
                        placeholderTextColor="#A6A6A6"
                        style={styles.searchInput}
                    />
                </View>
            </View>

            {/* Destination Mode */}
            <View style={styles.section}>
                <View style={styles.rowBetween}>
                    <View style={styles.iconRow}>
                        <View style={styles.iconCircleSmall}>
                            <FontAwesome5 name="directions" size={16} color={colors.white} />
                        </View>
                        <View>
                            <Text style={styles.rowTitle}>Destination mode</Text>
                            <Text style={styles.rowSubtitle}>Not filtering trips</Text>
                            <Text style={styles.rowDetail}>0/0 filters left</Text>
                        </View>
                    </View>
                    <Switch
                        value={isDestinationMode}
                        onValueChange={setIsDestinationMode}
                        trackColor={{ false: "#3e3e3e", true: colors.primaryBlue }}
                        thumbColor={colors.white}
                    />
                </View>
            </View>

            {/* Saved Place (Home) */}
            <View style={styles.section}>
                <View style={styles.rowBetween}>
                    <View style={styles.iconRow}>
                        <Ionicons name="home" size={24} color={colors.white} style={{ marginRight: 20 }} />
                        <View>
                            <Text style={styles.rowTitle}>Home</Text>
                            <Text style={styles.rowSubtitle}>Polinyà</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Ionicons name="pencil" size={20} color={colors.white} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Nearby Places */}
            <View style={[styles.section, { borderBottomWidth: 0 }]}>
                <View style={styles.rowBetween}>
                    <Text style={styles.sectionHeader}>Nearby places</Text>
                    <TouchableOpacity>
                        <Text style={styles.linkText}>View map</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.gridRow}>
                    {/* Chargers Button */}
                    <TouchableOpacity style={styles.gridButton}>
                        <Ionicons name="flash" size={24} color={colors.white} style={{ marginBottom: 8 }} />
                        <Text style={styles.gridButtonText}>Chargers</Text>
                    </TouchableOpacity>

                    {/* Rewards Button */}
                    <TouchableOpacity style={styles.gridButton}>
                        <Ionicons name="pricetag" size={24} color="#4A90E2" style={{ marginBottom: 8 }} />
                        {/* Using Tag icon for Rewards as per visual approximation */}
                        <Text style={styles.gridButtonText}>Rewards</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161616', // Dark background
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#282828',
    },
    backButton: {
        marginRight: 15,
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2b2b2b',
        borderRadius: 30, // Pill shape
        paddingHorizontal: 15,
        height: 45,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        color: colors.white,
        fontSize: 16,
    },
    section: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomWidth: 8, // Thick divider line
        borderBottomColor: '#000', // Black divider
        backgroundColor: '#161616',
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconCircleSmall: {
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    rowTitle: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    rowSubtitle: {
        color: '#A6A6A6',
        fontSize: 14,
    },
    rowDetail: {
        color: '#666',
        fontSize: 12,
        marginTop: 2,
    },
    sectionHeader: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    linkText: {
        color: '#A6A6A6',
        fontSize: 14,
        fontWeight: 'bold',
    },
    gridRow: {
        flexDirection: 'row',
        marginTop: 10,
    },
    gridButton: {
        backgroundColor: '#2b2b2b',
        borderRadius: 8,
        width: '30%', // roughly 1/3 minus spacing
        aspectRatio: 1.3,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    gridButtonText: {
        color: colors.white,
        fontSize: 12,
        fontWeight: 'bold',
    }
});
