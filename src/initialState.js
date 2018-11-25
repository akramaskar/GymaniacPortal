let INITIAL_STATE = {
  user: {
    id: "",
    name: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    avatar:
      "https://pbs.twimg.com/profile_images/1008388192683331584/sDjYt1aB_400x400.jpg",
    profileBG:
      "https://wallpapertag.com/wallpaper/full/4/7/4/124349-gym-background-2048x1430-for-android-tablet.jpg",
    gender: "male",
    birthday: "",
    paymentMethod: {},
    trainingLog: {},
    address: {
      id: "",
      streetName: "",
      addressNumber: "",
      postcode: "",
      city: "",
      country: ""
    }
  },
  ui: { coachSearch: "", city: "" },
  error: { registration: { error: null } }
};

export default INITIAL_STATE;
