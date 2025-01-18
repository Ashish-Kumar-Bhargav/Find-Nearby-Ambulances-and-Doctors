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
      imageUrl: 'https://images.unsplash.com/photo-1587745950332-c80d36cec6f9?auto=format&fit=crop&w=800&q=80',
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
      imageUrl: 'https://images.unsplash.com/photo-1587745952965-f3421aa56db2?auto=format&fit=crop&w=800&q=80',
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
      imageUrl: 'https://images.unsplash.com/photo-1587745952944-f55d3f7f6ad0?auto=format&fit=crop&w=800&q=80',
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
      imageUrl: 'https://images.unsplash.com/photo-1583912267550-d980eeef6dbe?auto=format&fit=crop&w=800&q=80',
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
      imageUrl: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80',
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
      imageUrl: 'https://images.unsplash.com/photo-1587745950332-c80d36cec6f9?auto=format&fit=crop&w=800&q=80',
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
      imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
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
      imageUrl: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=800&q=80',
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
      imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
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
      imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80',
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
      imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80',
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
      imageUrl: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80',
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
      imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
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
      imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80',
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