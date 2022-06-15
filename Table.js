import { StyleSheet, Text, View, FlatList, RefreshControl } from 'react-native'
import React,{useState} from 'react'
import { data } from './Data'
import Item from './Item'

const Table = ({data, handleRefresh, refresh}) => {
    
  return (
    <View style={styles.container}>
        <FlatList
        data={data}
        renderItem={Item}
        keyExtractor={(item, index)=>index.toString()}
        refreshControl={
            <RefreshControl
            refreshing={refresh}
            onRefresh={()=>handleRefresh()}
            />
        }
        />
    </View>
    
  )
}

export default Table

const styles = StyleSheet.create({
    container:{
        flex:  1,
        marginTop: 10,
    }
})