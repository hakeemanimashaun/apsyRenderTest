import React, { useState, useEffect, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Table from "./Table";
import { data } from "./Data";


export default function App() {
  //const [sortedData, setSortedData] = useState([]);
  const [refresh, setRefresh] = useState(false)
  const [sortKey, setSortKey] =useState('id')
  const [sortOrder, setSortOrder] =useState('ascn')


  const sortData = ({tableData, sortKey, reverse})=>{
    if(!sortKey)return tableData
    const sortedData = tableData.sort((a,b)=>{
      return a[sortKey] > b[sortKey] ? 1 : -1 

    })
    if(reverse){
      return sortedData.reverse()
    }
    return sortedData
  }
  const sortedData  = useCallback(()=>sortData({tableData: data, sortKey, reverse: sortOrder === "desc"}), [data, sortKey, sortOrder])

  
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", marginTop: 80}}>
        <TouchableOpacity style={styles.Button} onPress={()=>
          setSortKey('date')
        }>
          <Text style={styles.ButtonText}>Sort by Date</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button} onPress={()=>
           setSortKey('email')
        }>
          <Text style={styles.ButtonText}>Sort by Email</Text>
        </TouchableOpacity>
      </View>
      <Table data={sortedData()} handleRefresh={()=>setRefresh(!refresh)} refresh={refresh}/>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  Button: {
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 20,
    backgroundColor: 'red',
  },
  ButtonDown: {
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: 'red',
  },
  ButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white' 
  }
});
