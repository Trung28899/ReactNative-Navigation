## I. Core Knowledge:

    - This module cover Navigation version 3 and 4 only

    - What is the difference between React Web App and React Native App
        (in term of navigation):
        +, React Web App: navigate user by React Router routing URL to the
            correct Screen
        +, React Native: doesn't use URL, only use tabs and stack of screens
            to navigate
        +, Illustration: https://rutgon.live/NAV

    - Stack of screen:
        +, React Native automatically manage navigation as a stack of screen
        +, Stack is LIFO, navigation works like that
        +, Stack methods are applicable: push, pop, replace

    - See the following Navigation props methods for managing Screen stack
        props.navigation.navigate("ScreenName");
        props.navigation.push("ScreenName");

        props.navigation.replace("ScreenName");
            > replace the current screen on the stack. Application for this
                is when user successfully login, they shouldn't have the
                navigation option to come back to login screen

        props.navigation.pop("ScreenName");
            > pop the current screen and return to previous screen

        props.navigation.popToTop();
            > pop multiple screens all the way to the top screen

    - Difference between .navigate() and .push()
        +, Both of these method push a new screen to the stack
        However, with .navigate(), React Native doesn't add a new same screen to stack
        With .push(), React Native can add a same screen to stack
        +, The application of adding a same screen to stack is adding same screen with
        different content. This allow the user to navigate back to the same screen with
        a different content.
    Example: Folder Management App may use the same screen but different content

## II. Module Notes:

    - 15th Commit:
        +, Added some screens (FilterScreen.js and MealDetailScreen.js)
        +, setParams() in FilterScreen.js
        +, Video 141 - 146

    - 14th Commit: Setting Up Drawers - End of Module
        +, Video 140
        +, See MealsNavigator.js for Navigation Setup
            (look for MainNavigator)
        +, See CategoryScreen.js for Drawer Navigation UI
            (look for navigationOptions)

    - 13rd Commit: Config Tabs
        +, Video 135 - 136
        +, See ./navigation/MealNavigator.js

    - 12nd Commit: Adding Header Buttons
        +, Video 133
        +, See ./screen/MealDetailScreen.js. Look for headerRight
        +, See ./components/HeaderButton.js

    - 11st Commit: Grid styling for Meals Categories
        +, Video 127
        +, See ./screens/CategoriesScreen.js
        +, See ./components/CategoryGridTile.js

    - 10th Commit: Setting default Header config. Improve Performance
        +, ./navigation/MealsNavigator.js
        +, defaultNavigationOptions setting the default navigation styles
        +, This default option will always be overwritten by other method of
            configuring screens such as setting navigationOptions like 7th Commit
        +,  in App.js: run enableScreens(); before anything else to improve
            app performance (won't be able to see right away but it will improve performance)

    - 9th Commit: Setting Dynamic Headers
        +, See navigationOptions in CategoryMealsScreen

    - 8th Commit: Passing and Getting Params (passing props) with Navigation
        +, Passing Params: ./screens/CategoriesScreen.js
        +, Getting Params: ./screens/CategoryMealsScreen.js

        +, Passing Params Syntax:
            props.navigation.navigate({
                routeName: "CategoryMeals",
                params: {
                    categoryId: itemData.item.id,
                },
            });
        +, Getting Params Syntax:
            const catID = props.navigation.getParam("categoryId");

    - 7th Commit: Configuring Headers with Navigation Options
        +, ./screens/CategoriesScreen.js
        +, If see nothing changes after follow the exact config
        need to reload the whole app to get it changes

    - 6th Commit: Outputting a Grid of Categories
        +, ./screens/CategoriesScreen.js

    - 5th Commit: push, pop, relace
        +, Mess around with navigating to different screens
        +, See Core Knowledge above for further navigating methods and knowledge

    - 4th Commit: Navigating Between Screens
        +, ./screens/CategoriesScreen:
            props.navigation.navigate({ routeName: "CategoryMeals" });
            Alternative, can also use this syntax:
            props.navigation.navigate('SomeIdentifier');
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

    - Top Tab Navigator:
        https://reactnavigation.org/docs/material-top-tab-navigator/

    - Bottom Tab Navigator:
        https://reactnavigation.org/docs/material-bottom-tab-navigator/

    - useEffect() and useCallback():
        https://www.udemy.com/course/react-native-the-practical-guide/learn/lecture/15675136#content
