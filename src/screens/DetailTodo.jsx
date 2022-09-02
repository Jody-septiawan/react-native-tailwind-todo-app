import { useEffect, useState } from "react";
import { View, Text, Pressable, Image } from "react-native";
import dateFormat from "dateformat";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

import dataTodo from "../../data/todo.json";
import img from "../../assets/img-todo-2.png";

const statusList = ["To do", "Doing", "Done"];

export default function DetailTodo({ route, navigation }) {
  const { id } = route.params;

  const [data, setData] = useState({});
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const data_ = dataTodo.find((item) => item.id == id);

    setData(data_);
  }, []);
  return (
    <View className="flex-1 bg-white text-lime-500 bg-[#d8d0ff] justify-end">
      <View className="items-center mt-4">
        <Image
          style={{
            width: 200,
            height: 155,
            bottom: -40,
          }}
          source={img}
        />
      </View>
      <View className="bg-white h-[80%]	 text-lime-500 bg-[#ffffff] p-[30px] rounded-t-3xl">
        <View className="flex-row items-center gap-x-3">
          <IoniconsIcon
            name="arrow-back-circle"
            size={30}
            color="#7d62fe"
            onPress={() => navigation.goBack()}
          />
          <Text
            style={{ fontFamily: "Poppins" }}
            className="text-[30px] font-black flex-1"
          >
            DETAIL TASK
          </Text>
          <Pressable className="bg-[#7b60fe] p-3 px-5 items-center rounded-3xl	">
            <Text className="text-[14px] text-white font-bold">
              {dateFormat(date, "dd mmm")}
            </Text>
          </Pressable>
        </View>
        <View className="mt-5 mb-4">
          <Text
            className="font-black text-2xl text-[#7b61ff]"
            style={{ fontFamily: "Poppins" }}
          >
            {data.title}
          </Text>
          <View className="flex-row items-center mt-3">
            <IoniconsIcon name="stopwatch" size={30} color="#a8a8a9" />
            <Text className="text-lg font-bold text-[#a8a8a9]">
              {dateFormat(data.start, "h TT")}-{dateFormat(data.end, "h TT")}
            </Text>
          </View>
          <View className="mt-3">
            <Text
              className="text-2xl font-black"
              style={{ fontFamily: "Poppins" }}
            >
              Description
            </Text>
            <Text
              className="text-lg mt-2 font-semibold"
              style={{ fontFamily: "Poppins" }}
            >
              {data.desc}
            </Text>
          </View>
        </View>
        <View>
          <Text
            className="font-black text-2xl text-[#7b61ff]"
            style={{ fontFamily: "Poppins" }}
          >
            Status
          </Text>
          <View className="flex-row justify-center gap-x-4 mt-3">
            {statusList.map((item) => (
              <Pressable
                className={`${
                  item == data.status ? "bg-[#7b61ff]" : "bg-[#a8a8a9]"
                }] py-2 px-8 rounded-3xl`}
              >
                <Text className="font-bold text-white">{item}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}
