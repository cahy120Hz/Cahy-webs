import { useState, useEffect } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import {
  Activity, Users, Globe, Cpu, Zap, TrendingUp, Server, Wifi,
  HardDrive, Clock, Shield, Database, AlertTriangle, CheckCircle
} from 'lucide-react';

function AnimatedNumber({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count.toLocaleString()}</span>;
}

const systemMetrics = [
  { label: 'CPU Usage', value: 23, max: 100, color: 'from-cyan-neon to-blue-500', icon: Cpu },
  { label: 'Memory', value: 42, max: 100, color: 'from-purple-neon to-pink-500', icon: HardDrive },
  { label: 'Storage', value: 68, max: 100, color: 'from-green-400 to-emerald-500', icon: Database },
  { label: 'Bandwidth', value: 35, max: 100, color: 'from-yellow-400 to-orange-500', icon: Wifi },
];

const services = [
  { name: 'Web Server', status: 'operational', uptime: '99.97%', icon: Server },
  { name: 'API Gateway', status: 'operational', uptime: '99.95%', icon: Zap },
  { name: 'Database', status: 'operational', uptime: '99.99%', icon: Database },
  { name: 'AI Engine', status: 'degraded', uptime: '97.50%', icon: Cpu },
  { name: 'NASA Feed', status: 'operational', uptime: '99.90%', icon: Globe },
  { name: 'Auth Service', status: 'operational', uptime: '99.98%', icon: Shield },
];

const recentActivity = [
  { action: 'NASA APOD updated', time: '2 min ago', type: 'info' },
  { action: 'New AI model deployed', time: '15 min ago', type: 'success' },
  { action: 'System backup completed', time: '1 hour ago', type: 'success' },
  { action: 'API latency spike detected', time: '2 hours ago', type: 'warning' },
  { action: 'New community member joined', time: '3 hours ago', type: 'info' },
];

export function DashboardPage() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-24 pb-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="SYSTEM DASHBOARD"
          subtitle="Real-time monitoring and analytics for the CAHY'EDUCATION`WEBS ecosystem"
        />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-400">ALL SYSTEMS NOMINAL</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
            <Clock className="w-3.5 h-3.5" />
            {currentTime.toLocaleString()}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Active Users', value: 142, icon: Users, color: 'text-cyan-neon' },
            { label: 'API Requests', value: 24580, icon: Activity, color: 'text-purple-neon' },
            { label: 'Uptime', value: 99.97, icon: TrendingUp, color: 'text-green-400', suffix: '%' },
            { label: 'Response Time', value: 45, icon: Zap, color: 'text-yellow-400', suffix: 'ms' },
          ].map(metric => (
            <GlassCard key={metric.label} glow="cyan">
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <metric.icon className={`w-5 h-5 ${metric.color}`} />
                  <span className="text-[10px] font-mono text-text-muted">LIVE</span>
                </div>
                <div className={`text-2xl font-bold font-space ${metric.color}`}>
                  <AnimatedNumber value={metric.value} />
                  {metric.suffix || ''}
                </div>
                <div className="text-xs text-text-muted mt-1">{metric.label}</div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 space-y-4">
            <GlassCard>
              <div className="p-5">
                <h3 className="font-space font-semibold text-silver mb-4">System Resources</h3>
                <div className="space-y-4">
                  {systemMetrics.map(metric => (
                    <div key={metric.label}>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <metric.icon className="w-4 h-4 text-text-muted" />
                          <span className="text-sm text-text-muted">{metric.label}</span>
                        </div>
                        <span className="text-sm font-mono text-cyan-neon">{metric.value}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-surface overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${metric.color} transition-all duration-1000`}
                          style={{ width: `${metric.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-5">
                <h3 className="font-space font-semibold text-silver mb-4">Recent Activity</h3>
                <div className="space-y-2">
                  {recentActivity.map((activity, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/[0.02] transition-colors">
                      {activity.type === 'info' && <Activity className="w-4 h-4 text-cyan-neon" />}
                      {activity.type === 'success' && <CheckCircle className="w-4 h-4 text-green-400" />}
                      {activity.type === 'warning' && <AlertTriangle className="w-4 h-4 text-yellow-400" />}
                      <div className="flex-1">
                        <span className="text-sm text-silver">{activity.action}</span>
                      </div>
                      <span className="text-[10px] font-mono text-text-muted">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>

          <GlassCard>
            <div className="p-5">
              <h3 className="font-space font-semibold text-silver mb-4">Service Status</h3>
              <div className="space-y-3">
                {services.map(service => (
                  <div key={service.name} className="flex items-center justify-between p-2 rounded-lg hover:bg-white/[0.02] transition-colors">
                    <div className="flex items-center gap-2">
                      <service.icon className="w-4 h-4 text-text-muted" />
                      <span className="text-sm text-silver">{service.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={service.status === 'operational' ? 'text-green-400' : 'text-yellow-400'}>
                        {service.status === 'operational' ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <AlertTriangle className="w-4 h-4" />
                        )}
                      </span>
                      <span className="text-[10px] font-mono text-text-muted">{service.uptime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
