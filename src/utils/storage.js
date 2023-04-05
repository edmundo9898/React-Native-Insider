import AsyncStorage from "@react-native-async-storage/async-storage";

// Buscar os favoritos 
// Salvar um novo favorito
// Remover um favorito da lista.



export async function getFavorites(key){
    const favorites = await AsyncStorage.getItem(key)
    return JSON.parse(favorites) || [];
        
}

export async function saveFavorite(key, newItem){
    let myFavorites = await getFavorites(key)
    
    // some verifica se pelo menos existe alguma coisa  dentro desse array 
    let hasItem = myFavorites.some( item => item.id === newItem.id)

    if(hasItem){
        console.log("Esse item já etá salvo na lista") 
        return;
    }
    myFavorites.push(newItem)

    await AsyncStorage.setItem(key, JSON.stringify(myFavorites))
    console.log("Salvo com Sucesso!")

}

export async function removeFavorite(id){
    let receipes = await getFavorites("@appreceitas")
    
    // o filter está removendo o item favorito da lista, retornando todos os item que são diferente do que foi mandado
    let myFavorites = receipes.filter( item => {
        return (item.id !== id)
    })

    await AsyncStorage.setItem("@appreceitas", JSON.stringify(myFavorites));
    console.log("Item deletado com sucesso");
    return myFavorites;

}

export async function isFavorite(receipe){

    let myReceipes = await getFavorites("@appreceitas")
     
    //  O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.
    const favorite = myReceipes.find( item => item.id === receipe.id)

    if(favorite){
        return true;
    }

    return false;

}