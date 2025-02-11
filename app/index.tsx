import React, { useEffect, useState } from "react";
import {
  FlatList,
  Pressable,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import dummyContacts from "../assets/data/contacts.json";
import { Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";

const Index = () => {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(dummyContacts);

  useEffect(() => {
    const newContacts = dummyContacts.filter((contact) =>
      contact.user_display_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredContacts(newContacts);
  }, [searchTerm]);

  const callUser = (user) => {
    navigation.navigate("/(screens)/calling", { user });
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="white" />{" "}
      <SafeAreaView className="bg-white h-full">
        <StatusBar barStyle="dark-content" />
        <View className="p-[15px] flex-1">
          <TextInput
            placeholder="Search..."
            value={searchTerm}
            onChangeText={setSearchTerm}
            className="bg-gray-200/60 border border-gray-200 px-3 py-2 rounded-lg text-lg"
          />

          <FlatList
            data={filteredContacts}
            renderItem={({ item }) => {
              return (
                <View>
                  <Pressable
                    onPress={callUser(item)}
                    className="text-[16px] my-[10px]"
                  >
                    <Text> {item.user_display_name}</Text>
                  </Pressable>
                </View>
              );
            }}
            ItemSeparatorComponent={() => (
              <View className="h-[1px] w-full bg-[#f0f0f0]" />
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Index;
