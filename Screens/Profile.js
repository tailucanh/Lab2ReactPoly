import {
  View,
  Text,
  Button,
  TouchableHighlight,
  Image,
  ImageBackground,
} from "react-native";
import { useState, useEffect } from "react";
import { AppLoading } from "expo";
import { styles } from "../Styles/Style";

export default function Profile({ route, navigation }) {
  const { data } = route.params;
  const [editableData, setEditableData] = useState(data);

  return (
    <View style={styles.containerProfile}>
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.imgBackground}
      >
        <View style={styles.boxImage}>
          <View style={styles.containerAvatar}>
            <TouchableHighlight style={styles.touchableAvatar}>
              <Image
                source={require("../assets/images/avatar.jpg")}
                style={styles.icAvatar}
              />
            </TouchableHighlight>
          </View>
          <View style={styles.boxEdit}>
            <TouchableHighlight
              style={styles.touchableEdit}
              underlayColor="rgb(241, 241, 241)"
              onPress={() =>
                navigation.navigate("EditProfile", { editableData })
              }
            >
              <Image
                source={require("../assets/images/edit.png")}
                style={styles.icEdit}
              />
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.boxHello}>
          <Image
            source={require("../assets/images/hello.png")}
            style={styles.imgHello}
          />
          <View style={styles.boxTextHello}>
            <Text style={styles.textHello1}>I'm</Text>
            <Text style={styles.textHello2}>{data.name}</Text>
          </View>
          <View style={styles.boxTextHello}>
            <Image
              source={require("../assets/images/verifieduser.png")}
              style={styles.imgHello2}
            />
            <Text style={styles.textHello3}> {data.email}</Text>
          </View>
        </View>
        <View style={styles.lineStyle2} />

        <View style={styles.boxInfo}>
          <View style={styles.childInfo}>
            <Image
              source={require("../assets/images/rec.png")}
              style={styles.imgRec}
            />
            <Text style={styles.textTitle}>Name: </Text>
            <Text style={styles.textInfo}>{data.name} </Text>
          </View>
          <View style={styles.childInfo}>
            <Image
              source={require("../assets/images/rec.png")}
              style={styles.imgRec}
            />
            <Text style={styles.textTitle}>Phone: </Text>
            <Text style={styles.textInfo}>{data.phone} </Text>
          </View>
          <View style={styles.childInfo}>
            <Image
              source={require("../assets/images/rec.png")}
              style={styles.imgRec}
            />
            <Text style={styles.textTitle}>Email: </Text>
            <Text style={styles.textInfo2}>{data.email} </Text>
          </View>
          <View style={styles.childInfo}>
            <Image
              source={require("../assets/images/rec.png")}
              style={styles.imgRec}
            />
            <Text style={styles.textTitle}>Majors: </Text>
            <Text style={styles.textInfo}>{data.majors} </Text>
          </View>
          <View style={styles.childInfo}>
            <Image
              source={require("../assets/images/rec.png")}
              style={styles.imgRec}
            />
            <Text style={styles.textTitle}>Birthday: </Text>
            <Text style={styles.textInfo}>{data.birthday} </Text>
          </View>
        </View>
        <View style={styles.boxContent}>
          <Image
            source={require("../assets/images/rightarrow.png")}
            style={styles.imgContent}
          />
          <Text style={styles.textContent}>
            When you want to give up, remember why you started.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
