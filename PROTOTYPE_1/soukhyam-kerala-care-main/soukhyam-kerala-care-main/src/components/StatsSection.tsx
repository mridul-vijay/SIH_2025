import { useState, useEffect } from 'react';
import { Users, TrendingUp, Building2, UserCheck } from 'lucide-react';

interface Stat {
  value: number;
  unit?: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  suffix?: string;
}

const StatsSection: React.FC = () => {
  const stats: Stat[] = [
    {
      value: 3500000,
      label: 'Total Migrants',
      icon: Users,
      suffix: '',
    },
    {
      value: 215000,
      label: 'Annual Migrants',
      icon: TrendingUp,
      suffix: '',
    },
    {
      value: 500,
      label: 'Health Centers',
      icon: Building2,
      suffix: '+',
    },
    {
      value: 5000,
      label: 'Government Specialized Doctors',
      icon: UserCheck,
      suffix: '+',
    },
  ];

  const [counters, setCounters] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // 2 seconds total animation
    const stepTime = 50; // Update every 50ms
    const steps = duration / stepTime;

    const intervals = stats.map((stat, index) => {
      let start = 0;
      const target = stat.value;
      const increment = target / steps;
      return setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(intervals[index]);
        }
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(start * 100) / 100; // Round to 2 decimals if needed
          return newCounters;
        });
      }, stepTime);
    });

    return () => {
      intervals.forEach(clearInterval);
    };
  }, []);

  const formatCounter = (index: number) => {
    const stat = stats[index];
    const value = counters[index];
    const formatted = Math.floor(value).toLocaleString('en-IN');
    return `${formatted}${stat.suffix}`;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md border border-blue-200 p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-900 mb-2">
                  {formatCounter(index)}
                  {stat.unit && stat.unit !== '' && !stat.suffix && ` ${stat.unit}`}
                </div>
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
