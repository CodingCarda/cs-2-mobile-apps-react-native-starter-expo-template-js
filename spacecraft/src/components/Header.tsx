import React from "react";
import  { StyleSheet, Text } from "react-native";


interface HeaderProps {
   title: string;
}


const Header: React.
   FC<HeaderProps> = ({ title })=> {
       return <Text style={styles.title}> {title} </Text>
   };


   const styles = StyleSheet.create({
       title:{


       },
   })
