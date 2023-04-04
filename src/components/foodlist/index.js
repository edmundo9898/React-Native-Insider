import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native';



export function FoodList({data}){
    
    const navigation = useNavigation();

    function handleNavigate(){
        navigation.navigate("Detail",{data: data})
    }
    
    return(
        <TouchableOpacity 
        onPress={handleNavigate}
        activeOpacity={0.8} style={styles.container}>
            <Image
                source={{ uri: data.cover}}
                style={styles.cover}
            />
            <View style={styles.info}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.description}>{data.total_ingredients} ingrediendes | {data.time} min</Text>
            </View>
            <LinearGradient
                style={styles.gradient}
                colors={['transparent', 'rgba(0,0,0, 0.70)', 'rgba(0,0,0, 0.95)']}
                />
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 14,
    },
    cover:{
        width: "100%",
        height: 200,
        borderRadius: 14,
    },
    info:{
        position: 'absolute',
        bottom: 14,
        left: 14,
        zIndex: 99, // sempre vai ficar na frente da imagem 
        

    },
    name:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    description:{
        color: '#fff',
    },
    gradient:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '55%',
        borderRadius: 14,
        zIndex: 1,
        backgroundColor: 'transparent',
    }
})