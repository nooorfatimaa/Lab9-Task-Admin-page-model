import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Pressable, ScrollView, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    <View style={styles.btnBox}>
      <Pressable onPress={() => navigation.navigate("ProductList")} style={styles.homeBtn}><Text style={styles.homeBtnTxt}>Manage Products</Text></Pressable>
    <Pressable onPress={() => navigation.navigate("EmployeeList")} style={styles.homeBtn}><Text style={styles.homeBtnTxt}>Manage Employees</Text></Pressable>
    <Pressable onPress={() => navigation.navigate("OrderList")} style={styles.homeBtn}><Text style={styles.homeBtnTxt}>Manage Orders</Text></Pressable>
    </View>
    </View>
  );
}

const ProductListScreen = ({navigation}) => {
  const[products, setProducts] = useState([
    {
      key: Math.random().toString(), 
      name:"Macbook", 
      price: "$3000", 
      img: 'https://reactnative.dev/img/tiny_logo.png', 
      details: "Product 1 is an Apple laptop. Model is Pro 2020. This is a dummy text. This is a dummy text. This is a dummy text."
    },
    {
      key: Math.random().toString(), 
      name:"Phone", 
      price: "$1000", 
      img: 'https://reactnative.dev/img/tiny_logo.png', 
      details: "Product 2 is a Samsung smartphone. Model is S20. This is a dummy text. This is a dummy text. This is a dummy text."
    },
    {
      key: Math.random().toString(), 
      name:"Shoes", 
      price: "$500", 
      img: 'https://reactnative.dev/img/tiny_logo.png', 
      details: "Product 3 is a Markhor shoe. Model is oxford. This is a dummy text. This is a dummy text. This is a dummy text."
    }
  ]);
  return (
    <View style={styles.lists}>
      <Text style={{fontWeight:'bold', color: 'lightskyblue', fontSize: 40, padding: 5,}}>Product List</Text>
      <ScrollView>
        {products.map((data, index)=> {
          return(   
            <Pressable style={styles.scrollViewBox} key={data.key} onPress={()=>navigation.navigate("ProductDetails",{productList: products, key: data.key})}>
              <View style = {styles.scrollView}>
                <Text style={{fontWeight: 'bold', color: 'grey'}}>{"Product # "}{index+1}{":"}</Text>
                <Text style={{padding: 2,}}>{"Name -- "}{data.name}</Text>
                <Text style={{padding: 2,}}>{"Price -- "}{data.price}</Text>
                <Image style={{width: 50, height: 50}} source={{uri:data.img}}/>
              </View>
            </Pressable> 
          )
        })}
      </ScrollView>
    </View>
  );
}

const ProductDetailsScreen = ({navigation, route}) => {
  const productDetailsList = route.params.productList;
  const key = route.params.key
  return (
    <View>
      <Text style={{fontWeight:'bold', color: 'lightskyblue', fontSize: 40, padding: 5,}}>Product Details</Text>
      {productDetailsList.map((data, index) => {
        if (data.key == key) {
          return(
            <Text style={{padding: 2,}}>{data.details}</Text>
          )
        }
      })}
    </View>
  );
}

const EmpListScreen = ({navigation}) => {
  const[emp, setEmp] = useState([
    {
      key: Math.random().toString(), 
      name:"Jackson", 
      designation: "Manager", 
      details: "Jackson is the Operations and HR manager of our company. This is a dummy text. This is a dummy text. This is a dummy text."
    },
    {
      key: Math.random().toString(), 
      name:"Sean", 
      designation: "Junior Developer",  
      details: "Sean is the junior developer of our company. This is a dummy text. This is a dummy text. This is a dummy text."
    },
    {
      key: Math.random().toString(), 
      name:"Lin Jun", 
      designation: "CEO",
      details: "Lin Jun is the CEO of our company. This is a dummy text. This is a dummy text. This is a dummy text."
    }
  ]);
  return (
    <View style={styles.lists}>
      <Text style={{fontWeight:'bold', color: 'lightskyblue', fontSize: 40, padding: 5,}}>Employee List</Text>
      <ScrollView>
        {emp.map((data, index)=> {
          return(   
            <Pressable style={styles.scrollViewBox} key={data.key} onPress={()=>navigation.navigate("EmployeeDetails",{empList: emp, key: data.key})}>
              <View style = {styles.scrollView}>
                <Text style={{fontWeight: 'bold', color: 'grey'}}>{"Employee # "}{index+1}{":"}</Text>
                <Text style={{padding: 2,}}>{"Name -- "}{data.name}</Text>
                <Text style={{padding: 2,}}>{"Designation -- "}{data.designation}</Text>
              </View>
            </Pressable> 
          )
        })}
      </ScrollView>
    </View>
  );
}

const EmpDetailsScreen = ({navigation, route}) => {
  const empDetailsList = route.params.empList;
  const key = route.params.key
  return (
    <View>
      <Text style={{fontWeight:'bold', color: 'lightskyblue', fontSize: 40, padding: 5,}}>Employee Details</Text>
      {empDetailsList.map((data, index) => {
        if (data.key == key) {
          return(
            <Text style={{padding: 2,}}>{data.details}</Text>
          )
        }
      })}
    </View>
  );
}

const OrderListScreen = ({navigation}) => {
  const[orders, setOrders] = useState([
    {
      key: Math.random().toString(), 
      name:"Macbook", 
      price: "$3000", 
      details: "Order 1 has one product that is an Apple laptop. Model is Pro 2020. This is a dummy text. This is a dummy text. This is a dummy text."
    },
    {
      key: Math.random().toString(), 
      name:"Phone", 
      price: "$1000",  
      details: "Order 2 has one product that is a Samsung smartphone. Model is S20. This is a dummy text. This is a dummy text. This is a dummy text."
    },
    {
      key: Math.random().toString(), 
      name:"Shoes", 
      price: "$500", 
      details: "Order 3 has one product that is a Markhor shoe. Model is oxford. This is a dummy text. This is a dummy text. This is a dummy text."
    }
  ]);
  return (
    <View style={styles.lists}>
      <Text style={{fontWeight:'bold', color: 'lightskyblue', fontSize: 40, padding: 5,}}>Order List</Text>
      <ScrollView>
        {orders.map((data, index)=> {
          return(   
            <Pressable style={styles.scrollViewBox} key={data.key} onPress={()=>navigation.navigate("OrderDetails",{orderList: orders, key: data.key})}>
              <View style = {styles.scrollView}>
                <Text style={{fontWeight: 'bold', color: 'grey'}}>{"Order # "}{index+1}{":"}</Text>
                <Text style={{padding: 2,}}>{"Product Name -- "}{data.name}</Text>
                <Text style={{padding: 2,}}>{"Price -- "}{data.price}</Text>
              </View>
            </Pressable> 
          )
        })}
      </ScrollView>
    </View>
  );
}

const OrderDetailsScreen = ({navigation, route}) => {
  const orderDetailsList = route.params.orderList;
  const key = route.params.key
  return (
    <View>
      <Text style={{fontWeight:'bold', color: 'lightskyblue', fontSize: 40, padding: 5,}}>Order Details</Text>
      {orderDetailsList.map((data, index) => {
        if (data.key == key) {
          return(
            <Text style={{padding: 2,}}>{data.details}</Text>
          )
        }
      })}
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName={"Home"} 
        screenOptions={{
          headerTintColor: "black",
          headerStyle: {
            backgroundColor: "lightgrey"
          }
        }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="ProductList" component={ProductListScreen}/>
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen}/>
        <Stack.Screen name="EmployeeList" component={EmpListScreen}/>
        <Stack.Screen name="EmployeeDetails" component={EmpDetailsScreen}/>
        <Stack.Screen name="OrderList" component={OrderListScreen}/>
        <Stack.Screen name="OrderDetails" component={OrderDetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
  },
  homeBtn: {
    margin: 25,
    padding: 20,
    backgroundColor: 'lightskyblue',
    borderRadius: 30,
    width: "80%",
    alignItems: 'center',
  },
  homeBtnTxt: {
    color: 'white',
    fontWeight: 'bold',
  },
  btnBox: {
    marginTop: 25,
    height: 500,
    width: "95%",
    alignItems: 'center',
  },
  scrollViewBox: {
    padding: 5,
  },
  scrollView: {
    padding: 3,
  },
  lists: {
    marginTop: 15,
    marginLeft: 10,
  },
});

export default App;
