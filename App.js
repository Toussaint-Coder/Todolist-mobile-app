import {Text, Image, View, TextInput, FlatList} from "react-native"
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
  const renderTodos = ({item}) => {
    return (
      <View
        style={{
          Height: 136,
          Width: 164,
          
          backgroundColor: "#0C3B2E",
          padding: 15,
          borderRadius: 20,
          flex: 1,
          position: "relative",
          justifyContent: "center",
          alignitems: "center",
          marginHorizontal: 5,
          marginBottom: 10,
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
              fontSize: 27,
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
        data={Todos}
        renderItem={renderTodos}
        numColumns={2}
        style={{marginTop: 10}}
      />
    </View>
  )
}
