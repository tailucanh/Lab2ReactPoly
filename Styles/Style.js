import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as Font from "expo-font";

// export const loadFonts = async () => {
//   await Font.loadAsync({
//     Acme: require("../assets/Fonts/acme.ttf"),
//   });
// };

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
  },
  textButton: {
    color: "black",
    marginVertical: 10,
    fontSize: 17,
    fontWeight: "500",
    marginHorizontal: 50,
  },
  buttonNext: {
    backgroundColor: "#79ddff",
    borderRadius: 8,
    elevation: 3,
    marginTop: 50,
  },

  //Todo: style profile
  containerProfile: {
    flex: 1,
  },
  imgBackground: {
    flex: 1,
  },
  boxImage: {
    width: "100%",
    flexDirection: "row",
  },
  containerAvatar: {
    width: "65%",
    marginBottom: 10,
    marginTop: 15,
    alignItems: "flex-end",
  },
  touchableAvatar: {
    width: 120,
    height: 120,
    borderRadius: 150 / 2,
    elevation: 5,
  },
  icAvatar: {
    height: 120,
    width: 120,
    overflow: "hidden",
    borderRadius: 150 / 2,
    borderWidth: 2,
    borderColor: "#cccccc",
  },
  boxEdit: {
    width: "35%",
    marginTop: 10,
    alignItems: "flex-end",
  },
  touchableEdit: {
    backgroundColor: "#dbdbdb",
    width: 40,
    height: 40,
    marginEnd: 20,
    borderRadius: 150 / 2,
    borderWidth: 1,
    borderColor: "#a7a7a7",
  },
  icEdit: {
    height: 20,
    width: 20,
    overflow: "hidden",
    alignSelf: "center",
    margin: 8,
  },
  lineStyle: {
    width: 140,
    borderWidth: 0.4,
    borderColor: "#b9b9b9",
    elevation: 1,
    alignSelf: "center",
  },

  boxHello: {
    flexDirection: "column",
  },
  imgHello: {
    width: 40,
    height: 40,
    marginLeft: 50,
  },
  imgHello2: {
    width: 20,
    height: 20,
    marginStart: 10,
  },
  boxTextHello: {
    flexDirection: "row",
    marginLeft: 20,
  },
  textHello1: {
    fontSize: 25,
    fontStyle: "italic",
    fontWeight: "normal",
  },
  textHello2: {
    fontSize: 25,
    fontWeight: "500",
    color: "#fc2f2f",
    marginStart: 5,
  },
  textHello3: {
    fontSize: 13,
    fontWeight: "500",
    marginLeft: 5,
    marginTop: 2,
  },

  lineStyle2: {
    width: "85%",
    borderWidth: 0.4,
    borderColor: "#b9b9b9",
    elevation: 1,
    alignSelf: "center",
    marginTop: 10,
  },
  boxInfo: {
    flexDirection: "column",
    marginTop: 10,
  },
  childInfo: {
    flexDirection: "row",
    paddingHorizontal: 15,
    marginBottom: 12,
  },
  imgRec: {
    width: 13,
    height: 13,
    marginTop: 8,
  },
  textTitle: {
    width: "33%",
    color: "#636363",
    fontWeight: "500",
    marginLeft: 8,
    color: "black",
    fontSize: 19,
    fontWeight: "500",
  },
  textInfo: {
    color: "black",
    fontSize: 17,
  },
  textInfo2: {
    color: "#268bff",
    fontSize: 17,
    paddingEnd: 10,
  },
  boxContent: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginTop: 10,
  },
  imgContent: {
    width: 30,
    height: 30,
  },
  textContent: {
    color: "#008299",
    fontSize: 18,
    fontStyle: "italic",
    fontWeight: "normal",
    marginLeft: 5,
    marginEnd: 10,
  },
  //Todo: style edit profile
  containerEdit: {
    flex: 1,
    flexDirection: "column",
  },
  icEditInfo: {
    width: 250,
    height: 150,
    alignSelf: "center",
    marginTop: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#acacaccc",
    borderRadius: 8,
    padding: 8,
    marginTop: 15,
    marginHorizontal: 20,
  },
  boxButton: {
    flexDirection: "row",
    marginTop: 30,
    paddingHorizontal: 20,
    justifyContent: "space-around",
  },
  btnEdit: {
    borderColor: "#02bdfc",
    borderWidth: 1,
    backgroundColor: "#83dbf8",
    borderRadius: 8,
    elevation: 2,
  },
  btnCancel: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderColor: "#cccccc",
    borderWidth: 1,
    elevation: 2,
  },
  textBtnEdit: {
    color: "#444444",
    fontSize: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default styles;
