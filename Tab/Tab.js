<Tab.Navigator
  screenOptions={{
    tabBarStyle: {
      width: '70%',
      position: 'absolute',
      left: '15%',
      borderRadius: 10,
      bottom: 20,
      height: 54,
      paddingBottom: 4,
    },
    headerTitleAlign: 'center',
    headerLeft: () => (
      <Text style={{color: 'black', paddingHorizontal: 20}}>Left</Text>
    ),
    headerRight: () => (
      <Text style={{color: 'black', paddingHorizontal: 20}}>Right</Text>
    ),
    headerTitle: () => <PayLogicLogo />,
  }}>
  {screenData.map((screen, index) => (
    <Tab.Screen
      key={index}
      name={screen.name}
      component={screen.component}
      options={{
        tabBarIcon: ({color, focused}) => (
          <screen.icon opacity={focused ? 1 : 0.5} />
        ),
        tabBarLabel: ({focused}) => (
          <Text
            style={{
              color: focused ? COLORS.TEXT_COLOR : COLORS.PRIMARY_COLOR,
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 10,
            }}>
            {screen.tabName}
          </Text>
        ),
      }}
    />
  ))}
</Tab.Navigator>;
