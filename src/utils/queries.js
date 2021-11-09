import gql from 'graphql-tag';

// 1 USER
// 2 PRODUCT
// 3 PRODUCTS
// 4 ORDER
// 5 ORDERS
// 6 PROMO
// 7 USER_ME

export const USER = gql`
query user($user_id: ID!) {
  user(user_id: $user_id) {
    _id
    first_name
    last_name
    email
		phone
    cart {
      _id
      product_id
      quantity
      product_name
      product_price
      product_sale_price
      product_bulk_price
      product_bulk_quantity
    }
    address
    pastOrders {
      _id
      product_id
      quantity
      product_name
      product_price
      product_sale_price
      product_bulk_price
      product_bulk_quantity
    }
  }
}

`;

export const PRODUCT = gql`
query product($product_id: ID!) {
  product(product_id:$product_id) {
    _id
    product_name
    product_category
    product_price
    product_description1
    product_description2
    product_description3
    product_description4
    product_weight
    product_picture
    product_nameChinese
    product_descriptionChinese
    product_status
    product_sale_price
    product_bulk_quantity
    product_bulk_price
    product_featured
    createdAt
    product_views
    product_id
    product_new
  }
}
`;

export const PRODUCTS = gql`
query {
  products {
    _id
    product_name
    product_category
    product_price
    product_description1
    product_description2
    product_description3
    product_description4
    product_weight
    product_picture
    product_nameChinese
    product_descriptionChinese
    product_status
    product_sale_price
    product_bulk_quantity
    product_bulk_price
    product_featured
    createdAt
    product_views
    product_id
    product_new
  }
}
`;

export const ORDER = gql`
query {
  order {
    _id
    orderTotal
    paid
    delivery_date
    delivery_status
    createdAt
    cart
    name
    phone
    address
    order_date
  }
}
`;

export const ORDERS = gql`
query {
  orders {
    _id
    orderTotal
    paid
    delivery_date
    delivery_status
    createdAt
    cart
    name
    phone
    address
    order_date
  }
}
`;

export const PROMO = gql`
query {
  promo {
    _id
    promoMsg1
    promo1Start
    promo1End
    promoMsg2
    promo2Start
    promo2End
    promoMsg3
    promo3Start
    promo3End
    mainPromo
    promoPicture1
    promoPicture2
    promoPicture3
    discount
    featuredProduct1
    featuredProduct2
    featuredProduct3
    contact_us_1
    contact_us_2
    address
    home_message
    main_banner
    delivery_fee1
    delivery_fee2
    delivery_fee3
    notice_message
  }
}
`;

export const USER_ME = gql`
query { userMe {
  _id
  first_name
  last_name
  email
  phone
  cart {
    _id
    product_id
    quantity
    product_name
    product_price
    product_sale_price
    product_bulk_price
    product_bulk_quantity
  }
  address
  pastOrders {
    _id
    product_id
    quantity
    product_name
    product_price
    product_sale_price
    product_bulk_price
    product_bulk_quantity
  }
}
}
`;