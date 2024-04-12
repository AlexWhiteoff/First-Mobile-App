import { Text, View, Button, StyleSheet, ScrollView, TextInput } from "react-native";
import React, { Suspense, useEffect, useState } from "react";

function ProfileScreen({ navigation }) {
    return (
        <View style={styles.mainBlock}>
            <View style={styles.header}>
                <Text style={styles.titleText}>Реєстрація</Text>
            </View>
            <ScrollView>
                <View>
                    <View style={styles.formBlock}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Електронна пошта</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType="email-address"
                                inputMode="email"
                                spellCheck={false}
                                maxLength={64}
                            />
                        </View>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Пароль</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType="visible-password"
                                inputMode="text"
                                secureTextEntry={true}
                                spellCheck={false}
                                textContentType={"newPassword"}
                                maxLength={16}
                            />
                        </View>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Пароль (ще раз)</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType="visible-password"
                                inputMode="text"
                                secureTextEntry={true}
                                spellCheck={false}
                                maxLength={16}
                            />
                        </View>
                    </View>
                    <View style={styles.formBlock}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Прізвище</Text>
                            <TextInput style={styles.input} keyboardType="default" inputMode="text" textContentType="middleName" />
                        </View>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Ім'я</Text>
                            <TextInput style={styles.input} keyboardType="default" inputMode="text" textContentType="name"/>
                        </View>
                    </View>
                    <View style={styles.formBlock}>
                        <View style={styles.inputBlock}>
                            <Button title="Зареєструватися" onPress={() => {}} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    mainBlock: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        padding: 10,
    },
    titleText: {
        fontSize: 21,
        fontFamily: "Time New Roman",
        fontWeight: "700",
        color: "#3e3e3e",
        textAlign: "center",
    },
    formBlock: {
        marginBottom: 10,
    },
    inputBlock: {
        margin: 10,
    },
    label: {
        color: "#3e3e3e",
        marginBottom: 5,
    },
    input: {
        height: 40,
        width: "100%",
        borderWidth: 1,
        padding: 10,
        color: "#000",
    },
});

export default ProfileScreen;
