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
import dummyContacts from "../../assets/data/contacts.json";
import { useRouter } from "expo-router"; // Change this import

interface User {
  user_id: string;
  user_name: string;
  user_email: string;
  user_phone: string;
  user_display_name: string;
}

interface UserParams {
  [key: string]: string;
  user_id: string;
  user_name: string;
  user_email: string;
  user_phone: string;
  user_display_name: string;
}

const Contacts = () => {
  const router = useRouter(); // Use router instead of navigation
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(dummyContacts);

  useEffect(() => {
    const newContacts = dummyContacts.filter((contact) =>
      contact.user_display_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredContacts(newContacts);
  }, [searchTerm]);

  const callUser = (user: User) => {
    // convert user object to params format
    const params: UserParams = {
      user_id: user.user_id,
      user_name: user.user_name,
      user_email: user.user_email,
      user_phone: user.user_phone,
      user_display_name: user.user_display_name,
    };
    router.push({
      pathname: "/calling",
      params: params,
    });
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="white" />
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
            renderItem={({ item }) => (
              <View>
                <Pressable
                  onPress={() => callUser(item)}
                  className="text-[16px] my-[10px]"
                >
                  <Text>{item.user_display_name}</Text>
                </Pressable>
              </View>
            )}
            ItemSeparatorComponent={() => (
              <View className="h-[1px] w-full bg-[#f0f0f0]" />
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Contacts;
