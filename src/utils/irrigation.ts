interface IrrigationSchedule {
  duration: number;
  frequency: number;
  timeOfDay: string[];
}

const schedules: Record<'coconut' | 'areca', IrrigationSchedule> = {
  coconut: {
    duration: 45, // minutes
    frequency: 2, // times per day
    timeOfDay: ['06:00', '17:00']
  },
  areca: {
    duration: 30,
    frequency: 3,
    timeOfDay: ['06:00', '12:00', '17:00']
  }
};

export function getIrrigationSchedule(cropType: 'coconut' | 'areca'): IrrigationSchedule {
  return schedules[cropType];
}