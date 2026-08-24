import type { Patient } from "../context/context";

export const INITIAL_PATIENTS:Patient[] = [
  { id: 'PAC-01', name: 'Ana Gómez', insurancePlan: 'PLAN_PREMIUM', maxDailyAppointments: 5 },
  { id: 'PAC-02', name: 'Carlos Ruiz', insurancePlan: 'PLAN_BASIC', maxDailyAppointments: 2 },
  { id: 'PAC-03', name: 'Lucía Fernández', insurancePlan: 'UNINSURED', maxDailyAppointments: 10 },
  { id: 'PAC-04', name: 'José Palacios', insurancePlan: 'PLAN_PREMIUM', maxDailyAppointments: 5 },
  { id: 'PAC-05', name: 'Diana Ruiz', insurancePlan: 'PLAN_BASIC', maxDailyAppointments: 2 },
  { id: 'PAC-06', name: 'Luca Antonella', insurancePlan: 'UNINSURED', maxDailyAppointments: 10 },
  { id: 'PAC-07', name: 'Carlos Pino', insurancePlan: 'PLAN_PREMIUM', maxDailyAppointments: 5 },
  { id: 'PAC-08', name: 'Miguel Erazo', insurancePlan: 'PLAN_BASIC', maxDailyAppointments: 2 },
  { id: 'PAC-09', name: 'Paco de Lucia', insurancePlan: 'UNINSURED', maxDailyAppointments: 10 }
];