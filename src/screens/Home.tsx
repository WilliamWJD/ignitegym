import { HomeHeader } from "@components/HomeHeader";
import { Center, HStack, Text, VStack, FlatList } from "native-base";
import { Group } from "@screens/Group";
import { useState } from "react";

export function Home() {
  const [groupSelected, setGroupSelected] = useState("Costas");
  const [groups, setGroups] = useState(["Costas", "Ombro", "Perna", "Peito"]);

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            onPress={() => setGroupSelected(item)}
            isActive={groupSelected === item}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
      />
    </VStack>
  );
}
