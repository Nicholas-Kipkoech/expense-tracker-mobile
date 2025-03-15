import { Text, View } from "react-native";

interface Expenses {
  id: string;
  date?: Date;
  name: string;
  totalAmount: number;
  iconId?: number;
  description: string;
}

const data: Expenses[] = [
  {
    id: "1",
    name: "Shop",
    totalAmount: 2000,
    description: "Buy new clothes",
  },
  {
    id: "2",
    name: "Electronic",
    totalAmount: 1200,
    description: "Buy new phone",
  },
];

const ExpenseList = () => {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Expense List</Text>
      <View style={{ borderWidth: 0.8, padding: 10, borderRadius: 10 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>Tuesday, 14</Text>
          <Text>KSH {Number(2000).toLocaleString()}</Text>
        </View>
        {data.map((item) => (
          <View
            key={item.id}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
              <Text>{item.description}</Text>
            </View>
            <Text>{item.totalAmount}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ExpenseList;
