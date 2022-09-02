import { useState, useEffect } from "react";
import { Text, View, Pressable, Image } from "react-native";
import dateFormat from "dateformat";
// import DatePicker from "react-native-date-picker";

import TodoCard from "../components/main/TodoCard";
import todoData from "../../data/todo.json";
import img from "../../assets/img-todo-3.png";

const statusList = ["To do", "Doing", "Done"];

export default function Main({ navigation }) {
  const [data, setData] = useState(todoData);
  const [date, setDate] = useState(new Date());
  // const [open, setOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState("To do");

  useEffect(() => {
    let newData = todoData.filter((data) => {
      if (data.status == currentStatus) {
        return data;
      }
    });

    setData(newData);
  }, [currentStatus]);

  const handleNavigate = (id) => {
    console.log(id);
    navigation.navigate("Detail Task", { id });
  };

  return (
    <View className="flex-1 bg-white text-lime-500 bg-[#d8d0ff] justify-end">
      <View className="items-center mt-4">
        <Image
          style={{
            width: 280,
            height: 150,
            // bottom: -20,
          }}
          source={img}
        />
      </View>
      <View className="bg-white h-[70%]	 text-lime-500 bg-[#ffffff] p-[30px] rounded-t-3xl">
        <View className="flex-row">
          <Text
            style={{ fontFamily: "Poppins" }}
            className="text-[30px] font-black flex-1"
          >
            TO-DAY LIST
          </Text>
          <Pressable className="bg-[#7b60fe] p-3 px-5 items-center rounded-3xl	">
            <Text className="text-[14px] text-white font-bold">
              {dateFormat(date, "dd mmm")}
            </Text>
          </Pressable>
        </View>
        <View className="flex-row justify-center gap-x-10 mt-5 mb-4 ">
          {statusList.map((item, idx) => (
            <Text
              key={idx}
              style={{ fontFamily: "Poppins" }}
              className={`text-[20px] font-bold ${
                currentStatus == item ? "text-black" : "text-gray-400"
              }`}
              onPress={() => setCurrentStatus(item)}
            >
              {item}
            </Text>
          ))}
        </View>
        <View className="gap-y-4">
          {data.map((item, idx) => (
            <View
              key={idx}
              className={`px-5 py-3 ${
                item.status == "Done" ? "bg-[#d8d0ff]" : "bg-[#eaeaeb]"
              } rounded-lg flex-row items-center`}
            >
              <TodoCard item={item} handleNavigate={handleNavigate} />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
