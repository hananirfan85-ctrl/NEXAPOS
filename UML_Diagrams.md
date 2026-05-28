# NEXA POS - UML & Architecture Diagrams

This file contains the Unified Modeling Language (UML) and Entity-Relationship (ER) diagrams for the NEXA POS system. These diagrams use [Mermaid.js](https://mermaid.js.org/) syntax and can be viewed directly in compatible Markdown viewers or GitHub.

## 1. Class Diagram

This diagram outlines the core data structures, classes, and their relationships within the application layer.

```mermaid
classDiagram
    direction TB

    class User {
        +UUID id
        +String email
        +String role
        +Date createdAt
        +login()
        +logout()
        +resetPassword()
    }
    
    class Product {
        +UUID id
        +String barcode
        +String name
        +String description
        +String category
        +Float  purchasePrice
        +Float  sellingPrice
        +Int    stock
        +checkStock()
        +updateStock(quantity)
    }

    class Sale {
        +UUID id
        +UUID cashierId
        +UUID customerId
        +Float totalAmount
        +Float discount
        +Float finalAmount
        +String paymentMethod
        +Date createdAt
        +processPayment()
        +generateReceipt()
        +calculateProfit()
    }

    class SaleItem {
        +UUID id
        +UUID saleId
        +UUID productId
        +Int quantity
        +Float unitPrice
        +Float subtotal
    }

    class Customer {
        +UUID id
        +String name
        +String phone
        +String email
        +Int totalPurchases
        +Float totalSpent
        +addRewardPoints()
    }

    User "1" -- "*" Sale : processes >
    Sale "1" *-- "*" SaleItem : contains >
    Product "1" -- "*" SaleItem : part_of >
    Customer "1" -- "*" Sale : makes >
```

---

## 2. Entity-Relationship (ER) Diagram

Represents the relational database structure implemented in Supabase (PostgreSQL).

```mermaid
erDiagram
    USERS ||--o{ SALES : processes
    CUSTOMERS ||--o{ SALES : makes
    SALES ||--|{ SALE_ITEMS : contains
    PRODUCTS ||--o{ SALE_ITEMS : includes

    USERS {
        uuid id PK
        string email
        string role
        boolean is_active
        datetime created_at
    }

    PRODUCTS {
        uuid id PK
        string name
        string barcode
        float purchase_price
        float selling_price
        int stock
        string category
        datetime last_updated
    }

    SALES {
        uuid id PK
        uuid cashier_id FK
        uuid customer_id FK
        float total_amount
        float discount
        float final_amount
        string payment_method
        datetime created_at
    }

    SALE_ITEMS {
        uuid id PK
        uuid sale_id FK
        uuid product_id FK
        int quantity
        float unit_price
        float subtotal
    }

    CUSTOMERS {
        uuid id PK
        string name
        string phone
        string email
        datetime created_at
    }
```

---

## 3. System Architecture & Flow

This flowchart demonstrates the application's offline-first architecture and module flow.

```mermaid
flowchart TD
    Client[Web & Mobile Client / PWA] --> Auth[GoTrue Authentication]
    
    subgraph Frontend Application
        Auth --> Dashboard
        Dashboard --> POS[POS Billing]
        Dashboard --> Inv[Inventory]
        Dashboard --> CRM[Customer Management]
        Dashboard --> Rep[Reports & Analytics]
    end

    subgraph Service Worker
        POS -- Offline Caching --> LocalStorage[(Local Cache)]
        LocalStorage -- Syncs When Online --> DB
    end
    
    subgraph Supabase Backend
        DB[(PostgreSQL Database)]
        Edge[Edge Functions]
        RLS{Row Level Security}
    end

    POS --> RLS
    Inv --> RLS
    CRM --> RLS
    Rep --> RLS
    RLS --> DB
```

---

## 4. User Roles & Access Use Cases

```mermaid
flowchart LR
    A((Admin))
    M((Manager))
    C((Cashier))

    UC1[Login & Authenticate]
    UC2[Process POS Billing]
    UC3[Manage Inventory]
    UC4[View Analytics & Reports]
    UC5[Manage Users & Roles]

    A --> UC1
    A --> UC2
    A --> UC3
    A --> UC4
    A --> UC5

    M --> UC1
    M --> UC2
    M --> UC3
    M --> UC4

    C --> UC1
    C --> UC2
```
