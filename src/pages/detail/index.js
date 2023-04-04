import { useLayoutEffect } from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
// useRoute vai receber as informção do usenavigation
import { Entypo} from '@expo/vector-icons';

export function Detail(){
    
    const route = useRoute();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        
        navigation.setOptions({
            title: route.params?.data ? route.params?.data.name : "Detalhes da receita",
            headerRight: () => (
                <Pressable onPress={() => console.log("oi")}>
                    <Entypo  
                        name='heart' 
                        size={28} 
                        color="#ff4141"
                        />
                </Pressable>
            )
        })
    }, [navigation, route.params?.data])

    return(
        <View style={styles.container}>
            <Text>Página Detalhe das receitas</Text>
            <Text>{route.params?.data.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'blue'
    }})