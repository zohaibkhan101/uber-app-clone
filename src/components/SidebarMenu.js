import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../styles/colors';

export default function SidebarMenu(props) {
    const user = {
        name: 'MUDASSAR SHAHZAD',
        rating: '4.94',
        profilePic: 'https://via.placeholder.com/100', // Kept generic, but could be updated
    };

    // Helper to navigate
    const nav = (screen) => {
        props.navigation.navigate(screen);
    };

    return (
        <View style={styles.container}>
            {/* Header Profile Section */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.profileRow} onPress={() => props.navigation.navigate('Earnings', { screen: 'Profile' })}>
                    <View style={styles.avatarContainer}>
                        <Image source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }} style={styles.avatar} />
                        <View style={styles.onlineBadge} />
                    </View>
                    <View style={styles.userInfo}>
                        <Text style={styles.userName}>{user.name}</Text>
                        <View style={styles.ratingContainer}>
                            <FontAwesome5 name="star" size={12} color={colors.white} solid />
                            <Text style={styles.ratingText}>{user.rating}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
                {/* Inbox Item with Badge */}
                <TouchableOpacity style={styles.menuItem} onPress={() => nav('Inbox')}>
                    <Text style={styles.menuLabel}>Inbox</Text>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>9</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem} onPress={() => nav('Referrals')}>
                    <Text style={styles.menuLabel}>Referrals</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem} onPress={() => nav('Opportunities')}>
                    <Text style={styles.menuLabel}>Opportunities</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem} onPress={() => nav('Earnings')}>
                    <Text style={styles.menuLabel}>Earnings</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem} onPress={() => nav('Uber Pro')}>
                    <Text style={styles.menuLabel}>Uber Pro</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem} onPress={() => nav('Wallet')}>
                    <Text style={styles.menuLabel}>Wallet</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem} onPress={() => nav('Account')}>
                    <Text style={styles.menuLabel}>Account</Text>
                </TouchableOpacity>

            </DrawerContentScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerItem} onPress={() => nav('Help')}>
                    <Text style={styles.footerText}>Help</Text>
                    <View style={styles.footerBadge}>
                        <Text style={styles.footerBadgeText}>1</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        paddingTop: 50, // Status bar path
    },
    header: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    profileRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarContainer: {
        position: 'relative',
        marginRight: 15,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: colors.white,
    },
    onlineBadge: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 15,
        height: 15,
        backgroundColor: colors.primaryBlue, // Uber Blue diamond?
        borderRadius: 2, // Diamond shape mock
        transform: [{ rotate: '45deg' }],
        borderWidth: 2,
        borderColor: colors.black,
    },
    userInfo: {
        justifyContent: 'center',
    },
    userName: {
        color: colors.white,
        fontSize: 18,
        fontFamily: 'sans-serif-medium', // Android font
        marginBottom: 4,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#333', // Dark pill
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 12,
        alignSelf: 'flex-start',
    },
    ratingText: {
        color: colors.white,
        marginLeft: 4,
        fontSize: 12,
    },
    drawerContent: {
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        justifyContent: 'space-between', // For badge
    },
    menuLabel: {
        color: colors.white,
        fontSize: 28, // Large text as per screenshot
        fontWeight: 'normal',
        fontFamily: 'sans-serif',
    },
    badge: {
        backgroundColor: '#276EF1',
        borderRadius: 12,
        paddingHorizontal: 8,
        paddingVertical: 2,
        marginLeft: 10,
        marginBottom: 10, // Alignment fix
    },
    badgeText: {
        color: colors.white,
        fontSize: 14,
        fontWeight: 'bold',
    },
    footer: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#333',
    },
    footerItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerText: {
        color: colors.white,
        fontSize: 16,
        marginRight: 10,
    },
    footerBadge: {
        backgroundColor: '#276EF1',
        borderRadius: 10, // circular
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerBadgeText: {
        color: colors.white,
        fontSize: 12,
    }
});
