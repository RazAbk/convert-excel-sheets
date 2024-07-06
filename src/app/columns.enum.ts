export enum Options {
  BF_ORDERS_EXPORT = "2BF_ORDERS_EXPORT",
  PCN_ORDERS_EXPORT = "PCN_ORDERS_EXPORT",
}

export enum ImportColumns_1 {
  ORDER_NUM = "מספר הזמנה",
  ORDER_DATE = "תאריך הזמנה",
  ORDER_STATUS = "סטטוס הזמנה",
  COSTUMER_NAME = "השם הפרטי של הלקוח",
  COSTUMER_LAST_NAME = "שם המשפחה של הלקוח",
  COSTUMER_TELEPHONE = "טלפון הלקוח",
  EMAIL = "מייל",
  PRODUCT_NAME = "שם המוצר",
  QUANTITY = "כמות",
  PRICE_INC_TAX = "סה״כ כולל מע״מ",
  CURRENCY = "מטבע",
  SHIPMENT_TYPE = "אופן המשלוח",
  ADDRESS = "כתובת המשלוח",
  CITY = "עיר",
  TELEPHONE_SHIPPING = "טלפון המשלוח",
  TEXT_ORDER = "הערה להזמנה",
  TEXT_SHIPMENT = "הערה למשלוח",
  INTERNAL_COMMENT = "הערה פנימית",
}

export enum ImportColumns_2 {
    Order_ID = "Order ID",
    Order_Date = "Order Date",
    Order_Status = "Order Status",
    SKU = "SKU",
    Quantity = "Quantity",
    Item_Cost = "Item Cost",
    Billing_First_Name = "Billing First Name",
    Billing_Last_Name = "Billing Last Name",
    Billing_Company = "Billing Company",
    Billing_Email_Address = "Billing Email Address",
    Billing_Phone = "Billing Phone",
    Shipping_First_Name = "Shipping First Name",
    Shipping_Last_Name = "Shipping Last Name",
    Shipping_Company = "Shipping Company",
    Shipping_Address_1 = "Shipping Address 1",
    Shipping_Address_2 = "Shipping Address 2",
    Shipping_City = "Shipping City",
    Shipping_Postcode = "Shipping Postcode",
    Shipping_Phone = "Shipping Phone",
    Customer_Note = "Customer Note",
    Rivihit_Invoice = "Rivihit Invoice",
    Shipping_Name = "Shipping Name",
}

export enum ExportColumns {
  TYPE = "רשומה",
  COSTUMER_NUM = "מס.לקוח",
  COSTUMER_NAME = "שם לקוח",
  ORDER_DATE = "תאריך הזמנה",
  ORDER_NUM = "מס.הזמנה",
  DETAILS = "פרטים",
  ID = "מקט",
  DESCRIPTION = "תיאור",
  QUANTITY = "כמות",
  PRICE_BEFORE_TAX = "מחיר לפני מעמ",
  COSTUMER_CONTACT = "איש קשר",
  TELEPHONE_NUM = "טלפון",
  EMAIL = "אימייל",
  ADDRESS1 = "כתובת 1",
  ADDRESS2 = "כתובת 2",
  ADDRESS3 = "כתובת 3",
  CITY = "עיר",
  TEXT = "טקסט להזמנה",
  INNER_TEXT = "טקסט פנימי",
  PRIORITY_STATUS = "סטטוס פריוריטי"
}

export enum RegularPC {
  PC1 = "2BF-M92I58GB-KIT",
  PC2 = "2BF-M92I34GB-KIT",
  PC3 = "2BF-M92I38GB-KIT",
}

export enum LaptopPC {
  LAPTOP1 = "2BF-HP640G3I5-7TH8240",
  LAPTOP2 = "2BF-HP640G3I5-6TH8240",
}