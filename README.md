## I. Core Knowledge:

    - This module cover Navigation version 3 and 4 only

    - What is the difference between React Web App and React Native App
        (in term of navigation):
        +, React Web App: navigate user by React Router routing URL to the
            correct Screen
        +, React Native: doesn't use URL, only use tabs and stack of screens
            to navigate
        +, Illustration: https://rutgon.live/NAV

## II. Module Notes:

    - 4th Commit: Navigating Between Screens
        +, ./screens/CategoriesScreen:
            props.navigation.navigate({ routeName: "CategoryMeals" });
        +, The Name in routeName has to match with one of the names in
            ./navigation/MealsNavigator
        +, Because the CategoriesScreen is set up in MealsNavigator,
            it has props.navigation field
        +, Screens in React Native is a stack of screens and React Native
            automatically manage that screen stack for us

    - 3rd Commit: Setting Up Basic Navigation
        +, Installed packages down below
        +, ./navigation/MealNavigator: Basic navigation setup
        +, Imported in App.js
        +, Navigation will automatically use SafeAreaView, create a basic nice
            header and screen for the application

    - 2nd Commit: Adding Screens and Fonts:
        +, AppLoading in App.js is for Splash Screen

## III. Packages:

    - \$ npm install --save expo-font
    - \$ npm install --save expo-app-loading
    - \$ npm install --save react-navigation@latest
    - \$ expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
    - \$ npm install react-navigation-stack @react-native-community/masked-view react-native-safe-area-context
    - \$ npm install --save react-navigation-tabs
    - \$ npm install --save react-navigation-drawer




    IMPORTANT: Run the commands down below before start anything
    - \$ sudo npm --force update

## IV. Resources:

    - Official Docs:
        https://reactnavigation.org/docs/4.x/getting-started/
