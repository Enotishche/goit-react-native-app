import { StyleSheet } from "react-native";

export const mainStyles = StyleSheet.create({
  tabIcon: {
    backgroundColor: "#FFF",
    width: 70,
    borderRadius: 20,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  screenWrap: {
    backgroundColor: "#FFF",
    height: "100%",
    display: "flex",
    paddingBottom: 8,
  },
  main: {
    flex: 1,
    rowGap: 32,
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: "#FFF",
  },
  avatarWrap: {
    position: "absolute",
    display: "flex",
    top: -60,
    alignSelf: "center",
    backgroundColor: "#F6F6F6",
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  userAva: {
    display: "flex",
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  userData: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  userInfo: {},
  userLogin: {
    fontSize: 13,
    fontWeight: 700,
  },
  userMail: {
    fontSize: 11,
    color: "#BDBDBD",
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 32,
  },
  profileWrapper: {
    position: "relative",
    alignItems: "stretch",
    paddingHorizontal: 16,
    paddingTop: 92,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    minHeight: "80%",
  },
  photoWrap: {
    height: 240,
    backgroundColor: "#F6F6F6",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  cameraBtn: {
    width: 60,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 30,
    position: "absolute",
  },
  photoText: {
    fontSize: 16,
    color: "#BDBDBD",
    marginTop: 8,
  },
  createInput: {
    borderBottomWidth: 1,
    fontSize: 16,
    fontWeight: "500",
    paddingVertical: 15,
  },
  createLocationWrap: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
  createInputIcon: {
    position: "absolute",
    height: 25,
  },
  trashWrap: {
    position: "absolute",
    bottom: 34,
    alignSelf: "center",
  },
  trashBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
  },
});
