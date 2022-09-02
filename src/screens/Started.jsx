import { Text, View, Image, Pressable } from "react-native";

export default function Started({ setStarted }) {
  const onPress = () => {
    setStarted(true);
  };

  return (
    <View className="flex-1 justify-center bg-[#d8d0ff] px-[45px]">
      <Text
        style={{ fontFamily: "Poppins" }}
        className="text-[30px] font-black"
      >
        Manage Your Todo Task
      </Text>
      <Text style={{ fontFamily: "Poppins" }} className="text-[20px] mt-[20px]">
        Be productive with us
      </Text>
      <Image
        className="w-[100%] h-[250px] my-[50px]"
        source={require("../../assets/img-todo.png")}
      />

      <Pressable
        className="bg-[#7b60fe] py-3 items-center rounded-3xl	"
        onPress={onPress}
      >
        <Text className="text-[20px] text-white">Get Started!</Text>
      </Pressable>
    </View>
  );
}
