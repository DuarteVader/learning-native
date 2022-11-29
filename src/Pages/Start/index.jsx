import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

export default function Start() {


    return (
        <View>
            <ScrollView showVerticalScrollIndication={false}>
                <View>
                    <Image source={require("../../assets/icons/logo3.png")}/>
                    <Text>Vamos transformar a sua vida {"/n"} em jogo, buscando sempre {"/n"} o melhor nivel.</Text>
                </View>
            </ScrollView>
        </View>
    )
}