# MERNG-App

Bu proje, modern web uygulamaları geliştirmek için kullanılan MERNG (MongoDB, Express, React, Node.js, GraphQL) stack'i üzerinde inşa edilmiştir. MERNG-App, kullanıcıların gerçek zamanlı veri paylaşımı yapmasına olanak tanır ve çeşitli CRUD işlemlerini GraphQL ile etkin bir şekilde yönetir.

## Proje Linki

- [Canlı Önizleme](https://merng-app.ahmetselimboz.com.tr/)

## Teknolojiler

Bu proje şu teknolojileri kullanmaktadır:

- **MongoDB:** Veritabanı yönetimi için.
- **Express:** Backend API'ları oluşturmak için.
- **React:** Kullanıcı arayüzü geliştirmek için.
- **Node.js:** Sunucu tarafı çalıştırma ortamı.
- **GraphQL:** Veri sorgulama ve yönetimi.

## Özellikler

- **Kullanıcı Kimlik Doğrulama:** JWT tabanlı oturum açma ve kaydolma.
- **CRUD İşlemleri:** GraphQL kullanarak veritabanı üzerinde oluşturma, okuma, güncelleme ve silme işlemleri.
- **Gerçek Zamanlı Güncellemeler:** Apollo Client ve WebSockets entegrasyonu ile dinamik veri akışı.
- **Hata Yönetimi:** Sunucu ve istemci tarafında kapsamlı hata yakalama ve yönetimi.

## Kurulum ve Çalıştırma

### Gereksinimler

- Node.js (v14 ve üzeri)
- MongoDB
- Yarn veya NPM

### Kurulum

1. Projeyi klonlayın:

    ```bash
    git clone https://github.com/ahmetselimboz/MERNG-App.git
    cd MERNG-App
    ```

2. Gerekli bağımlılıkları yükleyin:

    ```bash
    npm install
    ```

3. `.env` dosyasını oluşturun ve gerekli ortam değişkenlerini ekleyin:

    ```bash
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

4. Geliştirme sunucusunu çalıştırın:

    ```bash
    npm start
    ```

5. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine gidin.

## Proje Yapısı

```plaintext
MERNG-App/
│
├── client/               # React frontend
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Main application pages
│   │   └── ...
│   └── ...
│
├── server/               # Express & GraphQL backend
│   ├── models/           # MongoDB models
│   ├── resolvers/        # GraphQL resolvers
│   ├── typeDefs/         # GraphQL schema definitions
│   └── ...
│
└── ...
