import Database from 'better-sqlite3';
import { Service, ServiceType } from '../src/types';

const db = new Database('services.db');

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS services (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT NOT NULL CHECK(type IN ('AMBULANCE', 'DOCTOR')),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    location TEXT NOT NULL,
    imageUrl TEXT,
    latitude REAL NOT NULL,
    longitude REAL NOT NULL,
    createdAt TEXT NOT NULL,
    updatedAt TEXT NOT NULL
  )
`);

// Seed some initial data if table is empty
const count = db.prepare('SELECT COUNT(*) as count FROM services').get() as {
  count: number;
};

if (count.count === 0) {
  const seedData: Omit<Service, 'id'>[] = [
    {
      type: 'AMBULANCE',
      title: 'City Emergency Response',
      description: 'Available 24/7 for emergency medical transport',
      location: 'AIIMS Delhi',
      imageUrl: 'https://images.unsplash.com/photo-1612824007550-19997f7a5a10?auto=format&fit=crop&w=800&q=80',
      latitude: 28.5903,
      longitude: 77.2274,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      type: 'AMBULANCE',
      title: 'Max Healthcare Ambulance',
      description: 'Fast and reliable ambulance service',
      location: 'Max Super Specialty Hospital, Saket',
      imageUrl: 'https://d35oenyzp35321.cloudfront.net/signs_that_indicate_8e61bb6b4a.jpg',
      latitude: 28.5256,
      longitude: 77.2232,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      type: 'AMBULANCE',
      title: 'Fortis Ambulance Service',
      description: 'Emergency medical transport at your service',
      location: 'Fortis Memorial Research Institute, Gurugram',
      imageUrl: 'https://content.jdmagicbox.com/v2/comp/delhi/v4/011pxx11.xx11.130610120418.k5v4/catalogue/max-ambulance-services-saket-delhi-ambulance-services-cx2kq0m7x1.jpg',
      latitude: 28.4510,
      longitude: 77.0729,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      type: 'AMBULANCE',
      title: 'Apollo Ambulance',
      description: '24/7 ambulance service for emergencies',
      location: 'Apollo Hospital, Delhi',
      imageUrl: 'https://www.shutterstock.com/editorial/image-editorial/M9TfA837MaTeYdw4MDk2NjE=/ambulance-enters-max-super-speciality-hospital-during-1500w-10627470a.jpg',
      latitude: 28.6066,
      longitude: 77.2185,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      type: 'AMBULANCE',
      title: 'Gurgaon Ambulance Services',
      description: 'Your local ambulance service',
      location: 'Gurgaon',
      imageUrl: 'https://5.imimg.com/data5/ANDROID/Default/2024/9/453647786/YB/VO/JG/52309285/product-jpeg-500x500.jpg',
      latitude: 28.4595,
      longitude: 77.0266,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      type: 'AMBULANCE',
      title: 'Bangalore Ambulance Service',
      description: 'Quick response for medical emergencies',
      location: 'Bangalore',
      imageUrl: 'https://medicaldialogues.in/h-upload/2021/12/11/165863-blk-hospital-2.webp',
      latitude: 12.9716,
      longitude: 77.5946,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      type: 'AMBULANCE',
      title: 'Health Care Ambulance',
      description: 'Dedicated to saving lives with swift transport',
      location: 'Chennai',
      imageUrl: 'https://5.imimg.com/data5/ANDROID/Default/2024/9/453647834/VO/TS/KM/52309285/product-jpeg-500x500.jpg',
      latitude: 13.0827,
      longitude: 80.2707,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      type: 'DOCTOR',
      title: 'Dr. Rajesh Sharma',
      description: 'Emergency Medicine Specialist',
      location: 'AIIMS, Delhi',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg',
      latitude: 28.5903,
      longitude: 77.2274,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      type: 'DOCTOR',
      title: 'Dr. Priya Gupta',
      description: 'Pediatric Specialist',
      location: 'Fortis Hospital, Delhi',
      imageUrl: 'https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip',
      latitude: 28.6066,
      longitude: 77.2185,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      type: 'DOCTOR',
      title: 'Dr. Anil Verma',
      description: 'Cardiologist',
      location: 'Max Hospital, Gurugram',
      imageUrl: 'https://thumbs.dreamstime.com/b/african-male-doctor-happy-tablet-computer-34481166.jpg',
      latitude: 28.5256,
      longitude: 77.2232,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      type: 'DOCTOR',
      title: 'Dr. Neha Bansal',
      description: 'Orthopedic Surgeon',
      location: 'Apollo Hospital, Delhi',
      imageUrl: 'https://t4.ftcdn.net/jpg/03/20/74/45/360_F_320744517_TaGkT7aRlqqWdfGUuzRKDABtFEoN5CiO.jpg',
      latitude: 28.6066,
      longitude: 77.2185,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      type: 'DOCTOR',
      title: 'Dr. Vikram Mehta',
      description: 'Neurologist',
      location: 'Narayana Health City, Bangalore',
      imageUrl: 'https://as2.ftcdn.net/v2/jpg/02/57/48/67/1000_F_257486764_GnnrHRNIBV93mAwR0aiNkS0x5UjDfIcl.jpg',
      latitude: 12.9307,
      longitude: 77.7129,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      type: 'DOCTOR',
      title: 'Dr. Aditi Sharma',
      description: 'Dermatologist',
      location: 'Manipal Hospital, Delhi',
      imageUrl: 'https://as2.ftcdn.net/v2/jpg/04/72/16/47/1000_F_472164755_Her4lvdu74u85ezegfzPEZqm09wMkkv9.jpg',
      latitude: 28.5754,
      longitude: 77.1852,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      type: 'DOCTOR',
      title: 'Dr. Sunil Chawla',
      description: 'Gastroenterologist',
      location: 'Apollo Hospital, Chennai',
      imageUrl: 'https://as2.ftcdn.net/v2/jpg/02/69/98/99/1000_F_269989957_Hb7Fspj2bdAuuEs41g0q1LCKVuyAOfvW.jpg',
      latitude: 13.0827,
      longitude: 80.2707,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      type: 'DOCTOR',
      title: 'Dr. Neeraj Sethi',
      description: 'Endocrinologist',
      location: 'Fortis Hospital, Noida',
      imageUrl: 'https://as1.ftcdn.net/v2/jpg/02/69/98/98/1000_F_269989844_M4GKLXzJvXCGJ2an2TiywcOjs6QW0q7C.jpg',
      latitude: 28.5779,
      longitude: 77.3113,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  const insert = db.prepare(`
    INSERT INTO services (type, title, description, location, imageUrl, latitude, longitude, createdAt, updatedAt)
    VALUES (@type, @title, @description, @location, @imageUrl, @latitude, @longitude, @createdAt, @updatedAt)
  `);

  seedData.forEach((service) => insert.run(service));
}

export { db };