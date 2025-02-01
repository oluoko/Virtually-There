import React, { useEffect, useState } from "react";
import { FlatList, StatusBar, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import dummyContacts from "../assets/data/contacts.json";
import { Link } from "expo-router";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(dummyContacts);

  useEffect(() => {
    const newContacts = dummyContacts.filter((contact) =>
      contact.user_display_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredContacts(newContacts);
  }, [searchTerm]);

  return (
    <SafeAreaView className="bg-white h-full">
      <StatusBar barStyle="dark-content" />
      <View className="p-[15px]">
        <TextInput
          placeholder="search"
          value={searchTerm}
          onChangeText={setSearchTerm}
          className="bg-gray-200/60 border border-gray-200 px-3 py-2 rounded-lg text-lg"
        />

        <FlatList
          data={filteredContacts}
          renderItem={({ item }) => {
            return (
              <View>
                <Link href={"/calling"} className="text-[16px] my-[10px]">
                  {item.user_display_name}
                </Link>
              </View>
            );
          }}
          ItemSeparatorComponent={() => (
            <View className="h-[1px] w-full bg-[#f0f0f0]" />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Index;
