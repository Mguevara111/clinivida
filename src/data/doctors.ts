import type { Doctor } from "../context/context";
import mendieta from "../assets/doctors/mendieta.jpg"
import rostova from "../assets/doctors/rostova.jpg"
import peralta from "../assets/doctors/peralta.webp"
import cando from "../assets/doctors/cando.jpg"
import valencia from "../assets/doctors/valencia.jpg"
import calvo from "../assets/doctors/calvo.webp"

export const INITIAL_DOCTORS:Doctor[] = [
  { id: 'DOC-101', name: 'Dr. Roberto Mendieta', specialty: 'Cardiology', consultationFee: 120,imageUrl:mendieta },
  { id: 'DOC-102', name: 'Dra. Elena Rostova', specialty: 'Neurology', consultationFee: 150, imageUrl:rostova },
  { id: 'DOC-103', name: 'Dr. Javier Peralta', specialty: 'Pediatrics', consultationFee: 80, imageUrl:peralta },
  { id: 'DOC-104', name: 'Dr. Rodolfo Cando', specialty: 'Cardiology', consultationFee: 130, imageUrl:cando },
  { id: 'DOC-105', name: 'Dra. Ina Valencia', specialty: 'Gastroenterology', consultationFee: 90, imageUrl:valencia },
  { id: 'DOC-106', name: 'Dr. Jorge Calvo', specialty: 'General Medicine', consultationFee: 50, imageUrl:calvo }
];

