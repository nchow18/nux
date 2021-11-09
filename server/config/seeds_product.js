const db = require('./connection');
const { Order, Product, Promo, User } = require('../models');

db.once('open', async () => {
  console.log('opened');
  
  await Product.create({
    "product_id": "1009",
    "product_name": "Bourbon Choco & Coffee Biscuit 108g",
    "product_picture": [
       "1009-1",
       "1009-2"
    ],
    "product_category": "snacks",
    "product_price": "7.5",
    "product_description1": "24pcs/box",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1010",
    "product_name": "Bourbon Choco & Digestive Biscuit 98g",
    "product_picture": [
       "1010-1",
       "1010-2"
    ],
    "product_category": "snacks",
    "product_price": "7.5",
    "product_description1": "17pcs/box",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1011",
    "product_name": "Furuta Green Tea Cookies 87g",
    "product_picture": [
       "1011-1",
       "1011-2"
    ],
    "product_category": "snacks",
    "product_price": "7",
    "product_description1": "10pcs/box",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1012",
    "product_name": "Furuta Milk Cookies 80g",
    "product_picture": [
       "1012-1",
       "1012-2"
    ],
    "product_category": "snacks",
    "product_price": "7",
    "product_description1": "12pcs/box",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1013",
    "product_name": "Koikeya Pride Potato Chips (Seaweed Salt) 58g",
    "product_picture": [
       "1013-1",
       "1013-2"
    ],
    "product_category": "snacks",
    "product_price": "8",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1014",
    "product_name": "Koikeya Pride Potato Chips (Light Salt) 60g",
    "product_picture": [
       "1014-1",
       "1014-2"
    ],
    "product_category": "snacks",
    "product_price": "8",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1015",
    "product_name": "Koikeya Pride Potato Chips (Wagyu) 58g",
    "product_picture": [
       "1015-1",
       "1015-2"
    ],
    "product_category": "snacks",
    "product_price": "8",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1016",
    "product_name": "Koikeya Pride Potato Chips (No Salt) 60g",
    "product_picture": [
       "1016-1",
       "1016-2"
    ],
    "product_category": "snacks",
    "product_price": "8",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1017",
    "product_name": "Koikeya Pure Potato Chips (Okhotsk Salt & Rock Salt) 58g",
    "product_picture": [
       "1017-1",
       "1017-2"
    ],
    "product_category": "snacks",
    "product_price": "6.5",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1018",
    "product_name": "Koikeya Pure Potato Chips (Sesame Oil & Rock Salt) 58g",
    "product_picture": [
       "1018-1",
       "1018-2"
    ],
    "product_category": "snacks",
    "product_price": "6.5",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1019",
    "product_name": "Koikeya Pure Potato Chips (Setouchi Green Seaweed & Salt) 58g",
    "product_picture": [
       "1019-1",
       "1019-2"
    ],
    "product_category": "snacks",
    "product_price": "6.5",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1020",
    "product_name": "Koikeya Pure Potato Chips (Royal Road Potato Salad) 58g",
    "product_picture": [
       "1020-1",
       "1020-2"
    ],
    "product_category": "snacks",
    "product_price": "6.5",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1021",
    "product_name": "Calbee Jagabee Butter Soy Sauce 80g",
    "product_picture": [
       "1021-1",
       "1021-2"
    ],
    "product_category": "snacks",
    "product_price": "11.5",
    "product_description1": "16g x 5pkts",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1022",
    "product_name": "Calbee Jagabee Light Salt 80g",
    "product_picture": [
       "1022-1",
       "1022-2"
    ],
    "product_category": "snacks",
    "product_price": "11.5",
    "product_description1": "16g x 5pkts",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1023",
    "product_name": "Calbee Jagabee Light Salt 40g",
    "product_picture": [
       "1023-1",
       "1023-2"
    ],
    "product_category": "snacks",
    "product_price": "7",
    "product_description1": "resealable packaging",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1024",
    "product_name": "Calbee Thick Jagabee Sour Cream 35g",
    "product_picture": [
       "1024-1",
       "1024-2"
    ],
    "product_category": "snacks",
    "product_price": "7",
    "product_description1": "resealable packaging",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1025",
    "product_name": "Calbee Potato Delux Mild Salt 50g",
    "product_picture": [
       "1025-1",
       "1025-2"
    ],
    "product_category": "snacks",
    "product_price": "7.5",
    "product_description1": "2pcs x 9pkt",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1026",
    "product_name": "Calbee Potato Delux Black Pepper 50g",
    "product_picture": [
       "1026-1",
       "1026-2"
    ],
    "product_category": "snacks",
    "product_price": "7.5",
    "product_description1": "16g x 5pkts",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1027",
    "product_name": "Sanko Yuki No Yado Rice Cracker 日本三幸雪宿米饼 (Original) ",
    "product_picture": [
       "1027-1",
       "1027-2"
    ],
    "product_category": "snacks",
    "product_price": "10.5",
    "product_description1": "2pcs x 12pkt",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1028",
    "product_name": "Sanko Yuki No Yado Rice Cracker 日本黑糖米饼 (Brown Sugar)",
    "product_picture": [
       "1028-1",
       "1028-2"
    ],
    "product_category": "snacks",
    "product_price": "10.5",
    "product_description1": "2pcs x 12pkt",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1029",
    "product_name": "Sanko Yuki No Yado Rice Cracker 日本盐味米饼 (Salt)",
    "product_picture": [
       "1029-1",
       "1029-2"
    ],
    "product_category": "snacks",
    "product_price": "7.9",
    "product_description1": "2pcs x 9pkt",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1030",
    "product_name": "Tohato Bitter Caramel Corn 77g",
    "product_picture": [
       "1030-1",
       "1030-2"
    ],
    "product_category": "snacks",
    "product_price": "5.6",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1031",
    "product_name": "Tohato Almond Caramel Corn 70g",
    "product_picture": [
       "1031-1",
       "1031-2"
    ],
    "product_category": "snacks",
    "product_price": "5.6",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1032",
    "product_name": "FritoLay Tortilla Chips Avocado & Cream Cheese 70g",
    "product_picture": [
       "1032-1",
       "1032-2"
    ],
    "product_category": "snacks",
    "product_price": "7",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1101",
    "product_name": "Marukome Miso Paste 味噌酱 375g",
    "product_picture": [
       "1101-1",
       "1101-2"
    ],
    "product_category": "sauces",
    "product_price": "13",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1102",
    "product_name": "Mizkan Gold Sesame Calorie Half 芝麻酱 250mL",
    "product_picture": [
       "1102-1"
    ],
    "product_category": "sauces",
    "product_price": "18.5",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1104",
    "product_name": "S&B Golden Curry Spicy 辛口 198g",
    "product_picture": [
       "1104-1",
       "1104-2"
    ],
    "product_category": "sauces",
    "product_price": "12.5",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1105",
    "product_name": "S&B Golden Curry Mild Spicy 中辛 198g",
    "product_picture": [
       "1105-1",
       "1105-2"
    ],
    "product_category": "sauces",
    "product_price": "12.5",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1106",
    "product_name": "S&B Golden Curry Sweet 甘口 198g",
    "product_picture": [
       "1106-1",
       "1106-2"
    ],
    "product_category": "sauces",
    "product_price": "12.5",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1107",
    "product_name": "Marumiya Seaweed Mentai Furikake 海苔明太子味 22g",
    "product_picture": [
       "1107-1",
       "1107-2"
    ],
    "product_category": "sauces",
    "product_price": "7.9",
    "product_description1": "resealable packaging",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1108",
    "product_name": "Marumiya Tasty Salmon Furikake 鲑鱼味 22g",
    "product_picture": [
       "1108-1",
       "1108-2"
    ],
    "product_category": "sauces",
    "product_price": "7.9",
    "product_description1": "resealable packaging",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1201",
    "product_name": "Marutai Hakata Tonkotsu Ramen (White) 185g",
    "product_picture": [
       "1201-1",
       "1201-2"
    ],
    "product_category": "noodles/soup",
    "product_price": "11.5",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1202",
    "product_name": "Marutai Kumamoto Black Chili Oil Ramen (Red) 186g",
    "product_picture": [
       "1202-1",
       "1202-2"
    ],
    "product_category": "noodles/soup",
    "product_price": "11.5",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1203",
    "product_name": "Marutai Kagoshima Ramen (Black) 185g",
    "product_picture": [
       "1203-1",
       "1203-2"
    ],
    "product_category": "noodles/soup",
    "product_price": "11.5",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1204",
    "product_name": "Nissin Donbei Curry Udon 咖喱乌冬面 87g",
    "product_picture": [
       "1204-1"
    ],
    "product_category": "noodles/soup",
    "product_price": "10.6",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1205",
    "product_name": "Nissin Donbei Tempura Soba 天妇罗荞麦面 100g",
    "product_picture": [
       "1205-1"
    ],
    "product_category": "noodles/soup",
    "product_price": "9.6",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1206",
    "product_name": "Glico Donburi Gyu Udon 牛丼 160g",
    "product_picture": [
       "1206-1",
       "1206-2"
    ],
    "product_category": "noodles/soup",
    "product_price": "15",
    "product_description1": "1 serving",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1207",
    "product_name": "Marukome Miso Soup Topping (4 flavours) 12pkts",
    "product_picture": [
       "1207-1",
       "1207-2"
    ],
    "product_category": "noodles/soup",
    "product_price": "12.8",
    "product_description1": "each flavour 3pkts",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1208",
    "product_name": "Marukome Seaweed Miso 216g",
    "product_picture": [
       "1208-1",
       "1208-2"
    ],
    "product_category": "noodles/soup",
    "product_price": "6",
    "product_description1": "12pcs/pkt",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1209",
    "product_name": "Marukome Clam Miso 152g",
    "product_picture": [
       "1209-1",
       "1209-2"
    ],
    "product_category": "noodles/soup",
    "product_price": "6",
    "product_description1": "8pcs/pkt",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1210",
    "product_name": "Dragon Tiger Grouper Fish Noodle Soup 龙虎斑鱼米汤 (Original)",
    "product_picture": [
       "1210-1"
    ],
    "product_category": "noodles/soup",
    "product_price": "12",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1211",
    "product_name": "Dragon Tiger Grouper Fish Noodle Soup 龙虎斑鱼米汤 (Spicy Milk) ",
    "product_picture": [
       "1211-1"
    ],
    "product_category": "noodles/soup",
    "product_price": "12",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1212",
    "product_name": "Myojo Kurume Tonkotsu Flavour 久留米豚骨锅 116g",
    "product_picture": [
       "1212-1",
       "1212-2"
    ],
    "product_category": "noodles/soup",
    "product_price": "10",
    "product_description1": "1 person hotpot",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1213",
    "product_name": "Myojo Miyazaki Spicy Flavour 宫崎辛锅 111g",
    "product_picture": [
       "1213-1",
       "1213-2"
    ],
    "product_category": "noodles/soup",
    "product_price": "10",
    "product_description1": "1 person hotpot",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1214",
    "product_name": "Myojo Sapporo Miso Flavour 札幌味增锅 116g",
    "product_picture": [
       "1214-1",
       "1214-2"
    ],
    "product_category": "noodles/soup",
    "product_price": "10",
    "product_description1": "1 person hotpot",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1215",
    "product_name": "Myojo Menjin Rich Aroma Miso Ramen 浓味味增 120g",
    "product_picture": [
       "1215-1",
       "1215-2"
    ],
    "product_category": "noodles/soup",
    "product_price": "9",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1216",
    "product_name": "Myojo Menjin Rich Aroma Soy Sauce Ramen 浓香酱油 120g",
    "product_picture": [
       "1216-1",
       "1216-2"
    ],
    "product_category": "noodles/soup",
    "product_price": "9",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1301",
    "product_name": "Nitto Matcha Au Lait 抹茶 120g",
    "product_picture": [
       "1301-1",
       "1301-2"
    ],
    "product_category": "beverages",
    "product_price": "17",
    "product_description1": "10sticks/pkt",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1302",
    "product_name": "Nitto Royal Milk Tea 奶茶 160g",
    "product_picture": [
       "1302-1",
       "1302-2"
    ],
    "product_category": "beverages",
    "product_price": "18",
    "product_description1": "10sticks/pkt",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1303",
    "product_name": "Blendy Potion Matcha Au Lait 抹茶 140g",
    "product_picture": [
       "1303-1",
       "1303-2"
    ],
    "product_category": "beverages",
    "product_price": "12.5",
    "product_description1": "7pcs/pkt",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1304",
    "product_name": "Oi Ocha Roasted Green Tea Tea Bag",
    "product_picture": [
       "1304-1",
       "1304-2"
    ],
    "product_category": "beverages",
    "product_price": "15",
    "product_description1": "20pkts/box",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1305",
    "product_name": "Oi Ocha Green Tea w/ Roasted Rice and Matcha Tea Bag 玄米茶 ",
    "product_picture": [
       "1305-1",
       "1305-2"
    ],
    "product_category": "beverages",
    "product_price": "15",
    "product_description1": "20pkts/box",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1306",
    "product_name": "Premium Matcha Green Tea 绿茶",
    "product_picture": [
       "1306-1",
       "1306-2"
    ],
    "product_category": "beverages",
    "product_price": "19",
    "product_description1": "20bags/box",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1307",
    "product_name": "Premium Matcha Green Tea with Roasted Rice 玄米茶 ",
    "product_picture": [
       "1307-1",
       "1307-2"
    ],
    "product_category": "beverages",
    "product_price": "19",
    "product_description1": "20bags/box",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "1308",
    "product_name": "Choya Umeshu Premium 梅酒 350mL",
    "product_picture": [
       "1308-1",
       "1308-2"
    ],
    "product_category": "beverages",
    "product_price": "17.5",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "515a",
    "product_name": "Cheese Meatball 芝士猪肉丸 200g",
    "product_picture": [
       "515a-1",
       "515a-2"
    ],
    "product_category": "meat",
    "product_price": "6.7",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })
  await Product.create({
    "product_id": "515a",
    "product_name": "Cheese Meatball 芝士猪肉丸 200g",
    "product_picture": [
       "515a-1",
       "515a-2"
    ],
    "product_category": "hotpot",
    "product_price": "6.7",
    "product_status": true,
    "product_new": true,
    "product_featured": false,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0"
 })

 console.log('order seeded');

 process.exit();

});