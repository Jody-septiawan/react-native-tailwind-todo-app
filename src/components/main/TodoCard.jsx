import { View, Text } from "react-native";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default function TodoCard({ item, handleNavigate }) {
  // console.log(item);
  return (
    <>
      <Text
        className="text-[18px] font-bold flex-1"
        onPress={() => handleNavigate(item.id)}
      >
        {item.title}
      </Text>
      <View className="gap-x-1 flex-row">
        <AntDesignIcon
          name="checkcircle"
          size={25}
          color={item?.status != "Done" ? "#000" : "#7d62fe"}
        />
        <MaterialIcon
          name="delete-empty"
          size={27}
          color={item?.status != "Done" ? "#000" : "#7d62fe"}
        />
      </View>
    </>
  );
}
