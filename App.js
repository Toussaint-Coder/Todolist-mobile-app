import {useState} from "react"
import {Text, Image, View, TextInput, FlatList} from "react-native"
import DateTimePicker from "@react-native-community/datetimepicker"
//main color : #0C3B2E
//secondary colo : #BACEBD
//third : #FFBA00

export default function App() {
  const Todos = [
    {
      Name: "Workout",
      Time: "08:00",
      key: Math.random(),
      status: true,
    },
    {
      Name: "Shopping",
      Time: "09:00",
      key: Math.random(),
      status: false,
    },
    {
      Name: "Cook Pasta",
      Time: "10:00",
      key: Math.random(),
      status: false,
    },
    {
      Name: "Work Time",
      Time: "11:00",
      key: Math.random(),
      status: false,
    },
  ]
  const [task, setTask] = useState(null)
  const [taskList, setTaskList] = useState([])
  const date = new Date()

  const handlerAddedTask = (TaskName) => {
    setTask(TaskName)
  }

  const handlerAddTask = () => {
    if (!task) return

    setTaskList((taskList) => [
      ...taskList,
      {
        Name: task,
        Time: `${date.getHours()}:${date.getMinutes()}`,
        key: Math.random(),
        status: false,
      },
    ])
  }
  const renderTodos = ({item}) => {
    return (
      <View
        style={{
          backgroundColor: "#0C3B2E",
          padding: 15,
          borderRadius: 20,
          flex: 1,
          position: "relative",
          justifyContent: "center",
          alignitems: "center",
          marginHorizontal: 5,
          marginBottom: 10,
          borderWidth: 1,
          height: 136,
          width: 164,
        }}
      >
        <Image
          style={{
            top: 10,
            left: 10,
            width: 24,
            height: 24,
            position: "absolute",
          }}
          source={require("./assets/check.png")}
        />
        <View>
          <Text
            style={{
              fontWeight: 700,
              color: "white",
              fontSize: 24,
              textAlign: "center",
            }}
          >
            {item.Time}
          </Text>
          <Text
            style={{
              fontWeight: "normal",
              color: "white",
              fontSize: 20,
              textAlign: "center",
            }}
          >
            {item.Name}
          </Text>
        </View>
      </View>
    )
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          backgroundColor: "#0C3B2E",
          minHeight: 200,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          padding: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontWeight: "500",
              color: "white",
              fontSize: 20,
            }}
          >
            Good Morning
          </Text>
          <Image
            style={{
              width: 27,
              height: 27,
            }}
            source={require("./assets/settings.png")}
          />
        </View>
        <TextInput
          style={{
            width: "100%",
            height: 53,
            backgroundColor: "white",
            borderRadius: 20,
            marginTop: 40,
            paddingLeft: 16,
          }}
          placeholder="Search a Task"
        ></TextInput>
      </View>

      <FlatList
        data={taskList}
        renderItem={renderTodos}
        numColumns={2}
        style={{marginTop: 10, paddingHorizontal: 10}}
      />

      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          padding: 16,
          backgroundColor: "#0C3B2E",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          flexDirection: "row",
          gap: 10,
          alignItems: "stretch",
        }}
      >
        <DateTimePicker mode="time" value="" is24Hour={true} />
        <TextInput
          style={{
            height: 42,
            backgroundColor: "white",
            borderRadius: 10,
            paddingLeft: 16,
            flex: 2,
          }}
          onChangeText={handlerAddedTask}
          placeholder="Search a Task"
        ></TextInput>
        <View
          onTouchStart={handlerAddTask}
          style={{
            backgroundColor: "#FFBA00",
            width: 50,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Add</Text>
        </View>
      </View>
    </View>
  )
}
